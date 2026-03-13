:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rbpbench'
.. highlight: bash

rbpbench
========

.. conda:recipe:: rbpbench
   :replaces_section_title:
   :noindex:

   Evaluate CLIP\-seq and other genomic region data using a comprehensive collection of known RBP binding motifs

   :homepage: https://github.com/michauhl/RBPBench
   :license: MIT
   :recipe: /`rbpbench <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rbpbench>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rbpbench/meta.yaml>`_

   


.. conda:package:: rbpbench

   |downloads_rbpbench| |docker_rbpbench|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.0-0</code>,  <code>1.0.6-0</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-0</code>,  <code>1.0-0</code>,  <code>0.9-0</code>,  <code>0.8.1-0</code>,  </span></summary>
      

      ``1.1.0-0``,  ``1.0.6-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0-0``,  ``0.9-0``,  ``0.8.1-0``,  ``0.8-0``,  ``0.7-0``,  ``0.6-1``,  ``0.6-0``,  ``0.5-0``,  ``0.4-0``,  ``0.3-0``,  ``0.2-0``,  ``0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: 
   :depends on goatools: 
   :depends on infernal: 
   :depends on logomaker: 
   :depends on markdown: 
   :depends on matplotlib-venn: 
   :depends on meme: ``>=5.0``
   :depends on packaging: 
   :depends on plotly: 
   :depends on pybigwig: 
   :depends on python: ``<3.12``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on textdistance: 
   :depends on upsetplot: ``>=0.9``
   :depends on venn: 

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

    pixi global install rbpbench

to add into an existing workspace instead, run::

    pixi add rbpbench

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rbpbench

Alternatively, to install into a new environment, run::

    conda create -n envname rbpbench

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rbpbench:<tag>

(see `rbpbench/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rbpbench| image:: https://img.shields.io/conda/dn/bioconda/rbpbench.svg?style=flat
   :target: https://anaconda.org/bioconda/rbpbench
   :alt:   (downloads)
.. |docker_rbpbench| image:: https://quay.io/repository/biocontainers/rbpbench/status
   :target: https://quay.io/repository/biocontainers/rbpbench
.. _`rbpbench/tags`: https://quay.io/repository/biocontainers/rbpbench?tab=tags


.. raw:: html

    <script>
        var package = "rbpbench";
        var versions = ["1.1.0","1.0.6","1.0.4","1.0.3","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rbpbench/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rbpbench/README.html