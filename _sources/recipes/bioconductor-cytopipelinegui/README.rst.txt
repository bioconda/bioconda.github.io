:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cytopipelinegui'
.. highlight: bash

bioconductor-cytopipelinegui
============================

.. conda:recipe:: bioconductor-cytopipelinegui
   :replaces_section_title:
   :noindex:

   GUI\'s for visualization of flow cytometry data analysis pipelines

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CytoPipelineGUI.html
   :license: GPL-3
   :recipe: /`bioconductor-cytopipelinegui <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytopipelinegui>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cytopipelinegui/meta.yaml>`_

   This package is the companion of the \`CytoPipeline\` package. It provides GUI\'s \(shiny apps\) for the visualization of flow cytometry data analysis pipelines that are run with \`CytoPipeline\`. Two shiny applications are provided\, i.e. an interactive flow frame assessment and comparison tool and an interactive scale transformations visualization and adjustment tool.


.. conda:package:: bioconductor-cytopipelinegui

   |downloads_bioconductor-cytopipelinegui| |docker_bioconductor-cytopipelinegui|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-cytopipeline: ``>=1.6.0,<1.7.0``
   :depends bioconductor-flowcore: ``>=2.18.0,<2.19.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-plotly: 
   :depends r-shiny: 
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

      mamba install bioconductor-cytopipelinegui

   and update with::

      mamba update bioconductor-cytopipelinegui

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cytopipelinegui

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cytopipelinegui:<tag>

   (see `bioconductor-cytopipelinegui/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cytopipelinegui| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cytopipelinegui.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cytopipelinegui
   :alt:   (downloads)
.. |docker_bioconductor-cytopipelinegui| image:: https://quay.io/repository/biocontainers/bioconductor-cytopipelinegui/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cytopipelinegui
.. _`bioconductor-cytopipelinegui/tags`: https://quay.io/repository/biocontainers/bioconductor-cytopipelinegui?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cytopipelinegui";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cytopipelinegui/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cytopipelinegui/README.html