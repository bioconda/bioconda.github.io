:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-requiresinternet'
.. highlight: bash

perl-test-requiresinternet
==========================

.. conda:recipe:: perl-test-requiresinternet
   :replaces_section_title:
   :noindex:

   Easily test network connectivity

   :homepage: https://metacpan.org/dist/Test-RequiresInternet
   :license: perl_5
   :recipe: /`perl-test-requiresinternet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-requiresinternet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-requiresinternet/meta.yaml>`_

   


.. conda:package:: perl-test-requiresinternet

   |downloads_perl-test-requiresinternet| |docker_perl-test-requiresinternet|

   :versions:
      
      

      ``0.05-1``,  ``0.05-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-socket: 
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

      mamba install perl-test-requiresinternet

   and update with::

      mamba update perl-test-requiresinternet

  To create a new environment, run::

      mamba create --name myenvname perl-test-requiresinternet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test-requiresinternet:<tag>

   (see `perl-test-requiresinternet/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-requiresinternet| image:: https://img.shields.io/conda/dn/bioconda/perl-test-requiresinternet.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-requiresinternet
   :alt:   (downloads)
.. |docker_perl-test-requiresinternet| image:: https://quay.io/repository/biocontainers/perl-test-requiresinternet/status
   :target: https://quay.io/repository/biocontainers/perl-test-requiresinternet
.. _`perl-test-requiresinternet/tags`: https://quay.io/repository/biocontainers/perl-test-requiresinternet?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-requiresinternet";
        var versions = ["0.05","0.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-requiresinternet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-requiresinternet/README.html