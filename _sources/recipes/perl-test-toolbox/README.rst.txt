:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-toolbox'
.. highlight: bash

perl-test-toolbox
=================

.. conda:recipe:: perl-test-toolbox/0.4
   :replaces_section_title:
   :noindex:

   Test\:\:Toolbox \- tools for testing

   :homepage: http://metacpan.org/pod/Test::Toolbox
   :license: perl_5
   :recipe: /`perl-test-toolbox <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-toolbox>`_/`0.4 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-toolbox/0.4>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-toolbox/0.4/meta.yaml>`_

   


.. conda:package:: perl-test-toolbox

   |downloads_perl-test-toolbox| |docker_perl-test-toolbox|

   :versions:
      
      

      ``0.4-2``,  ``0.4-1``,  ``0.4-0``

      

   
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

      mamba install perl-test-toolbox

   and update with::

      mamba update perl-test-toolbox

  To create a new environment, run::

      mamba create --name myenvname perl-test-toolbox

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test-toolbox:<tag>

   (see `perl-test-toolbox/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-toolbox| image:: https://img.shields.io/conda/dn/bioconda/perl-test-toolbox.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-toolbox
   :alt:   (downloads)
.. |docker_perl-test-toolbox| image:: https://quay.io/repository/biocontainers/perl-test-toolbox/status
   :target: https://quay.io/repository/biocontainers/perl-test-toolbox
.. _`perl-test-toolbox/tags`: https://quay.io/repository/biocontainers/perl-test-toolbox?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-toolbox";
        var versions = ["0.4","0.4","0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-toolbox/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-toolbox/README.html