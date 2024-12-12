:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-buencolors'
.. highlight: bash

r-buencolors
============

.. conda:recipe:: r-buencolors
   :replaces_section_title:
   :noindex:

   R utility package for color mapping and plot aesthetics.

   :homepage: https://github.com/caleblareau/BuenColors
   :license: MIT / MIT
   :recipe: /`r-buencolors <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-buencolors>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-buencolors/meta.yaml>`_

   


.. conda:package:: r-buencolors

   |downloads_r-buencolors| |docker_r-buencolors|

   :versions:
      
      

      ``0.5.6-1``,  ``0.5.6-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-mass: 
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

      mamba install r-buencolors

   and update with::

      mamba update r-buencolors

  To create a new environment, run::

      mamba create --name myenvname r-buencolors

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-buencolors:<tag>

   (see `r-buencolors/tags`_ for valid values for ``<tag>``)


.. |downloads_r-buencolors| image:: https://img.shields.io/conda/dn/bioconda/r-buencolors.svg?style=flat
   :target: https://anaconda.org/bioconda/r-buencolors
   :alt:   (downloads)
.. |docker_r-buencolors| image:: https://quay.io/repository/biocontainers/r-buencolors/status
   :target: https://quay.io/repository/biocontainers/r-buencolors
.. _`r-buencolors/tags`: https://quay.io/repository/biocontainers/r-buencolors?tab=tags


.. raw:: html

    <script>
        var package = "r-buencolors";
        var versions = ["0.5.6","0.5.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-buencolors/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-buencolors/README.html