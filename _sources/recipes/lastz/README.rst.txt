:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lastz'
.. highlight: bash

lastz
=====

.. conda:recipe:: lastz
   :replaces_section_title:
   :noindex:

   LASTZ is a program for aligning DNA sequences\, a pairwise aligner.

   :homepage: http://www.bx.psu.edu/~rsharris/lastz/
   :license: MIT
   :recipe: /`lastz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lastz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lastz/meta.yaml>`_
   :links: biotools: :biotools:`lastz`

   


.. conda:package:: lastz

   |downloads_lastz| |docker_lastz|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.04.22-1</code>,  <code>1.04.22-0</code>,  <code>1.04.15-3</code>,  <code>1.04.15-2</code>,  <code>1.04.15-1</code>,  <code>1.04.15-0</code>,  <code>1.0.4-5</code>,  <code>1.0.4-4</code>,  <code>1.0.4-3</code>,  </span></summary>
      

      ``1.04.22-1``,  ``1.04.22-0``,  ``1.04.15-3``,  ``1.04.15-2``,  ``1.04.15-1``,  ``1.04.15-0``,  ``1.0.4-5``,  ``1.0.4-4``,  ``1.0.4-3``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.2-6``,  ``1.0.2-5``,  ``1.0.2-4``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
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

      mamba install lastz

   and update with::

      mamba update lastz

  To create a new environment, run::

      mamba create --name myenvname lastz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lastz:<tag>

   (see `lastz/tags`_ for valid values for ``<tag>``)


.. |downloads_lastz| image:: https://img.shields.io/conda/dn/bioconda/lastz.svg?style=flat
   :target: https://anaconda.org/bioconda/lastz
   :alt:   (downloads)
.. |docker_lastz| image:: https://quay.io/repository/biocontainers/lastz/status
   :target: https://quay.io/repository/biocontainers/lastz
.. _`lastz/tags`: https://quay.io/repository/biocontainers/lastz?tab=tags


.. raw:: html

    <script>
        var package = "lastz";
        var versions = ["1.04.22","1.04.22","1.04.15","1.04.15","1.04.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lastz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lastz/README.html