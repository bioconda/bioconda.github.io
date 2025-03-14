:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rabbitsketch'
.. highlight: bash

rabbitsketch
============

.. conda:recipe:: rabbitsketch
   :replaces_section_title:
   :noindex:

   RabbitSketch is a highly optimized sketching library that exploits the power of modern multi\-core CPUs.

   :homepage: https://github.com/RabbitBio/RabbitSketch
   :license: GPL-3.0-or-later
   :recipe: /`rabbitsketch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rabbitsketch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rabbitsketch/meta.yaml>`_

   


.. conda:package:: rabbitsketch

   |downloads_rabbitsketch| |docker_rabbitsketch|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libxcrypt: ``>=4.4.36``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends python: ``>=3.9,<3.10.0a0``
   :depends python_abi: ``3.9.* *_cp39``
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

      mamba install rabbitsketch

   and update with::

      mamba update rabbitsketch

  To create a new environment, run::

      mamba create --name myenvname rabbitsketch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rabbitsketch:<tag>

   (see `rabbitsketch/tags`_ for valid values for ``<tag>``)


.. |downloads_rabbitsketch| image:: https://img.shields.io/conda/dn/bioconda/rabbitsketch.svg?style=flat
   :target: https://anaconda.org/bioconda/rabbitsketch
   :alt:   (downloads)
.. |docker_rabbitsketch| image:: https://quay.io/repository/biocontainers/rabbitsketch/status
   :target: https://quay.io/repository/biocontainers/rabbitsketch
.. _`rabbitsketch/tags`: https://quay.io/repository/biocontainers/rabbitsketch?tab=tags


.. raw:: html

    <script>
        var package = "rabbitsketch";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rabbitsketch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rabbitsketch/README.html