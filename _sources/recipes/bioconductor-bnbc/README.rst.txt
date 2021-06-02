:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bnbc'
.. highlight: bash

bioconductor-bnbc
=================

.. conda:recipe:: bioconductor-bnbc
   :replaces_section_title:
   :noindex:

   Bandwise normalization and batch correction of Hi\-C data

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/bnbc.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bnbc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bnbc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bnbc/meta.yaml>`_

   Tools to normalize \(several\) Hi\-C data from replicates.


.. conda:package:: bioconductor-bnbc

   |downloads_bioconductor-bnbc| |docker_bioconductor-bnbc|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-ebimage: ``>=4.34.0,<4.35.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends bioconductor-preprocesscore: ``>=1.54.0,<1.55.0``
   :depends bioconductor-rhdf5: ``>=2.36.0,<2.37.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-sva: ``>=3.40.0,<3.41.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libcxx: ``>=11.1.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-matrixstats: 
   :depends r-rcpp: ``>=0.12.12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bnbc

   and update with::

      conda update bioconductor-bnbc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bnbc:<tag>

   (see `bioconductor-bnbc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bnbc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bnbc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bnbc
   :alt:   (downloads)
.. |docker_bioconductor-bnbc| image:: https://quay.io/repository/biocontainers/bioconductor-bnbc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bnbc
.. _`bioconductor-bnbc/tags`: https://quay.io/repository/biocontainers/bioconductor-bnbc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bnbc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bnbc/README.html