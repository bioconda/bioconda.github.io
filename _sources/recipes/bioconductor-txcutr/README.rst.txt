:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-txcutr'
.. highlight: bash

bioconductor-txcutr
===================

.. conda:recipe:: bioconductor-txcutr
   :replaces_section_title:
   :noindex:

   Transcriptome CUTteR

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/txcutr.html
   :license: GPL-3
   :recipe: /`bioconductor-txcutr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txcutr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-txcutr/meta.yaml>`_

   Various mRNA sequencing library preparation methods generate sequencing reads specifically from the transcript ends. Analyses that focus on quantification of isoform usage from such data can be aided by using truncated versions of transcriptome annotations\, both at the alignment or pseudo\-alignment stage\, as well as in downstream analysis. This package implements some convenience methods for readily generating such truncated annotations and their corresponding sequences.


.. conda:package:: bioconductor-txcutr

   |downloads_bioconductor-txcutr| |docker_bioconductor-txcutr|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-genomicfeatures: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-rtracklayer: ``>=1.54.0,<1.55.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-txcutr

   and update with::

      conda update bioconductor-txcutr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-txcutr:<tag>

   (see `bioconductor-txcutr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-txcutr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-txcutr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-txcutr
   :alt:   (downloads)
.. |docker_bioconductor-txcutr| image:: https://quay.io/repository/biocontainers/bioconductor-txcutr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-txcutr
.. _`bioconductor-txcutr/tags`: https://quay.io/repository/biocontainers/bioconductor-txcutr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-txcutr";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-txcutr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-txcutr/README.html