:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'treekin'
.. highlight: bash

treekin
=======

.. conda:recipe:: treekin
   :replaces_section_title:
   :noindex:

   Compute folding dynamics on coarse grained version of an energy landscape by numeric integration of a Markov process

   :homepage: https://www.tbi.univie.ac.at/RNA/Treekin/
   :license: GPL
   :recipe: /`treekin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treekin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/treekin/meta.yaml>`_

   


.. conda:package:: treekin

   |downloads_treekin| |docker_treekin|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.1-4</code>,  <code>0.5.1-3</code>,  <code>0.5.1-2</code>,  <code>0.5.1-1</code>,  <code>0.5.1-0</code>,  <code>0.4.2-2</code>,  <code>0.4.2-1</code>,  <code>0.4.2-0</code>,  <code>0.3.1-3</code>,  </span></summary>
      

      ``0.5.1-4``,  ``0.5.1-3``,  ``0.5.1-2``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.4.2-2``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.3.1-3``,  ``0.3.1-2``,  ``0.3.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends on lapack: ``<3.9``
   :depends on libgcc-ng: ``>=12``
   :depends on libgfortran-ng: 
   :depends on libgfortran5: ``>=12.2.0``
   :depends on libstdcxx-ng: ``>=12``
   :depends on mlapack: 

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

    pixi global install treekin

to add into an existing workspace instead, run::

    pixi add treekin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install treekin

Alternatively, to install into a new environment, run::

    conda create -n envname treekin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/treekin:<tag>

(see `treekin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_treekin| image:: https://img.shields.io/conda/dn/bioconda/treekin.svg?style=flat
   :target: https://anaconda.org/bioconda/treekin
   :alt:   (downloads)
.. |docker_treekin| image:: https://quay.io/repository/biocontainers/treekin/status
   :target: https://quay.io/repository/biocontainers/treekin
.. _`treekin/tags`: https://quay.io/repository/biocontainers/treekin?tab=tags


.. raw:: html

    <script>
        var package = "treekin";
        var versions = ["0.5.1","0.5.1","0.5.1","0.5.1","0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/treekin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/treekin/README.html