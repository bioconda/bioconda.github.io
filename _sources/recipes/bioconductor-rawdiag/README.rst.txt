:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rawdiag'
.. highlight: bash

bioconductor-rawdiag
====================

.. conda:recipe:: bioconductor-rawdiag
   :replaces_section_title:
   :noindex:

   Brings Orbitrap Mass Spectrometry Data to Life\; Fast and Colorful

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rawDiag.html
   :license: GPL-3
   :recipe: /`bioconductor-rawdiag <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rawdiag>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rawdiag/meta.yaml>`_

   Optimizing methods for liquid chromatography coupled to mass spectrometry \(LC\-MS\) poses a nontrivial challenge. The rawDiag package facilitates rational method optimization by generating MS operator\-tailored diagnostic plots of scan\-level metadata. The package is designed for use on the R shell or as a Shiny application on the Orbitrap instrument PC.


.. conda:package:: bioconductor-rawdiag

   |downloads_bioconductor-rawdiag| |docker_bioconductor-rawdiag|

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

      mamba install bioconductor-rawdiag

   and update with::

      mamba update bioconductor-rawdiag

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rawdiag

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rawdiag:<tag>

   (see `bioconductor-rawdiag/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rawdiag| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rawdiag.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rawdiag
   :alt:   (downloads)
.. |docker_bioconductor-rawdiag| image:: https://quay.io/repository/biocontainers/bioconductor-rawdiag/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rawdiag
.. _`bioconductor-rawdiag/tags`: https://quay.io/repository/biocontainers/bioconductor-rawdiag?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rawdiag";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rawdiag/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rawdiag/README.html