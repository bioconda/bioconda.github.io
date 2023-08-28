:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-builder-tester'
.. highlight: bash

perl-test-builder-tester
========================

.. conda:recipe:: perl-test-builder-tester
   :replaces_section_title:
   :noindex:

   test testsuites that have been built with Test\:\:Builder

   :homepage: http://metacpan.org/pod/Test::Builder::Tester
   :license: unknown
   :recipe: /`perl-test-builder-tester <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-builder-tester>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-builder-tester/meta.yaml>`_

   


.. conda:package:: perl-test-builder-tester

   |downloads_perl-test-builder-tester| |docker_perl-test-builder-tester|

   :versions:
      
      

      ``1.23_002-2``,  ``1.23_002-1``,  ``1.23_002-0``

      

   
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

      mamba install perl-test-builder-tester

   and update with::

      mamba update perl-test-builder-tester

  To create a new environment, run::

      mamba create --name myenvname perl-test-builder-tester

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test-builder-tester:<tag>

   (see `perl-test-builder-tester/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-builder-tester| image:: https://img.shields.io/conda/dn/bioconda/perl-test-builder-tester.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-builder-tester
   :alt:   (downloads)
.. |docker_perl-test-builder-tester| image:: https://quay.io/repository/biocontainers/perl-test-builder-tester/status
   :target: https://quay.io/repository/biocontainers/perl-test-builder-tester
.. _`perl-test-builder-tester/tags`: https://quay.io/repository/biocontainers/perl-test-builder-tester?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-builder-tester";
        var versions = ["1.23_002","1.23_002","1.23_002"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-builder-tester/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-builder-tester/README.html