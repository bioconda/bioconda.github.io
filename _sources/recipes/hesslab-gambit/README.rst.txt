:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hesslab-gambit'
.. highlight: bash

hesslab-gambit
==============

.. conda:recipe:: hesslab-gambit
   :replaces_section_title:
   :noindex:

   IMPORTANT\: This recipe is out of date. Use \"gambit\" instead\: http\:\/\/bioconda.github.io\/recipes\/gambit\/README.html

   :homepage: https://github.com/jlumpe/gambit
   :documentation: https://gambit-genomics.readthedocs.io/en/latest
   
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`hesslab-gambit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hesslab-gambit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hesslab-gambit/meta.yaml>`_

   GAMBIT \(Genomic Approximation Method for Bacterial Identification and Tracking\)
   is a tool for rapid taxonomic identification of microbial pathogens. It uses an
   extremely efficient genomic distance metric along with a curated database of
   approximately 50\,000 reference genomes \(derived from NCBI RefSeq\) to identify
   unknown bacterial genomes within seconds.



.. conda:package:: hesslab-gambit

   |downloads_hesslab-gambit| |docker_hesslab-gambit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.1-1</code>,  <code>0.5.1-0</code>,  <code>0.5.0-2</code>,  <code>0.5.0-1</code>,  <code>0.5.0-0</code>,  <code>0.4.0-1</code>,  <code>0.4.0-0</code>,  <code>0.3.0-2</code>,  <code>0.3.0-1</code>,  </span></summary>
      

      ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.2-0``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends alembic: ``<2.0``
   :depends attrs: ``>=20``
   :depends biopython: ``>=1.69``
   :depends cattrs: ``>=1.0``
   :depends click: ``>=7.0``
   :depends h5py: ``>=3.0``
   :depends libgcc: ``>=13``
   :depends numpy: ``<2``
   :depends numpy: ``>=1.26.4,<2.0a0``
   :depends pytest: 
   :depends python: ``>=3.9,<3.10.0a0``
   :depends python_abi: ``3.9.* *_cp39``
   :depends setuptools: 
   :depends sqlalchemy: ``<2.0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install hesslab-gambit

   and update with::

      mamba update hesslab-gambit

  To create a new environment, run::

      mamba create --name myenvname hesslab-gambit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hesslab-gambit:<tag>

   (see `hesslab-gambit/tags`_ for valid values for ``<tag>``)


.. |downloads_hesslab-gambit| image:: https://img.shields.io/conda/dn/bioconda/hesslab-gambit.svg?style=flat
   :target: https://anaconda.org/bioconda/hesslab-gambit
   :alt:   (downloads)
.. |docker_hesslab-gambit| image:: https://quay.io/repository/biocontainers/hesslab-gambit/status
   :target: https://quay.io/repository/biocontainers/hesslab-gambit
.. _`hesslab-gambit/tags`: https://quay.io/repository/biocontainers/hesslab-gambit?tab=tags


.. raw:: html

    <script>
        var package = "hesslab-gambit";
        var versions = ["0.5.1","0.5.1","0.5.0","0.5.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hesslab-gambit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hesslab-gambit/README.html