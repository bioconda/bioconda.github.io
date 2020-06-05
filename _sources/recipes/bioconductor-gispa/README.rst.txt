:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gispa'
.. highlight: bash

bioconductor-gispa
==================

.. conda:recipe:: bioconductor-gispa
   :replaces_section_title:
   :noindex:

   GISPA\: Method for Gene Integrated Set Profile Analysis

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/GISPA.html
   :license: GPL-2
   :recipe: /`bioconductor-gispa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gispa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gispa/meta.yaml>`_

   GISPA is a method intended for the researchers who are interested in defining gene sets with similar\, a priori specified molecular profile. GISPA method has been previously published in Nucleic Acid Research \(Kowalski et al.\, 2016\; PMID\: 26826710\).


.. conda:package:: bioconductor-gispa

   |downloads_bioconductor-gispa| |docker_bioconductor-gispa|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.0-1``,  ``1.6.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.48.0,<2.49.0``
   :depends bioconductor-genefilter: ``>=1.70.0,<1.71.0``
   :depends bioconductor-gseabase: ``>=1.50.0,<1.51.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-changepoint: 
   :depends r-data.table: 
   :depends r-hh: 
   :depends r-lattice: 
   :depends r-latticeextra: 
   :depends r-plyr: 
   :depends r-scatterplot3d: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gispa

   and update with::

      conda update bioconductor-gispa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gispa:<tag>

   (see `bioconductor-gispa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gispa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gispa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gispa
   :alt:   (downloads)
.. |docker_bioconductor-gispa| image:: https://quay.io/repository/biocontainers/bioconductor-gispa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gispa
.. _`bioconductor-gispa/tags`: https://quay.io/repository/biocontainers/bioconductor-gispa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gispa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gispa/README.html