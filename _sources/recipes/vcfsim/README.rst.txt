:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcfsim'
.. highlight: bash

vcfsim
======

.. conda:recipe:: vcfsim
   :replaces_section_title:
   :noindex:

   Script for generating simulated VCF\'s leveraging a coalescent simulating backend.

   :homepage: https://github.com/Pie115/VCFSimulator-SamukLab
   :license: MIT
   :recipe: /`vcfsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcfsim/meta.yaml>`_

   \"VCFSim is a new command\-line tool for generating simulated VCF\'s\(variant call format files for encoding genetic data\). Leveraging a coalescent simulating backend and providing an interface from Msprime coalescent simulating package to pandas. VCF\'s can now be easily simulated with just a few command line arguments\!\"



.. conda:package:: vcfsim

   |downloads_vcfsim| |docker_vcfsim|

   :versions:
      
      

      ``1.0.12.alpha-0``,  ``1.0.11.alpha-0``,  ``1.0.10.alpha-0``,  ``1.0.9.alpha-0``,  ``1.0.8.alpha-0``

      

   
   :depends ipython: 
   :depends msprime: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.6``
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

      mamba install vcfsim

   and update with::

      mamba update vcfsim

  To create a new environment, run::

      mamba create --name myenvname vcfsim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/vcfsim:<tag>

   (see `vcfsim/tags`_ for valid values for ``<tag>``)


.. |downloads_vcfsim| image:: https://img.shields.io/conda/dn/bioconda/vcfsim.svg?style=flat
   :target: https://anaconda.org/bioconda/vcfsim
   :alt:   (downloads)
.. |docker_vcfsim| image:: https://quay.io/repository/biocontainers/vcfsim/status
   :target: https://quay.io/repository/biocontainers/vcfsim
.. _`vcfsim/tags`: https://quay.io/repository/biocontainers/vcfsim?tab=tags


.. raw:: html

    <script>
        var package = "vcfsim";
        var versions = ["1.0.12.alpha","1.0.11.alpha","1.0.10.alpha","1.0.9.alpha","1.0.8.alpha"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcfsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcfsim/README.html