:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-more'
.. highlight: bash

perl-test-more
==============

.. conda:recipe:: perl-test-more
   :replaces_section_title:
   :noindex:

   yet another framework for writing test scripts

   :homepage: http://metacpan.org/pod/Test::More
   :license: perl_5
   :recipe: /`perl-test-more <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-more>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-more/meta.yaml>`_

   


.. conda:package:: perl-test-more

   |downloads_perl-test-more| |docker_perl-test-more|

   :versions:
      
      

      ``1.001002-2``,  ``1.001002-1``,  ``1.001002-0``

      

   
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

      mamba install perl-test-more

   and update with::

      mamba update perl-test-more

  To create a new environment, run::

      mamba create --name myenvname perl-test-more

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test-more:<tag>

   (see `perl-test-more/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-more| image:: https://img.shields.io/conda/dn/bioconda/perl-test-more.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-more
   :alt:   (downloads)
.. |docker_perl-test-more| image:: https://quay.io/repository/biocontainers/perl-test-more/status
   :target: https://quay.io/repository/biocontainers/perl-test-more
.. _`perl-test-more/tags`: https://quay.io/repository/biocontainers/perl-test-more?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-more";
        var versions = ["1.001002","1.001002","1.001002"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-more/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-more/README.html