:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'roadies'
.. highlight: bash

roadies
=======

.. conda:recipe:: roadies
   :replaces_section_title:
   :noindex:

   Reference\-free Orthology\-free Alignment\-free DIscordance aware Estimation of Species tree \(ROADIES\).

   :homepage: https://github.com/TurakhiaLab/ROADIES
   :documentation: https://turakhia.ucsd.edu/ROADIES
   
   :license: MIT / MIT
   :recipe: /`roadies <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/roadies>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/roadies/meta.yaml>`_
   :links: doi: :doi:`10.1101/2024.05.27.596098`

   ROADIES is an end\-to\-end pipeline designed for phylogenetic tree inference of the species directly from their raw genomic assemblies. ROADIES offers a fully automated\, easy\-to\-use\, scalable solution\, eliminating any error\-prone manual steps and providing unique flexibility in adjusting the tradeoff between accuracy and runtime.



.. conda:package:: roadies

   |downloads_roadies| |docker_roadies|

   :versions:
      
      

      ``0.1.10-0``,  ``0.1.8-0``,  ``0.1.4-0``

      

   
   :depends alive-progress: 
   :depends aster: ``>=1.19``
   :depends biopython: 
   :depends boost-cpp: 
   :depends ete3: 
   :depends fasttree: ``>=2.1.11``
   :depends lastz: ``>=1.04.52``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends mash: ``>=2``
   :depends mashtree: ``1.4.6``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pasta: ``>=1.9.0``
   :depends perl: ``>=5.22``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-bioperl: ``>=1.7.2``
   :depends perl-module-build: ``0.4234.*``
   :depends python: ``>=3.9,<3.10.0a0``
   :depends python_abi: ``3.9.* *_cp39``
   :depends pyyaml: 
   :depends quicktree: 
   :depends raxml-ng: 
   :depends seaborn-base: 
   :depends snakemake-minimal: 
   :depends treeswift: ``>=1.1.28``
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

      mamba install roadies

   and update with::

      mamba update roadies

  To create a new environment, run::

      mamba create --name myenvname roadies

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/roadies:<tag>

   (see `roadies/tags`_ for valid values for ``<tag>``)


.. |downloads_roadies| image:: https://img.shields.io/conda/dn/bioconda/roadies.svg?style=flat
   :target: https://anaconda.org/bioconda/roadies
   :alt:   (downloads)
.. |docker_roadies| image:: https://quay.io/repository/biocontainers/roadies/status
   :target: https://quay.io/repository/biocontainers/roadies
.. _`roadies/tags`: https://quay.io/repository/biocontainers/roadies?tab=tags


.. raw:: html

    <script>
        var package = "roadies";
        var versions = ["0.1.10","0.1.8","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/roadies/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/roadies/README.html