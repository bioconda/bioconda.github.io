:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-sigqc'
.. highlight: bash

r-sigqc
=======

.. conda:recipe:: r-sigqc
   :replaces_section_title:
   :noindex:

   Provides gene signature quality control metrics in publication ready plots. Namely\, enables the visualization of properties such as expression\, variability\, correlation\, and comparison of methods of standardisation and scoring metrics.

   :homepage: https://CRAN.R-project.org/package=sigQC
   :license: GPL / GPL-3.0-or-later
   :recipe: /`r-sigqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sigqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sigqc/meta.yaml>`_

   


.. conda:package:: r-sigqc

   |downloads_r-sigqc| |docker_r-sigqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.1.24-1</code>,  <code>0.1.24-0</code>,  <code>0.1.23-1</code>,  <code>0.1.23-0</code>,  <code>0.1.22-2</code>,  <code>0.1.22-1</code>,  <code>0.1.22-0</code>,  <code>0.1.21-4</code>,  <code>0.1.21-3</code>,  </span></summary>
      

      ``0.1.24-1``,  ``0.1.24-0``,  ``0.1.23-1``,  ``0.1.23-0``,  ``0.1.22-2``,  ``0.1.22-1``,  ``0.1.22-0``,  ``0.1.21-4``,  ``0.1.21-3``,  ``0.1.21-2``,  ``0.1.21-1``,  ``0.1.21-0``,  ``0.1.14-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-complexheatmap: 
   :depends on bioconductor-gsva: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-biclust: 
   :depends on r-circlize: 
   :depends on r-class: 
   :depends on r-cluster: 
   :depends on r-fmsb: 
   :depends on r-gplots: 
   :depends on r-gridgraphics: 
   :depends on r-kernsmooth: 
   :depends on r-lattice: 
   :depends on r-mass: 
   :depends on r-mclust: 
   :depends on r-moments: 
   :depends on r-nnet: 

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

    pixi global install r-sigqc

to add into an existing workspace instead, run::

    pixi add r-sigqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-sigqc

Alternatively, to install into a new environment, run::

    conda create -n envname r-sigqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-sigqc:<tag>

(see `r-sigqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-sigqc| image:: https://img.shields.io/conda/dn/bioconda/r-sigqc.svg?style=flat
   :target: https://anaconda.org/bioconda/r-sigqc
   :alt:   (downloads)
.. |docker_r-sigqc| image:: https://quay.io/repository/biocontainers/r-sigqc/status
   :target: https://quay.io/repository/biocontainers/r-sigqc
.. _`r-sigqc/tags`: https://quay.io/repository/biocontainers/r-sigqc?tab=tags


.. raw:: html

    <script>
        var package = "r-sigqc";
        var versions = ["0.1.24","0.1.24","0.1.23","0.1.23","0.1.22"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sigqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sigqc/README.html