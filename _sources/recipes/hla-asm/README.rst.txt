:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hla-asm'
.. highlight: bash

hla-asm
=======

.. conda:recipe:: hla-asm
   :replaces_section_title:
   :noindex:

   find HLA gene exon coordinates in long read\-based assemblies and carry out HLA typing at G group resolution

   :homepage: https://github.com/DiltheyLab/HLA-LA/blob/master/HLA-ASM.md
   :license: GPL
   :recipe: /`hla-asm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hla-asm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hla-asm/meta.yaml>`_
   :links: biotools: :biotools:`hla-asm`

   


.. conda:package:: hla-asm

   |downloads_hla-asm| |docker_hla-asm|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends bwa: 
   :depends mummer: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bio-db-hts: 
   :depends perl-bioperl: 
   :depends perl-list-moreutils: 
   :depends perl-text-levenshteinxs: 
   :depends samtools: 
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

      mamba install hla-asm

   and update with::

      mamba update hla-asm

  To create a new environment, run::

      mamba create --name myenvname hla-asm

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/hla-asm:<tag>

   (see `hla-asm/tags`_ for valid values for ``<tag>``)


.. |downloads_hla-asm| image:: https://img.shields.io/conda/dn/bioconda/hla-asm.svg?style=flat
   :target: https://anaconda.org/bioconda/hla-asm
   :alt:   (downloads)
.. |docker_hla-asm| image:: https://quay.io/repository/biocontainers/hla-asm/status
   :target: https://quay.io/repository/biocontainers/hla-asm
.. _`hla-asm/tags`: https://quay.io/repository/biocontainers/hla-asm?tab=tags


.. raw:: html

    <script>
        var package = "hla-asm";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hla-asm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hla-asm/README.html