:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-notabs'
.. highlight: bash

perl-test-notabs
================

.. conda:recipe:: perl-test-notabs
   :replaces_section_title:
   :noindex:

   Check the presence of tabs in your project

   :homepage: http://metacpan.org/pod/Test-NoTabs
   :license: perl_5
   :recipe: /`perl-test-notabs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-notabs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-notabs/meta.yaml>`_

   


.. conda:package:: perl-test-notabs

   |downloads_perl-test-notabs| |docker_perl-test-notabs|

   :versions:
      
      

      ``2.02-1``,  ``2.02-0``,  ``1.4-2``,  ``1.4-1``,  ``1.4-0``

      

   
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

      mamba install perl-test-notabs

   and update with::

      mamba update perl-test-notabs

  To create a new environment, run::

      mamba create --name myenvname perl-test-notabs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test-notabs:<tag>

   (see `perl-test-notabs/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-notabs| image:: https://img.shields.io/conda/dn/bioconda/perl-test-notabs.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-notabs
   :alt:   (downloads)
.. |docker_perl-test-notabs| image:: https://quay.io/repository/biocontainers/perl-test-notabs/status
   :target: https://quay.io/repository/biocontainers/perl-test-notabs
.. _`perl-test-notabs/tags`: https://quay.io/repository/biocontainers/perl-test-notabs?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-notabs";
        var versions = ["2.02","2.02","1.4","1.4","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-notabs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-notabs/README.html