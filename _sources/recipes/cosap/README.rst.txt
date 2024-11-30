:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cosap'
.. highlight: bash

cosap
=====

.. conda:recipe:: cosap
   :replaces_section_title:
   :noindex:

   COSAP \- Comparative Sequencing Analysis Platform

   :homepage: https://github.com/MBaysanLab/cosap
   :documentation: https://docs.cosap.bio
   
   :license: MIT
   :recipe: /`cosap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cosap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cosap/meta.yaml>`_

   


.. conda:package:: cosap

   |downloads_cosap| |docker_cosap|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends bbmap: ``39.01``
   :depends bcftools: ``>=1.16,<1.17``
   :depends black: 
   :depends bowtie2: ``2.5.1``
   :depends bwa: ``0.7.17``
   :depends bwa-mem2: ``2.2.1``
   :depends click: 
   :depends docker-py: 
   :depends elprep: ``5.1.3``
   :depends fastp: ``0.23.2``
   :depends fastqc: ``0.11.9``
   :depends gatk4: ``>=4.5,<4.6``
   :depends genefuse: 
   :depends libtiff: 
   :depends matplotlib-venn: 
   :depends msisensor-pro: 
   :depends numpy: 
   :depends openjdk: ``>=17,<18``
   :depends perl-dbi: 
   :depends perl-lwp-simple: 
   :depends picard: ``>=2,<3``
   :depends pillow: 
   :depends pygraphviz: 
   :depends pyranges: 
   :depends python: ``>=3.9``
   :depends qualimap: ``2.2.2d``
   :depends samtools: ``>=1.16,<1.17``
   :depends scikit-learn: 
   :depends seaborn: 
   :depends shortuuid: 
   :depends snakefmt: 
   :depends snakemake: ``>=7,<8``
   :depends snpeff: ``5.1``
   :depends somatic-sniper: ``1.0.5.0``
   :depends upsetplot: 
   :depends vardict-java: ``1.8.3``
   :depends varscan: ``2.4.4``
   :depends yaml: 
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

      mamba install cosap

   and update with::

      mamba update cosap

  To create a new environment, run::

      mamba create --name myenvname cosap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cosap:<tag>

   (see `cosap/tags`_ for valid values for ``<tag>``)


.. |downloads_cosap| image:: https://img.shields.io/conda/dn/bioconda/cosap.svg?style=flat
   :target: https://anaconda.org/bioconda/cosap
   :alt:   (downloads)
.. |docker_cosap| image:: https://quay.io/repository/biocontainers/cosap/status
   :target: https://quay.io/repository/biocontainers/cosap
.. _`cosap/tags`: https://quay.io/repository/biocontainers/cosap?tab=tags


.. raw:: html

    <script>
        var package = "cosap";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cosap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cosap/README.html