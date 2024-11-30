:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-file'
.. highlight: bash

perl-test-file
==============

.. conda:recipe:: perl-test-file
   :replaces_section_title:
   :noindex:

   test file attributes

   :homepage: https://github.com/briandfoy/test-file
   :license: perl_5
   :recipe: /`perl-test-file <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-file>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-file/meta.yaml>`_

   


.. conda:package:: perl-test-file

   |downloads_perl-test-file| |docker_perl-test-file|

   :versions:
      
      

      ``1.993-0``,  ``1.992-0``,  ``1.991-0``,  ``1.443-1``,  ``1.443-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-test-file

   and update with::

      mamba update perl-test-file

  To create a new environment, run::

      mamba create --name myenvname perl-test-file

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test-file:<tag>

   (see `perl-test-file/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-file| image:: https://img.shields.io/conda/dn/bioconda/perl-test-file.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-file
   :alt:   (downloads)
.. |docker_perl-test-file| image:: https://quay.io/repository/biocontainers/perl-test-file/status
   :target: https://quay.io/repository/biocontainers/perl-test-file
.. _`perl-test-file/tags`: https://quay.io/repository/biocontainers/perl-test-file?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-file";
        var versions = ["1.993","1.992","1.991","1.443","1.443"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-file/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-file/README.html