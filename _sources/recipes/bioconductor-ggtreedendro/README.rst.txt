:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggtreedendro'
.. highlight: bash

bioconductor-ggtreedendro
=========================

.. conda:recipe:: bioconductor-ggtreedendro
   :replaces_section_title:
   :noindex:

   Drawing \'dendrogram\' using \'ggtree\'

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ggtreeDendro.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ggtreedendro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggtreedendro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggtreedendro/meta.yaml>`_

   Offers a set of \'autoplot\' methods to visualize tree\-like structures \(e.g.\, hierarchical clustering and classification\/regression trees\) using \'ggtree\'. You can adjust graphical parameters using grammar of graphic syntax and integrate external data to the tree.


.. conda:package:: bioconductor-ggtreedendro

   |downloads_bioconductor-ggtreedendro| |docker_bioconductor-ggtreedendro|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-ggtree: ``>=3.10.0,<3.11.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-tidytree: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-ggtreedendro

   and update with::

      mamba update bioconductor-ggtreedendro

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ggtreedendro

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ggtreedendro:<tag>

   (see `bioconductor-ggtreedendro/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ggtreedendro| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggtreedendro.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ggtreedendro
   :alt:   (downloads)
.. |docker_bioconductor-ggtreedendro| image:: https://quay.io/repository/biocontainers/bioconductor-ggtreedendro/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggtreedendro
.. _`bioconductor-ggtreedendro/tags`: https://quay.io/repository/biocontainers/bioconductor-ggtreedendro?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ggtreedendro";
        var versions = ["1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggtreedendro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggtreedendro/README.html