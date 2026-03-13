:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pytriangle'
.. highlight: bash

pytriangle
==========

.. conda:recipe:: pytriangle
   :replaces_section_title:
   :noindex:

   A python interface to the 2D triangulation program TRIANGLE

   :homepage: https://github.com/pletzer/pytriangle
   :license: MIT
   :recipe: /`pytriangle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytriangle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pytriangle/meta.yaml>`_

   


.. conda:package:: pytriangle

   |downloads_pytriangle| |docker_pytriangle|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.9-10</code>,  <code>1.0.9-9</code>,  <code>1.0.9-8</code>,  <code>1.0.9-7</code>,  <code>1.0.9-6</code>,  <code>1.0.9-5</code>,  <code>1.0.9-4</code>,  <code>1.0.9-3</code>,  <code>1.0.9-2</code>,  </span></summary>
      

      ``1.0.9-10``,  ``1.0.9-9``,  ``1.0.9-8``,  ``1.0.9-7``,  ``1.0.9-6``,  ``1.0.9-5``,  ``1.0.9-4``,  ``1.0.9-3``,  ``1.0.9-2``,  ``1.0.9-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install pytriangle

to add into an existing workspace instead, run::

    pixi add pytriangle

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pytriangle

Alternatively, to install into a new environment, run::

    conda create -n envname pytriangle

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pytriangle:<tag>

(see `pytriangle/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pytriangle| image:: https://img.shields.io/conda/dn/bioconda/pytriangle.svg?style=flat
   :target: https://anaconda.org/bioconda/pytriangle
   :alt:   (downloads)
.. |docker_pytriangle| image:: https://quay.io/repository/biocontainers/pytriangle/status
   :target: https://quay.io/repository/biocontainers/pytriangle
.. _`pytriangle/tags`: https://quay.io/repository/biocontainers/pytriangle?tab=tags


.. raw:: html

    <script>
        var package = "pytriangle";
        var versions = ["1.0.9","1.0.9","1.0.9","1.0.9","1.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pytriangle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pytriangle/README.html