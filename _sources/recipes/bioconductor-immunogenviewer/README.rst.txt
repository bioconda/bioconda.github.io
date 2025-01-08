:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-immunogenviewer'
.. highlight: bash

bioconductor-immunogenviewer
============================

.. conda:recipe:: bioconductor-immunogenviewer
   :replaces_section_title:
   :noindex:

   Visualization and evaluation of protein immunogens

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/immunogenViewer.html
   :license: Apache License (>= 2)
   :recipe: /`bioconductor-immunogenviewer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-immunogenviewer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-immunogenviewer/meta.yaml>`_

   Plots protein properties and visualizes position of peptide immunogens within protein sequence. Allows evaluation of immunogens based on structural and functional annotations to infer suitability for antibody\-based methods aiming to detect native proteins.


.. conda:package:: bioconductor-immunogenviewer

   |downloads_bioconductor-immunogenviewer| |docker_bioconductor-immunogenviewer|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-uniprot.ws: ``>=2.46.0,<2.47.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-patchwork: 
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

      mamba install bioconductor-immunogenviewer

   and update with::

      mamba update bioconductor-immunogenviewer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-immunogenviewer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-immunogenviewer:<tag>

   (see `bioconductor-immunogenviewer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-immunogenviewer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-immunogenviewer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-immunogenviewer
   :alt:   (downloads)
.. |docker_bioconductor-immunogenviewer| image:: https://quay.io/repository/biocontainers/bioconductor-immunogenviewer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-immunogenviewer
.. _`bioconductor-immunogenviewer/tags`: https://quay.io/repository/biocontainers/bioconductor-immunogenviewer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-immunogenviewer";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-immunogenviewer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-immunogenviewer/README.html