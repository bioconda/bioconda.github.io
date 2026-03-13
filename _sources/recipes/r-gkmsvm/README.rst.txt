:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-gkmsvm'
.. highlight: bash

r-gkmsvm
========

.. conda:recipe:: r-gkmsvm
   :replaces_section_title:
   :noindex:

   Imports the \'gkmSVM\' v2.0 functionalities into R \<http\:\/\/www.beerlab.org\/gkmsvm\/\> It also uses the \'kernlab\' library \(separate R package by different authors\) for various SVM algorithms.

   :homepage: https://CRAN.R-project.org/package=gkmSVM
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`r-gkmsvm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gkmsvm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-gkmsvm/meta.yaml>`_

   


.. conda:package:: r-gkmsvm

   |downloads_r-gkmsvm| |docker_r-gkmsvm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.83.0-1</code>,  <code>0.83.0-0</code>,  <code>0.82.0-3</code>,  <code>0.82.0-2</code>,  <code>0.82.0-1</code>,  <code>0.82.0-0</code>,  <code>0.81.0-4</code>,  <code>0.81.0-3</code>,  <code>0.81.0-2</code>,  </span></summary>
      

      ``0.83.0-1``,  ``0.83.0-0``,  ``0.82.0-3``,  ``0.82.0-2``,  ``0.82.0-1``,  ``0.82.0-0``,  ``0.81.0-4``,  ``0.81.0-3``,  ``0.81.0-2``,  ``0.81.0-1``,  ``0.81.0-0``,  ``0.80.0-1``,  ``0.80.0-0``,  ``0.79.0-1``,  ``0.79.0-0``,  ``0.71.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends on bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends on bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0a0``
   :depends on bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends on bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends on bioconductor-rtracklayer: ``>=1.66.0,<1.67.0a0``
   :depends on bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-kernlab: 
   :depends on r-rcpp: 
   :depends on r-rocr: 
   :depends on r-seqinr: 

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

    pixi global install r-gkmsvm

to add into an existing workspace instead, run::

    pixi add r-gkmsvm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-gkmsvm

Alternatively, to install into a new environment, run::

    conda create -n envname r-gkmsvm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-gkmsvm:<tag>

(see `r-gkmsvm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-gkmsvm| image:: https://img.shields.io/conda/dn/bioconda/r-gkmsvm.svg?style=flat
   :target: https://anaconda.org/bioconda/r-gkmsvm
   :alt:   (downloads)
.. |docker_r-gkmsvm| image:: https://quay.io/repository/biocontainers/r-gkmsvm/status
   :target: https://quay.io/repository/biocontainers/r-gkmsvm
.. _`r-gkmsvm/tags`: https://quay.io/repository/biocontainers/r-gkmsvm?tab=tags


.. raw:: html

    <script>
        var package = "r-gkmsvm";
        var versions = ["0.83.0","0.83.0","0.82.0","0.82.0","0.82.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-gkmsvm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-gkmsvm/README.html