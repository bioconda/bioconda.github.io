:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-trap'
.. highlight: bash

perl-test-trap
==============

.. conda:recipe:: perl-test-trap
   :replaces_section_title:
   :noindex:

   Trap exit codes\, exceptions\, output\, etc.

   :homepage: http://metacpan.org/pod/Test::Trap
   :license: perl_5
   :recipe: /`perl-test-trap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-trap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-trap/meta.yaml>`_

   


.. conda:package:: perl-test-trap

   |downloads_perl-test-trap| |docker_perl-test-trap|

   :versions:
      
      

      ``0.3.3-1``,  ``0.3.3-0``,  ``0.3.2-4``,  ``0.3.2-3``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-base: 
   :depends perl-carp: 
   :depends perl-constant: 
   :depends perl-data-dump: 
   :depends perl-exporter: 
   :depends perl-file-temp: 
   :depends perl-lib: 
   :depends perl-version: 
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

      mamba install perl-test-trap

   and update with::

      mamba update perl-test-trap

  To create a new environment, run::

      mamba create --name myenvname perl-test-trap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test-trap:<tag>

   (see `perl-test-trap/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-trap| image:: https://img.shields.io/conda/dn/bioconda/perl-test-trap.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-trap
   :alt:   (downloads)
.. |docker_perl-test-trap| image:: https://quay.io/repository/biocontainers/perl-test-trap/status
   :target: https://quay.io/repository/biocontainers/perl-test-trap
.. _`perl-test-trap/tags`: https://quay.io/repository/biocontainers/perl-test-trap?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-trap";
        var versions = ["0.3.3","0.3.3","0.3.2","0.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-trap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-trap/README.html