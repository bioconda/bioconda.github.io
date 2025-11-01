:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-crypt-openssl-rsa'
.. highlight: bash

perl-crypt-openssl-rsa
======================

.. conda:recipe:: perl-crypt-openssl-rsa
   :replaces_section_title:
   :noindex:

   RSA encoding and decoding\, using the openSSL libraries

   :homepage: http://github.com/toddr/Crypt-OpenSSL-RSA
   :license: perl_5
   :recipe: /`perl-crypt-openssl-rsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-crypt-openssl-rsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-crypt-openssl-rsa/meta.yaml>`_

   


.. conda:package:: perl-crypt-openssl-rsa

   |downloads_perl-crypt-openssl-rsa| |docker_perl-crypt-openssl-rsa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.37-0</code>,  <code>0.35-0</code>,  <code>0.34-0</code>,  <code>0.33-4</code>,  <code>0.33-3</code>,  <code>0.33-2</code>,  <code>0.33-1</code>,  <code>0.33-0</code>,  <code>0.32-1</code>,  </span></summary>
      

      ``0.37-0``,  ``0.35-0``,  ``0.34-0``,  ``0.33-4``,  ``0.33-3``,  ``0.33-2``,  ``0.33-1``,  ``0.33-0``,  ``0.32-1``,  ``0.32-0``,  ``0.28-1``,  ``0.28-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends openssl: ``>=3.5.4,<4.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-crypt-openssl-guess: ``0.15.*``
   :depends perl-crypt-openssl-random: ``>=0.11,<0.12.0a0``
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

      mamba install perl-crypt-openssl-rsa

   and update with::

      mamba update perl-crypt-openssl-rsa

  To create a new environment, run::

      mamba create --name myenvname perl-crypt-openssl-rsa

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-crypt-openssl-rsa:<tag>

   (see `perl-crypt-openssl-rsa/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-crypt-openssl-rsa| image:: https://img.shields.io/conda/dn/bioconda/perl-crypt-openssl-rsa.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-crypt-openssl-rsa
   :alt:   (downloads)
.. |docker_perl-crypt-openssl-rsa| image:: https://quay.io/repository/biocontainers/perl-crypt-openssl-rsa/status
   :target: https://quay.io/repository/biocontainers/perl-crypt-openssl-rsa
.. _`perl-crypt-openssl-rsa/tags`: https://quay.io/repository/biocontainers/perl-crypt-openssl-rsa?tab=tags


.. raw:: html

    <script>
        var package = "perl-crypt-openssl-rsa";
        var versions = ["0.37","0.35","0.34","0.33","0.33"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-crypt-openssl-rsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-crypt-openssl-rsa/README.html