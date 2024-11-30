:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-io-string'
.. highlight: bash

perl-io-string
==============

.. conda:recipe:: perl-io-string
   :replaces_section_title:
   :noindex:

   Emulate file interface for in\-core strings

   :homepage: http://metacpan.org/pod/IO-String
   :license: unknown
   :recipe: /`perl-io-string <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-string>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-io-string/meta.yaml>`_

   


.. conda:package:: perl-io-string

   |downloads_perl-io-string| |docker_perl-io-string|

   :versions:
      
      

      ``1.08-4``,  ``1.08-3``,  ``1.08-2``,  ``1.08-1``,  ``1.08-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-io-string

   and update with::

      mamba update perl-io-string

  To create a new environment, run::

      mamba create --name myenvname perl-io-string

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-io-string:<tag>

   (see `perl-io-string/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-io-string| image:: https://img.shields.io/conda/dn/bioconda/perl-io-string.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-io-string
   :alt:   (downloads)
.. |docker_perl-io-string| image:: https://quay.io/repository/biocontainers/perl-io-string/status
   :target: https://quay.io/repository/biocontainers/perl-io-string
.. _`perl-io-string/tags`: https://quay.io/repository/biocontainers/perl-io-string?tab=tags


.. raw:: html

    <script>
        var package = "perl-io-string";
        var versions = ["1.08","1.08","1.08","1.08","1.08"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-io-string/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-io-string/README.html