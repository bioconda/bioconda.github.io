:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqcombo'
.. highlight: bash

bioconductor-seqcombo
=====================

.. conda:recipe:: bioconductor-seqcombo
   :replaces_section_title:
   :noindex:

   Visualization Tool for Sequence Recombination and Reassortment

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/seqcombo.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-seqcombo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqcombo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqcombo/meta.yaml>`_

   Provides useful functions for visualizing sequence recombination and virus reassortment events.


.. conda:package:: bioconductor-seqcombo

   |downloads_bioconductor-seqcombo| |docker_bioconductor-seqcombo|

   :versions:
      
      

      ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.62.0,<2.63.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-yulab.utils: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-seqcombo

   and update with::

      conda update bioconductor-seqcombo

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqcombo:<tag>

   (see `bioconductor-seqcombo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqcombo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqcombo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqcombo
   :alt:   (downloads)
.. |docker_bioconductor-seqcombo| image:: https://quay.io/repository/biocontainers/bioconductor-seqcombo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqcombo
.. _`bioconductor-seqcombo/tags`: https://quay.io/repository/biocontainers/bioconductor-seqcombo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seqcombo";
        var versions = ["1.16.0","1.14.0","1.12.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqcombo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqcombo/README.html