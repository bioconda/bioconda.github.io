:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-mldbm-sync'
.. highlight: bash

perl-mldbm-sync
===============

.. conda:recipe:: perl-mldbm-sync
   :replaces_section_title:
   :noindex:

   safe concurrent access to MLDBM databases

   :homepage: http://metacpan.org/pod/MLDBM-Sync
   :license: unknown
   :recipe: /`perl-mldbm-sync <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mldbm-sync>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-mldbm-sync/meta.yaml>`_

   


.. conda:package:: perl-mldbm-sync

   |downloads_perl-mldbm-sync| |docker_perl-mldbm-sync|

   :versions:
      
      

      ``0.30-2``,  ``0.30-1``,  ``0.30-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-mldbm: 
   :depends perl-tie-cache: 
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

      mamba install perl-mldbm-sync

   and update with::

      mamba update perl-mldbm-sync

  To create a new environment, run::

      mamba create --name myenvname perl-mldbm-sync

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-mldbm-sync:<tag>

   (see `perl-mldbm-sync/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-mldbm-sync| image:: https://img.shields.io/conda/dn/bioconda/perl-mldbm-sync.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-mldbm-sync
   :alt:   (downloads)
.. |docker_perl-mldbm-sync| image:: https://quay.io/repository/biocontainers/perl-mldbm-sync/status
   :target: https://quay.io/repository/biocontainers/perl-mldbm-sync
.. _`perl-mldbm-sync/tags`: https://quay.io/repository/biocontainers/perl-mldbm-sync?tab=tags


.. raw:: html

    <script>
        var package = "perl-mldbm-sync";
        var versions = ["0.30","0.30","0.30"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-mldbm-sync/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-mldbm-sync/README.html