:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'robust-bias-aware'
.. highlight: bash

robust-bias-aware
=================

.. conda:recipe:: robust-bias-aware
   :replaces_section_title:
   :noindex:

   Robust bias aware.

   :homepage: https://github.com/bionetslab/robust_bias_aware_pip_package
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`robust-bias-aware <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/robust-bias-aware>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/robust-bias-aware/meta.yaml>`_

   


.. conda:package:: robust-bias-aware

   |downloads_robust-bias-aware| |docker_robust-bias-aware|

   :versions:
      
      

      

      

   
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

      mamba install robust-bias-aware

   and update with::

      mamba update robust-bias-aware

  To create a new environment, run::

      mamba create --name myenvname robust-bias-aware

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/robust-bias-aware:<tag>

   (see `robust-bias-aware/tags`_ for valid values for ``<tag>``)


.. |downloads_robust-bias-aware| image:: https://img.shields.io/conda/dn/bioconda/robust-bias-aware.svg?style=flat
   :target: https://anaconda.org/bioconda/robust-bias-aware
   :alt:   (downloads)
.. |docker_robust-bias-aware| image:: https://quay.io/repository/biocontainers/robust-bias-aware/status
   :target: https://quay.io/repository/biocontainers/robust-bias-aware
.. _`robust-bias-aware/tags`: https://quay.io/repository/biocontainers/robust-bias-aware?tab=tags


.. raw:: html

    <script>
        var package = "robust-bias-aware";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/robust-bias-aware/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/robust-bias-aware/README.html