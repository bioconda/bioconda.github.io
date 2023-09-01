:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test2-suite'
.. highlight: bash

perl-test2-suite
================

.. conda:recipe:: perl-test2-suite
   :replaces_section_title:
   :noindex:

   Distribution with a rich set of tools built upon the Test2 framework.

   :homepage: http://metacpan.org/pod/Test2-Suite
   :license: perl_5
   :recipe: /`perl-test2-suite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test2-suite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test2-suite/meta.yaml>`_

   


.. conda:package:: perl-test2-suite

   |downloads_perl-test2-suite| |docker_perl-test2-suite|

   :versions:
      
      

      ``0.000145-0``,  ``0.000144-0``,  ``0.000117-0``,  ``0.000116-0``,  ``0.000115-0``,  ``0.000061-1``,  ``0.000061-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-importer: 
   :depends perl-scope-guard: 
   :depends perl-sub-info: 
   :depends perl-term-table: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-test2-suite

   and update with::

      mamba update perl-test2-suite

  To create a new environment, run::

      mamba create --name myenvname perl-test2-suite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test2-suite:<tag>

   (see `perl-test2-suite/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test2-suite| image:: https://img.shields.io/conda/dn/bioconda/perl-test2-suite.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test2-suite
   :alt:   (downloads)
.. |docker_perl-test2-suite| image:: https://quay.io/repository/biocontainers/perl-test2-suite/status
   :target: https://quay.io/repository/biocontainers/perl-test2-suite
.. _`perl-test2-suite/tags`: https://quay.io/repository/biocontainers/perl-test2-suite?tab=tags


.. raw:: html

    <script>
        var package = "perl-test2-suite";
        var versions = ["0.000145","0.000144","0.000117","0.000116","0.000115"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test2-suite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test2-suite/README.html