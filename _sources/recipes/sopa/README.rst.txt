:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sopa'
.. highlight: bash

sopa
====

.. conda:recipe:: sopa
   :replaces_section_title:
   :noindex:

   Spatial\-omics pipeline and analysis.

   :homepage: https://github.com/gustaveroussy/sopa
   :documentation: https://gustaveroussy.github.io/sopa
   
   :license: BSD / BSD-3-Clause
   :recipe: /`sopa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sopa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sopa/meta.yaml>`_

   


.. conda:package:: sopa

   |downloads_sopa| |docker_sopa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.1-0</code>,  <code>2.1.11-0</code>,  <code>2.1.10-0</code>,  <code>2.1.9-0</code>,  <code>2.1.8-0</code>,  <code>2.1.6-0</code>,  <code>2.1.5-0</code>,  <code>2.1.4-0</code>,  <code>2.1.3-0</code>,  </span></summary>
      

      ``2.2.1-0``,  ``2.1.11-0``,  ``2.1.10-0``,  ``2.1.9-0``,  ``2.1.8-0``,  ``2.1.6-0``,  ``2.1.5-0``,  ``2.1.4-0``,  ``2.1.3-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.7-0``,  ``2.0.6-0``,  ``2.0.4-0``,  ``2.0.3-0``,  ``1.1.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on anndata: ``>=0.11.0``
   :depends on click: ``<8.2.0``
   :depends on dask-core: ``>=2024.4.1``
   :depends on opencv: ``>=4.8.0``
   :depends on python: ``>=3.10,<3.13``
   :depends on scanpy: ``>=1.10.4``
   :depends on spatialdata: ``>=0.4.0``
   :depends on spatialdata-io: ``>=0.2.0``
   :depends on spatialdata-plot: ``>=0.2.10``
   :depends on typer: ``>=0.9.0``

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

    pixi global install sopa

to add into an existing workspace instead, run::

    pixi add sopa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sopa

Alternatively, to install into a new environment, run::

    conda create -n envname sopa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sopa:<tag>

(see `sopa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sopa| image:: https://img.shields.io/conda/dn/bioconda/sopa.svg?style=flat
   :target: https://anaconda.org/bioconda/sopa
   :alt:   (downloads)
.. |docker_sopa| image:: https://quay.io/repository/biocontainers/sopa/status
   :target: https://quay.io/repository/biocontainers/sopa
.. _`sopa/tags`: https://quay.io/repository/biocontainers/sopa?tab=tags


.. raw:: html

    <script>
        var package = "sopa";
        var versions = ["2.2.1","2.1.11","2.1.10","2.1.9","2.1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sopa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sopa/README.html