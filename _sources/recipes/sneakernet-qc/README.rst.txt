:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sneakernet-qc'
.. highlight: bash

sneakernet-qc
=============

.. conda:recipe:: sneakernet-qc
   :replaces_section_title:
   :noindex:

   A QC pipeline for raw reads

   :homepage: https://github.com/lskatz/sneakernet
   :license: MIT
   :recipe: /`sneakernet-qc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sneakernet-qc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sneakernet-qc/meta.yaml>`_
   :links: doi: :doi:`10.21105/joss.02334`

   


.. conda:package:: sneakernet-qc

   |downloads_sneakernet-qc| |docker_sneakernet-qc|

   :versions:
      
      

      ``0.26.0-0``,  ``0.25.0-0``

      

   
   :depends blast: 
   :depends bowtie2: 
   :depends chewbbaca: 
   :depends fastqc: 
   :depends flash: 
   :depends kalamari: 
   :depends kma: ``>=1.4``
   :depends kmc: 
   :depends kraken: ``>=1,<2``
   :depends krona: 
   :depends lighter: 
   :depends make: 
   :depends mash: ``>=2``
   :depends megahit: 
   :depends mlst: 
   :depends multiqc: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-app-cpanminus: 
   :depends perl-bioperl: 
   :depends perl-cg-pipeline: 
   :depends perl-config-simple: 
   :depends perl-file-slurp: 
   :depends perl-gd: 
   :depends perl-gdgraph: 
   :depends perl-list-moreutils: 
   :depends perl-moo: 
   :depends perl-statistics-descriptive: 
   :depends pilon: 
   :depends prodigal: 
   :depends python: ``>=3.7``
   :depends quast: 
   :depends salmid: 
   :depends samclip: 
   :depends seqtk: 
   :depends shovill: 
   :depends skesa: ``>=2.4``
   :depends spades: 
   :depends staramr: 
   :depends trimmomatic: 
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

      mamba install sneakernet-qc

   and update with::

      mamba update sneakernet-qc

  To create a new environment, run::

      mamba create --name myenvname sneakernet-qc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sneakernet-qc:<tag>

   (see `sneakernet-qc/tags`_ for valid values for ``<tag>``)


.. |downloads_sneakernet-qc| image:: https://img.shields.io/conda/dn/bioconda/sneakernet-qc.svg?style=flat
   :target: https://anaconda.org/bioconda/sneakernet-qc
   :alt:   (downloads)
.. |docker_sneakernet-qc| image:: https://quay.io/repository/biocontainers/sneakernet-qc/status
   :target: https://quay.io/repository/biocontainers/sneakernet-qc
.. _`sneakernet-qc/tags`: https://quay.io/repository/biocontainers/sneakernet-qc?tab=tags


.. raw:: html

    <script>
        var package = "sneakernet-qc";
        var versions = ["0.26.0","0.25.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sneakernet-qc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sneakernet-qc/README.html