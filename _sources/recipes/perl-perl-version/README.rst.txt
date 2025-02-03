:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-perl-version'
.. highlight: bash

perl-perl-version
=================

.. conda:recipe:: perl-perl-version
   :replaces_section_title:
   :noindex:

   Parse and manipulate Perl version strings

   :homepage: http://metacpan.org/pod/Perl::Version
   :license: perl_5
   :recipe: /`perl-perl-version <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perl-version>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-perl-version/meta.yaml>`_

   


.. conda:package:: perl-perl-version

   |downloads_perl-perl-version| |docker_perl-perl-version|

   :versions:
      
      

      ``1.018-0``,  ``1.013-4``,  ``1.013-3``,  ``1.013-2``,  ``1.013-1``,  ``1.013-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-data-dumper: 
   :depends perl-file-slurp-tiny: 
   :depends perl-getopt-long: 
   :depends perl-pod-usage: 
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

      mamba install perl-perl-version

   and update with::

      mamba update perl-perl-version

  To create a new environment, run::

      mamba create --name myenvname perl-perl-version

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-perl-version:<tag>

   (see `perl-perl-version/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-perl-version| image:: https://img.shields.io/conda/dn/bioconda/perl-perl-version.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-perl-version
   :alt:   (downloads)
.. |docker_perl-perl-version| image:: https://quay.io/repository/biocontainers/perl-perl-version/status
   :target: https://quay.io/repository/biocontainers/perl-perl-version
.. _`perl-perl-version/tags`: https://quay.io/repository/biocontainers/perl-perl-version?tab=tags


.. raw:: html

    <script>
        var package = "perl-perl-version";
        var versions = ["1.018","1.013","1.013","1.013","1.013"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-perl-version/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-perl-version/README.html