:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-http-server-simple'
.. highlight: bash

perl-http-server-simple
=======================

.. conda:recipe:: perl-http-server-simple
   :replaces_section_title:
   :noindex:

   Lightweight HTTP server

   :homepage: https://metacpan.org/pod/HTTP::Server::Simple
   :license: Perl_5
   :recipe: /`perl-http-server-simple <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-server-simple>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-server-simple/meta.yaml>`_

   


.. conda:package:: perl-http-server-simple

   |downloads_perl-http-server-simple| |docker_perl-http-server-simple|

   :versions:
      
      

      ``0.52-3``,  ``0.52-2``,  ``0.52-1``,  ``0.52-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-cgi: 
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

      mamba install perl-http-server-simple

   and update with::

      mamba update perl-http-server-simple

  To create a new environment, run::

      mamba create --name myenvname perl-http-server-simple

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-http-server-simple:<tag>

   (see `perl-http-server-simple/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-http-server-simple| image:: https://img.shields.io/conda/dn/bioconda/perl-http-server-simple.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-http-server-simple
   :alt:   (downloads)
.. |docker_perl-http-server-simple| image:: https://quay.io/repository/biocontainers/perl-http-server-simple/status
   :target: https://quay.io/repository/biocontainers/perl-http-server-simple
.. _`perl-http-server-simple/tags`: https://quay.io/repository/biocontainers/perl-http-server-simple?tab=tags


.. raw:: html

    <script>
        var package = "perl-http-server-simple";
        var versions = ["0.52","0.52","0.52","0.52"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-http-server-simple/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-http-server-simple/README.html