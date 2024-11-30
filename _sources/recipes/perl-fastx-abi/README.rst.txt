:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-fastx-abi'
.. highlight: bash

perl-fastx-abi
==============

.. conda:recipe:: perl-fastx-abi
   :replaces_section_title:
   :noindex:

   FASTX\:\:Abi \- Read Sanger trace file \(.ab1 chromatograms\) in FASTQ format. For traces called with hetero option\, the ambiguities will be split into two sequences to allow usage from NGS tools that usually do not understand IUPAC ambiguities. 

   :homepage: https://github.com/telatin/FASTX-Abi
   :documentation: https://metacpan.org/pod/FASTX::Abi
   
   :license: MIT
   :recipe: /`perl-fastx-abi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-fastx-abi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-fastx-abi/meta.yaml>`_

   This module reads a Sanger trace \(chromatogram\). If the chromatogram was saved in \"hetero\" mode\, that is allowing IUPAC
   ambiguities in the basecalling\, the module will return two \(unphased\) sequences in standard \"ACGT\" alphabet.


.. conda:package:: perl-fastx-abi

   |downloads_perl-fastx-abi| |docker_perl-fastx-abi|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.11-1``,  ``0.11-0``,  ``0.08-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bio-trace-abif: 
   :depends perl-carp: 
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

      mamba install perl-fastx-abi

   and update with::

      mamba update perl-fastx-abi

  To create a new environment, run::

      mamba create --name myenvname perl-fastx-abi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-fastx-abi:<tag>

   (see `perl-fastx-abi/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-fastx-abi| image:: https://img.shields.io/conda/dn/bioconda/perl-fastx-abi.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-fastx-abi
   :alt:   (downloads)
.. |docker_perl-fastx-abi| image:: https://quay.io/repository/biocontainers/perl-fastx-abi/status
   :target: https://quay.io/repository/biocontainers/perl-fastx-abi
.. _`perl-fastx-abi/tags`: https://quay.io/repository/biocontainers/perl-fastx-abi?tab=tags


.. raw:: html

    <script>
        var package = "perl-fastx-abi";
        var versions = ["1.0.1","1.0.1","1.0.0","0.11","0.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-fastx-abi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-fastx-abi/README.html