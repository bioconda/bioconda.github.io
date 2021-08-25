:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggtreeextra'
.. highlight: bash

bioconductor-ggtreeextra
========================

.. conda:recipe:: bioconductor-ggtreeextra
   :replaces_section_title:
   :noindex:

   An R Package To Add Geometric Layers On Circular Or Other Layout Tree Of \"ggtree\"

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/ggtreeExtra.html
   :license: GPL-3
   :recipe: /`bioconductor-ggtreeextra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggtreeextra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggtreeextra/meta.yaml>`_

   \'ggtreeExtra\' extends the method for mapping and visualizing associated data on phylogenetic tree using \'ggtree\'. These associated data can be presented on the external panels to circular layout\, fan layout\, or other rectangular layout tree built by \'ggtree\' with the grammar of \'ggplot2\'.


.. conda:package:: bioconductor-ggtreeextra

   |downloads_bioconductor-ggtreeextra| |docker_bioconductor-ggtreeextra|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.2-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-ggtree: ``>=3.0.0,<3.1.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggnewscale: 
   :depends r-ggplot2: 
   :depends r-rlang: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ggtreeextra

   and update with::

      conda update bioconductor-ggtreeextra

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ggtreeextra:<tag>

   (see `bioconductor-ggtreeextra/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ggtreeextra| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggtreeextra.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ggtreeextra
   :alt:   (downloads)
.. |docker_bioconductor-ggtreeextra| image:: https://quay.io/repository/biocontainers/bioconductor-ggtreeextra/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggtreeextra
.. _`bioconductor-ggtreeextra/tags`: https://quay.io/repository/biocontainers/bioconductor-ggtreeextra?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ggtreeextra";
        var versions = ["1.2.0","1.0.2","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggtreeextra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggtreeextra/README.html