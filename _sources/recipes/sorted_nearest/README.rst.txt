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

         <details><summary><span class="truncated-version-list"><code>0.0.41-0</code>,  <code>0.0.39-6</code>,  <code>0.0.39-5</code>,  <code>0.0.39-4</code>,  <code>0.0.39-3</code>,  <code>0.0.39-2</code>,  <code>0.0.39-1</code>,  <code>0.0.39-0</code>,  <code>0.0.37-2</code>,  </span></summary>
      

      ``0.0.41-0``,  ``0.0.39-6``,  ``0.0.39-5``,  ``0.0.39-4``,  ``0.0.39-3``,  ``0.0.39-2``,  ``0.0.39-1``,  ``0.0.39-0``,  ``0.0.37-2``,  ``0.0.37-1``,  ``0.0.37-0``,  ``0.0.33-2``,  ``0.0.33-1``,  ``0.0.33-0``,  ``0.0.32-1``,  ``0.0.32-0``,  ``0.0.31-3``,  ``0.0.31-2``,  ``0.0.31-1``,  ``0.0.31-0``,  ``0.0.30-0``,  ``0.0.29-0``,  ``0.0.28-0``,  ``0.0.24-0``,  ``0.0.23-1``,  ``0.0.22-1``,  ``0.0.20-1``,  ``0.0.19-1``,  ``0.0.18-1``,  ``0.0.17-1``,  ``0.0.17-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on numpy: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install sorted_nearest

to add into an existing workspace instead, run::

    pixi add sorted_nearest

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sorted_nearest

Alternatively, to install into a new environment, run::

    conda create -n envname sorted_nearest

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sorted_nearest:<tag>

(see `sorted_nearest/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sorted_nearest| image:: https://img.shields.io/conda/dn/bioconda/sorted_nearest.svg?style=flat
   :target: https://anaconda.org/bioconda/sorted_nearest
   :alt:   (downloads)
.. |docker_sorted_nearest| image:: https://quay.io/repository/biocontainers/sorted_nearest/status
   :target: https://quay.io/repository/biocontainers/sorted_nearest
.. _`sorted_nearest/tags`: https://quay.io/repository/biocontainers/sorted_nearest?tab=tags


.. raw:: html

    <script>
        var package = "sorted_nearest";
        var versions = ["0.0.41","0.0.39","0.0.39","0.0.39","0.0.39"];
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