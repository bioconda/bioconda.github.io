:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-class-moose'
.. highlight: bash

perl-test-class-moose
=====================

.. conda:recipe:: perl-test-class-moose
   :replaces_section_title:
   :noindex:

   Serious testing for serious Perl.

   :homepage: https://metacpan.org/release/Test-Class-Moose
   :license: Perl_5
   :recipe: /`perl-test-class-moose <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-class-moose>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-class-moose/meta.yaml>`_

   


.. conda:package:: perl-test-class-moose

   |downloads_perl-test-class-moose| |docker_perl-test-class-moose|

   :versions:
      
      

      ``1.00-0``,  ``0.99-0``,  ``0.96-2``,  ``0.96-1``,  ``0.96-0``,  ``0.95-0``,  ``0.94-0``,  ``0.80-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-carp: 
   :depends perl-class-load: 
   :depends perl-devel-overloadinfo: 
   :depends perl-eval-closure: 
   :depends perl-exporter: 
   :depends perl-import-into: 
   :depends perl-json-maybexs: 
   :depends perl-list-someutils: 
   :depends perl-module-runtime: 
   :depends perl-module-util: 
   :depends perl-moose: 
   :depends perl-moosex-getopt: 
   :depends perl-mro-compat: 
   :depends perl-namespace-autoclean: 
   :depends perl-package-deprecationmanager: 
   :depends perl-parallel-forkmanager: 
   :depends perl-sub-attribute: 
   :depends perl-test-most: 
   :depends perl-test-simple: 
   :depends perl-try-tiny: 
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

      mamba install perl-test-class-moose

   and update with::

      mamba update perl-test-class-moose

  To create a new environment, run::

      mamba create --name myenvname perl-test-class-moose

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test-class-moose:<tag>

   (see `perl-test-class-moose/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-class-moose| image:: https://img.shields.io/conda/dn/bioconda/perl-test-class-moose.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-class-moose
   :alt:   (downloads)
.. |docker_perl-test-class-moose| image:: https://quay.io/repository/biocontainers/perl-test-class-moose/status
   :target: https://quay.io/repository/biocontainers/perl-test-class-moose
.. _`perl-test-class-moose/tags`: https://quay.io/repository/biocontainers/perl-test-class-moose?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-class-moose";
        var versions = ["1.00","0.99","0.96","0.96","0.96"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-class-moose/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-class-moose/README.html