:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mosclip'
.. highlight: bash

bioconductor-mosclip
====================

.. conda:recipe:: bioconductor-mosclip
   :replaces_section_title:
   :noindex:

   Multi Omics Survival Clip

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MOSClip.html
   :license: AGPL-3
   :recipe: /`bioconductor-mosclip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mosclip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mosclip/meta.yaml>`_

   Topological pathway analysis tool able to integrate multi\-omics data. It finds survival\-associated modules or significant modules for two\-class analysis. This tool have two main methods\: pathway tests and module tests. The latter method allows the user to dig inside the pathways itself.


.. conda:package:: bioconductor-mosclip

   |downloads_bioconductor-mosclip| |docker_bioconductor-mosclip|

   :versions:
      
      

      

      

   
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

      mamba install bioconductor-mosclip

   and update with::

      mamba update bioconductor-mosclip

  To create a new environment, run::

      mamba create --name myenvname bioconductor-mosclip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mosclip:<tag>

   (see `bioconductor-mosclip/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mosclip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mosclip.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mosclip
   :alt:   (downloads)
.. |docker_bioconductor-mosclip| image:: https://quay.io/repository/biocontainers/bioconductor-mosclip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mosclip
.. _`bioconductor-mosclip/tags`: https://quay.io/repository/biocontainers/bioconductor-mosclip?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mosclip";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mosclip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mosclip/README.html