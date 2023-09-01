:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-local-lib'
.. highlight: bash

perl-local-lib
==============

.. conda:recipe:: perl-local-lib
   :replaces_section_title:
   :noindex:

   create and use a local lib\/ for perl modules with PERL5LIB

   :homepage: http://metacpan.org/pod/local::lib
   :license: perl_5
   :recipe: /`perl-local-lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-local-lib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-local-lib/meta.yaml>`_

   


.. conda:package:: perl-local-lib

   |downloads_perl-local-lib| |docker_perl-local-lib|

   :versions:
      
      

      ``2.000029-0``,  ``2.000028-0``,  ``2.000024-1``,  ``2.000024-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-extutils-makemaker: 
   :depends perl-module-build: 
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

      mamba install perl-local-lib

   and update with::

      mamba update perl-local-lib

  To create a new environment, run::

      mamba create --name myenvname perl-local-lib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-local-lib:<tag>

   (see `perl-local-lib/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-local-lib| image:: https://img.shields.io/conda/dn/bioconda/perl-local-lib.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-local-lib
   :alt:   (downloads)
.. |docker_perl-local-lib| image:: https://quay.io/repository/biocontainers/perl-local-lib/status
   :target: https://quay.io/repository/biocontainers/perl-local-lib
.. _`perl-local-lib/tags`: https://quay.io/repository/biocontainers/perl-local-lib?tab=tags


.. raw:: html

    <script>
        var package = "perl-local-lib";
        var versions = ["2.000029","2.000028","2.000024","2.000024"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-local-lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-local-lib/README.html