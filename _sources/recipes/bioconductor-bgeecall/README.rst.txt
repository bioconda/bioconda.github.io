:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bgeecall'
.. highlight: bash

bioconductor-bgeecall
=====================

.. conda:recipe:: bioconductor-bgeecall
   :replaces_section_title:
   :noindex:

   Automatic RNA\-Seq present\/absent gene expression calls generation

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/BgeeCall.html
   :license: GPL-3
   :recipe: /`bioconductor-bgeecall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bgeecall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bgeecall/meta.yaml>`_

   BgeeCall allows to generate present\/absent gene expression calls without using an arbitrary cutoff like TPM\<1. Calls are generated based on reference intergenic sequences. These sequences are generated based on expression of all RNA\-Seq libraries of each species integrated in Bgee \(https\:\/\/bgee.org\).


.. conda:package:: bioconductor-bgeecall

   |downloads_bioconductor-bgeecall| |docker_bioconductor-bgeecall|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.2-0``,  ``1.6.0-0``,  ``1.4.0-0``

      

   
   :depends bioconductor-biomart: ``>=2.50.0,<2.51.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-genomicfeatures: ``>=1.46.0,<1.47.0``
   :depends bioconductor-rhdf5: ``>=2.38.0,<2.39.0``
   :depends bioconductor-rtracklayer: ``>=1.54.0,<1.55.0``
   :depends bioconductor-tximport: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-jsonlite: 
   :depends r-rslurm: 
   :depends r-sjmisc: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bgeecall

   and update with::

      conda update bioconductor-bgeecall

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bgeecall:<tag>

   (see `bioconductor-bgeecall/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bgeecall| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bgeecall.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bgeecall
   :alt:   (downloads)
.. |docker_bioconductor-bgeecall| image:: https://quay.io/repository/biocontainers/bioconductor-bgeecall/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bgeecall
.. _`bioconductor-bgeecall/tags`: https://quay.io/repository/biocontainers/bioconductor-bgeecall?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bgeecall";
        var versions = ["1.10.0","1.8.0","1.6.2","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bgeecall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bgeecall/README.html