:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-moosex-getopt'
.. highlight: bash

perl-moosex-getopt
==================

.. conda:recipe:: perl-moosex-getopt
   :replaces_section_title:
   :noindex:

   A Moose role for processing command line options

   :homepage: https://github.com/moose/MooseX-Getopt
   :license: perl_5
   :recipe: /`perl-moosex-getopt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-getopt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-moosex-getopt/meta.yaml>`_

   


.. conda:package:: perl-moosex-getopt

   |downloads_perl-moosex-getopt| |docker_perl-moosex-getopt|

   :versions:
      
      

      ``0.75-0``,  ``0.74-1``,  ``0.74-0``,  ``0.72-0``,  ``0.71-2``,  ``0.71-1``,  ``0.71-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-getopt-long: 
   :depends perl-getopt-long-descriptive: 
   :depends perl-moose: 
   :depends perl-moosex-role-parameterized: 
   :depends perl-namespace-autoclean: 
   :depends perl-try-tiny: 
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

      mamba install perl-moosex-getopt

   and update with::

      mamba update perl-moosex-getopt

  To create a new environment, run::

      mamba create --name myenvname perl-moosex-getopt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-moosex-getopt:<tag>

   (see `perl-moosex-getopt/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-moosex-getopt| image:: https://img.shields.io/conda/dn/bioconda/perl-moosex-getopt.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-moosex-getopt
   :alt:   (downloads)
.. |docker_perl-moosex-getopt| image:: https://quay.io/repository/biocontainers/perl-moosex-getopt/status
   :target: https://quay.io/repository/biocontainers/perl-moosex-getopt
.. _`perl-moosex-getopt/tags`: https://quay.io/repository/biocontainers/perl-moosex-getopt?tab=tags


.. raw:: html

    <script>
        var package = "perl-moosex-getopt";
        var versions = ["0.75","0.74","0.74","0.72","0.71"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-moosex-getopt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-moosex-getopt/README.html