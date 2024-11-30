:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rrvgo'
.. highlight: bash

bioconductor-rrvgo
==================

.. conda:recipe:: bioconductor-rrvgo
   :replaces_section_title:
   :noindex:

   Reduce \+ Visualize GO

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/rrvgo.html
   :license: GPL-3
   :recipe: /`bioconductor-rrvgo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rrvgo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rrvgo/meta.yaml>`_

   Reduce and visualize lists of Gene Ontology terms by identifying redudance based on semantic similarity.


.. conda:package:: bioconductor-rrvgo

   |downloads_bioconductor-rrvgo| |docker_bioconductor-rrvgo|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-go.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-gosemsim: ``>=2.28.0,<2.29.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-pheatmap: 
   :depends r-shiny: 
   :depends r-tm: 
   :depends r-treemap: 
   :depends r-umap: 
   :depends r-wordcloud: 
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

      mamba install bioconductor-rrvgo

   and update with::

      mamba update bioconductor-rrvgo

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rrvgo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rrvgo:<tag>

   (see `bioconductor-rrvgo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rrvgo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rrvgo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rrvgo
   :alt:   (downloads)
.. |docker_bioconductor-rrvgo| image:: https://quay.io/repository/biocontainers/bioconductor-rrvgo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rrvgo
.. _`bioconductor-rrvgo/tags`: https://quay.io/repository/biocontainers/bioconductor-rrvgo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rrvgo";
        var versions = ["1.14.0","1.12.0","1.10.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rrvgo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rrvgo/README.html