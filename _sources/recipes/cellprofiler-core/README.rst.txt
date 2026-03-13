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

         <details><summary><span class="truncated-version-list"><code>4.2.8.1-0</code>,  <code>4.2.8-0</code>,  <code>4.2.7-0</code>,  <code>4.2.6-0</code>,  <code>4.2.5-0</code>,  <code>4.2.4-0</code>,  <code>4.2.2-0</code>,  <code>4.2.1-0</code>,  <code>4.2.0-0</code>,  </span></summary>
      

      ``4.2.8.1-0``,  ``4.2.8-0``,  ``4.2.7-0``,  ``4.2.6-0``,  ``4.2.5-0``,  ``4.2.4-0``,  ``4.2.2-0``,  ``4.2.1-0``,  ``4.2.0-0``,  ``4.1.3-1``,  ``4.1.3-0``,  ``4.0.7-0``,  ``4.0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boto3: ``>=1.12.28``
   :depends on centrosome: ``>=1.2.3,<1.3``
   :depends on docutils: ``0.15.2``
   :depends on h5py: ``>=3.6.0,<3.7.dev0``
   :depends on matplotlib-base: ``>=3.1.3``
   :depends on numpy: ``>=1.18.2``
   :depends on prokaryote: ``2.4.4``
   :depends on psutil: ``>=5.7.0``
   :depends on python: ``>=3.8``
   :depends on python-bioformats: ``4.0.7``
   :depends on python-javabridge: ``4.0.3``
   :depends on pyzmq: ``>=22.3,<23.dev0``
   :depends on scikit-image: ``0.18.3``
   :depends on scipy: ``>=1.4.1``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install cellprofiler-core

to add into an existing workspace instead, run::

    pixi add cellprofiler-core

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cellprofiler-core

Alternatively, to install into a new environment, run::

    conda create -n envname cellprofiler-core

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cellprofiler-core:<tag>

(see `cellprofiler-core/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cellprofiler-core| image:: https://img.shields.io/conda/dn/bioconda/cellprofiler-core.svg?style=flat
   :target: https://anaconda.org/bioconda/cellprofiler-core
   :alt:   (downloads)
.. |docker_cellprofiler-core| image:: https://quay.io/repository/biocontainers/cellprofiler-core/status
   :target: https://quay.io/repository/biocontainers/cellprofiler-core
.. _`cellprofiler-core/tags`: https://quay.io/repository/biocontainers/cellprofiler-core?tab=tags


.. raw:: html

    <script>
        var package = "cellprofiler-core";
        var versions = ["4.2.8.1","4.2.8","4.2.7","4.2.6","4.2.5"];
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