:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-trna'
.. highlight: bash

bioconductor-trna
=================

.. conda:recipe:: bioconductor-trna
   :replaces_section_title:
   :noindex:

   Analyzing tRNA sequences and structures

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/tRNA.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-trna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trna/meta.yaml>`_

   The tRNA package allows tRNA sequences and structures to be accessed and used for subsetting. In addition\, it provides visualization tools to compare feature parameters of multiple tRNA sets and correlate them to additional data. The tRNA package uses GRanges objects as inputs requiring only few additional column data sets.


.. conda:package:: bioconductor-trna

   |downloads_bioconductor-trna| |docker_bioconductor-trna|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.2-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-modstrings: ``>=1.10.0,<1.11.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-structstrings: ``>=1.10.0,<1.11.0``
   :depends bioconductor-xvector: ``>=0.34.0,<0.35.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-scales: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-trna

   and update with::

      conda update bioconductor-trna

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-trna:<tag>

   (see `bioconductor-trna/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-trna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-trna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-trna
   :alt:   (downloads)
.. |docker_bioconductor-trna| image:: https://quay.io/repository/biocontainers/bioconductor-trna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-trna
.. _`bioconductor-trna/tags`: https://quay.io/repository/biocontainers/bioconductor-trna?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-trna";
        var versions = ["1.12.0","1.10.0","1.8.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-trna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-trna/README.html