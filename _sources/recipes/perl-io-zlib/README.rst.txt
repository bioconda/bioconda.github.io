:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-io-zlib'
.. highlight: bash

perl-io-zlib
============

.. conda:recipe:: perl-io-zlib
   :replaces_section_title:
   :noindex:

   IO\:\: style interface to Compress\:\:Zlib

   :homepage: http://metacpan.org/pod/IO::Zlib
   :license: unknown
   :recipe: /`perl-io-zlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-zlib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-zlib/meta.yaml>`_

   


.. conda:package:: perl-io-zlib

   |downloads_perl-io-zlib| |docker_perl-io-zlib|

   :versions:
      
      

      ``1.14-0``,  ``1.12-0``,  ``1.11-0``,  ``1.10-3``,  ``1.10-2``,  ``1.10-1``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-io-zlib

   and update with::

      mamba update perl-io-zlib

  To create a new environment, run::

      mamba create --name myenvname perl-io-zlib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-io-zlib:<tag>

   (see `perl-io-zlib/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-io-zlib| image:: https://img.shields.io/conda/dn/bioconda/perl-io-zlib.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-io-zlib
   :alt:   (downloads)
.. |docker_perl-io-zlib| image:: https://quay.io/repository/biocontainers/perl-io-zlib/status
   :target: https://quay.io/repository/biocontainers/perl-io-zlib
.. _`perl-io-zlib/tags`: https://quay.io/repository/biocontainers/perl-io-zlib?tab=tags


.. raw:: html

    <script>
        var package = "perl-io-zlib";
        var versions = ["1.14","1.12","1.11","1.10","1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-zlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-zlib/README.html