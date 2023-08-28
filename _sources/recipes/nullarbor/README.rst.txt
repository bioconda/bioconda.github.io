:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nullarbor'
.. highlight: bash

nullarbor
=========

.. conda:recipe:: nullarbor
   :replaces_section_title:
   :noindex:

   Reads to report pipeline for bacterial isolate NGS data

   :homepage: https://github.com/tseemann/nullarbor
   :license: GPL2
   :recipe: /`nullarbor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nullarbor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nullarbor/meta.yaml>`_

   


.. conda:package:: nullarbor

   |downloads_nullarbor| |docker_nullarbor|

   :versions:
      
      

      ``2.0.20191013-3``,  ``2.0.20191013-2``,  ``2.0.20191013-1``,  ``2.0.20191013-0``,  ``2.0.20191007-0``,  ``2.0.20191003-0``,  ``2.0.20181010-5``,  ``2.0.20181010-4``,  ``2.0.20181010-2``

      

   
   :depends abricate: ``>=1.0.1``
   :depends any2fasta: ``>=0.4.2``
   :depends centrifuge: ``>=1.0``
   :depends fasttree: ``>=2.1.10``
   :depends iqtree: ``>=2.2.0``
   :depends kraken: ``>=1.1``
   :depends kraken2: ``>=2.1.2``
   :depends make: ``>=4.2``
   :depends mash: ``>=2.3``
   :depends megahit: ``>=1.1.3``
   :depends mlst: ``>=2.22.0``
   :depends newick_utils: ``>=1.6``
   :depends perl: ``5.26.2.*``
   :depends perl-bioperl: ``1.7.2.*``
   :depends perl-file-spec: 
   :depends perl-file-which: 
   :depends perl-findbin: 
   :depends perl-json: 
   :depends perl-list-moreutils: ``>=0.428``
   :depends perl-path-tiny: 
   :depends perl-svg: 
   :depends perl-text-csv: 
   :depends perl-time-piece: 
   :depends perl-yaml-tiny: 
   :depends pigz: 
   :depends prokka: ``>=1.14.6``
   :depends quicktree: ``>=2.5``
   :depends roary: ``>=3.13``
   :depends samtools: ``>=1.9``
   :depends seqtk: ``>=1.3``
   :depends shovill: ``>=1.1.0``
   :depends skesa: ``>=2.4``
   :depends snippy: ``>=4.4.3``
   :depends snp-dists: ``>=0.8.2``
   :depends snpeff: ``5.0.*``
   :depends spades: ``>=3.15``
   :depends trimmomatic: ``>=0.39``
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

      mamba install nullarbor

   and update with::

      mamba update nullarbor

  To create a new environment, run::

      mamba create --name myenvname nullarbor

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/nullarbor:<tag>

   (see `nullarbor/tags`_ for valid values for ``<tag>``)


.. |downloads_nullarbor| image:: https://img.shields.io/conda/dn/bioconda/nullarbor.svg?style=flat
   :target: https://anaconda.org/bioconda/nullarbor
   :alt:   (downloads)
.. |docker_nullarbor| image:: https://quay.io/repository/biocontainers/nullarbor/status
   :target: https://quay.io/repository/biocontainers/nullarbor
.. _`nullarbor/tags`: https://quay.io/repository/biocontainers/nullarbor?tab=tags


.. raw:: html

    <script>
        var package = "nullarbor";
        var versions = ["2.0.20191013","2.0.20191013","2.0.20191013","2.0.20191013","2.0.20191007"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nullarbor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nullarbor/README.html