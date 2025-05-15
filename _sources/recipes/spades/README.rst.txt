:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spades'
.. highlight: bash

spades
======

.. conda:recipe:: spades
   :replaces_section_title:
   :noindex:

   SPAdes \(St. Petersburg genome assembler\) is intended for both standard isolates and single\-cell MDA bacteria assemblies.

   :homepage: https://github.com/ablab/spades
   :documentation: https://ablab.github.io/spades
   
   :license: GPL / GPL-2.0-only
   :recipe: /`spades <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spades>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spades/meta.yaml>`_
   :links: biotools: :biotools:`spades`, usegalaxy-eu: :usegalaxy-eu:`spades`, doi: :doi:`10.1089/cmb.2012.0021`, doi: :doi:`10.1101/gr.213959.116`, doi: :doi:`10.1093/gigascience/giz100`, doi: :doi:`10.1093/bioinformatics/btz349`

   SPAdes \(St. Petersburg genome assembler\) is a genome assembly algorithm which was designed for
   single cell and multi\-cells bacterial data sets. However\, it might not be suitable for large
   genomes projects.

   SPAdes works with Ion Torrent\, PacBio\, Oxford Nanopore\, and Illumina paired\-end\, mate\-pairs and
   single reads.



.. conda:package:: spades

   |downloads_spades| |docker_spades|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.2.0-1</code>,  <code>4.2.0-0</code>,  <code>4.1.0-0</code>,  <code>4.0.0-4</code>,  <code>4.0.0-3</code>,  <code>4.0.0-2</code>,  <code>4.0.0-1</code>,  <code>4.0.0-0</code>,  <code>3.15.5-3</code>,  </span></summary>
      

      ``4.2.0-1``,  ``4.2.0-0``,  ``4.1.0-0``,  ``4.0.0-4``,  ``4.0.0-3``,  ``4.0.0-2``,  ``4.0.0-1``,  ``4.0.0-0``,  ``3.15.5-3``,  ``3.15.5-2``,  ``3.15.5-1``,  ``3.15.5-0``,  ``3.15.4-0``,  ``3.15.3-1``,  ``3.15.3-0``,  ``3.15.2-1``,  ``3.15.2-0``,  ``3.15.0-0``,  ``3.14.1-2``,  ``3.14.1-1``,  ``3.14.1-0``,  ``3.14.0-0``,  ``3.13.2-0``,  ``3.13.1-2``,  ``3.13.1-1``,  ``3.13.1-0``,  ``3.13.0-0``,  ``3.12.0-3``,  ``3.12.0-2``,  ``3.12.0-1``,  ``3.12.0-0``,  ``3.11.1-5``,  ``3.11.1-4``,  ``3.11.1-3``,  ``3.11.1-2``,  ``3.11.1-1``,  ``3.11.1-0``,  ``3.11.0-1``,  ``3.11.0-0``,  ``3.10.1-1``,  ``3.10.1-0``,  ``3.10.0-0``,  ``3.9.1-1``,  ``3.9.1-0``,  ``3.9.0-4``,  ``3.9.0-3``,  ``3.9.0-2``,  ``3.9.0-1``,  ``3.9.0-0``,  ``3.8.1-0``,  ``3.8.0-0``,  ``3.7.0-0``,  ``3.6.2-0``,  ``3.5.0-1``,  ``3.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc: ``>=13``
   :depends libgomp: 
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends openmpi: ``>=4.1.6,<5.0a0``
   :depends python: ``>=3.8``
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

      mamba install spades

   and update with::

      mamba update spades

  To create a new environment, run::

      mamba create --name myenvname spades

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spades:<tag>

   (see `spades/tags`_ for valid values for ``<tag>``)


.. |downloads_spades| image:: https://img.shields.io/conda/dn/bioconda/spades.svg?style=flat
   :target: https://anaconda.org/bioconda/spades
   :alt:   (downloads)
.. |docker_spades| image:: https://quay.io/repository/biocontainers/spades/status
   :target: https://quay.io/repository/biocontainers/spades
.. _`spades/tags`: https://quay.io/repository/biocontainers/spades?tab=tags


.. raw:: html

    <script>
        var package = "spades";
        var versions = ["4.2.0","4.2.0","4.1.0","4.0.0","4.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spades/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spades/README.html