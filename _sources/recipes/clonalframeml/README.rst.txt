:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clonalframeml'
.. highlight: bash

clonalframeml
=============

.. conda:recipe:: clonalframeml
   :replaces_section_title:
   :noindex:

   Efficient inferencing of recombination in bacterial genomes.

   :homepage: https://github.com/xavierdidelot/ClonalFrameML
   :documentation: https://github.com/xavierdidelot/clonalframeml/wiki
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`clonalframeml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clonalframeml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clonalframeml/meta.yaml>`_
   :links: biotools: :biotools:`clonalframeml`

   


.. conda:package:: clonalframeml

   |downloads_clonalframeml| |docker_clonalframeml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.13-2</code>,  <code>1.13-1</code>,  <code>1.13-0</code>,  <code>1.12-4</code>,  <code>1.12-3</code>,  <code>1.12-2</code>,  <code>1.12-1</code>,  <code>1.12-0</code>,  <code>1.11-7</code>,  </span></summary>
      

      ``1.13-2``,  ``1.13-1``,  ``1.13-0``,  ``1.12-4``,  ``1.12-3``,  ``1.12-2``,  ``1.12-1``,  ``1.12-0``,  ``1.11-7``,  ``1.11-6``,  ``1.11-5``,  ``1.11-4``,  ``1.11-3``,  ``1.11-2``,  ``1.11-1``,  ``1.11-0``

      
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

    pixi global install clonalframeml

to add into an existing workspace instead, run::

    pixi add clonalframeml

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install clonalframeml

Alternatively, to install into a new environment, run::

    conda create -n envname clonalframeml

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/clonalframeml:<tag>

(see `clonalframeml/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_clonalframeml| image:: https://img.shields.io/conda/dn/bioconda/clonalframeml.svg?style=flat
   :target: https://anaconda.org/bioconda/clonalframeml
   :alt:   (downloads)
.. |docker_clonalframeml| image:: https://quay.io/repository/biocontainers/clonalframeml/status
   :target: https://quay.io/repository/biocontainers/clonalframeml
.. _`clonalframeml/tags`: https://quay.io/repository/biocontainers/clonalframeml?tab=tags


.. raw:: html

    <script>
        var package = "clonalframeml";
        var versions = ["1.13","1.13","1.13","1.12","1.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clonalframeml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clonalframeml/README.html