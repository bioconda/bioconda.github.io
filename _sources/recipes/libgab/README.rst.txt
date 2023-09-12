:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'libgab'
.. highlight: bash

libgab
======

.. conda:recipe:: libgab
   :replaces_section_title:
   :noindex:

   Several C\+\+ subroutines useful for bioinformatics

   :homepage: https://github.com/grenaud/libgab
   :license: GPL
   :recipe: /`libgab <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libgab>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/libgab/meta.yaml>`_

   


.. conda:package:: libgab

   |downloads_libgab| |docker_libgab|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.5-13</code>,  <code>1.0.5-12</code>,  <code>1.0.5-11</code>,  <code>1.0.5-10</code>,  <code>1.0.5-9</code>,  <code>1.0.5-8</code>,  <code>1.0.5-7</code>,  <code>1.0.5-6</code>,  <code>1.0.5-5</code>,  </span></summary>
      

      ``1.0.5-13``,  ``1.0.5-12``,  ``1.0.5-11``,  ``1.0.5-10``,  ``1.0.5-9``,  ``1.0.5-8``,  ``1.0.5-7``,  ``1.0.5-6``,  ``1.0.5-5``,  ``1.0.5-4``,  ``1.0.5-3``,  ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends bamtools: ``>=2.5.1,<2.5.2.0a0``
   :depends htslib: ``>=1.17,<1.19.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
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

      mamba install libgab

   and update with::

      mamba update libgab

  To create a new environment, run::

      mamba create --name myenvname libgab

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/libgab:<tag>

   (see `libgab/tags`_ for valid values for ``<tag>``)


.. |downloads_libgab| image:: https://img.shields.io/conda/dn/bioconda/libgab.svg?style=flat
   :target: https://anaconda.org/bioconda/libgab
   :alt:   (downloads)
.. |docker_libgab| image:: https://quay.io/repository/biocontainers/libgab/status
   :target: https://quay.io/repository/biocontainers/libgab
.. _`libgab/tags`: https://quay.io/repository/biocontainers/libgab?tab=tags


.. raw:: html

    <script>
        var package = "libgab";
        var versions = ["1.0.5","1.0.5","1.0.5","1.0.5","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/libgab/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/libgab/README.html