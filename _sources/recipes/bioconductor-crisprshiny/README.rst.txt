:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crisprshiny'
.. highlight: bash

bioconductor-crisprshiny
========================

.. conda:recipe:: bioconductor-crisprshiny
   :replaces_section_title:
   :noindex:

   Exploring curated CRISPR gRNAs via Shiny

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/crisprShiny.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-crisprshiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprshiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprshiny/meta.yaml>`_

   Provides means to interactively visualize guide RNAs \(gRNAs\) in GuideSet objects via Shiny application. This GUI can be self\-contained or as a module within a larger Shiny app. The content of the app reflects the annotations present in the passed GuideSet object\, and includes intuitive tools to examine\, filter\, and export gRNAs\, thereby making gRNA design more user\-friendly.


.. conda:package:: bioconductor-crisprshiny

   |downloads_bioconductor-crisprshiny| |docker_bioconductor-crisprshiny|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-bsgenome: ``>=1.74.0,<1.75.0``
   :depends bioconductor-crisprbase: ``>=1.10.0,<1.11.0``
   :depends bioconductor-crisprdesign: ``>=1.8.0,<1.9.0``
   :depends bioconductor-crisprscore: ``>=1.10.0,<1.11.0``
   :depends bioconductor-crisprviz: ``>=1.8.0,<1.9.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-pwalign: ``>=1.2.0,<1.3.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dt: 
   :depends r-htmlwidgets: 
   :depends r-shiny: 
   :depends r-shinybs: 
   :depends r-shinyjs: 
   :depends r-waiter: 
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

      mamba install bioconductor-crisprshiny

   and update with::

      mamba update bioconductor-crisprshiny

  To create a new environment, run::

      mamba create --name myenvname bioconductor-crisprshiny

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-crisprshiny:<tag>

   (see `bioconductor-crisprshiny/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-crisprshiny| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crisprshiny.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crisprshiny
   :alt:   (downloads)
.. |docker_bioconductor-crisprshiny| image:: https://quay.io/repository/biocontainers/bioconductor-crisprshiny/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crisprshiny
.. _`bioconductor-crisprshiny/tags`: https://quay.io/repository/biocontainers/bioconductor-crisprshiny?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-crisprshiny";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crisprshiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crisprshiny/README.html