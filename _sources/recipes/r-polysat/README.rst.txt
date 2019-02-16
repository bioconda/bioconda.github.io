:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-polysat'
.. highlight: bash

r-polysat
=========

.. conda:recipe:: r-polysat
   :replaces_section_title:

   A collection of tools to handle microsatellite data of any ploidy \(and samples of mixed ploidy\) where allele copy number is not known in partially heterozygous genotypes.

   :homepage: https://cran.r-project.org/web/packages/polysat/index.html
   :license: GPL (>= 2)
   :recipe: /`r-polysat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-polysat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-polysat/meta.yaml>`_

   


.. conda:package:: r-polysat

   |downloads_r-polysat| |docker_r-polysat|

   :versions: 1.7_3-1, 1.7_3-0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libgfortran-ng: 
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-rcpp: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-polysat

   and update with::

      conda update r-polysat

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-polysat:<tag>

   (see `r-polysat/tags`_ for valid values for ``<tag>``)


.. |downloads_r-polysat| image:: https://img.shields.io/conda/dn/bioconda/r-polysat.svg?style=flat
   :alt:   (downloads)
.. |docker_r-polysat| image:: https://quay.io/repository/biocontainers/r-polysat/status
   :target: https://quay.io/repository/biocontainers/r-polysat
.. _`r-polysat/tags`: https://quay.io/repository/biocontainers/r-polysat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-polysat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-polysat/README.html