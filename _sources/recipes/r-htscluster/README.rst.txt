:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-htscluster'
.. highlight: bash

r-htscluster
============

.. conda:recipe:: r-htscluster
   :replaces_section_title:
   :noindex:

   A Poisson mixture model is implemented to cluster genes from high\- throughput transcriptome sequencing \(RNA\-seq\) data. Parameter estimation is performed using either the EM or CEM algorithm\, and the slope heuristics are used for model selection \(i.e.\, to choose the number of clusters\).

   :homepage: https://CRAN.R-project.org/package=HTSCluster
   :license: GPL3 / GPL (>= 3)
   :recipe: /`r-htscluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-htscluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-htscluster/meta.yaml>`_

   


.. conda:package:: r-htscluster

   |downloads_r-htscluster| |docker_r-htscluster|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.11-2</code>,  <code>2.0.11-1</code>,  <code>2.0.11-0</code>,  <code>2.0.10-2</code>,  <code>2.0.10-1</code>,  <code>2.0.10-0</code>,  <code>2.0.8-5</code>,  <code>2.0.8-4</code>,  <code>2.0.8-3</code>,  </span></summary>
      

      ``2.0.11-2``,  ``2.0.11-1``,  ``2.0.11-0``,  ``2.0.10-2``,  ``2.0.10-1``,  ``2.0.10-0``,  ``2.0.8-5``,  ``2.0.8-4``,  ``2.0.8-3``,  ``2.0.8-1``,  ``2.0.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-edger: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-capushe: 
   :depends on r-plotrix: 

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

    pixi global install r-htscluster

to add into an existing workspace instead, run::

    pixi add r-htscluster

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-htscluster

Alternatively, to install into a new environment, run::

    conda create -n envname r-htscluster

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-htscluster:<tag>

(see `r-htscluster/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-htscluster| image:: https://img.shields.io/conda/dn/bioconda/r-htscluster.svg?style=flat
   :target: https://anaconda.org/bioconda/r-htscluster
   :alt:   (downloads)
.. |docker_r-htscluster| image:: https://quay.io/repository/biocontainers/r-htscluster/status
   :target: https://quay.io/repository/biocontainers/r-htscluster
.. _`r-htscluster/tags`: https://quay.io/repository/biocontainers/r-htscluster?tab=tags


.. raw:: html

    <script>
        var package = "r-htscluster";
        var versions = ["2.0.11","2.0.11","2.0.11","2.0.10","2.0.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-htscluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-htscluster/README.html