:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-devel-checklib'
.. highlight: bash

perl-devel-checklib
===================

.. conda:recipe:: perl-devel-checklib
   :replaces_section_title:
   :noindex:

   check that a library is available

   :homepage: http://metacpan.org/pod/Devel-CheckLib
   :license: perl_5
   :recipe: /`perl-devel-checklib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-checklib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-checklib/meta.yaml>`_

   


.. conda:package:: perl-devel-checklib

   |downloads_perl-devel-checklib| |docker_perl-devel-checklib|

   :versions:
      
      

      ``1.16-0``,  ``1.14-1``,  ``1.14-0``

      

   
   :depends gcc_linux-64: ``10.*``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
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

      mamba install perl-devel-checklib

   and update with::

      mamba update perl-devel-checklib

  To create a new environment, run::

      mamba create --name myenvname perl-devel-checklib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-devel-checklib:<tag>

   (see `perl-devel-checklib/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-devel-checklib| image:: https://img.shields.io/conda/dn/bioconda/perl-devel-checklib.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-devel-checklib
   :alt:   (downloads)
.. |docker_perl-devel-checklib| image:: https://quay.io/repository/biocontainers/perl-devel-checklib/status
   :target: https://quay.io/repository/biocontainers/perl-devel-checklib
.. _`perl-devel-checklib/tags`: https://quay.io/repository/biocontainers/perl-devel-checklib?tab=tags


.. raw:: html

    <script>
        var package = "perl-devel-checklib";
        var versions = ["1.16","1.14","1.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-devel-checklib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-devel-checklib/README.html