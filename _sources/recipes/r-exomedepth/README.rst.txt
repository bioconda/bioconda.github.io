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

   :versions: 1.1.10

   :depends: :conda:package:`bioconductor-biostrings`  :conda:package:`bioconductor-genomicalignments`  :conda:package:`bioconductor-genomicranges` >=1.23.0 :conda:package:`bioconductor-iranges`  :conda:package:`bioconductor-rsamtools`  :conda:package:`r` 3.3.1* :conda:package:`r-aod`  :conda:package:`r-vgam` >=0.8.4 

   :required~by: |required_by_r-exomedepth|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-exomedepth

   and update with::

      conda update r-exomedepth

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-exomedepth


.. |required_by_r-exomedepth| conda:required_by:: r-exomedepth
.. |downloads_r-exomedepth| image:: https://img.shields.io/conda/dn/bioconda/r-exomedepth.svg?style=flat
   :alt:   (downloads)
.. |docker_r-exomedepth| image:: https://quay.io/repository/biocontainers/r-exomedepth/status
   :target: https://quay.io/repository/biocontainers/r-exomedepth







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-exomedepth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-exomedepth/README.html

