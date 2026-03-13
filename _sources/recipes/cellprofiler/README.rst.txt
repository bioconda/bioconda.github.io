:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cellprofiler'
.. highlight: bash

cellprofiler
============

.. conda:recipe:: cellprofiler
   :replaces_section_title:
   :noindex:

   CellProfiler is free\, open\-source software for quantitative analysis of biological images.

   :homepage: https://github.com/CellProfiler/CellProfiler
   :documentation: https://cellprofiler-manual.s3.amazonaws.com/CellProfiler-4.2.8.1/index.html
   
   :license: BSD / BSD-3-Clause
   :recipe: /`cellprofiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellprofiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellprofiler/meta.yaml>`_

   CellProfiler is free\, open\-source software for quantitative analysis of biological images.No prior experience in programming or computer vision is required.



.. conda:package:: cellprofiler

   |downloads_cellprofiler| |docker_cellprofiler|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.2.8.1-0</code>,  <code>4.2.8-0</code>,  <code>4.2.7-0</code>,  <code>4.2.6-0</code>,  <code>4.2.1-3</code>,  <code>4.2.1-2</code>,  <code>4.2.1-1</code>,  <code>4.2.1-0</code>,  <code>4.2.0-0</code>,  </span></summary>
      

      ``4.2.8.1-0``,  ``4.2.8-0``,  ``4.2.7-0``,  ``4.2.6-0``,  ``4.2.1-3``,  ``4.2.1-2``,  ``4.2.1-1``,  ``4.2.1-0``,  ``4.2.0-0``,  ``3.1.9-1``,  ``3.1.9-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boto3: ``>=1.12.28``
   :depends on cellprofiler-core: ``4.2.8.1``
   :depends on centrosome: 
   :depends on docutils: 
   :depends on h5py: ``>=3.6.0,<3.7.dev0,<4``
   :depends on imageio: ``>=2.5``
   :depends on inflect: 
   :depends on jinja2: 
   :depends on joblib: 
   :depends on mahotas: 
   :depends on matplotlib-base: 
   :depends on mysqlclient: 
   :depends on numpy: 
   :depends on pillow: 
   :depends on prokaryote: 
   :depends on python: ``>=3.8``
   :depends on python-bioformats: 
   :depends on python-javabridge: 
   :depends on pyzmq: ``>=22.3,<23.dev0``
   :depends on requests: 
   :depends on scikit-image: ``0.18.3``
   :depends on scikit-learn: ``>=0.20,<1``
   :depends on scipy: ``1.9.0``
   :depends on sentry-sdk: 
   :depends on six: 
   :depends on tifffile: ``<2022.4.22``
   :depends on wxpython: 

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

    pixi global install cellprofiler

to add into an existing workspace instead, run::

    pixi add cellprofiler

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cellprofiler

Alternatively, to install into a new environment, run::

    conda create -n envname cellprofiler

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cellprofiler:<tag>

(see `cellprofiler/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cellprofiler| image:: https://img.shields.io/conda/dn/bioconda/cellprofiler.svg?style=flat
   :target: https://anaconda.org/bioconda/cellprofiler
   :alt:   (downloads)
.. |docker_cellprofiler| image:: https://quay.io/repository/biocontainers/cellprofiler/status
   :target: https://quay.io/repository/biocontainers/cellprofiler
.. _`cellprofiler/tags`: https://quay.io/repository/biocontainers/cellprofiler?tab=tags


.. raw:: html

    <script>
        var package = "cellprofiler";
        var versions = ["4.2.8.1","4.2.8","4.2.7","4.2.6","4.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cellprofiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cellprofiler/README.html