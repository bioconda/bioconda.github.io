:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-digest-md5-file'
.. highlight: bash

perl-digest-md5-file
====================

.. conda:recipe:: perl-digest-md5-file
   :replaces_section_title:
   :noindex:

   Perl extension for getting MD5 sums for files and urls.

   :homepage: http://metacpan.org/pod/Digest::MD5::File
   :license: unknown
   :recipe: /`perl-digest-md5-file <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-md5-file>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-digest-md5-file/meta.yaml>`_

   


.. conda:package:: perl-digest-md5-file

   |downloads_perl-digest-md5-file| |docker_perl-digest-md5-file|

   :versions:
      
      

      ``0.08-3``,  ``0.08-2``,  ``0.08-1``,  ``0.08-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-digest-md5: 
   :depends perl-http-message: ``>=6.18``
   :depends perl-libwww-perl: ``>=6.39``
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

      mamba install perl-digest-md5-file

   and update with::

      mamba update perl-digest-md5-file

  To create a new environment, run::

      mamba create --name myenvname perl-digest-md5-file

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-digest-md5-file:<tag>

   (see `perl-digest-md5-file/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-digest-md5-file| image:: https://img.shields.io/conda/dn/bioconda/perl-digest-md5-file.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-digest-md5-file
   :alt:   (downloads)
.. |docker_perl-digest-md5-file| image:: https://quay.io/repository/biocontainers/perl-digest-md5-file/status
   :target: https://quay.io/repository/biocontainers/perl-digest-md5-file
.. _`perl-digest-md5-file/tags`: https://quay.io/repository/biocontainers/perl-digest-md5-file?tab=tags


.. raw:: html

    <script>
        var package = "perl-digest-md5-file";
        var versions = ["0.08","0.08","0.08","0.08"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-digest-md5-file/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-digest-md5-file/README.html