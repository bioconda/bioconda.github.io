:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-fastx-reader'
.. highlight: bash

perl-fastx-reader
=================

.. conda:recipe:: perl-fastx-reader
   :replaces_section_title:
   :noindex:

   FASTX\:\:Reader\, Perl module to parse FASTA and FASTQ files

   :homepage: https://metacpan.org/release/FASTX-Reader
   :developer docs: https://github.com/telatin/FASTQ-Parser
   :license: gpl_3
   :recipe: /`perl-fastx-reader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-fastx-reader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-fastx-reader/meta.yaml>`_

   A perl module to parser FASTQ and FASTA files\, gzipped or not\, supporting Illumina naming scheme and paired end files


.. conda:package:: perl-fastx-reader

   |downloads_perl-fastx-reader| |docker_perl-fastx-reader|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.11.0-0</code>,  <code>1.10.0-0</code>,  <code>1.9.0-0</code>,  <code>1.8.1-0</code>,  <code>1.7.0-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  <code>1.5.0-0</code>,  <code>1.4.1-0</code>,  </span></summary>
      

      ``1.11.0-0``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.1-0``,  ``1.7.0-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.0-0``,  ``1.4.1-0``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.1.0-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.92-1``,  ``0.92-0``,  ``0.90-0``,  ``0.88-0``,  ``0.87-0``,  ``0.61-0``,  ``0.60-0``

      
      .. raw:: html

         </details>
      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-capture-tiny: 
   :depends perl-carp: 
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

      mamba install perl-fastx-reader

   and update with::

      mamba update perl-fastx-reader

  To create a new environment, run::

      mamba create --name myenvname perl-fastx-reader

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-fastx-reader:<tag>

   (see `perl-fastx-reader/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-fastx-reader| image:: https://img.shields.io/conda/dn/bioconda/perl-fastx-reader.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-fastx-reader
   :alt:   (downloads)
.. |docker_perl-fastx-reader| image:: https://quay.io/repository/biocontainers/perl-fastx-reader/status
   :target: https://quay.io/repository/biocontainers/perl-fastx-reader
.. _`perl-fastx-reader/tags`: https://quay.io/repository/biocontainers/perl-fastx-reader?tab=tags


.. raw:: html

    <script>
        var package = "perl-fastx-reader";
        var versions = ["1.11.0","1.10.0","1.9.0","1.8.1","1.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-fastx-reader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-fastx-reader/README.html