:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-imman'
.. highlight: bash

bioconductor-imman
==================

.. conda:recipe:: bioconductor-imman
   :replaces_section_title:
   :noindex:

   Interlog protein network reconstruction by Mapping and Mining ANalysis

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/IMMAN.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-imman <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imman>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imman/meta.yaml>`_

   Reconstructing Interlog Protein Network \(IPN\) integrated from several Protein protein Interaction Networks \(PPINs\). Using this package\, overlaying different PPINs to mine conserved common networks between diverse species will be applicable.


.. conda:package:: bioconductor-imman

   |downloads_bioconductor-imman| |docker_bioconductor-imman|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-stringdb: ``>=2.10.0,<2.11.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-igraph: 
   :depends r-seqinr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-imman

   and update with::

      conda update bioconductor-imman

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-imman:<tag>

   (see `bioconductor-imman/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-imman| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-imman.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-imman
   :alt:   (downloads)
.. |docker_bioconductor-imman| image:: https://quay.io/repository/biocontainers/bioconductor-imman/status
   :target: https://quay.io/repository/biocontainers/bioconductor-imman
.. _`bioconductor-imman/tags`: https://quay.io/repository/biocontainers/bioconductor-imman?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-imman";
        var versions = ["1.18.0","1.14.0","1.12.0","1.10.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-imman/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-imman/README.html