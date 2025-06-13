:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-http-message'
.. highlight: bash

perl-http-message
=================

.. conda:recipe:: perl-http-message
   :replaces_section_title:
   :noindex:

   HTTP style message \(base class\).

   :homepage: https://github.com/libwww-perl/HTTP-Message
   :license: perl_5
   :recipe: /`perl-http-message <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-message>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-http-message/meta.yaml>`_

   


.. conda:package:: perl-http-message

   |downloads_perl-http-message| |docker_perl-http-message|

   :versions:
      
      

      ``7.00-0``,  ``6.44-0``,  ``6.36-0``,  ``6.18-1``,  ``6.18-0``,  ``6.11-1``,  ``6.11-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-base: 
   :depends perl-carp: 
   :depends perl-clone: 
   :depends perl-compress-raw-bzip2: 
   :depends perl-compress-raw-zlib: 
   :depends perl-encode: ``>=3.01``
   :depends perl-encode-locale: 
   :depends perl-exporter: 
   :depends perl-file-spec: 
   :depends perl-http-date: 
   :depends perl-io-html: 
   :depends perl-lwp-mediatypes: 
   :depends perl-mime-base64: 
   :depends perl-parent: 
   :depends perl-test-needs: 
   :depends perl-uri: 
   :depends perl-url-encode: 
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

      mamba install perl-http-message

   and update with::

      mamba update perl-http-message

  To create a new environment, run::

      mamba create --name myenvname perl-http-message

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-http-message:<tag>

   (see `perl-http-message/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-http-message| image:: https://img.shields.io/conda/dn/bioconda/perl-http-message.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-http-message
   :alt:   (downloads)
.. |docker_perl-http-message| image:: https://quay.io/repository/biocontainers/perl-http-message/status
   :target: https://quay.io/repository/biocontainers/perl-http-message
.. _`perl-http-message/tags`: https://quay.io/repository/biocontainers/perl-http-message?tab=tags


.. raw:: html

    <script>
        var package = "perl-http-message";
        var versions = ["7.00","6.44","6.36","6.18","6.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-http-message/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-http-message/README.html