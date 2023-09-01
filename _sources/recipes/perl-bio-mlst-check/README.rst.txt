:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bio-mlst-check'
.. highlight: bash

perl-bio-mlst-check
===================

.. conda:recipe:: perl-bio-mlst-check
   :replaces_section_title:
   :noindex:

   Multilocus sequence type checking using blast

   :homepage: http://www.sanger.ac.uk/
   :license: gpl_3
   :recipe: /`perl-bio-mlst-check <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-mlst-check>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bio-mlst-check/meta.yaml>`_

   


.. conda:package:: perl-bio-mlst-check

   |downloads_perl-bio-mlst-check| |docker_perl-bio-mlst-check|

   :versions:
      
      

      ``2.1.1706216-3``,  ``2.1.1706216-2``,  ``2.1.1706216-1``,  ``2.1.1706216-0``

      

   
   :depends blast: 
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bio-procedural: 
   :depends perl-bioperl: 
   :depends perl-data-dumper: 
   :depends perl-exporter: 
   :depends perl-file-path: 
   :depends perl-file-temp: 
   :depends perl-file-which: 
   :depends perl-getopt-long: 
   :depends perl-io-scalar: 
   :depends perl-lib: 
   :depends perl-libwww-perl: 
   :depends perl-lwp-simple: 
   :depends perl-moose: 
   :depends perl-parallel-forkmanager: 
   :depends perl-regexp-common: 
   :depends perl-text-csv: 
   :depends perl-try-tiny: 
   :depends perl-xml-libxml: 
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

      mamba install perl-bio-mlst-check

   and update with::

      mamba update perl-bio-mlst-check

  To create a new environment, run::

      mamba create --name myenvname perl-bio-mlst-check

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bio-mlst-check:<tag>

   (see `perl-bio-mlst-check/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bio-mlst-check| image:: https://img.shields.io/conda/dn/bioconda/perl-bio-mlst-check.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bio-mlst-check
   :alt:   (downloads)
.. |docker_perl-bio-mlst-check| image:: https://quay.io/repository/biocontainers/perl-bio-mlst-check/status
   :target: https://quay.io/repository/biocontainers/perl-bio-mlst-check
.. _`perl-bio-mlst-check/tags`: https://quay.io/repository/biocontainers/perl-bio-mlst-check?tab=tags


.. raw:: html

    <script>
        var package = "perl-bio-mlst-check";
        var versions = ["2.1.1706216","2.1.1706216","2.1.1706216","2.1.1706216"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bio-mlst-check/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bio-mlst-check/README.html