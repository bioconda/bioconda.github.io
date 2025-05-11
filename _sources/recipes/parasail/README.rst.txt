:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parasail'
.. highlight: bash

parasail
========

.. conda:recipe:: parasail
   :replaces_section_title:
   :noindex:

   Pairwise Sequence Alignment Library

   :homepage: https://github.com/jeffdaily/parasail
   :license: MIT / MIT
   :recipe: /`parasail <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parasail>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parasail/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-016-0930-z`

   parasail is a SIMD C \(C99\) library containing implementations of the Smith\-Waterman \(local\)\, Needleman\-Wunsch \(global\)\, and various semi\-global pairwise sequence alignment algorithms.
   Here\, semi\-global means insertions before the start or after the end of either the query or target sequence are optionally not penalized.
   parasail implements most known algorithms for vectorized pairwise sequence alignment\, including diagonal \[Wozniak\, 1997\]\, blocked \[Rognes and Seeberg\, 2000\]\, striped \[Farrar\, 2007\]\, and prefix scan \[Daily\, 2015\].
   Therefore\, parasail is a reference implementation for these algorithms in addition to providing an implementation of the best\-performing algorithm\(s\) to date on today\'s most advanced CPUs.



.. conda:package:: parasail

   |downloads_parasail| |docker_parasail|

   :versions:
      
      

      ``2.6.2-1``,  ``2.6.2-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install parasail

   and update with::

      mamba update parasail

  To create a new environment, run::

      mamba create --name myenvname parasail

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/parasail:<tag>

   (see `parasail/tags`_ for valid values for ``<tag>``)


.. |downloads_parasail| image:: https://img.shields.io/conda/dn/bioconda/parasail.svg?style=flat
   :target: https://anaconda.org/bioconda/parasail
   :alt:   (downloads)
.. |docker_parasail| image:: https://quay.io/repository/biocontainers/parasail/status
   :target: https://quay.io/repository/biocontainers/parasail
.. _`parasail/tags`: https://quay.io/repository/biocontainers/parasail?tab=tags


.. raw:: html

    <script>
        var package = "parasail";
        var versions = ["2.6.2","2.6.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parasail/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parasail/README.html