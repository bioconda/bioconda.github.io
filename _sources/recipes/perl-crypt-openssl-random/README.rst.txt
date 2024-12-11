:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-crypt-openssl-random'
.. highlight: bash

perl-crypt-openssl-random
=========================

.. conda:recipe:: perl-crypt-openssl-random/0.11
   :replaces_section_title:
   :noindex:

   OpenSSL\/LibreSSL pseudo\-random number generator access

   :homepage: http://sourceforge.net/projects/perl-openssl/
   :license: perl_5
   :recipe: /`perl-crypt-openssl-random <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-crypt-openssl-random>`_/`0.11 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-crypt-openssl-random/0.11>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-crypt-openssl-random/0.11/meta.yaml>`_

   


.. conda:package:: perl-crypt-openssl-random

   |downloads_perl-crypt-openssl-random| |docker_perl-crypt-openssl-random|

   :versions:
      
      

      ``0.11-7``,  ``0.11-6``,  ``0.11-5``,  ``0.11-4``,  ``0.11-3``,  ``0.11-2``,  ``0.11-1``,  ``0.11-0``

      

   
   :depends libgcc: ``>=13``
   :depends openssl: ``>=3.4.0,<4.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-crypt-openssl-random

   and update with::

      mamba update perl-crypt-openssl-random

  To create a new environment, run::

      mamba create --name myenvname perl-crypt-openssl-random

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-crypt-openssl-random:<tag>

   (see `perl-crypt-openssl-random/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-crypt-openssl-random| image:: https://img.shields.io/conda/dn/bioconda/perl-crypt-openssl-random.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-crypt-openssl-random
   :alt:   (downloads)
.. |docker_perl-crypt-openssl-random| image:: https://quay.io/repository/biocontainers/perl-crypt-openssl-random/status
   :target: https://quay.io/repository/biocontainers/perl-crypt-openssl-random
.. _`perl-crypt-openssl-random/tags`: https://quay.io/repository/biocontainers/perl-crypt-openssl-random?tab=tags


.. raw:: html

    <script>
        var package = "perl-crypt-openssl-random";
        var versions = ["0.11","0.11","0.11","0.11","0.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-crypt-openssl-random/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-crypt-openssl-random/README.html