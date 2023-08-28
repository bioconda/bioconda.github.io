:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-fork'
.. highlight: bash

perl-test-fork
==============

.. conda:recipe:: perl-test-fork
   :replaces_section_title:
   :noindex:

   test code which forks

   :homepage: http://metacpan.org/pod/Test::Fork
   :license: perl_5
   :recipe: /`perl-test-fork <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-fork>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-fork/meta.yaml>`_

   


.. conda:package:: perl-test-fork

   |downloads_perl-test-fork| |docker_perl-test-fork|

   :versions:
      
      

      ``0.02-1``,  ``0.02-0``

      

   
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

      mamba install perl-test-fork

   and update with::

      mamba update perl-test-fork

  To create a new environment, run::

      mamba create --name myenvname perl-test-fork

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test-fork:<tag>

   (see `perl-test-fork/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-fork| image:: https://img.shields.io/conda/dn/bioconda/perl-test-fork.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-fork
   :alt:   (downloads)
.. |docker_perl-test-fork| image:: https://quay.io/repository/biocontainers/perl-test-fork/status
   :target: https://quay.io/repository/biocontainers/perl-test-fork
.. _`perl-test-fork/tags`: https://quay.io/repository/biocontainers/perl-test-fork?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-fork";
        var versions = ["0.02","0.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-fork/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-fork/README.html