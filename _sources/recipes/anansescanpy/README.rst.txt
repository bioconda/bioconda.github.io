:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'anansescanpy'
.. highlight: bash

anansescanpy
============

.. conda:recipe:: anansescanpy
   :replaces_section_title:
   :noindex:

   implementation of scANANSE for scanpy objects in Python

   :homepage: https://github.com/Arts-of-coding/AnanseScanpy
   :license: Apache-2.0
   :recipe: /`anansescanpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anansescanpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/anansescanpy/meta.yaml>`_

   


.. conda:package:: anansescanpy

   |downloads_anansescanpy| |docker_anansescanpy|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.0-1</code>,  <code>1.0.0-0</code>,  <code>0.2.6-0</code>,  <code>0.2.3-0</code>,  <code>0.2.2-0</code>,  <code>0.2.1-0</code>,  <code>0.2.0-0</code>,  <code>0.1.9-0</code>,  <code>0.1.8-0</code>,  </span></summary>
      

      ``1.0.0-1``,  ``1.0.0-0``,  ``0.2.6-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.9-0``,  ``0.1.8-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends anndata: ``>=0.8.0``
   :depends numba: ``>=0.56.3``
   :depends numpy: ``>=1.23.3,<1.24``
   :depends packaging: ``>=21.3``
   :depends pandas: ``>=1.4.4``
   :depends python: ``>=3.8``
   :depends scanpy: ``>=1.9.1``
   :depends scipy: ``>=1.9.1``
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

      mamba install anansescanpy

   and update with::

      mamba update anansescanpy

  To create a new environment, run::

      mamba create --name myenvname anansescanpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/anansescanpy:<tag>

   (see `anansescanpy/tags`_ for valid values for ``<tag>``)


.. |downloads_anansescanpy| image:: https://img.shields.io/conda/dn/bioconda/anansescanpy.svg?style=flat
   :target: https://anaconda.org/bioconda/anansescanpy
   :alt:   (downloads)
.. |docker_anansescanpy| image:: https://quay.io/repository/biocontainers/anansescanpy/status
   :target: https://quay.io/repository/biocontainers/anansescanpy
.. _`anansescanpy/tags`: https://quay.io/repository/biocontainers/anansescanpy?tab=tags


.. raw:: html

    <script>
        var package = "anansescanpy";
        var versions = ["1.0.0","1.0.0","0.2.6","0.2.3","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/anansescanpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/anansescanpy/README.html