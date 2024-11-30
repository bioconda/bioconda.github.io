:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-unit-lite'
.. highlight: bash

perl-test-unit-lite
===================

.. conda:recipe:: perl-test-unit-lite/0.1202
   :replaces_section_title:
   :noindex:

   Unit testing without external dependencies

   :homepage: http://metacpan.org/pod/Test::Unit::Lite
   :license: perl_5
   :recipe: /`perl-test-unit-lite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-unit-lite>`_/`0.1202 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-unit-lite/0.1202>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-unit-lite/0.1202/meta.yaml>`_

   


.. conda:package:: perl-test-unit-lite

   |downloads_perl-test-unit-lite| |docker_perl-test-unit-lite|

   :versions:
      
      

      ``0.1202-2``,  ``0.1202-1``,  ``0.1202-0``

      

   
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

      mamba install perl-test-unit-lite

   and update with::

      mamba update perl-test-unit-lite

  To create a new environment, run::

      mamba create --name myenvname perl-test-unit-lite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test-unit-lite:<tag>

   (see `perl-test-unit-lite/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-unit-lite| image:: https://img.shields.io/conda/dn/bioconda/perl-test-unit-lite.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-unit-lite
   :alt:   (downloads)
.. |docker_perl-test-unit-lite| image:: https://quay.io/repository/biocontainers/perl-test-unit-lite/status
   :target: https://quay.io/repository/biocontainers/perl-test-unit-lite
.. _`perl-test-unit-lite/tags`: https://quay.io/repository/biocontainers/perl-test-unit-lite?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-unit-lite";
        var versions = ["0.1202","0.1202","0.1202"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-unit-lite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-unit-lite/README.html