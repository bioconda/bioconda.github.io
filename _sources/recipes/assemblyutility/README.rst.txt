:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'assemblyutility'
.. highlight: bash

assemblyutility
===============

.. conda:recipe:: assemblyutility
   :replaces_section_title:
   :noindex:

   Tools for DBG2OLC genoome assembler.

   :homepage: https://github.com/yechengxi/AssemblyUtility
   :license: MIT / MIT
   :recipe: /`assemblyutility <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assemblyutility>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assemblyutility/meta.yaml>`_

   


.. conda:package:: assemblyutility

   |downloads_assemblyutility| |docker_assemblyutility|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>20160209-9</code>,  <code>20160209-8</code>,  <code>20160209-7</code>,  <code>20160209-6</code>,  <code>20160209-5</code>,  <code>20160209-4</code>,  <code>20160209-3</code>,  <code>20160209-2</code>,  <code>20160209-1</code>,  </span></summary>
      

      ``20160209-9``,  ``20160209-8``,  ``20160209-7``,  ``20160209-6``,  ``20160209-5``,  ``20160209-4``,  ``20160209-3``,  ``20160209-2``,  ``20160209-1``,  ``20160209-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install assemblyutility

to add into an existing workspace instead, run::

    pixi add assemblyutility

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install assemblyutility

Alternatively, to install into a new environment, run::

    conda create -n envname assemblyutility

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/assemblyutility:<tag>

(see `assemblyutility/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_assemblyutility| image:: https://img.shields.io/conda/dn/bioconda/assemblyutility.svg?style=flat
   :target: https://anaconda.org/bioconda/assemblyutility
   :alt:   (downloads)
.. |docker_assemblyutility| image:: https://quay.io/repository/biocontainers/assemblyutility/status
   :target: https://quay.io/repository/biocontainers/assemblyutility
.. _`assemblyutility/tags`: https://quay.io/repository/biocontainers/assemblyutility?tab=tags


.. raw:: html

    <script>
        var package = "assemblyutility";
        var versions = ["20160209","20160209","20160209","20160209","20160209"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/assemblyutility/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/assemblyutility/README.html