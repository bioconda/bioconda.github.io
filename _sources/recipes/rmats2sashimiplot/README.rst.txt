:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rmats2sashimiplot'
.. highlight: bash

rmats2sashimiplot
=================

.. conda:recipe:: rmats2sashimiplot
   :replaces_section_title:
   :noindex:

   rmats2sashimiplot

   :homepage: https://github.com/Xinglab/rmats2sashimiplot
   :license: GPL2 / GNU General Public v2 (GPLv2)
   :recipe: /`rmats2sashimiplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmats2sashimiplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rmats2sashimiplot/meta.yaml>`_

   


.. conda:package:: rmats2sashimiplot

   |downloads_rmats2sashimiplot| |docker_rmats2sashimiplot|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.0-2</code>,  <code>3.0.0-1</code>,  <code>3.0.0-0</code>,  <code>2.0.4-2</code>,  <code>2.0.4-1</code>,  <code>2.0.4-0</code>,  <code>2.0.3-3</code>,  <code>2.0.3-2</code>,  <code>2.0.3-0</code>,  </span></summary>
      

      ``3.0.0-2``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.0.4-2``,  ``2.0.4-1``,  ``2.0.4-0``,  ``2.0.3-3``,  ``2.0.3-2``,  ``2.0.3-0``,  ``2.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pysam: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on samtools: 
   :depends on scipy: 

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

    pixi global install rmats2sashimiplot

to add into an existing workspace instead, run::

    pixi add rmats2sashimiplot

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rmats2sashimiplot

Alternatively, to install into a new environment, run::

    conda create -n envname rmats2sashimiplot

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rmats2sashimiplot:<tag>

(see `rmats2sashimiplot/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rmats2sashimiplot| image:: https://img.shields.io/conda/dn/bioconda/rmats2sashimiplot.svg?style=flat
   :target: https://anaconda.org/bioconda/rmats2sashimiplot
   :alt:   (downloads)
.. |docker_rmats2sashimiplot| image:: https://quay.io/repository/biocontainers/rmats2sashimiplot/status
   :target: https://quay.io/repository/biocontainers/rmats2sashimiplot
.. _`rmats2sashimiplot/tags`: https://quay.io/repository/biocontainers/rmats2sashimiplot?tab=tags


.. raw:: html

    <script>
        var package = "rmats2sashimiplot";
        var versions = ["3.0.0","3.0.0","3.0.0","2.0.4","2.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rmats2sashimiplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rmats2sashimiplot/README.html