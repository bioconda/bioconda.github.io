:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cellprofiler-core'
.. highlight: bash

cellprofiler-core
=================

.. conda:recipe:: cellprofiler-core
   :replaces_section_title:
   :noindex:

   Dependency for CellProfiler v4.

   :homepage: https://github.com/CellProfiler/core
   :documentation: https://github.com/CellProfiler/CellProfiler/wiki
   
   :license: BSD / BSD-3-Clause
   :recipe: /`cellprofiler-core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellprofiler-core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellprofiler-core/meta.yaml>`_

   


.. conda:package:: cellprofiler-core

   |downloads_cellprofiler-core| |docker_cellprofiler-core|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.2.8-0</code>,  <code>4.2.7-0</code>,  <code>4.2.6-0</code>,  <code>4.2.5-0</code>,  <code>4.2.4-0</code>,  <code>4.2.2-0</code>,  <code>4.2.1-0</code>,  <code>4.2.0-0</code>,  <code>4.1.3-1</code>,  </span></summary>
      

      ``4.2.8-0``,  ``4.2.7-0``,  ``4.2.6-0``,  ``4.2.5-0``,  ``4.2.4-0``,  ``4.2.2-0``,  ``4.2.1-0``,  ``4.2.0-0``,  ``4.1.3-1``,  ``4.1.3-0``,  ``4.0.7-0``,  ``4.0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends boto3: ``>=1.12.28``
   :depends centrosome: ``>=1.2.3,<1.3``
   :depends docutils: ``0.15.2``
   :depends h5py: ``>=3.6.0,<3.7.dev0``
   :depends matplotlib-base: ``>=3.1.3``
   :depends numpy: ``>=1.18.2``
   :depends prokaryote: ``2.4.4``
   :depends psutil: ``>=5.7.0``
   :depends python: ``>=3.8``
   :depends python-bioformats: ``4.0.7``
   :depends python-javabridge: ``4.0.3``
   :depends pyzmq: ``>=22.3,<23.dev0``
   :depends scikit-image: ``0.18.3``
   :depends scipy: ``>=1.4.1``
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

      mamba install cellprofiler-core

   and update with::

      mamba update cellprofiler-core

  To create a new environment, run::

      mamba create --name myenvname cellprofiler-core

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cellprofiler-core:<tag>

   (see `cellprofiler-core/tags`_ for valid values for ``<tag>``)


.. |downloads_cellprofiler-core| image:: https://img.shields.io/conda/dn/bioconda/cellprofiler-core.svg?style=flat
   :target: https://anaconda.org/bioconda/cellprofiler-core
   :alt:   (downloads)
.. |docker_cellprofiler-core| image:: https://quay.io/repository/biocontainers/cellprofiler-core/status
   :target: https://quay.io/repository/biocontainers/cellprofiler-core
.. _`cellprofiler-core/tags`: https://quay.io/repository/biocontainers/cellprofiler-core?tab=tags


.. raw:: html

    <script>
        var package = "cellprofiler-core";
        var versions = ["4.2.8","4.2.7","4.2.6","4.2.5","4.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cellprofiler-core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cellprofiler-core/README.html