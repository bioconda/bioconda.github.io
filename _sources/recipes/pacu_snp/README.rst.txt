:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pacu_snp'
.. highlight: bash

pacu_snp
========

.. conda:recipe:: pacu_snp
   :replaces_section_title:
   :noindex:

   PACU is a workflow for whole genome sequencing based phylogeny of Illumina and ONT R9\/R10 data.

   :homepage: https://github.com/BioinformaticsPlatformWIV-ISP/PACU
   :license: GPL / GPL-3.0-or-later
   :recipe: /`pacu_snp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pacu_snp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pacu_snp/meta.yaml>`_

   


.. conda:package:: pacu_snp

   |downloads_pacu_snp| |docker_pacu_snp|

   :versions:
      
      

      ``0.0.5-0``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.3-0``

      

   
   :depends bcftools: ``>=1.17``
   :depends beautifulsoup4: ``>=4.12.2``
   :depends bedtools: ``>=2.31.0``
   :depends biopython: ``>=1.84``
   :depends bowtie2: ``>=2.5.1``
   :depends figtree: ``>=1.4.4``
   :depends gubbins: ``>=3.3.1``
   :depends iqtree: ``>=2.2.5``
   :depends matplotlib-base: ``>=3.8.0``
   :depends minimap2: ``>=2.26``
   :depends pandas: ``>=2.1.0``
   :depends python: 
   :depends pyvcf3: ``>=1.0.3``
   :depends pyyaml: ``>=6.0.1``
   :depends samtools: ``>=1.17``
   :depends seqkit: ``>=2.3.1``
   :depends snakemake-minimal: ``7.32.4``
   :depends snp-dists: ``>=0.8.2``
   :depends trimmomatic: ``>=0.39``
   :depends upsetplot: ``>=0.8.0``
   :depends yattag: ``>=1.15.1``
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

      mamba install pacu_snp

   and update with::

      mamba update pacu_snp

  To create a new environment, run::

      mamba create --name myenvname pacu_snp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pacu_snp:<tag>

   (see `pacu_snp/tags`_ for valid values for ``<tag>``)


.. |downloads_pacu_snp| image:: https://img.shields.io/conda/dn/bioconda/pacu_snp.svg?style=flat
   :target: https://anaconda.org/bioconda/pacu_snp
   :alt:   (downloads)
.. |docker_pacu_snp| image:: https://quay.io/repository/biocontainers/pacu_snp/status
   :target: https://quay.io/repository/biocontainers/pacu_snp
.. _`pacu_snp/tags`: https://quay.io/repository/biocontainers/pacu_snp?tab=tags


.. raw:: html

    <script>
        var package = "pacu_snp";
        var versions = ["0.0.5","0.0.4","0.0.4","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pacu_snp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pacu_snp/README.html