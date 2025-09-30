:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'stacks'
.. highlight: bash

stacks
======

.. conda:recipe:: stacks
   :replaces_section_title:
   :noindex:

   Stacks is a software pipeline for building loci from short\-read sequences.

   :homepage: https://catchenlab.life.illinois.edu/stacks
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`stacks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stacks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/stacks/meta.yaml>`_
   :links: biotools: :biotools:`stacks`, usegalaxy-eu: :usegalaxy-eu:`stacks2_shortreads`, usegalaxy-eu: :usegalaxy-eu:`stacks2_kmerfilter`, usegalaxy-eu: :usegalaxy-eu:`stacks2_clonefilter`, usegalaxy-eu: :usegalaxy-eu:`stacks2_tsv2bam`, usegalaxy-eu: :usegalaxy-eu:`stacks2_refmap`, usegalaxy-eu: :usegalaxy-eu:`stacks2_denovomap`, usegalaxy-eu: :usegalaxy-eu:`stacks2_procrad`, usegalaxy-eu: :usegalaxy-eu:`stacks2_populations`, usegalaxy-eu: :usegalaxy-eu:`stacks2_gstacks`, usegalaxy-eu: :usegalaxy-eu:`stacks2_sstacks`, usegalaxy-eu: :usegalaxy-eu:`stacks2_cstacks`, usegalaxy-eu: :usegalaxy-eu:`stacks2_ustacks`, doi: :doi:`10.1111/mec.12354`

   


.. conda:package:: stacks

   |downloads_stacks| |docker_stacks|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.68-3</code>,  <code>2.68-2</code>,  <code>2.68-1</code>,  <code>2.68-0</code>,  <code>2.65-1</code>,  <code>2.65-0</code>,  <code>2.64-0</code>,  <code>2.61-1</code>,  <code>2.61-0</code>,  </span></summary>
      

      ``2.68-3``,  ``2.68-2``,  ``2.68-1``,  ``2.68-0``,  ``2.65-1``,  ``2.65-0``,  ``2.64-0``,  ``2.61-1``,  ``2.61-0``,  ``2.60-1``,  ``2.60-0``,  ``2.55-1``,  ``2.55-0``,  ``2.53-1``,  ``2.53-0``,  ``2.52-0``,  ``2.5-0``,  ``2.4-1``,  ``2.4-0``,  ``2.3-6``,  ``2.3-5``,  ``2.3-4``,  ``2.3-3``,  ``2.3d-1``,  ``2.3d-0``,  ``2.3c-3``,  ``2.3c-2``,  ``2.3c-1``,  ``2.3c-0``,  ``2.3b-3``,  ``2.3b-2``,  ``2.3b-1``,  ``2.3b-0``,  ``2.2-6``,  ``2.2-5``,  ``2.2-4``,  ``2.2-3``,  ``2.2-2``,  ``2.2-1``,  ``2.2-0``,  ``2.1-5``,  ``2.1-4``,  ``2.1-3``,  ``2.1-2``,  ``2.1-1``,  ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``,  ``2.0Beta10a-0``,  ``2.0Beta9-0``,  ``2.0Beta8-1``,  ``2.0Beta8-0``,  ``2.0Beta8c-1``,  ``2.0Beta8c-0``,  ``2.0Beta7c-0``,  ``1.48-2``,  ``1.48-1``,  ``1.48-0``,  ``1.47-2``,  ``1.47-1``,  ``1.47-0``,  ``1.46-4``,  ``1.46-3``,  ``1.46-2``,  ``1.46-1``,  ``1.46-0``,  ``1.44-3``,  ``1.44-2``,  ``1.44-1``,  ``1.44-0``,  ``1.43-2``,  ``1.43-1``,  ``1.43-0``,  ``1.42-5``,  ``1.42-4``,  ``1.42-3``,  ``1.42-2``,  ``1.42-1``,  ``1.40-3``,  ``1.40-2``,  ``1.40-1``,  ``1.40-0``,  ``1.37-5``,  ``1.37-4``,  ``1.37-3``,  ``1.37-2``,  ``1.37-1``,  ``1.37-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends perl: 
   :depends perl-bioperl-core: 
   :depends perl-file-spec: 
   :depends perl-file-temp: 
   :depends perl-posix: 
   :depends python: 
   :depends r-base: ``>=4``
   :depends samtools: 
   :depends velvet: 
   :depends zlib: 
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

      mamba install stacks

   and update with::

      mamba update stacks

  To create a new environment, run::

      mamba create --name myenvname stacks

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/stacks:<tag>

   (see `stacks/tags`_ for valid values for ``<tag>``)


.. |downloads_stacks| image:: https://img.shields.io/conda/dn/bioconda/stacks.svg?style=flat
   :target: https://anaconda.org/bioconda/stacks
   :alt:   (downloads)
.. |docker_stacks| image:: https://quay.io/repository/biocontainers/stacks/status
   :target: https://quay.io/repository/biocontainers/stacks
.. _`stacks/tags`: https://quay.io/repository/biocontainers/stacks?tab=tags


.. raw:: html

    <script>
        var package = "stacks";
        var versions = ["2.68","2.68","2.68","2.68","2.65"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/stacks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/stacks/README.html