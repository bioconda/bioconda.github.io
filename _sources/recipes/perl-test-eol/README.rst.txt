:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-eol'
.. highlight: bash

perl-test-eol
=============

.. conda:recipe:: perl-test-eol
   :replaces_section_title:
   :noindex:

   Check the correct line endings in your project

   :homepage: http://metacpan.org/release/Test-EOL
   :license: perl_5
   :recipe: /`perl-test-eol <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-eol>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-eol/meta.yaml>`_

   


.. conda:package:: perl-test-eol

   |downloads_perl-test-eol| |docker_perl-test-eol|

   :versions:
      
      

      ``2.02-0``,  ``2.00-1``,  ``2.00-0``,  ``1.6-2``,  ``1.6-1``,  ``1.6-0``

      

   
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

      mamba install perl-test-eol

   and update with::

      mamba update perl-test-eol

  To create a new environment, run::

      mamba create --name myenvname perl-test-eol

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test-eol:<tag>

   (see `perl-test-eol/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-eol| image:: https://img.shields.io/conda/dn/bioconda/perl-test-eol.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-eol
   :alt:   (downloads)
.. |docker_perl-test-eol| image:: https://quay.io/repository/biocontainers/perl-test-eol/status
   :target: https://quay.io/repository/biocontainers/perl-test-eol
.. _`perl-test-eol/tags`: https://quay.io/repository/biocontainers/perl-test-eol?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-eol";
        var versions = ["2.02","2.00","2.00","1.6","1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-eol/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-eol/README.html