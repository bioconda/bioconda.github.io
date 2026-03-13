:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hcluster_sg'
.. highlight: bash

hcluster_sg
===========

.. conda:recipe:: hcluster_sg
   :replaces_section_title:
   :noindex:

   A tool for hierarchically clustering on a sparse graph.

   :homepage: https://github.com/douglasgscofield/hcluster
   :license: GPL / GPL-2.0-or-later
   :recipe: /`hcluster_sg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hcluster_sg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hcluster_sg/meta.yaml>`_

   


.. conda:package:: hcluster_sg

   |downloads_hcluster_sg| |docker_hcluster_sg|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.1-9</code>,  <code>0.5.1-8</code>,  <code>0.5.1-7</code>,  <code>0.5.1-6</code>,  <code>0.5.1-5</code>,  <code>0.5.1-4</code>,  <code>0.5.1-3</code>,  <code>0.5.1-2</code>,  <code>0.5.1-1</code>,  </span></summary>
      

      ``0.5.1-9``,  ``0.5.1-8``,  ``0.5.1-7``,  ``0.5.1-6``,  ``0.5.1-5``,  ``0.5.1-4``,  ``0.5.1-3``,  ``0.5.1-2``,  ``0.5.1-1``,  ``0.5.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install hcluster_sg

to add into an existing workspace instead, run::

    pixi add hcluster_sg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hcluster_sg

Alternatively, to install into a new environment, run::

    conda create -n envname hcluster_sg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hcluster_sg:<tag>

(see `hcluster_sg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hcluster_sg| image:: https://img.shields.io/conda/dn/bioconda/hcluster_sg.svg?style=flat
   :target: https://anaconda.org/bioconda/hcluster_sg
   :alt:   (downloads)
.. |docker_hcluster_sg| image:: https://quay.io/repository/biocontainers/hcluster_sg/status
   :target: https://quay.io/repository/biocontainers/hcluster_sg
.. _`hcluster_sg/tags`: https://quay.io/repository/biocontainers/hcluster_sg?tab=tags


.. raw:: html

    <script>
        var package = "hcluster_sg";
        var versions = ["0.5.1","0.5.1","0.5.1","0.5.1","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hcluster_sg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hcluster_sg/README.html