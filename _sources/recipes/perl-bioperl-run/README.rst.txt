:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bioperl-run'
.. highlight: bash

perl-bioperl-run
================

.. conda:recipe:: perl-bioperl-run
   :replaces_section_title:
   :noindex:

   BioPerl\-Run \- wrapper toolkit

   :homepage: http://metacpan.org/pod/BioPerl-Run
   :license: perl_5
   :recipe: /`perl-bioperl-run <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bioperl-run>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bioperl-run/meta.yaml>`_

   


.. conda:package:: perl-bioperl-run

   |downloads_perl-bioperl-run| |docker_perl-bioperl-run|

   :versions:
      
      

      ``1.007003-0``,  ``1.007002-6``,  ``1.007002-5``,  ``1.007002-4``,  ``1.007002-3``,  ``1.006900-2``,  ``1.006900-1``,  ``1.006900-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-bio-samtools: 
   :depends perl-bioperl-core: 
   :depends perl-file-sort: 
   :depends perl-io-string: 
   :depends perl-ipc-run: 
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

      mamba install perl-bioperl-run

   and update with::

      mamba update perl-bioperl-run

  To create a new environment, run::

      mamba create --name myenvname perl-bioperl-run

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bioperl-run:<tag>

   (see `perl-bioperl-run/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bioperl-run| image:: https://img.shields.io/conda/dn/bioconda/perl-bioperl-run.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bioperl-run
   :alt:   (downloads)
.. |docker_perl-bioperl-run| image:: https://quay.io/repository/biocontainers/perl-bioperl-run/status
   :target: https://quay.io/repository/biocontainers/perl-bioperl-run
.. _`perl-bioperl-run/tags`: https://quay.io/repository/biocontainers/perl-bioperl-run?tab=tags


.. raw:: html

    <script>
        var package = "perl-bioperl-run";
        var versions = ["1.007003","1.007002","1.007002","1.007002","1.007002"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bioperl-run/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bioperl-run/README.html