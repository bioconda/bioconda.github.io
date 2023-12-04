:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-flowgraph'
.. highlight: bash

bioconductor-flowgraph
======================

.. conda:recipe:: bioconductor-flowgraph
   :replaces_section_title:
   :noindex:

   Identifying differential cell populations in flow cytometry data accounting for marker frequency

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/flowGraph.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowgraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowgraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowgraph/meta.yaml>`_

   Identifies maximal differential cell populations in flow cytometry data taking into account dependencies between cell populations\; flowGraph calculates and plots SpecEnr abundance scores given cell population cell counts.


.. conda:package:: bioconductor-flowgraph

   |downloads_bioconductor-flowgraph| |docker_bioconductor-flowgraph|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: ``>=1.9.5``
   :depends r-effsize: 
   :depends r-furrr: 
   :depends r-future: 
   :depends r-ggiraph: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-gridextra: 
   :depends r-htmlwidgets: 
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-purrr: 
   :depends r-rdpack: 
   :depends r-stringi: 
   :depends r-stringr: 
   :depends r-visnetwork: 
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

      mamba install bioconductor-flowgraph

   and update with::

      mamba update bioconductor-flowgraph

  To create a new environment, run::

      mamba create --name myenvname bioconductor-flowgraph

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-flowgraph:<tag>

   (see `bioconductor-flowgraph/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-flowgraph| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowgraph.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-flowgraph
   :alt:   (downloads)
.. |docker_bioconductor-flowgraph| image:: https://quay.io/repository/biocontainers/bioconductor-flowgraph/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowgraph
.. _`bioconductor-flowgraph/tags`: https://quay.io/repository/biocontainers/bioconductor-flowgraph?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-flowgraph";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowgraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowgraph/README.html