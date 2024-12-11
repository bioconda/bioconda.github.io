:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-math-random'
.. highlight: bash

perl-math-random
================

.. conda:recipe:: perl-math-random
   :replaces_section_title:
   :noindex:

   Random Number Generators

   :homepage: http://metacpan.org/pod/Math-Random
   :license: unknown
   :recipe: /`perl-math-random <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-random>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-math-random/meta.yaml>`_

   


.. conda:package:: perl-math-random

   |downloads_perl-math-random| |docker_perl-math-random|

   :versions:
      
      

      ``0.72-8``,  ``0.72-7``,  ``0.72-6``,  ``0.72-5``,  ``0.72-4``,  ``0.72-3``,  ``0.72-2``,  ``0.72-1``,  ``0.72-0``

      

   
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

      mamba install perl-math-random

   and update with::

      mamba update perl-math-random

  To create a new environment, run::

      mamba create --name myenvname perl-math-random

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-math-random:<tag>

   (see `perl-math-random/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-math-random| image:: https://img.shields.io/conda/dn/bioconda/perl-math-random.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-math-random
   :alt:   (downloads)
.. |docker_perl-math-random| image:: https://quay.io/repository/biocontainers/perl-math-random/status
   :target: https://quay.io/repository/biocontainers/perl-math-random
.. _`perl-math-random/tags`: https://quay.io/repository/biocontainers/perl-math-random?tab=tags


.. raw:: html

    <script>
        var package = "perl-math-random";
        var versions = ["0.72","0.72","0.72","0.72","0.72"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-math-random/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-math-random/README.html