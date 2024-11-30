:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-prereq'
.. highlight: bash

perl-test-prereq
================

.. conda:recipe:: perl-test-prereq/2.002
   :replaces_section_title:
   :noindex:

   check if Makefile.PL has the right pre\-requisites

   :homepage: https://github.com/briandfoy/test-prereq
   :license: artistic_2
   :recipe: /`perl-test-prereq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-prereq>`_/`2.002 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-prereq/2.002>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-prereq/2.002/meta.yaml>`_

   


.. conda:package:: perl-test-prereq

   |downloads_perl-test-prereq| |docker_perl-test-prereq|

   :versions:
      
      

      ``2.002-4``,  ``2.002-3``,  ``2.002-1``,  ``2.002-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-lib: 
   :depends perl-module-build: 
   :depends perl-module-extract-use: 
   :depends perl-parent: 
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

      mamba install perl-test-prereq

   and update with::

      mamba update perl-test-prereq

  To create a new environment, run::

      mamba create --name myenvname perl-test-prereq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test-prereq:<tag>

   (see `perl-test-prereq/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-prereq| image:: https://img.shields.io/conda/dn/bioconda/perl-test-prereq.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-prereq
   :alt:   (downloads)
.. |docker_perl-test-prereq| image:: https://quay.io/repository/biocontainers/perl-test-prereq/status
   :target: https://quay.io/repository/biocontainers/perl-test-prereq
.. _`perl-test-prereq/tags`: https://quay.io/repository/biocontainers/perl-test-prereq?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-prereq";
        var versions = ["2.002","2.002","2.002","2.002"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-prereq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-prereq/README.html