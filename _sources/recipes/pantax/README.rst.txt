:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pantax'
.. highlight: bash

pantax
======

.. conda:recipe:: pantax
   :replaces_section_title:
   :noindex:

   Strain\-level metagenomic profiling using pangenome graphs with PanTax

   :homepage: https://github.com/LuoGroup2023/PanTax
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pantax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pantax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pantax/meta.yaml>`_

   


.. conda:package:: pantax

   |downloads_pantax| |docker_pantax|

   :versions:
      
      

      ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.2.0-0``,  ``1.0.2-0``

      

   
   :depends bcftools: ``>=1.19``
   :depends glpk: ``>=5.0,<6.0a0``
   :depends graphaligner: ``>=1.0.17``
   :depends hdf5: ``1.10.5.*``
   :depends htslib: ``>=1.19.1``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends networkx: ``>=3.2.1``
   :depends numpy: ``>=1.26.3``
   :depends pandas: ``>=2.2.0``
   :depends pggb: ``0.6.0.*``
   :depends pyarrow: ``>=14.0.2``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends r-base: ``>=4.2``
   :depends samtools: ``>=1.19.2``
   :depends sylph: ``>=0.6.1``
   :depends tqdm: 
   :depends vg: ``>=1.59``
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

      mamba install pantax

   and update with::

      mamba update pantax

  To create a new environment, run::

      mamba create --name myenvname pantax

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pantax:<tag>

   (see `pantax/tags`_ for valid values for ``<tag>``)


.. |downloads_pantax| image:: https://img.shields.io/conda/dn/bioconda/pantax.svg?style=flat
   :target: https://anaconda.org/bioconda/pantax
   :alt:   (downloads)
.. |docker_pantax| image:: https://quay.io/repository/biocontainers/pantax/status
   :target: https://quay.io/repository/biocontainers/pantax
.. _`pantax/tags`: https://quay.io/repository/biocontainers/pantax?tab=tags


.. raw:: html

    <script>
        var package = "pantax";
        var versions = ["2.0.1","2.0.1","2.0.0","1.2.0","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pantax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pantax/README.html