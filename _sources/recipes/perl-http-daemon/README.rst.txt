:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-http-daemon'
.. highlight: bash

perl-http-daemon
================

.. conda:recipe:: perl-http-daemon
   :replaces_section_title:
   :noindex:

   a simple http server class

   :homepage: http://metacpan.org/pod/HTTP-Daemon
   :license: perl_5
   :recipe: /`perl-http-daemon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-daemon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-daemon/meta.yaml>`_

   


.. conda:package:: perl-http-daemon

   |downloads_perl-http-daemon| |docker_perl-http-daemon|

   :versions:
      
      

      ``6.16-0``,  ``6.15-0``,  ``6.14-0``,  ``6.13-0``,  ``6.01-2``,  ``6.01-1``,  ``6.01-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-http-date: 
   :depends perl-http-message: 
   :depends perl-lwp-mediatypes: 
   :depends perl-socket: 
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

      mamba install perl-http-daemon

   and update with::

      mamba update perl-http-daemon

  To create a new environment, run::

      mamba create --name myenvname perl-http-daemon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-http-daemon:<tag>

   (see `perl-http-daemon/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-http-daemon| image:: https://img.shields.io/conda/dn/bioconda/perl-http-daemon.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-http-daemon
   :alt:   (downloads)
.. |docker_perl-http-daemon| image:: https://quay.io/repository/biocontainers/perl-http-daemon/status
   :target: https://quay.io/repository/biocontainers/perl-http-daemon
.. _`perl-http-daemon/tags`: https://quay.io/repository/biocontainers/perl-http-daemon?tab=tags


.. raw:: html

    <script>
        var package = "perl-http-daemon";
        var versions = ["6.16","6.15","6.14","6.13","6.01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-http-daemon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-http-daemon/README.html