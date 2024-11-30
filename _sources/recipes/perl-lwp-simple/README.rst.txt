:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-lwp-simple'
.. highlight: bash

perl-lwp-simple
===============

.. conda:recipe:: perl-lwp-simple
   :replaces_section_title:
   :noindex:

   simple procedural interface to LWP

   :homepage: https://metacpan.org/pod/LWP::Simple
   :license: Perl
   :recipe: /`perl-lwp-simple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-lwp-simple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-lwp-simple/meta.yaml>`_

   


.. conda:package:: perl-lwp-simple

   |downloads_perl-lwp-simple| |docker_perl-lwp-simple|

   :versions:
      
      

      ``6.39-5``,  ``6.15-4``,  ``6.15-3``,  ``6.15-2``,  ``6.15-1``,  ``6.15-0``

      

   
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-libwww-perl: ``6.39.*``
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

      mamba install perl-lwp-simple

   and update with::

      mamba update perl-lwp-simple

  To create a new environment, run::

      mamba create --name myenvname perl-lwp-simple

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-lwp-simple:<tag>

   (see `perl-lwp-simple/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-lwp-simple| image:: https://img.shields.io/conda/dn/bioconda/perl-lwp-simple.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-lwp-simple
   :alt:   (downloads)
.. |docker_perl-lwp-simple| image:: https://quay.io/repository/biocontainers/perl-lwp-simple/status
   :target: https://quay.io/repository/biocontainers/perl-lwp-simple
.. _`perl-lwp-simple/tags`: https://quay.io/repository/biocontainers/perl-lwp-simple?tab=tags


.. raw:: html

    <script>
        var package = "perl-lwp-simple";
        var versions = ["6.39","6.15","6.15","6.15","6.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-lwp-simple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-lwp-simple/README.html