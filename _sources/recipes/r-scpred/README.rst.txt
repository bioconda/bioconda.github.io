:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-scpred'
.. highlight: bash

r-scpred
========

.. conda:recipe:: r-scpred
   :replaces_section_title:
   :noindex:

   Bioconda\-installable version of scPred cell type classification method.

   :homepage: https://github.com/powellgenomicslab/scPred
   :developer docs: https://github.com/powellgenomicslab/scPred/tree/development
   :license: MIT
   :recipe: /`r-scpred <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scpred>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scpred/meta.yaml>`_

   


.. conda:package:: r-scpred

   |downloads_r-scpred| |docker_r-scpred|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.9.2-2</code>,  <code>1.9.2-1</code>,  <code>1.9.2-0</code>,  <code>1.9.0-0</code>,  <code>1.0-2</code>,  <code>1.0-1</code>,  <code>1.0-0</code>,  <code>v1.9.0-2</code>,  <code>v1.9.0-1</code>,  </span></summary>
      

      ``1.9.2-2``,  ``1.9.2-1``,  ``1.9.2-0``,  ``1.9.0-0``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``,  ``v1.9.0-2``,  ``v1.9.0-1``,  ``v1.9.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-caret: 
   :depends on r-cli: 
   :depends on r-crayon: 
   :depends on r-ggbeeswarm: 
   :depends on r-ggplot2: 
   :depends on r-harmony: 
   :depends on r-kernlab: 
   :depends on r-knitr: 
   :depends on r-mlmetrics: 
   :depends on r-pbapply: 
   :depends on r-proc: 
   :depends on r-seuratobject: 

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

    pixi global install r-scpred

to add into an existing workspace instead, run::

    pixi add r-scpred

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-scpred

Alternatively, to install into a new environment, run::

    conda create -n envname r-scpred

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-scpred:<tag>

(see `r-scpred/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-scpred| image:: https://img.shields.io/conda/dn/bioconda/r-scpred.svg?style=flat
   :target: https://anaconda.org/bioconda/r-scpred
   :alt:   (downloads)
.. |docker_r-scpred| image:: https://quay.io/repository/biocontainers/r-scpred/status
   :target: https://quay.io/repository/biocontainers/r-scpred
.. _`r-scpred/tags`: https://quay.io/repository/biocontainers/r-scpred?tab=tags


.. raw:: html

    <script>
        var package = "r-scpred";
        var versions = ["1.9.2","1.9.2","1.9.2","1.9.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-scpred/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-scpred/README.html