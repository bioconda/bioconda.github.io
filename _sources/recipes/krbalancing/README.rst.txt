:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'krbalancing'
.. highlight: bash

krbalancing
===========

.. conda:recipe:: krbalancing
   :replaces_section_title:
   :noindex:

   This is a c\+\+ extension for python which computes K.R. balanced matrices.

   :homepage: https://github.com/deeptools/Knight-Ruiz-Matrix-balancing-algorithm
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`krbalancing <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krbalancing>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krbalancing/meta.yaml>`_

   


.. conda:package:: krbalancing

   |downloads_krbalancing| |docker_krbalancing|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.5-11</code>,  <code>0.0.5-10</code>,  <code>0.0.5-9</code>,  <code>0.0.5-8</code>,  <code>0.0.5-7</code>,  <code>0.0.5-5</code>,  <code>0.0.5-4</code>,  <code>0.0.5-3</code>,  <code>0.0.5-2</code>,  </span></summary>
      

      ``0.0.5-11``,  ``0.0.5-10``,  ``0.0.5-9``,  ``0.0.5-8``,  ``0.0.5-7``,  ``0.0.5-5``,  ``0.0.5-4``,  ``0.0.5-3``,  ``0.0.5-2``,  ``0.0.5-1``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on eigen: ``>=3.3.7``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on pybind11: ``>=2.2.4``
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

    pixi global install krbalancing

to add into an existing workspace instead, run::

    pixi add krbalancing

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install krbalancing

Alternatively, to install into a new environment, run::

    conda create -n envname krbalancing

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/krbalancing:<tag>

(see `krbalancing/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_krbalancing| image:: https://img.shields.io/conda/dn/bioconda/krbalancing.svg?style=flat
   :target: https://anaconda.org/bioconda/krbalancing
   :alt:   (downloads)
.. |docker_krbalancing| image:: https://quay.io/repository/biocontainers/krbalancing/status
   :target: https://quay.io/repository/biocontainers/krbalancing
.. _`krbalancing/tags`: https://quay.io/repository/biocontainers/krbalancing?tab=tags


.. raw:: html

    <script>
        var package = "krbalancing";
        var versions = ["0.0.5","0.0.5","0.0.5","0.0.5","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/krbalancing/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/krbalancing/README.html