:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-files'
.. highlight: bash

perl-test-files
===============

.. conda:recipe:: perl-test-files
   :replaces_section_title:
   :noindex:

   A Test\:\:Builder based module to ease testing with files and dirs

   :homepage: http://metacpan.org/pod/Test::Files
   :license: unknown
   :recipe: /`perl-test-files <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-files>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-files/meta.yaml>`_

   


.. conda:package:: perl-test-files

   |downloads_perl-test-files| |docker_perl-test-files|

   :versions:
      
      

      ``0.15-0``,  ``0.14-3``,  ``0.14-2``,  ``0.14-1``,  ``0.14-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-algorithm-diff: 
   :depends perl-test-builder-tester: 
   :depends perl-text-diff: 
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

      mamba install perl-test-files

   and update with::

      mamba update perl-test-files

  To create a new environment, run::

      mamba create --name myenvname perl-test-files

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test-files:<tag>

   (see `perl-test-files/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-files| image:: https://img.shields.io/conda/dn/bioconda/perl-test-files.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-files
   :alt:   (downloads)
.. |docker_perl-test-files| image:: https://quay.io/repository/biocontainers/perl-test-files/status
   :target: https://quay.io/repository/biocontainers/perl-test-files
.. _`perl-test-files/tags`: https://quay.io/repository/biocontainers/perl-test-files?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-files";
        var versions = ["0.15","0.14","0.14","0.14","0.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-files/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-files/README.html