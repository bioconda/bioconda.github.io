:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rkp'
.. highlight: bash

rkp
===

.. conda:recipe:: rkp
   :replaces_section_title:
   :noindex:

   Relative K\-mer Project

   :homepage: https://gitlab.com/microbial_genomics/relative-kmer-project
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`rkp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rkp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rkp/meta.yaml>`_

   


.. conda:package:: rkp

   |downloads_rkp| |docker_rkp|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends argparse: ``>=1.4.0``
   :depends bedops: ``>=2.4.37``
   :depends bedtools: ``>=2.29.2``
   :depends biopython: ``>=1.76``
   :depends blast: ``>=2.9.0``
   :depends bowtie2: ``>=2.3.5``
   :depends kmc: ``>=3.1.1``
   :depends matplotlib-base: ``>=3.1.2``
   :depends numpy: ``>=1.17.3``
   :depends pandas: ``>=0.25.3``
   :depends python: ``>=3.6``
   :depends r: ``>=3.6``
   :depends r-gplots: ``>=3.0.1.1``
   :depends r-pheatmap: ``>=1.0.12``
   :depends samtools: ``>=1.10``
   :depends seqkit: ``>=0.11.0``
   :depends tqdm: ``>=4.41.1``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install rkp

   and update with::

      mamba update rkp

  To create a new environment, run::

      mamba create --name myenvname rkp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rkp:<tag>

   (see `rkp/tags`_ for valid values for ``<tag>``)


.. |downloads_rkp| image:: https://img.shields.io/conda/dn/bioconda/rkp.svg?style=flat
   :target: https://anaconda.org/bioconda/rkp
   :alt:   (downloads)
.. |docker_rkp| image:: https://quay.io/repository/biocontainers/rkp/status
   :target: https://quay.io/repository/biocontainers/rkp
.. _`rkp/tags`: https://quay.io/repository/biocontainers/rkp?tab=tags


.. raw:: html

    <script>
        var package = "rkp";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rkp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rkp/README.html