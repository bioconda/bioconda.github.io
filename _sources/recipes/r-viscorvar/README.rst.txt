:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-viscorvar'
.. highlight: bash

r-viscorvar
===========

.. conda:recipe:: r-viscorvar
   :replaces_section_title:
   :noindex:

   Overlaying of Correlation Circles and Network of Correlated Variables

   :homepage: https://gitlab.com/bilille/viscorvar
   :license: GPL3
   :recipe: /`r-viscorvar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-viscorvar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-viscorvar/meta.yaml>`_

   visCorVar does analysis from data integration with the 
   function block.splsda \(mixOmics package\). visCorVar 
   performs the overlaying of correlation circles and a zoom
   in a rectangle to retrieve correlated variables. visCorVar 
   can create a network of correlated variables.



.. conda:package:: r-viscorvar

   |downloads_r-viscorvar| |docker_r-viscorvar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9-3</code>,  <code>0.9-2</code>,  <code>0.9-1</code>,  <code>0.9-0</code>,  <code>0.8-1</code>,  <code>0.8-0</code>,  <code>0.7-2</code>,  <code>0.7-1</code>,  <code>0.7-0</code>,  </span></summary>
      

      ``0.9-3``,  ``0.9-2``,  ``0.9-1``,  ``0.9-0``,  ``0.8-1``,  ``0.8-0``,  ``0.7-2``,  ``0.7-1``,  ``0.7-0``,  ``0.6-1``,  ``0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-mixomics: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-dplyr: 
   :depends on r-ellipse: 
   :depends on r-igraph: 
   :depends on r-knitr: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-rmarkdown: 
   :depends on r-testthat: 
   :depends on r-xtable: 

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

    pixi global install r-viscorvar

to add into an existing workspace instead, run::

    pixi add r-viscorvar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-viscorvar

Alternatively, to install into a new environment, run::

    conda create -n envname r-viscorvar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-viscorvar:<tag>

(see `r-viscorvar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-viscorvar| image:: https://img.shields.io/conda/dn/bioconda/r-viscorvar.svg?style=flat
   :target: https://anaconda.org/bioconda/r-viscorvar
   :alt:   (downloads)
.. |docker_r-viscorvar| image:: https://quay.io/repository/biocontainers/r-viscorvar/status
   :target: https://quay.io/repository/biocontainers/r-viscorvar
.. _`r-viscorvar/tags`: https://quay.io/repository/biocontainers/r-viscorvar?tab=tags


.. raw:: html

    <script>
        var package = "r-viscorvar";
        var versions = ["0.9","0.9","0.9","0.9","0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-viscorvar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-viscorvar/README.html