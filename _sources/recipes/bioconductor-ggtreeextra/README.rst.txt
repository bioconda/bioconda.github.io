:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggtreeextra'
.. highlight: bash

bioconductor-ggtreeextra
========================

.. conda:recipe:: bioconductor-ggtreeextra
   :replaces_section_title:
   :noindex:

   An R Package To Add Geometric Layers On Circular Or Other Layout Tree Of \"ggtree\"

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ggtreeExtra.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-ggtreeextra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggtreeextra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggtreeextra/meta.yaml>`_

   \'ggtreeExtra\' extends the method for mapping and visualizing associated data on phylogenetic tree using \'ggtree\'. These associated data can be presented on the external panels to circular layout\, fan layout\, or other rectangular layout tree built by \'ggtree\' with the grammar of \'ggplot2\'.


.. conda:package:: bioconductor-ggtreeextra

   |downloads_bioconductor-ggtreeextra| |docker_bioconductor-ggtreeextra|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.2-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-ggtree: ``>=3.14.0,<3.15.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cli: 
   :depends r-ggnewscale: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-rlang: 
   :depends r-tidytree: ``>=0.3.9``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-ggtreeextra

   and update with::

      mamba update bioconductor-ggtreeextra

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ggtreeextra

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.4.0"];
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