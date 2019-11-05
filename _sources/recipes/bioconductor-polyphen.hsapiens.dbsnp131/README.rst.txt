:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-polyphen.hsapiens.dbsnp131'
.. highlight: bash

bioconductor-polyphen.hsapiens.dbsnp131
=======================================

.. conda:recipe:: bioconductor-polyphen.hsapiens.dbsnp131
   :replaces_section_title:

   Database of PolyPhen predictions for Homo sapiens dbSNP build 131

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/PolyPhen.Hsapiens.dbSNP131.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-polyphen.hsapiens.dbsnp131 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-polyphen.hsapiens.dbsnp131>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-polyphen.hsapiens.dbsnp131/meta.yaml>`_

   


.. conda:package:: bioconductor-polyphen.hsapiens.dbsnp131

   |downloads_bioconductor-polyphen.hsapiens.dbsnp131| |docker_bioconductor-polyphen.hsapiens.dbsnp131|

   :versions: 1.0.2-3, 1.0.2-2, 1.0.2-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends bioconductor-variantannotation: >=1.32.0,<1.33.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-rsqlite: >=0.11.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-polyphen.hsapiens.dbsnp131

   and update with::

      conda update bioconductor-polyphen.hsapiens.dbsnp131

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-polyphen.hsapiens.dbsnp131:<tag>

   (see `bioconductor-polyphen.hsapiens.dbsnp131/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-polyphen.hsapiens.dbsnp131| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-polyphen.hsapiens.dbsnp131.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-polyphen.hsapiens.dbsnp131
   :alt:   (downloads)
.. |docker_bioconductor-polyphen.hsapiens.dbsnp131| image:: https://quay.io/repository/biocontainers/bioconductor-polyphen.hsapiens.dbsnp131/status
   :target: https://quay.io/repository/biocontainers/bioconductor-polyphen.hsapiens.dbsnp131
.. _`bioconductor-polyphen.hsapiens.dbsnp131/tags`: https://quay.io/repository/biocontainers/bioconductor-polyphen.hsapiens.dbsnp131?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-polyphen.hsapiens.dbsnp131/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-polyphen.hsapiens.dbsnp131/README.html