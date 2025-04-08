:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hisat-3n'
.. highlight: bash

hisat-3n
========

.. conda:recipe:: hisat-3n
   :replaces_section_title:
   :noindex:

   Graph\-based alignment of next generation sequencing reads to a population of genomes.

   :homepage: https://github.com/fulcrumgenomics/hisat-3n
   :license: GPL / GPL-3.0
   :recipe: /`hisat-3n <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hisat-3n>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hisat-3n/meta.yaml>`_
   :links: biotools: :biotools:`HISAT2`, doi: :doi:`10.1038/nmeth.3317`, doi: :doi:`10.1038/s41587-019-0201-4`, usegalaxy-eu: :usegalaxy-eu:`hisat2`

   HISAT\-3N \(hierarchical indexing for spliced alignment of transcripts \- 3 nucleotides\) is designed for nucleotide conversion sequencing technologies and implemented based on HISAT2.


.. conda:package:: hisat-3n

   |downloads_hisat-3n| |docker_hisat-3n|

   :versions:
      
      

      ``0.0.3-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends perl: 
   :depends python: ``>3.5``
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

      mamba install hisat-3n

   and update with::

      mamba update hisat-3n

  To create a new environment, run::

      mamba create --name myenvname hisat-3n

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hisat-3n:<tag>

   (see `hisat-3n/tags`_ for valid values for ``<tag>``)


.. |downloads_hisat-3n| image:: https://img.shields.io/conda/dn/bioconda/hisat-3n.svg?style=flat
   :target: https://anaconda.org/bioconda/hisat-3n
   :alt:   (downloads)
.. |docker_hisat-3n| image:: https://quay.io/repository/biocontainers/hisat-3n/status
   :target: https://quay.io/repository/biocontainers/hisat-3n
.. _`hisat-3n/tags`: https://quay.io/repository/biocontainers/hisat-3n?tab=tags


.. raw:: html

    <script>
        var package = "hisat-3n";
        var versions = ["0.0.3"];
    </script>





Notes
-----
Pre\-built indices for HISAT2 can be downloaded from https\:\/\/daehwankimlab.github.io\/hisat2\/download\/.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hisat-3n/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hisat-3n/README.html