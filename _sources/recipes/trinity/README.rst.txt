:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trinity'
.. highlight: bash

trinity
=======

.. conda:recipe:: trinity
   :replaces_section_title:
   :noindex:

   Trinity assembles transcript sequences from Illumina RNA\-Seq data.

   :homepage: https://github.com/trinityrnaseq/trinityrnaseq/
   :documentation: https://github.com/trinityrnaseq/trinityrnaseq/wiki
   
   :license: BSD / BSD-3-Clause
   :recipe: /`trinity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trinity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trinity/meta.yaml>`_
   :links: biotools: :biotools:`trinity`, usegalaxy-eu: :usegalaxy-eu:`trinity`, doi: :doi:`10.1038/nbt.1883`, doi: :doi:`10.1038/nprot.2013.084`

   


.. conda:package:: trinity

   |downloads_trinity| |docker_trinity|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.15.1-3</code>,  <code>2.15.1-2</code>,  <code>2.15.1-1</code>,  <code>2.15.1-0</code>,  <code>2.13.2-4</code>,  <code>2.13.2-3</code>,  <code>2.13.2-2</code>,  <code>2.13.2-1</code>,  <code>2.13.2-0</code>,  </span></summary>
      

      ``2.15.1-3``,  ``2.15.1-2``,  ``2.15.1-1``,  ``2.15.1-0``,  ``2.13.2-4``,  ``2.13.2-3``,  ``2.13.2-2``,  ``2.13.2-1``,  ``2.13.2-0``,  ``2.12.0-3``,  ``2.12.0-2``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.11.0-1``,  ``2.11.0-0``,  ``2.9.1-1``,  ``2.9.1-0``,  ``2.8.5-5``,  ``2.8.5-4``,  ``2.8.5-3``,  ``2.8.5-2``,  ``2.8.5-1``,  ``2.8.5-0``,  ``2.8.4-1``,  ``2.8.4-0``,  ``2.8.3-0``,  ``2.8.2-2``,  ``2.8.2-1``,  ``2.8.2-0``,  ``2.6.6-2``,  ``2.6.6-1``,  ``2.6.6-0``,  ``2.5.1-1``,  ``2.5.1-0``,  ``2.4.0-5``,  ``2.4.0-4``,  ``2.4.0-3``,  ``2.3.2-2``,  ``2.3.2-1``,  ``2.3.2-0``,  ``2.2.0-7``,  ``2.2.0-6``,  ``2.2.0-5``,  ``2.2.0-4``,  ``2.2.0-3``,  ``2.2.0-2``,  ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.1-6``,  ``date.2011_11_26-8``,  ``date.2011_11_26-7``,  ``date.2011_11_26-6``,  ``date.2011_11_26-5``,  ``date.2011_11_26-4``,  ``date.2011_11_26-3``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bioconductor-ctc: 
   :depends bioconductor-dexseq: 
   :depends bioconductor-edger: 
   :depends bioconductor-go.db: 
   :depends bioconductor-goseq: 
   :depends bioconductor-qvalue: 
   :depends bowtie2: ``>=2.3.0``
   :depends htslib: ``>=1.17,<1.19.0a0``
   :depends kallisto: 
   :depends kmer-jellyfish: ``>=2.3``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends numpy: 
   :depends openjdk: ``>=17``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-db_file: 
   :depends python: ``>=3.7``
   :depends r-ape: 
   :depends r-argparse: 
   :depends r-base: 
   :depends r-cluster: 
   :depends r-fastcluster: 
   :depends r-gplots: 
   :depends r-phangorn: 
   :depends r-sm: 
   :depends r-tidyverse: 
   :depends r-vioplot: 
   :depends salmon: 
   :depends samtools: ``>=1.14``
   :depends trimmomatic: ``>=0.39``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install trinity

   and update with::

      mamba update trinity

  To create a new environment, run::

      mamba create --name myenvname trinity

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/trinity:<tag>

   (see `trinity/tags`_ for valid values for ``<tag>``)


.. |downloads_trinity| image:: https://img.shields.io/conda/dn/bioconda/trinity.svg?style=flat
   :target: https://anaconda.org/bioconda/trinity
   :alt:   (downloads)
.. |docker_trinity| image:: https://quay.io/repository/biocontainers/trinity/status
   :target: https://quay.io/repository/biocontainers/trinity
.. _`trinity/tags`: https://quay.io/repository/biocontainers/trinity?tab=tags


.. raw:: html

    <script>
        var package = "trinity";
        var versions = ["2.15.1","2.15.1","2.15.1","2.15.1","2.13.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trinity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trinity/README.html