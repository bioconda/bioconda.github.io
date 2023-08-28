:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-exec'
.. highlight: bash

perl-test-exec
==============

.. conda:recipe:: perl-test-exec
   :replaces_section_title:
   :noindex:

   Test that some code calls exec without terminating testing

   :homepage: https://metacpan.org/pod/Test::Exec
   :license: perl_5
   :recipe: /`perl-test-exec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-exec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-exec/meta.yaml>`_

   


.. conda:package:: perl-test-exec

   |downloads_perl-test-exec| |docker_perl-test-exec|

   :versions:
      
      

      ``0.04-2``,  ``0.04-1``,  ``0.04-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-return-multilevel: 
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

      mamba install perl-test-exec

   and update with::

      mamba update perl-test-exec

  To create a new environment, run::

      mamba create --name myenvname perl-test-exec

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test-exec:<tag>

   (see `perl-test-exec/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-exec| image:: https://img.shields.io/conda/dn/bioconda/perl-test-exec.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-exec
   :alt:   (downloads)
.. |docker_perl-test-exec| image:: https://quay.io/repository/biocontainers/perl-test-exec/status
   :target: https://quay.io/repository/biocontainers/perl-test-exec
.. _`perl-test-exec/tags`: https://quay.io/repository/biocontainers/perl-test-exec?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-exec";
        var versions = ["0.04","0.04","0.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-exec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-exec/README.html