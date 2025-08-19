:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-test-taint'
.. highlight: bash

perl-test-taint
===============

.. conda:recipe:: perl-test-taint
   :replaces_section_title:
   :noindex:

   Checks for taintedness of variables.

   :homepage: https://metacpan.org/pod/Test::Taint
   :license: Unknown
   :recipe: /`perl-test-taint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-taint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-test-taint/meta.yaml>`_

   


.. conda:package:: perl-test-taint

   |downloads_perl-test-taint| |docker_perl-test-taint|

   :versions:
      
      

      ``1.08-1``,  ``1.08-0``

      

   
   :depends libgcc: ``>=13``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-test-taint

   and update with::

      mamba update perl-test-taint

  To create a new environment, run::

      mamba create --name myenvname perl-test-taint

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-test-taint:<tag>

   (see `perl-test-taint/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-test-taint| image:: https://img.shields.io/conda/dn/bioconda/perl-test-taint.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-test-taint
   :alt:   (downloads)
.. |docker_perl-test-taint| image:: https://quay.io/repository/biocontainers/perl-test-taint/status
   :target: https://quay.io/repository/biocontainers/perl-test-taint
.. _`perl-test-taint/tags`: https://quay.io/repository/biocontainers/perl-test-taint?tab=tags


.. raw:: html

    <script>
        var package = "perl-test-taint";
        var versions = ["1.08","1.08"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-test-taint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-test-taint/README.html