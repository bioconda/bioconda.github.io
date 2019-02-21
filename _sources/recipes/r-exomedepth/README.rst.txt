:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-exomedepth'
.. highlight: bash

r-exomedepth
============

.. conda:recipe:: r-exomedepth
   :replaces_section_title:

   Calls copy number variants \(CNVs\) from targeted sequence data\, typically exome sequencing experiments designed to identify the genetic basis of Mendelian disorders.

   :homepage: https://CRAN.R-project.org/package=ExomeDepth
   :license: GPL3 / GPL-3
   :recipe: /`r-exomedepth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-exomedepth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-exomedepth/meta.yaml>`_

   


.. conda:package:: r-exomedepth

   |downloads_r-exomedepth| |docker_r-exomedepth|

   :versions: 1.1.10-4, 1.1.10-3, 1.1.10-2, 1.1.10-0
   
   :depends bioconductor-biostrings: 
   
   :depends bioconductor-genomicalignments: 
   
   :depends bioconductor-genomicranges: 
   
   :depends bioconductor-iranges: 
   
   :depends bioconductor-rsamtools: 
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libgfortran-ng: >=7,<8.0a0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :depends r-aod: 
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-vgam: >=0.8.4
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-exomedepth

   and update with::

      conda update r-exomedepth

   or use the docker container::

      docker pull quay.io/biocontainers/r-exomedepth:<tag>

   (see `r-exomedepth/tags`_ for valid values for ``<tag>``)


.. |downloads_r-exomedepth| image:: https://img.shields.io/conda/dn/bioconda/r-exomedepth.svg?style=flat
   :alt:   (downloads)
.. |docker_r-exomedepth| image:: https://quay.io/repository/biocontainers/r-exomedepth/status
   :target: https://quay.io/repository/biocontainers/r-exomedepth
.. _`r-exomedepth/tags`: https://quay.io/repository/biocontainers/r-exomedepth?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-exomedepth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-exomedepth/README.html