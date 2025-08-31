:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-parallel-forkmanager'
.. highlight: bash

perl-parallel-forkmanager
=========================

.. conda:recipe:: perl-parallel-forkmanager
   :replaces_section_title:
   :noindex:

   A simple parallel processing fork manager

   :homepage: https://github.com/dluxhu/perl-parallel-forkmanager
   :license: perl_5
   :recipe: /`perl-parallel-forkmanager <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-parallel-forkmanager>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-parallel-forkmanager/meta.yaml>`_

   


.. conda:package:: perl-parallel-forkmanager

   |downloads_perl-parallel-forkmanager| |docker_perl-parallel-forkmanager|

   :versions:
      
      

      ``2.04-0``,  ``2.03-0``,  ``2.02-1``,  ``2.02-0``,  ``1.17-1``,  ``1.17-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-file-path: 
   :depends perl-file-temp: 
   :depends perl-moo: 
   :depends perl-storable: 
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

      mamba install perl-parallel-forkmanager

   and update with::

      mamba update perl-parallel-forkmanager

  To create a new environment, run::

      mamba create --name myenvname perl-parallel-forkmanager

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-parallel-forkmanager:<tag>

   (see `perl-parallel-forkmanager/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-parallel-forkmanager| image:: https://img.shields.io/conda/dn/bioconda/perl-parallel-forkmanager.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-parallel-forkmanager
   :alt:   (downloads)
.. |docker_perl-parallel-forkmanager| image:: https://quay.io/repository/biocontainers/perl-parallel-forkmanager/status
   :target: https://quay.io/repository/biocontainers/perl-parallel-forkmanager
.. _`perl-parallel-forkmanager/tags`: https://quay.io/repository/biocontainers/perl-parallel-forkmanager?tab=tags


.. raw:: html

    <script>
        var package = "perl-parallel-forkmanager";
        var versions = ["2.04","2.03","2.02","2.02","1.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-parallel-forkmanager/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-parallel-forkmanager/README.html