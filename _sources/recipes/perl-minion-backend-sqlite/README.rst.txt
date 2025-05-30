:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-minion-backend-sqlite'
.. highlight: bash

perl-minion-backend-sqlite
==========================

.. conda:recipe:: perl-minion-backend-sqlite
   :replaces_section_title:
   :noindex:

   SQLite backend for Minion job queue

   :homepage: https://github.com/Grinnz/Minion-Backend-SQLite
   :license: Artistic-2.0
   :recipe: /`perl-minion-backend-sqlite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-minion-backend-sqlite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-minion-backend-sqlite/meta.yaml>`_

   


.. conda:package:: perl-minion-backend-sqlite

   |downloads_perl-minion-backend-sqlite| |docker_perl-minion-backend-sqlite|

   :versions:
      
      

      ``5.0.7-0``

      

   
   :depends perl: ``>5.32*``
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-dbd-sqlite: 
   :depends perl-dbi: 
   :depends perl-minion: 
   :depends perl-mojo-sqlite: 
   :depends perl-mojolicious: 
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

      mamba install perl-minion-backend-sqlite

   and update with::

      mamba update perl-minion-backend-sqlite

  To create a new environment, run::

      mamba create --name myenvname perl-minion-backend-sqlite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-minion-backend-sqlite:<tag>

   (see `perl-minion-backend-sqlite/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-minion-backend-sqlite| image:: https://img.shields.io/conda/dn/bioconda/perl-minion-backend-sqlite.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-minion-backend-sqlite
   :alt:   (downloads)
.. |docker_perl-minion-backend-sqlite| image:: https://quay.io/repository/biocontainers/perl-minion-backend-sqlite/status
   :target: https://quay.io/repository/biocontainers/perl-minion-backend-sqlite
.. _`perl-minion-backend-sqlite/tags`: https://quay.io/repository/biocontainers/perl-minion-backend-sqlite?tab=tags


.. raw:: html

    <script>
        var package = "perl-minion-backend-sqlite";
        var versions = ["5.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-minion-backend-sqlite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-minion-backend-sqlite/README.html