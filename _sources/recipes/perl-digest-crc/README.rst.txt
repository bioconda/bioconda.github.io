:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-digest-crc'
.. highlight: bash

perl-digest-crc
===============

.. conda:recipe:: perl-digest-crc/0.23
   :replaces_section_title:
   :noindex:

   Generic CRC functions

   :homepage: http://metacpan.org/pod/Digest::CRC
   :license: PUBLIC-DOMAIN
   :recipe: /`perl-digest-crc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-crc>`_/`0.23 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-crc/0.23>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-crc/0.23/meta.yaml>`_

   


.. conda:package:: perl-digest-crc

   |downloads_perl-digest-crc| |docker_perl-digest-crc|

   :versions:
      
      

      ``0.23-4``,  ``0.23-3``,  ``0.23-2``,  ``0.23-1``,  ``0.23-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install perl-digest-crc

   and update with::

      mamba update perl-digest-crc

  To create a new environment, run::

      mamba create --name myenvname perl-digest-crc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-digest-crc:<tag>

   (see `perl-digest-crc/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-digest-crc| image:: https://img.shields.io/conda/dn/bioconda/perl-digest-crc.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-digest-crc
   :alt:   (downloads)
.. |docker_perl-digest-crc| image:: https://quay.io/repository/biocontainers/perl-digest-crc/status
   :target: https://quay.io/repository/biocontainers/perl-digest-crc
.. _`perl-digest-crc/tags`: https://quay.io/repository/biocontainers/perl-digest-crc?tab=tags


.. raw:: html

    <script>
        var package = "perl-digest-crc";
        var versions = ["0.23","0.23","0.23","0.23","0.23"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-digest-crc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-digest-crc/README.html