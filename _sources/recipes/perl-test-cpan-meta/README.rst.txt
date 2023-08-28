:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-cpan-meta'
.. highlight: bash

perl-test-cpan-meta
===================

.. conda:recipe:: perl-test-cpan-meta
   :replaces_section_title:
   :noindex:

   Validate your CPAN META.json files

   :homepage: http://metacpan.org/pod/Test-CPAN-Meta
   :license: artistic_2
   :recipe: /`perl-test-cpan-meta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-cpan-meta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-cpan-meta/meta.yaml>`_

   


.. conda:package:: perl-test-cpan-meta

   |downloads_perl-test-cpan-meta| |docker_perl-test-cpan-meta|

   :versions:
      
      

      ``0.25-3``,  ``0.25-2``,  ``0.25-1``,  ``0.25-0``

      

   
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

      mamba install perl-test-cpan-meta

   and update with::

      mamba update perl-test-cpan-meta

  To create a new environment, run::

      mamba create --name myenvname perl-test-cpan-meta

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test-cpan-meta:<tag>

   (see `perl-test-cpan-meta/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-cpan-meta| image:: https://img.shields.io/conda/dn/bioconda/perl-test-cpan-meta.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-cpan-meta
   :alt:   (downloads)
.. |docker_perl-test-cpan-meta| image:: https://quay.io/repository/biocontainers/perl-test-cpan-meta/status
   :target: https://quay.io/repository/biocontainers/perl-test-cpan-meta
.. _`perl-test-cpan-meta/tags`: https://quay.io/repository/biocontainers/perl-test-cpan-meta?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-cpan-meta";
        var versions = ["0.25","0.25","0.25","0.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-cpan-meta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-cpan-meta/README.html