:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-script'
.. highlight: bash

perl-test-script
================

.. conda:recipe:: perl-test-script
   :replaces_section_title:
   :noindex:

   Basic cross\-platform tests for scripts

   :homepage: https://metacpan.org/pod/Test::Script
   :license: perl_5
   :recipe: /`perl-test-script <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-script>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-script/meta.yaml>`_

   


.. conda:package:: perl-test-script

   |downloads_perl-test-script| |docker_perl-test-script|

   :versions:
      
      

      ``1.30-0``,  ``1.29-0``,  ``1.25-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-capture-tiny: 
   :depends perl-probe-perl: 
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

      mamba install perl-test-script

   and update with::

      mamba update perl-test-script

  To create a new environment, run::

      mamba create --name myenvname perl-test-script

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test-script:<tag>

   (see `perl-test-script/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-script| image:: https://img.shields.io/conda/dn/bioconda/perl-test-script.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-script
   :alt:   (downloads)
.. |docker_perl-test-script| image:: https://quay.io/repository/biocontainers/perl-test-script/status
   :target: https://quay.io/repository/biocontainers/perl-test-script
.. _`perl-test-script/tags`: https://quay.io/repository/biocontainers/perl-test-script?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-script";
        var versions = ["1.30","1.29","1.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-script/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-script/README.html