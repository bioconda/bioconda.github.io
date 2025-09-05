:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phame'
.. highlight: bash

phame
=====

.. conda:recipe:: phame
   :replaces_section_title:
   :noindex:

   A tool to derive SNP matrices and phylogenetic tree from raw reads\, contigs\, and full genomes.

   :homepage: https://github.com/LANL-Bioinformatics/PhaME
   :license: GPLV2
   :recipe: /`phame <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phame>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phame/meta.yaml>`_
   :links: biotools: :biotools:`phame`

   


.. conda:package:: phame

   |downloads_phame| |docker_phame|

   :versions:
      
      

      ``1.0.3-3``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0-0``

      

   
   :depends bbmap: ``>=38.0``
   :depends bcftools: 
   :depends bowtie2: ``>=2.4.1``
   :depends bwa: ``>=0.7.17,<0.8.0``
   :depends curl: ``>=7.68.0``
   :depends fasttree: ``>=2.1.10,<2.2.0``
   :depends hyphy: ``>=2.5.0``
   :depends iqtree: ``>=2.0.0``
   :depends mafft: ``>=7.471``
   :depends mummer: 
   :depends muscle: ``>=3.8.31,<4.0.0``
   :depends openmpi: ``>=4.0.0``
   :depends paml: ``>=4.9,<5.0``
   :depends perl: ``>=5.26.0,<5.35.0``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bioperl: ``>=1.7.2,<1.8.0``
   :depends perl-file-path: ``>=2.12``
   :depends perl-getopt-long: ``>=2.50``
   :depends perl-parallel-forkmanager: ``>=1.17``
   :depends perl-statistics-distributions: ``>=1.02``
   :depends raxml-ng: ``>=1.0.0``
   :depends samtools: ``>=0.1.18,<1.12``
   :depends zlib: ``>=1.2.11``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install phame

   and update with::

      mamba update phame

  To create a new environment, run::

      mamba create --name myenvname phame

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/phame:<tag>

   (see `phame/tags`_ for valid values for ``<tag>``)


.. |downloads_phame| image:: https://img.shields.io/conda/dn/bioconda/phame.svg?style=flat
   :target: https://anaconda.org/bioconda/phame
   :alt:   (downloads)
.. |docker_phame| image:: https://quay.io/repository/biocontainers/phame/status
   :target: https://quay.io/repository/biocontainers/phame
.. _`phame/tags`: https://quay.io/repository/biocontainers/phame?tab=tags


.. raw:: html

    <script>
        var package = "phame";
        var versions = ["1.0.3","1.0.3","1.0.3","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phame/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phame/README.html