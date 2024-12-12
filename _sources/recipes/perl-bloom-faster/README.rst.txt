:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-bloom-faster'
.. highlight: bash

perl-bloom-faster
=================

.. conda:recipe:: perl-bloom-faster
   :replaces_section_title:
   :noindex:

   Perl extension for the c library libbloom.

   :homepage: http://metacpan.org/pod/Bloom-Faster
   :license: unknown
   :recipe: /`perl-bloom-faster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bloom-faster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-bloom-faster/meta.yaml>`_

   


.. conda:package:: perl-bloom-faster

   |downloads_perl-bloom-faster| |docker_perl-bloom-faster|

   :versions:
      
      

      ``1.7-8``,  ``1.7-7``,  ``1.7-6``,  ``1.7-5``,  ``1.7-4``,  ``1.7-3``,  ``1.7-2``,  ``1.7-1``,  ``1.7-0``

      

   
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

      mamba install perl-bloom-faster

   and update with::

      mamba update perl-bloom-faster

  To create a new environment, run::

      mamba create --name myenvname perl-bloom-faster

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-bloom-faster:<tag>

   (see `perl-bloom-faster/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-bloom-faster| image:: https://img.shields.io/conda/dn/bioconda/perl-bloom-faster.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-bloom-faster
   :alt:   (downloads)
.. |docker_perl-bloom-faster| image:: https://quay.io/repository/biocontainers/perl-bloom-faster/status
   :target: https://quay.io/repository/biocontainers/perl-bloom-faster
.. _`perl-bloom-faster/tags`: https://quay.io/repository/biocontainers/perl-bloom-faster?tab=tags


.. raw:: html

    <script>
        var package = "perl-bloom-faster";
        var versions = ["1.7","1.7","1.7","1.7","1.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-bloom-faster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-bloom-faster/README.html