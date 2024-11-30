:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-lwp-protocol-https'
.. highlight: bash

perl-lwp-protocol-https
=======================

.. conda:recipe:: perl-lwp-protocol-https
   :replaces_section_title:
   :noindex:

   Provide https support for LWP\:\:UserAgent

   :homepage: https://metacpan.org/pod/LWP::Protocol::https
   :license: Perl
   :recipe: /`perl-lwp-protocol-https <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-lwp-protocol-https>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-lwp-protocol-https/meta.yaml>`_

   


.. conda:package:: perl-lwp-protocol-https

   |downloads_perl-lwp-protocol-https| |docker_perl-lwp-protocol-https|

   :versions:
      
      

      ``6.10-0``,  ``6.07-5``,  ``6.07-4``,  ``6.06-3``,  ``6.06-2``,  ``6.06-1``,  ``6.06-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-http-message: ``>=6.18``
   :depends perl-io-socket-ssl: 
   :depends perl-libwww-perl: 
   :depends perl-mozilla-ca: 
   :depends perl-net-http: 
   :depends perl-test-requiresinternet: 
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

      mamba install perl-lwp-protocol-https

   and update with::

      mamba update perl-lwp-protocol-https

  To create a new environment, run::

      mamba create --name myenvname perl-lwp-protocol-https

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-lwp-protocol-https:<tag>

   (see `perl-lwp-protocol-https/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-lwp-protocol-https| image:: https://img.shields.io/conda/dn/bioconda/perl-lwp-protocol-https.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-lwp-protocol-https
   :alt:   (downloads)
.. |docker_perl-lwp-protocol-https| image:: https://quay.io/repository/biocontainers/perl-lwp-protocol-https/status
   :target: https://quay.io/repository/biocontainers/perl-lwp-protocol-https
.. _`perl-lwp-protocol-https/tags`: https://quay.io/repository/biocontainers/perl-lwp-protocol-https?tab=tags


.. raw:: html

    <script>
        var package = "perl-lwp-protocol-https";
        var versions = ["6.10","6.07","6.07","6.06","6.06"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-lwp-protocol-https/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-lwp-protocol-https/README.html