:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-data-dump'
.. highlight: bash

perl-data-dump
==============

.. conda:recipe:: perl-data-dump
   :replaces_section_title:
   :noindex:

   Pretty printing of data structures

   :homepage: http://metacpan.org/pod/Data::Dump
   :license: perl_5
   :recipe: /`perl-data-dump <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-dump>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-data-dump/meta.yaml>`_

   


.. conda:package:: perl-data-dump

   |downloads_perl-data-dump| |docker_perl-data-dump|

   :versions:
      
      

      ``1.25-1``,  ``1.25-0``,  ``1.23-6``,  ``1.23-5``,  ``1.23-4``,  ``1.23-3``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install perl-data-dump

   and update with::

      mamba update perl-data-dump

  To create a new environment, run::

      mamba create --name myenvname perl-data-dump

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-data-dump:<tag>

   (see `perl-data-dump/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-data-dump| image:: https://img.shields.io/conda/dn/bioconda/perl-data-dump.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-data-dump
   :alt:   (downloads)
.. |docker_perl-data-dump| image:: https://quay.io/repository/biocontainers/perl-data-dump/status
   :target: https://quay.io/repository/biocontainers/perl-data-dump
.. _`perl-data-dump/tags`: https://quay.io/repository/biocontainers/perl-data-dump?tab=tags


.. raw:: html

    <script>
        var package = "perl-data-dump";
        var versions = ["1.25","1.25","1.23","1.23","1.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-data-dump/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-data-dump/README.html