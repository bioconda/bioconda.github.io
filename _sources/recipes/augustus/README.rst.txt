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
      

   
   :depends bamtools: ``>=2.5.3,<3.0a0``
   :depends biopython: 
   :depends boost-cpp: 
   :depends cdbtools: 
   :depends diamond: 
   :depends gsl: ``>=2.8``
   :depends gsl: ``>=2.8,<2.9.0a0``
   :depends htslib: ``>=1.22.1,<1.23.0a0``
   :depends libamd: ``>=3.3.3,<4.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libbtf: ``>=2.3.2,<3.0a0``
   :depends libcamd: ``>=3.3.3,<4.0a0``
   :depends libcblas: ``>=3.9.0,<4.0a0``
   :depends libccolamd: ``>=3.3.4,<4.0a0``
   :depends libcholmod: ``>=5.3.1,<6.0a0``
   :depends libcolamd: ``>=3.3.4,<4.0a0``
   :depends libcxsparse: ``>=4.4.1,<5.0a0``
   :depends libgcc: ``>=13``
   :depends libklu: ``>=2.3.5,<3.0a0``
   :depends libldl: ``>=3.3.2,<4.0a0``
   :depends libparu: ``>=1.0.0,<2.0a0``
   :depends librbio: ``>=4.3.4,<5.0a0``
   :depends libspex: ``>=3.2.3,<4.0a0``
   :depends libspqr: ``>=4.3.4,<5.0a0``
   :depends libsqlite: ``>=3.50.4,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends libsuitesparseconfig: ``>=7.10.1,<8.0a0``
   :depends libumfpack: ``>=6.3.5,<7.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends lp_solve: 
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-app-cpanminus: 
   :depends perl-dbi: 
   :depends perl-file-which: 
   :depends perl-module-build: ``0.4234.*``
   :depends perl-parallel-forkmanager: 
   :depends perl-scalar-list-utils: 
   :depends perl-yaml: 
   :depends samtools: ``>=1.22.1,<2.0a0``
   :depends sqlite: 
   :depends suitesparse: ``>=7.10.1,<8.0a0``
   :depends tar: 
   :depends ucsc-fatotwobit: 
   :depends ucsc-twobitinfo: 
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

      mamba install augustus

   and update with::

      mamba update augustus

  To create a new environment, run::

      mamba create --name myenvname augustus

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/augustus:<tag>

   (see `augustus/tags`_ for valid values for ``<tag>``)


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