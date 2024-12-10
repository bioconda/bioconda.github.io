:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sorted_nearest'
.. highlight: bash

sorted_nearest
==============

.. conda:recipe:: sorted_nearest
   :replaces_section_title:
   :noindex:

   Find nearest interval.

   :homepage: https://github.com/endrebak/sorted_nearest
   :license: BSD / BSD-3-Clause
   :recipe: /`sorted_nearest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sorted_nearest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sorted_nearest/meta.yaml>`_

   


.. conda:package:: sorted_nearest

   |downloads_sorted_nearest| |docker_sorted_nearest|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.39-5</code>,  <code>0.0.39-4</code>,  <code>0.0.39-3</code>,  <code>0.0.39-2</code>,  <code>0.0.39-1</code>,  <code>0.0.39-0</code>,  <code>0.0.37-2</code>,  <code>0.0.37-1</code>,  <code>0.0.37-0</code>,  </span></summary>
      

      ``0.0.39-5``,  ``0.0.39-4``,  ``0.0.39-3``,  ``0.0.39-2``,  ``0.0.39-1``,  ``0.0.39-0``,  ``0.0.37-2``,  ``0.0.37-1``,  ``0.0.37-0``,  ``0.0.33-2``,  ``0.0.33-1``,  ``0.0.33-0``,  ``0.0.32-1``,  ``0.0.32-0``,  ``0.0.31-3``,  ``0.0.31-2``,  ``0.0.31-1``,  ``0.0.31-0``,  ``0.0.30-0``,  ``0.0.29-0``,  ``0.0.28-0``,  ``0.0.24-0``,  ``0.0.23-1``,  ``0.0.22-1``,  ``0.0.20-1``,  ``0.0.19-1``,  ``0.0.18-1``,  ``0.0.17-1``,  ``0.0.17-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends numpy: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
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

      mamba install sorted_nearest

   and update with::

      mamba update sorted_nearest

  To create a new environment, run::

      mamba create --name myenvname sorted_nearest

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/sorted_nearest:<tag>

   (see `sorted_nearest/tags`_ for valid values for ``<tag>``)


.. |downloads_sorted_nearest| image:: https://img.shields.io/conda/dn/bioconda/sorted_nearest.svg?style=flat
   :target: https://anaconda.org/bioconda/sorted_nearest
   :alt:   (downloads)
.. |docker_sorted_nearest| image:: https://quay.io/repository/biocontainers/sorted_nearest/status
   :target: https://quay.io/repository/biocontainers/sorted_nearest
.. _`sorted_nearest/tags`: https://quay.io/repository/biocontainers/sorted_nearest?tab=tags


.. raw:: html

    <script>
        var package = "sorted_nearest";
        var versions = ["0.0.39","0.0.39","0.0.39","0.0.39","0.0.39"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sorted_nearest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sorted_nearest/README.html