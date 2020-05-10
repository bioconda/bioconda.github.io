:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seq2pathway.data'
.. highlight: bash

bioconductor-seq2pathway.data
=============================

.. conda:recipe:: bioconductor-seq2pathway.data
   :replaces_section_title:

   data set for R package seq2pathway

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/seq2pathway.data.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-seq2pathway.data <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seq2pathway.data>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seq2pathway.data/meta.yaml>`_

   Supporting data for the seq2patheway package. Includes modified gene sets from MsigDB and org.Hs.eg.db\; gene locus definitions from GENCODE project.


.. conda:package:: bioconductor-seq2pathway.data

   |downloads_bioconductor-seq2pathway.data| |docker_bioconductor-seq2pathway.data|

   :versions: 1.20.0-0, 1.18.0-0, 1.16.0-2, 1.16.0-1, 1.14.0-0, 1.12.0-0, 1.10.0-0
   
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seq2pathway.data

   and update with::

      conda update bioconductor-seq2pathway.data

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seq2pathway.data:<tag>

   (see `bioconductor-seq2pathway.data/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seq2pathway.data| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seq2pathway.data.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seq2pathway.data
   :alt:   (downloads)
.. |docker_bioconductor-seq2pathway.data| image:: https://quay.io/repository/biocontainers/bioconductor-seq2pathway.data/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seq2pathway.data
.. _`bioconductor-seq2pathway.data/tags`: https://quay.io/repository/biocontainers/bioconductor-seq2pathway.data?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seq2pathway.data/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seq2pathway.data/README.html