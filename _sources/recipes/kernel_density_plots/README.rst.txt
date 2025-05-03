:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kernel_density_plots'
.. highlight: bash

kernel_density_plots
====================

.. conda:recipe:: kernel_density_plots
   :replaces_section_title:
   :noindex:

   Python tool for generating SNP density and closest neighbor plots from aligned SNP FASTA files.

   :homepage: https://github.com/kapurlab/kernel_density_plots
   :license: GPL3
   :recipe: /`kernel_density_plots <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kernel_density_plots>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kernel_density_plots/meta.yaml>`_

   Python implementation of the Kernel Density Plot Tool that generates 
   SNP density and closest neighbor plots from aligned SNP FASTA files.



.. conda:package:: kernel_density_plots

   |downloads_kernel_density_plots| |docker_kernel_density_plots|

   :versions:
      
      

      ``0.1-0``

      

   
   :depends biopython: ``>=1.81``
   :depends matplotlib-base: ``>=3.7``
   :depends numpy: ``>=1.24``
   :depends pandas: ``>=2.0``
   :depends python: ``>=3.9``
   :depends scipy: ``>=1.10``
   :depends seaborn: ``>=0.12``
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

      mamba install kernel_density_plots

   and update with::

      mamba update kernel_density_plots

  To create a new environment, run::

      mamba create --name myenvname kernel_density_plots

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kernel_density_plots:<tag>

   (see `kernel_density_plots/tags`_ for valid values for ``<tag>``)


.. |downloads_kernel_density_plots| image:: https://img.shields.io/conda/dn/bioconda/kernel_density_plots.svg?style=flat
   :target: https://anaconda.org/bioconda/kernel_density_plots
   :alt:   (downloads)
.. |docker_kernel_density_plots| image:: https://quay.io/repository/biocontainers/kernel_density_plots/status
   :target: https://quay.io/repository/biocontainers/kernel_density_plots
.. _`kernel_density_plots/tags`: https://quay.io/repository/biocontainers/kernel_density_plots?tab=tags


.. raw:: html

    <script>
        var package = "kernel_density_plots";
        var versions = ["0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kernel_density_plots/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kernel_density_plots/README.html