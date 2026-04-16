:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'augustus'
.. highlight: bash

augustus
========

.. conda:recipe:: augustus
   :replaces_section_title:
   :noindex:

   \"AUGUSTUS is a gene prediction program for eukaryotes written by Mario
   Stanke and Oliver Keller. It can be used as an ab initio program\, which means
   it bases its prediction purely on the sequence. AUGUSTUS may also incorporate
   hints on the gene structure coming from extrinsic sources such as EST\, MS\/MS\,
   protein alignments and synthenic genomic alignments.\"


   :homepage: https://bioinf.uni-greifswald.de/augustus
   :documentation: https://github.com/Gaius-Augustus/Augustus/blob/v3.5.0/docs/RUNNING-AUGUSTUS.md
   
   :developer docs: https://github.com/Gaius-Augustus/Augustus
   :license: Other / Artistic License
   :recipe: /`augustus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/augustus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/augustus/meta.yaml>`_
   :links: biotools: :biotools:`augustus`, usegalaxy-eu: :usegalaxy-eu:`augustus`, usegalaxy-eu: :usegalaxy-eu:`augustus_training`, doi: :doi:`10.1093/bioinformatics/btr010`, usegalaxy-eu: :usegalaxy-eu:`augustus`, usegalaxy-eu: :usegalaxy-eu:`augustus_training`

   


.. conda:package:: augustus

   |downloads_augustus| |docker_augustus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.5.0-9</code>,  <code>3.5.0-8</code>,  <code>3.5.0-7</code>,  <code>3.5.0-5</code>,  <code>3.5.0-4</code>,  <code>3.5.0-3</code>,  <code>3.5.0-2</code>,  <code>3.5.0-1</code>,  <code>3.5.0-0</code>,  </span></summary>
      

      ``3.5.0-9``,  ``3.5.0-8``,  ``3.5.0-7``,  ``3.5.0-5``,  ``3.5.0-4``,  ``3.5.0-3``,  ``3.5.0-2``,  ``3.5.0-1``,  ``3.5.0-0``,  ``3.4.0-8``,  ``3.4.0-7``,  ``3.4.0-6``,  ``3.4.0-5``,  ``3.4.0-4``,  ``3.4.0-3``,  ``3.4.0-2``,  ``3.4.0-1``,  ``3.4.0-0``,  ``3.3.3-13``,  ``3.3.3-12``,  ``3.3.3-11``,  ``3.3.3-10``,  ``3.3.3-9``,  ``3.3.3-8``,  ``3.3.3-7``,  ``3.3.3-6``,  ``3.3.3-5``,  ``3.3.3-4``,  ``3.3.3-3``,  ``3.3.3-2``,  ``3.3.3-1``,  ``3.3.3-0``,  ``3.3.2-2``,  ``3.3.2-1``,  ``3.3.2-0``,  ``3.3-5``,  ``3.3-4``,  ``3.3-2``,  ``3.3-1``,  ``3.3-0``,  ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-2``,  ``3.2.3-1``,  ``3.2.3-0``,  ``3.2.2-3``,  ``3.2.2-2``,  ``3.2.2-1``,  ``3.2.2-0``,  ``3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bamtools: ``>=2.5.3,<3.0a0``
   :depends on biopython: 
   :depends on boost-cpp: 
   :depends on cdbtools: 
   :depends on diamond: 
   :depends on gsl: ``>=2.8``
   :depends on gsl: ``>=2.8,<2.9.0a0``
   :depends on htslib: ``>=1.22.1,<1.23.0a0``
   :depends on libamd: ``>=3.3.3,<4.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libbtf: ``>=2.3.2,<3.0a0``
   :depends on libcamd: ``>=3.3.3,<4.0a0``
   :depends on libcblas: ``>=3.9.0,<4.0a0``
   :depends on libccolamd: ``>=3.3.4,<4.0a0``
   :depends on libcholmod: ``>=5.3.1,<6.0a0``
   :depends on libcolamd: ``>=3.3.4,<4.0a0``
   :depends on libcxsparse: ``>=4.4.1,<5.0a0``
   :depends on libgcc: ``>=13``
   :depends on libklu: ``>=2.3.5,<3.0a0``
   :depends on libldl: ``>=3.3.2,<4.0a0``
   :depends on libparu: ``>=1.0.0,<2.0a0``
   :depends on librbio: ``>=4.3.4,<5.0a0``
   :depends on libspex: ``>=3.2.3,<4.0a0``
   :depends on libspqr: ``>=4.3.4,<5.0a0``
   :depends on libsqlite: ``>=3.50.4,<4.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libsuitesparseconfig: ``>=7.10.1,<8.0a0``
   :depends on libumfpack: ``>=6.3.5,<7.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on lp_solve: 
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-app-cpanminus: 
   :depends on perl-dbi: 
   :depends on perl-file-which: 
   :depends on perl-module-build: ``0.4234.*``
   :depends on perl-parallel-forkmanager: 
   :depends on perl-scalar-list-utils: 
   :depends on perl-yaml: 
   :depends on samtools: ``>=1.22.1,<2.0a0``
   :depends on sqlite: 
   :depends on suitesparse: ``>=7.10.1,<8.0a0``
   :depends on tar: 
   :depends on ucsc-fatotwobit: 
   :depends on ucsc-twobitinfo: 

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

    pixi global install augustus

to add into an existing workspace instead, run::

    pixi add augustus

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install augustus

Alternatively, to install into a new environment, run::

    conda create -n envname augustus

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/augustus:<tag>

(see `augustus/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_augustus| image:: https://img.shields.io/conda/dn/bioconda/augustus.svg?style=flat
   :target: https://anaconda.org/bioconda/augustus
   :alt:   (downloads)
.. |docker_augustus| image:: https://quay.io/repository/biocontainers/augustus/status
   :target: https://quay.io/repository/biocontainers/augustus
.. _`augustus/tags`: https://quay.io/repository/biocontainers/augustus?tab=tags


.. raw:: html

    <script>
        var package = "augustus";
        var versions = ["3.5.0","3.5.0","3.5.0","3.5.0","3.5.0"];
    </script>





Notes
-----
Builds with sqlite support are currently only available on Linux due to compile issues with macOS.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/augustus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/augustus/README.html