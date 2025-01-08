:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biochubsshiny'
.. highlight: bash

bioconductor-biochubsshiny
==========================

.. conda:recipe:: bioconductor-biochubsshiny
   :replaces_section_title:
   :noindex:

   View AnnotationHub and ExperimentHub Resources Interactively

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BiocHubsShiny.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-biochubsshiny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biochubsshiny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biochubsshiny/meta.yaml>`_

   A package that allows interactive exploration of AnnotationHub and ExperimentHub resources. It uses DT \/ DataTable to display resources for multiple organisms. It provides template code for reproducibility and for downloading resources via the indicated Hub package.


.. conda:package:: bioconductor-biochubsshiny

   |downloads_bioconductor-biochubsshiny| |docker_bioconductor-biochubsshiny|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.14.0,<3.15.0``
   :depends bioconductor-experimenthub: ``>=2.14.0,<2.15.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dt: 
   :depends r-htmlwidgets: 
   :depends r-shiny: 
   :depends r-shinyace: 
   :depends r-shinyjs: 
   :depends r-shinythemes: 
   :depends r-shinytoastr: 
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

      mamba install bioconductor-biochubsshiny

   and update with::

      mamba update bioconductor-biochubsshiny

  To create a new environment, run::

      mamba create --name myenvname bioconductor-biochubsshiny

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-biochubsshiny:<tag>

   (see `bioconductor-biochubsshiny/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-biochubsshiny| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biochubsshiny.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biochubsshiny
   :alt:   (downloads)
.. |docker_bioconductor-biochubsshiny| image:: https://quay.io/repository/biocontainers/bioconductor-biochubsshiny/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biochubsshiny
.. _`bioconductor-biochubsshiny/tags`: https://quay.io/repository/biocontainers/bioconductor-biochubsshiny?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biochubsshiny";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biochubsshiny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biochubsshiny/README.html