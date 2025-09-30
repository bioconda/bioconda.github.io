:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metawrap-mg'
.. highlight: bash

metawrap-mg
===========

.. conda:recipe:: metawrap-mg
   :replaces_section_title:
   :noindex:

   MetaWRAP is a pipeline for genome\-resolved metagenomic data analysis.

   :homepage: https://github.com/bxlab/metaWRAP
   :license: MIT
   :recipe: /`metawrap-mg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metawrap-mg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metawrap-mg/meta.yaml>`_

   


.. conda:package:: metawrap-mg

   |downloads_metawrap-mg| |docker_metawrap-mg|

   :versions:
      
      

      ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``

      

   
   :depends biopython: ``>=1.78,<1.85``
   :depends blas: ``* *mkl``
   :depends blast: ``>=2.6.0``
   :depends bmtagger: ``>=3.101``
   :depends bowtie2: ``>=2.3.5``
   :depends bwa: ``>=0.7.17``
   :depends checkm-genome: ``>=1.0.12``
   :depends concoct: ``>=1.1.0,<1.2.0``
   :depends fastqc: ``>=0.11.8``
   :depends kraken: ``>=1.1``
   :depends kraken2: ``>=2.0``
   :depends krona: ``>=2.7``
   :depends matplotlib-base: ``>=3.3.0,<3.6.0``
   :depends maxbin2: ``>=2.2.6``
   :depends megahit: ``>=1.1.3``
   :depends metabat2: ``>=2.12.1``
   :depends openssl: 
   :depends pandas: ``>=1.0.0,<1.5.0``
   :depends perl: ``>=5.26,<5.33``
   :depends perl-bioperl: 
   :depends pplacer: 
   :depends prokka: ``>=1.14,<1.15``
   :depends python: ``>=3.9,<3.10.0a0``
   :depends quast: ``>=5.0.2``
   :depends r-ggplot2: ``>=3.1.0``
   :depends r-recommended: ``>=3.5.1``
   :depends r-reshape2: 
   :depends salmon: ``>=0.13.1``
   :depends samtools: ``>=1.9``
   :depends seaborn-base: ``>=0.9.0``
   :depends spades: ``>=3.13.0``
   :depends trim-galore: ``>=0.5.0``
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

      mamba install metawrap-mg

   and update with::

      mamba update metawrap-mg

  To create a new environment, run::

      mamba create --name myenvname metawrap-mg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metawrap-mg:<tag>

   (see `metawrap-mg/tags`_ for valid values for ``<tag>``)


.. |downloads_metawrap-mg| image:: https://img.shields.io/conda/dn/bioconda/metawrap-mg.svg?style=flat
   :target: https://anaconda.org/bioconda/metawrap-mg
   :alt:   (downloads)
.. |docker_metawrap-mg| image:: https://quay.io/repository/biocontainers/metawrap-mg/status
   :target: https://quay.io/repository/biocontainers/metawrap-mg
.. _`metawrap-mg/tags`: https://quay.io/repository/biocontainers/metawrap-mg?tab=tags


.. raw:: html

    <script>
        var package = "metawrap-mg";
        var versions = ["1.3.0","1.3.0","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metawrap-mg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metawrap-mg/README.html