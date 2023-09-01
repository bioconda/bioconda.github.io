:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-getopt-long'
.. highlight: bash

perl-getopt-long
================

.. conda:recipe:: perl-getopt-long
   :replaces_section_title:
   :noindex:

   Module to handle parsing command line options

   :homepage: http://metacpan.org/pod/Getopt::Long
   :license: unknown
   :recipe: /`perl-getopt-long <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-getopt-long>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-getopt-long/meta.yaml>`_

   


.. conda:package:: perl-getopt-long

   |downloads_perl-getopt-long| |docker_perl-getopt-long|

   :versions:
      
      

      ``2.54-0``,  ``2.53-0``,  ``2.52-0``,  ``2.50-2``,  ``2.50-1``,  ``2.50-0``,  ``2.49-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-getopt-long

   and update with::

      mamba update perl-getopt-long

  To create a new environment, run::

      mamba create --name myenvname perl-getopt-long

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-getopt-long:<tag>

   (see `perl-getopt-long/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-getopt-long| image:: https://img.shields.io/conda/dn/bioconda/perl-getopt-long.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-getopt-long
   :alt:   (downloads)
.. |docker_perl-getopt-long| image:: https://quay.io/repository/biocontainers/perl-getopt-long/status
   :target: https://quay.io/repository/biocontainers/perl-getopt-long
.. _`perl-getopt-long/tags`: https://quay.io/repository/biocontainers/perl-getopt-long?tab=tags


.. raw:: html

    <script>
        var package = "perl-getopt-long";
        var versions = ["2.54","2.53","2.52","2.50","2.50"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-getopt-long/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-getopt-long/README.html