:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-net-http'
.. highlight: bash

perl-net-http
=============

.. conda:recipe:: perl-net-http
   :replaces_section_title:
   :noindex:

   Low\-level HTTP connection \(client\)

   :homepage: https://github.com/libwww-perl/Net-HTTP
   :license: perl_5
   :recipe: /`perl-net-http <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-net-http>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-net-http/meta.yaml>`_

   


.. conda:package:: perl-net-http

   |downloads_perl-net-http| |docker_perl-net-http|

   :versions:
      
      

      ``6.22-0``,  ``6.19-1``,  ``6.19-0``,  ``6.18-0``,  ``6.09-1``,  ``6.09-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-base: 
   :depends perl-carp: 
   :depends perl-compress-raw-zlib: 
   :depends perl-io-socket-ssl: 
   :depends perl-uri: 
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

      mamba install perl-net-http

   and update with::

      mamba update perl-net-http

  To create a new environment, run::

      mamba create --name myenvname perl-net-http

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-net-http:<tag>

   (see `perl-net-http/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-net-http| image:: https://img.shields.io/conda/dn/bioconda/perl-net-http.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-net-http
   :alt:   (downloads)
.. |docker_perl-net-http| image:: https://quay.io/repository/biocontainers/perl-net-http/status
   :target: https://quay.io/repository/biocontainers/perl-net-http
.. _`perl-net-http/tags`: https://quay.io/repository/biocontainers/perl-net-http?tab=tags


.. raw:: html

    <script>
        var package = "perl-net-http";
        var versions = ["6.22","6.19","6.19","6.18","6.09"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-net-http/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-net-http/README.html