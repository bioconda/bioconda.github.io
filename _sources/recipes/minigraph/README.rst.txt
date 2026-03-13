:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minigraph'
.. highlight: bash

minigraph
=========

.. conda:recipe:: minigraph
   :replaces_section_title:
   :noindex:

   Proof\-of\-concept seq\-to\-graph mapper and graph generator.

   :homepage: https://github.com/lh3/minigraph
   :documentation: https://lh3.github.io/minigraph/minigraph.html
   
   :license: MIT / MIT
   :recipe: /`minigraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minigraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minigraph/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-020-02168-z`

   


.. conda:package:: minigraph

   |downloads_minigraph| |docker_minigraph|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.21-3</code>,  <code>0.21-2</code>,  <code>0.21-1</code>,  <code>0.21-0</code>,  <code>0.20-2</code>,  <code>0.20-1</code>,  <code>0.20-0</code>,  <code>0.19-1</code>,  <code>0.19-0</code>,  </span></summary>
      

      ``0.21-3``,  ``0.21-2``,  ``0.21-1``,  ``0.21-0``,  ``0.20-2``,  ``0.20-1``,  ``0.20-0``,  ``0.19-1``,  ``0.19-0``,  ``0.18-0``,  ``0.17-0``,  ``0.16-1``,  ``0.16-0``,  ``0.15-1``,  ``0.15-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
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

    pixi global install minigraph

to add into an existing workspace instead, run::

    pixi add minigraph

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install minigraph

Alternatively, to install into a new environment, run::

    conda create -n envname minigraph

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/minigraph:<tag>

(see `minigraph/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_minigraph| image:: https://img.shields.io/conda/dn/bioconda/minigraph.svg?style=flat
   :target: https://anaconda.org/bioconda/minigraph
   :alt:   (downloads)
.. |docker_minigraph| image:: https://quay.io/repository/biocontainers/minigraph/status
   :target: https://quay.io/repository/biocontainers/minigraph
.. _`minigraph/tags`: https://quay.io/repository/biocontainers/minigraph?tab=tags


.. raw:: html

    <script>
        var package = "minigraph";
        var versions = ["0.21","0.21","0.21","0.21","0.20"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minigraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minigraph/README.html