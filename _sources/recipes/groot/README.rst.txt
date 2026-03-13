:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'groot'
.. highlight: bash

groot
=====

.. conda:recipe:: groot
   :replaces_section_title:
   :noindex:

   A tool for resistome profiling of metagenomic samples.

   :homepage: https://github.com/will-rowe/groot
   :documentation: https://groot-documentation.readthedocs.io/en/latest/?badge=latest
   
   :license: MIT / MIT
   :recipe: /`groot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/groot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/groot/meta.yaml>`_

   


.. conda:package:: groot

   |downloads_groot| |docker_groot|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.2-7</code>,  <code>1.1.2-6</code>,  <code>1.1.2-5</code>,  <code>1.1.2-4</code>,  <code>1.1.2-3</code>,  <code>1.1.2-1</code>,  <code>1.1.2-0</code>,  <code>1.1.0-0</code>,  <code>1.0.2-0</code>,  </span></summary>
      

      ``1.1.2-7``,  ``1.1.2-6``,  ``1.1.2-5``,  ``1.1.2-4``,  ``1.1.2-3``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.0-0``,  ``1.0.2-0``,  ``0.8.5-1``,  ``0.8.4-1``,  ``0.8.3-1``,  ``0.8.2-1``,  ``0.8.1-1``,  ``0.7.1-1``,  ``0.7-1``,  ``0.7-0``,  ``0.6-0``,  ``0.5-0``,  ``0.4-0``,  ``0.3-0``,  ``0.2-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on ca-certificates: 
   :depends on libgcc: ``>=13``

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

    pixi global install groot

to add into an existing workspace instead, run::

    pixi add groot

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install groot

Alternatively, to install into a new environment, run::

    conda create -n envname groot

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/groot:<tag>

(see `groot/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_groot| image:: https://img.shields.io/conda/dn/bioconda/groot.svg?style=flat
   :target: https://anaconda.org/bioconda/groot
   :alt:   (downloads)
.. |docker_groot| image:: https://quay.io/repository/biocontainers/groot/status
   :target: https://quay.io/repository/biocontainers/groot
.. _`groot/tags`: https://quay.io/repository/biocontainers/groot?tab=tags


.. raw:: html

    <script>
        var package = "groot";
        var versions = ["1.1.2","1.1.2","1.1.2","1.1.2","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/groot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/groot/README.html