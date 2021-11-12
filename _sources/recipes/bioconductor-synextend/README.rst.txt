:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-synextend'
.. highlight: bash

bioconductor-synextend
======================

.. conda:recipe:: bioconductor-synextend
   :replaces_section_title:
   :noindex:

   Tools for Working With Synteny Objects

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/SynExtend.html
   :license: GPL-3
   :recipe: /`bioconductor-synextend <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synextend>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synextend/meta.yaml>`_

   Shared order between genomic sequences provide a great deal of information. Synteny objects produced by the R package DECIPHER provides quantitative information about that shared order. SynExtend provides tools for extracting information from Synteny objects.


.. conda:package:: bioconductor-synextend

   |downloads_bioconductor-synextend| |docker_bioconductor-synextend|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.1-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-decipher: ``>=2.22.0,<2.23.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-synextend

   and update with::

      conda update bioconductor-synextend

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-synextend:<tag>

   (see `bioconductor-synextend/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-synextend| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-synextend.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-synextend
   :alt:   (downloads)
.. |docker_bioconductor-synextend| image:: https://quay.io/repository/biocontainers/bioconductor-synextend/status
   :target: https://quay.io/repository/biocontainers/bioconductor-synextend
.. _`bioconductor-synextend/tags`: https://quay.io/repository/biocontainers/bioconductor-synextend?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-synextend";
        var versions = ["1.6.0","1.4.1","1.2.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-synextend/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-synextend/README.html