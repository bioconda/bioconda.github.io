:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bsgenomeforge'
.. highlight: bash

bioconductor-bsgenomeforge
==========================

.. conda:recipe:: bioconductor-bsgenomeforge
   :replaces_section_title:
   :noindex:

   Forge BSgenome data packages

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/BSgenomeForge.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bsgenomeforge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenomeforge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bsgenomeforge/meta.yaml>`_

   A set of tools to forge BSgenome data packages. Supersedes the old seed\-based tools from the BSgenome software package. This package allows the user to create a BSgenome data package in one function call\, simplifying the old seed\-based process.


.. conda:package:: bioconductor-bsgenomeforge

   |downloads_bioconductor-bsgenomeforge| |docker_bioconductor-bsgenomeforge|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bsgenome: ``>=1.68.0,<1.69.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-bsgenomeforge

   and update with::

      conda update bioconductor-bsgenomeforge

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-bsgenomeforge:<tag>

   (see `bioconductor-bsgenomeforge/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-bsgenomeforge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bsgenomeforge.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bsgenomeforge
   :alt:   (downloads)
.. |docker_bioconductor-bsgenomeforge| image:: https://quay.io/repository/biocontainers/bioconductor-bsgenomeforge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bsgenomeforge
.. _`bioconductor-bsgenomeforge/tags`: https://quay.io/repository/biocontainers/bioconductor-bsgenomeforge?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bsgenomeforge";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bsgenomeforge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bsgenomeforge/README.html