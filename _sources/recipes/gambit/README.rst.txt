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
      
      

      ``1.1.0-3``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.5.1-0``,  ``0.5.0-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on attrs: ``>=20``
   :depends on biopython: ``>=1.79``
   :depends on cattrs: ``>=23.2``
   :depends on click: ``>=7.0,<8.2.0``
   :depends on h5py: ``>=3.0``
   :depends on libgcc: ``>=14``
   :depends on numpy: ``>=1.13,<2``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scipy: ``>=1.7``
   :depends on sqlalchemy: ``>=1.4``
   :depends on typing-extensions: ``>=4``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install gambit

to add into an existing workspace instead, run::

    pixi add gambit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gambit

Alternatively, to install into a new environment, run::

    conda create -n envname gambit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gambit:<tag>

(see `gambit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gambit| image:: https://img.shields.io/conda/dn/bioconda/gambit.svg?style=flat
   :target: https://anaconda.org/bioconda/gambit
   :alt:   (downloads)
.. |docker_gambit| image:: https://quay.io/repository/biocontainers/gambit/status
   :target: https://quay.io/repository/biocontainers/gambit
.. _`gambit/tags`: https://quay.io/repository/biocontainers/gambit?tab=tags


.. raw:: html

    <script>
        var package = "gambit";
        var versions = ["1.1.0","1.1.0","1.1.0","1.1.0","1.0.1"];
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