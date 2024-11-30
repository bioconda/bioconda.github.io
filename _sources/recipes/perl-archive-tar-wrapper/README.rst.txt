:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-archive-tar-wrapper'
.. highlight: bash

perl-archive-tar-wrapper
========================

.. conda:recipe:: perl-archive-tar-wrapper/0.33
   :replaces_section_title:
   :noindex:

   API wrapper around the \'tar\' utility

   :homepage: http://metacpan.org/pod/Archive::Tar::Wrapper
   :license: gpl_3
   :recipe: /`perl-archive-tar-wrapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-archive-tar-wrapper>`_/`0.33 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-archive-tar-wrapper/0.33>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-archive-tar-wrapper/0.33/meta.yaml>`_

   


.. conda:package:: perl-archive-tar-wrapper

   |downloads_perl-archive-tar-wrapper| |docker_perl-archive-tar-wrapper|

   :versions:
      
      

      ``0.33-1``,  ``0.33-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-file-temp: 
   :depends perl-file-which: 
   :depends perl-ipc-run: 
   :depends perl-log-log4perl: 
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

      mamba install perl-archive-tar-wrapper

   and update with::

      mamba update perl-archive-tar-wrapper

  To create a new environment, run::

      mamba create --name myenvname perl-archive-tar-wrapper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-archive-tar-wrapper:<tag>

   (see `perl-archive-tar-wrapper/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-archive-tar-wrapper| image:: https://img.shields.io/conda/dn/bioconda/perl-archive-tar-wrapper.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-archive-tar-wrapper
   :alt:   (downloads)
.. |docker_perl-archive-tar-wrapper| image:: https://quay.io/repository/biocontainers/perl-archive-tar-wrapper/status
   :target: https://quay.io/repository/biocontainers/perl-archive-tar-wrapper
.. _`perl-archive-tar-wrapper/tags`: https://quay.io/repository/biocontainers/perl-archive-tar-wrapper?tab=tags


.. raw:: html

    <script>
        var package = "perl-archive-tar-wrapper";
        var versions = ["0.33","0.33"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-archive-tar-wrapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-archive-tar-wrapper/README.html