:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-adductomicsr'
.. highlight: bash

bioconductor-adductomicsr
=========================

.. conda:recipe:: bioconductor-adductomicsr
   :replaces_section_title:
   :noindex:

   Processing of adductomic mass spectral datasets

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/adductomicsR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-adductomicsr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adductomicsr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adductomicsr/meta.yaml>`_

   Processes MS2 data to identify potentially adducted peptides from spectra that has been corrected for mass drift and retention time drift and quantifies MS1 level mass spectral peaks.


.. conda:package:: bioconductor-adductomicsr

   |downloads_bioconductor-adductomicsr| |docker_bioconductor-adductomicsr|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-1``

      

   
   :depends bioconductor-adductdata: ``>=1.6.0,<1.7.0``
   :depends bioconductor-annotationhub: ``>=2.22.0,<2.23.0``
   :depends bioconductor-experimenthub: ``>=1.16.0,<1.17.0``
   :depends bioconductor-mzr: ``>=2.24.0,<2.25.0``
   :depends r-ade4: ``>=1.7.6``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-bootstrap: ``>=2017.2``
   :depends r-data.table: ``>=1.10.4``
   :depends r-dosnow: ``>=1.0.14``
   :depends r-dplyr: ``>=0.7.5``
   :depends r-dt: ``>=0.2``
   :depends r-fastcluster: ``>=1.1.22``
   :depends r-foreach: ``>=1.4.3``
   :depends r-fpc: ``>=2.1.10``
   :depends r-orgmassspecr: ``>=0.4.6``
   :depends r-pastecs: ``>=1.3.18``
   :depends r-pracma: ``>=2.0.4``
   :depends r-rcppeigen: ``>=0.3.3.3.0``
   :depends r-reshape2: ``>=1.4.2``
   :depends r-rvest: ``>=0.3.2``
   :depends r-smoother: ``>=1.1``
   :depends r-zoo: ``>=1.8``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-adductomicsr

   and update with::

      conda update bioconductor-adductomicsr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-adductomicsr:<tag>

   (see `bioconductor-adductomicsr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-adductomicsr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-adductomicsr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-adductomicsr
   :alt:   (downloads)
.. |docker_bioconductor-adductomicsr| image:: https://quay.io/repository/biocontainers/bioconductor-adductomicsr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-adductomicsr
.. _`bioconductor-adductomicsr/tags`: https://quay.io/repository/biocontainers/bioconductor-adductomicsr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-adductomicsr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-adductomicsr/README.html