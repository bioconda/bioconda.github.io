:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-tools-run-alignment-tcoffee'
.. highlight: bash

perl-bio-tools-run-alignment-tcoffee
====================================

.. conda:recipe:: perl-bio-tools-run-alignment-tcoffee
   :replaces_section_title:
   :noindex:

   Object for the calculation of a multiple sequence alignment from a set of unaligned sequences or alignments using the TCoffee program

   :homepage: https://metacpan.org/release/Bio-Tools-Run-Alignment-TCoffee
   :license: perl_5
   :recipe: /`perl-bio-tools-run-alignment-tcoffee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-tools-run-alignment-tcoffee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-tools-run-alignment-tcoffee/meta.yaml>`_

   


.. conda:package:: perl-bio-tools-run-alignment-tcoffee

   |downloads_perl-bio-tools-run-alignment-tcoffee| |docker_perl-bio-tools-run-alignment-tcoffee|

   :versions:
      
      

      ``1.7.4-5``,  ``1.7.4-4``,  ``1.7.4-3``,  ``1.7.4-2``,  ``1.7.4-1``,  ``1.7.4-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bioperl-run: 
   :depends t-coffee: 
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

      mamba install perl-bio-tools-run-alignment-tcoffee

   and update with::

      mamba update perl-bio-tools-run-alignment-tcoffee

  To create a new environment, run::

      mamba create --name myenvname perl-bio-tools-run-alignment-tcoffee

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bio-tools-run-alignment-tcoffee:<tag>

   (see `perl-bio-tools-run-alignment-tcoffee/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-tools-run-alignment-tcoffee| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-tools-run-alignment-tcoffee.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-tools-run-alignment-tcoffee
   :alt:   (downloads)
.. |docker_perl-bio-tools-run-alignment-tcoffee| image:: https://quay.io/repository/biocontainers/perl-bio-tools-run-alignment-tcoffee/status
   :target: https://quay.io/repository/biocontainers/perl-bio-tools-run-alignment-tcoffee
.. _`perl-bio-tools-run-alignment-tcoffee/tags`: https://quay.io/repository/biocontainers/perl-bio-tools-run-alignment-tcoffee?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-tools-run-alignment-tcoffee";
        var versions = ["1.7.4","1.7.4","1.7.4","1.7.4","1.7.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-tools-run-alignment-tcoffee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-tools-run-alignment-tcoffee/README.html