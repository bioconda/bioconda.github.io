:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-tap-harness-env'
.. highlight: bash

perl-tap-harness-env
====================

.. conda:recipe:: perl-tap-harness-env/3.30
   :replaces_section_title:
   :noindex:

   Parsing harness related environmental variables where appropriate

   :homepage: http://metacpan.org/pod/TAP::Harness::Env
   :license: perl_5
   :recipe: /`perl-tap-harness-env <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tap-harness-env>`_/`3.30 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tap-harness-env/3.30>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-tap-harness-env/3.30/meta.yaml>`_

   


.. conda:package:: perl-tap-harness-env

   |downloads_perl-tap-harness-env| |docker_perl-tap-harness-env|

   :versions:
      
      

      ``3.30-2``,  ``3.30-1``,  ``3.30-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
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

      mamba install perl-tap-harness-env

   and update with::

      mamba update perl-tap-harness-env

  To create a new environment, run::

      mamba create --name myenvname perl-tap-harness-env

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-tap-harness-env:<tag>

   (see `perl-tap-harness-env/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-tap-harness-env| image:: https://img.shields.io/conda/dn/bioconda/perl-tap-harness-env.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-tap-harness-env
   :alt:   (downloads)
.. |docker_perl-tap-harness-env| image:: https://quay.io/repository/biocontainers/perl-tap-harness-env/status
   :target: https://quay.io/repository/biocontainers/perl-tap-harness-env
.. _`perl-tap-harness-env/tags`: https://quay.io/repository/biocontainers/perl-tap-harness-env?tab=tags


.. raw:: html

    <script>
        var package = "perl-tap-harness-env";
        var versions = ["3.30","3.30","3.30"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-tap-harness-env/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-tap-harness-env/README.html