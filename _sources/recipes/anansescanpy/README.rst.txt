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
      

   
   :depends on anndata: ``>=0.8.0``
   :depends on numba: ``>=0.56.3``
   :depends on numpy: ``>=1.23.3,<1.24``
   :depends on packaging: ``>=21.3``
   :depends on pandas: ``>=1.4.4``
   :depends on python: ``>=3.8``
   :depends on scanpy: ``>=1.9.1``
   :depends on scipy: ``>=1.9.1``

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

    pixi global install anansescanpy

to add into an existing workspace instead, run::

    pixi add anansescanpy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install anansescanpy

Alternatively, to install into a new environment, run::

    conda create -n envname anansescanpy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/anansescanpy:<tag>

(see `anansescanpy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
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