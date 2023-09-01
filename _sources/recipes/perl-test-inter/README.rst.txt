:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-inter'
.. highlight: bash

perl-test-inter
===============

.. conda:recipe:: perl-test-inter
   :replaces_section_title:
   :noindex:

   framework for more readable interactive test scripts

   :homepage: http://metacpan.org/pod/Test::Inter
   :license: perl_5
   :recipe: /`perl-test-inter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-inter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-inter/meta.yaml>`_

   


.. conda:package:: perl-test-inter

   |downloads_perl-test-inter| |docker_perl-test-inter|

   :versions:
      
      

      ``1.10-0``,  ``1.09-1``,  ``1.09-0``,  ``1.07-0``,  ``1.06-1``,  ``1.06-0``

      

   
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

      mamba install perl-test-inter

   and update with::

      mamba update perl-test-inter

  To create a new environment, run::

      mamba create --name myenvname perl-test-inter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test-inter:<tag>

   (see `perl-test-inter/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-inter| image:: https://img.shields.io/conda/dn/bioconda/perl-test-inter.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-inter
   :alt:   (downloads)
.. |docker_perl-test-inter| image:: https://quay.io/repository/biocontainers/perl-test-inter/status
   :target: https://quay.io/repository/biocontainers/perl-test-inter
.. _`perl-test-inter/tags`: https://quay.io/repository/biocontainers/perl-test-inter?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-inter";
        var versions = ["1.10","1.09","1.09","1.07","1.06"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-inter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-inter/README.html