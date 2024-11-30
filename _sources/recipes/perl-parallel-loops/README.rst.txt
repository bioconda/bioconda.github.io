:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-parallel-loops'
.. highlight: bash

perl-parallel-loops
===================

.. conda:recipe:: perl-parallel-loops
   :replaces_section_title:
   :noindex:

   Execute loops using parallel forked subprocesses

   :homepage: http://metacpan.org/pod/Parallel::Loops
   :license: perl_5
   :recipe: /`perl-parallel-loops <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-parallel-loops>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-parallel-loops/meta.yaml>`_

   


.. conda:package:: perl-parallel-loops

   |downloads_perl-parallel-loops| |docker_perl-parallel-loops|

   :versions:
      
      

      ``0.12-0``,  ``0.10-1``,  ``0.10-0``,  ``0.08-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-parallel-forkmanager: 
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

      mamba install perl-parallel-loops

   and update with::

      mamba update perl-parallel-loops

  To create a new environment, run::

      mamba create --name myenvname perl-parallel-loops

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-parallel-loops:<tag>

   (see `perl-parallel-loops/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-parallel-loops| image:: https://img.shields.io/conda/dn/bioconda/perl-parallel-loops.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-parallel-loops
   :alt:   (downloads)
.. |docker_perl-parallel-loops| image:: https://quay.io/repository/biocontainers/perl-parallel-loops/status
   :target: https://quay.io/repository/biocontainers/perl-parallel-loops
.. _`perl-parallel-loops/tags`: https://quay.io/repository/biocontainers/perl-parallel-loops?tab=tags


.. raw:: html

    <script>
        var package = "perl-parallel-loops";
        var versions = ["0.12","0.10","0.10","0.08"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-parallel-loops/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-parallel-loops/README.html