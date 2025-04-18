:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-url-encode'
.. highlight: bash

perl-url-encode
===============

.. conda:recipe:: perl-url-encode
   :replaces_section_title:
   :noindex:

   Encoding and decoding of application\/x\-www\-form\-urlencoded encoding.

   :homepage: http://metacpan.org/pod/URL-Encode
   :license: perl_5
   :recipe: /`perl-url-encode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-url-encode>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-url-encode/meta.yaml>`_

   


.. conda:package:: perl-url-encode

   |downloads_perl-url-encode| |docker_perl-url-encode|

   :versions:
      
      

      ``0.03-1``,  ``0.03-0``

      

   
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

      mamba install perl-url-encode

   and update with::

      mamba update perl-url-encode

  To create a new environment, run::

      mamba create --name myenvname perl-url-encode

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-url-encode:<tag>

   (see `perl-url-encode/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-url-encode| image:: https://img.shields.io/conda/dn/bioconda/perl-url-encode.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-url-encode
   :alt:   (downloads)
.. |docker_perl-url-encode| image:: https://quay.io/repository/biocontainers/perl-url-encode/status
   :target: https://quay.io/repository/biocontainers/perl-url-encode
.. _`perl-url-encode/tags`: https://quay.io/repository/biocontainers/perl-url-encode?tab=tags


.. raw:: html

    <script>
        var package = "perl-url-encode";
        var versions = ["0.03","0.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-url-encode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-url-encode/README.html