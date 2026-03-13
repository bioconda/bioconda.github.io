:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-sbpiper'
.. highlight: bash

r-sbpiper
=========

.. conda:recipe:: r-sbpiper
   :replaces_section_title:
   :noindex:

   Provides an API for analysing repetitive parameter estimations and simulations of mathematical models. Examples of mathematical models are Ordinary Differential equations \(ODEs\)  or Stochastic Differential Equations \(SDEs\) models. Among the analyses for parameter  estimation \'sbpiper\' calculates statistics and generates plots for parameter density\, PCA of the best  fits\, parameter profile likelihood estimations \(PLEs\)\, and 2D parameter PLEs. These results can  be generated using all or a subset of the best computed parameter sets. Among the analyses  for model simulation \'sbpiper\' calculates statistics and generates plots for deterministic  and stochastic time courses via cartesian and heatmap plots. Plots for the scan of one or two model  parameters can also be generated. This package is primarily used by the software \'SBpipe\'.  Citation\: Dalle Pezze P\, Le NovÃ¨re N. SBpipe\: a collection of pipelines for automating  repetitive simulation and analysis tasks. BMC Systems Biology. 2017\;11\:46. \<doi\:10.1186\/s12918\-017\-0423\-3\>.

   :homepage: https://github.com/pdp10/sbpiper
   :license: MIT / MIT
   :recipe: /`r-sbpiper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sbpiper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-sbpiper/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12918-017-0423-3`

   


.. conda:package:: r-sbpiper

   |downloads_r-sbpiper| |docker_r-sbpiper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9.0-9</code>,  <code>1.9.0-8</code>,  <code>1.9.0-7</code>,  <code>1.9.0-6</code>,  <code>1.9.0-5</code>,  <code>1.9.0-4</code>,  <code>1.9.0-3</code>,  <code>1.9.0-2</code>,  <code>1.9.0-1</code>,  </span></summary>
      

      ``1.9.0-9``,  ``1.9.0-8``,  ``1.9.0-7``,  ``1.9.0-6``,  ``1.9.0-5``,  ``1.9.0-4``,  ``1.9.0-3``,  ``1.9.0-2``,  ``1.9.0-1``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-colorramps: 
   :depends on r-data.table: 
   :depends on r-factoextra: 
   :depends on r-factominer: 
   :depends on r-ggplot2: ``>=2.2.0``
   :depends on r-hmisc: 
   :depends on r-reshape2: 
   :depends on r-scales: 
   :depends on r-stringr: 

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

    pixi global install r-sbpiper

to add into an existing workspace instead, run::

    pixi add r-sbpiper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-sbpiper

Alternatively, to install into a new environment, run::

    conda create -n envname r-sbpiper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-sbpiper:<tag>

(see `r-sbpiper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-sbpiper| image:: https://img.shields.io/conda/dn/bioconda/r-sbpiper.svg?style=flat
   :target: https://anaconda.org/bioconda/r-sbpiper
   :alt:   (downloads)
.. |docker_r-sbpiper| image:: https://quay.io/repository/biocontainers/r-sbpiper/status
   :target: https://quay.io/repository/biocontainers/r-sbpiper
.. _`r-sbpiper/tags`: https://quay.io/repository/biocontainers/r-sbpiper?tab=tags


.. raw:: html

    <script>
        var package = "r-sbpiper";
        var versions = ["1.9.0","1.9.0","1.9.0","1.9.0","1.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-sbpiper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-sbpiper/README.html