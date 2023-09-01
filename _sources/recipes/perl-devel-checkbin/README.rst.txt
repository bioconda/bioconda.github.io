:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-devel-checkbin'
.. highlight: bash

perl-devel-checkbin
===================

.. conda:recipe:: perl-devel-checkbin
   :replaces_section_title:
   :noindex:

   check that a command is available

   :homepage: https://metacpan.org/pod/Devel::CheckBin
   :license: perl_5
   :recipe: /`perl-devel-checkbin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-checkbin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-devel-checkbin/meta.yaml>`_

   


.. conda:package:: perl-devel-checkbin

   |downloads_perl-devel-checkbin| |docker_perl-devel-checkbin|

   :versions:
      
      

      ``0.04-3``,  ``0.04-2``,  ``0.04-1``,  ``0.04-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-devel-checkbin

   and update with::

      mamba update perl-devel-checkbin

  To create a new environment, run::

      mamba create --name myenvname perl-devel-checkbin

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-devel-checkbin:<tag>

   (see `perl-devel-checkbin/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-devel-checkbin| image:: https://img.shields.io/conda/dn/bioconda/perl-devel-checkbin.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-devel-checkbin
   :alt:   (downloads)
.. |docker_perl-devel-checkbin| image:: https://quay.io/repository/biocontainers/perl-devel-checkbin/status
   :target: https://quay.io/repository/biocontainers/perl-devel-checkbin
.. _`perl-devel-checkbin/tags`: https://quay.io/repository/biocontainers/perl-devel-checkbin?tab=tags


.. raw:: html

    <script>
        var package = "perl-devel-checkbin";
        var versions = ["0.04","0.04","0.04","0.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-devel-checkbin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-devel-checkbin/README.html