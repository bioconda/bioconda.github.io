:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rrikindp'
.. highlight: bash

rrikindp
========

.. conda:recipe:: rrikindp
   :replaces_section_title:
   :noindex:

   Evaluation of thermodynamic and kinetic features of RNA\-RNA interactions.

   :homepage: https://github.com/mwaldl/RRIkinDP
   :documentation: https://doi.org/10.1101/2023.07.28.548983
   
   :license: GPL / GPL-3.0-only
   :recipe: /`rrikindp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rrikindp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rrikindp/meta.yaml>`_

   RRIkinDP evaluated thermodynamic and kinetic features of RNA\-RNA interactions. As input\, two RNA
   sequences as well as their interaction structure is provided. The tool generates the state space of
   all intermediate interactions from single base pair interactions to the full input interaction.
   On top of this state space it computes the barrier energy for the best direct path from a given
   start interaction to the full input interaction.



.. conda:package:: rrikindp

   |downloads_rrikindp| |docker_rrikindp|

   :versions:
      
      

      ``0.0.2-1``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends _openmp_mutex: ``* *_llvm``
   :depends _openmp_mutex: ``>=4.5``
   :depends boost-cpp: 
   :depends intarna: ``>=3.4.0,<3.5.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends llvm-openmp: ``>=18.1.6``
   :depends matplotlib-base: ``>=3.7.0``
   :depends pandas: ``>=2.0.0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends seaborn: ``>=0.12.0``
   :depends viennarna: ``>=2.6.0``
   :depends viennarna: ``>=2.6.4,<2.7.0a0``
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

      mamba install rrikindp

   and update with::

      mamba update rrikindp

  To create a new environment, run::

      mamba create --name myenvname rrikindp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rrikindp:<tag>

   (see `rrikindp/tags`_ for valid values for ``<tag>``)


.. |downloads_rrikindp| image:: https://img.shields.io/conda/dn/bioconda/rrikindp.svg?style=flat
   :target: https://anaconda.org/bioconda/rrikindp
   :alt:   (downloads)
.. |docker_rrikindp| image:: https://quay.io/repository/biocontainers/rrikindp/status
   :target: https://quay.io/repository/biocontainers/rrikindp
.. _`rrikindp/tags`: https://quay.io/repository/biocontainers/rrikindp?tab=tags


.. raw:: html

    <script>
        var package = "rrikindp";
        var versions = ["0.0.2","0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rrikindp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rrikindp/README.html