:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blast'
.. highlight: bash

blast
=====

.. conda:recipe:: blast
   :replaces_section_title:
   :noindex:

   BLAST\+ is a new suite of BLAST tools that utilizes the NCBI C\+\+ Toolkit.

   :homepage: https://blast.ncbi.nlm.nih.gov/doc/blast-help/
   :license: NCBI-PD
   :recipe: /`blast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blast/meta.yaml>`_
   :links: biotools: :biotools:`blast`, doi: :doi:`10.1016/S0022-2836(05)80360-2`, usegalaxy-eu: :usegalaxy-eu:`ncbi_blastx_wrapper`

   BLAST Command Line Applications.

   The NCBI Basic Local Alignment Search Tool \(BLAST\) finds regions of
   local similarity between sequences. The program compares nucleotide or
   protein sequences to sequence databases and calculates the statistical
   significance of matches. BLAST can be used to infer functional and
   evolutionary relationships between sequences as well as help identify
   members of gene families.

   For more information\, visit https\:\/\/blast.ncbi.nlm.nih.gov



.. conda:package:: blast

   |downloads_blast| |docker_blast|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.16.0-5</code>,  <code>2.16.0-4</code>,  <code>2.16.0-3</code>,  <code>2.16.0-2</code>,  <code>2.16.0-1</code>,  <code>2.16.0-0</code>,  <code>2.15.0-1</code>,  <code>2.15.0-0</code>,  <code>2.14.1-0</code>,  </span></summary>
      

      ``2.16.0-5``,  ``2.16.0-4``,  ``2.16.0-3``,  ``2.16.0-2``,  ``2.16.0-1``,  ``2.16.0-0``,  ``2.15.0-1``,  ``2.15.0-0``,  ``2.14.1-0``,  ``2.14.0-2``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.13.0-1``,  ``2.13.0-0``,  ``2.12.0-4``,  ``2.12.0-3``,  ``2.12.0-2``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.11.0-1``,  ``2.11.0-0``,  ``2.10.1-3``,  ``2.10.1-2``,  ``2.10.1-1``,  ``2.10.1-0``,  ``2.9.0-7``,  ``2.9.0-6``,  ``2.9.0-5``,  ``2.9.0-4``,  ``2.9.0-3``,  ``2.9.0-2``,  ``2.9.0-1``,  ``2.9.0-0``,  ``2.7.1-6``,  ``2.7.1-5``,  ``2.7.1-3``,  ``2.7.1-2``,  ``2.7.1-1``,  ``2.6.0-2``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.5.0-3``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.2.31-5``,  ``2.2.31-4``,  ``2.2.31-3``,  ``2.2.31-2``,  ``2.2.31-1``,  ``2.2.21-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends curl: 
   :depends entrez-direct: ``>=22.4,<23.0a0``
   :depends libgcc: ``>=13``
   :depends libsqlite: ``>=3.49.1,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends ncbi-vdb: ``>=3.2.1,<4.0a0``
   :depends perl: 
   :depends perl-archive-tar: 
   :depends perl-json: 
   :depends perl-list-moreutils: 
   :depends rpsbproc: 
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

      mamba install blast

   and update with::

      mamba update blast

  To create a new environment, run::

      mamba create --name myenvname blast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/blast:<tag>

   (see `blast/tags`_ for valid values for ``<tag>``)


.. |downloads_blast| image:: https://img.shields.io/conda/dn/bioconda/blast.svg?style=flat
   :target: https://anaconda.org/bioconda/blast
   :alt:   (downloads)
.. |docker_blast| image:: https://quay.io/repository/biocontainers/blast/status
   :target: https://quay.io/repository/biocontainers/blast
.. _`blast/tags`: https://quay.io/repository/biocontainers/blast?tab=tags


.. raw:: html

    <script>
        var package = "blast";
        var versions = ["2.16.0","2.16.0","2.16.0","2.16.0","2.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blast/README.html