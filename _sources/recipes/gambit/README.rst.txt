:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gambit'
.. highlight: bash

gambit
======

.. conda:recipe:: gambit
   :replaces_section_title:
   :noindex:

   Tool for rapid taxonomic identification of microbial pathogens

   :homepage: https://github.com/jlumpe/gambit
   :documentation: https://gambit-genomics.readthedocs.io/en/latest
   
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`gambit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gambit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gambit/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pone.0277575`, biotools: :biotools:`gambit_bacterial`

   GAMBIT \(Genomic Approximation Method for Bacterial Identification and Tracking\)
   is a tool for rapid taxonomic identification of microbial pathogens. It uses an
   extremely efficient genomic distance metric along with a curated database of
   approximately 50\,000 reference genomes \(derived from NCBI RefSeq\) to identify
   unknown bacterial genomes within seconds.



.. conda:package:: gambit

   |downloads_gambit| |docker_gambit|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.5.1-0``,  ``0.5.0-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends attrs: ``>=20``
   :depends biopython: ``>=1.79``
   :depends cattrs: ``>=23.2``
   :depends click: ``>=7.0``
   :depends h5py: ``>=3.0``
   :depends libgcc: ``>=13``
   :depends numpy: ``>=1.13,<2``
   :depends python: ``>=3.12,<3.13.0a0``
   :depends python_abi: ``3.12.* *_cp312``
   :depends scipy: ``>=1.7``
   :depends sqlalchemy: ``>=1.4``
   :depends typing-extensions: ``>=4``
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

      mamba install gambit

   and update with::

      mamba update gambit

  To create a new environment, run::

      mamba create --name myenvname gambit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gambit:<tag>

   (see `gambit/tags`_ for valid values for ``<tag>``)


.. |downloads_gambit| image:: https://img.shields.io/conda/dn/bioconda/gambit.svg?style=flat
   :target: https://anaconda.org/bioconda/gambit
   :alt:   (downloads)
.. |docker_gambit| image:: https://quay.io/repository/biocontainers/gambit/status
   :target: https://quay.io/repository/biocontainers/gambit
.. _`gambit/tags`: https://quay.io/repository/biocontainers/gambit?tab=tags


.. raw:: html

    <script>
        var package = "gambit";
        var versions = ["1.1.0","1.0.1","1.0.1","1.0.0","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gambit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gambit/README.html