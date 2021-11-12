:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-redseq'
.. highlight: bash

bioconductor-redseq
===================

.. conda:recipe:: bioconductor-redseq
   :replaces_section_title:
   :noindex:

   Analysis of high\-throughput sequencing data processed by restriction enzyme digestion

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/REDseq.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-redseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-redseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-redseq/meta.yaml>`_

   The package includes functions to build restriction enzyme cut site \(RECS\) map\, distribute mapped sequences on the map with five different approaches\, find enriched\/depleted RECSs for a sample\, and identify differentially enriched\/depleted RECSs between samples.


.. conda:package:: bioconductor-redseq

   |downloads_bioconductor-redseq| |docker_bioconductor-redseq|

   :versions:
      
      

      ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-bsgenome: ``>=1.62.0,<1.63.0``
   :depends bioconductor-bsgenome.celegans.ucsc.ce2: ``>=1.4.0,<1.5.0``
   :depends bioconductor-chippeakanno: ``>=3.28.0,<3.29.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-multtest: ``>=2.50.0,<2.51.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-redseq

   and update with::

      conda update bioconductor-redseq

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-redseq:<tag>

   (see `bioconductor-redseq/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-redseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-redseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-redseq
   :alt:   (downloads)
.. |docker_bioconductor-redseq| image:: https://quay.io/repository/biocontainers/bioconductor-redseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-redseq
.. _`bioconductor-redseq/tags`: https://quay.io/repository/biocontainers/bioconductor-redseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-redseq";
        var versions = ["1.40.0","1.38.0","1.36.0","1.36.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-redseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-redseq/README.html