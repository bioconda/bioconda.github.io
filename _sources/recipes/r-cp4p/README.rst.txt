:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cp4p'
.. highlight: bash

r-cp4p
======

.. conda:recipe:: r-cp4p
   :replaces_section_title:
   :noindex:

   Functions to check whether a vector of p\-values respects the assumptions of FDR \(false discovery rate\) control procedures and to compute adjusted p\-values.

   :homepage: https://CRAN.R-project.org/package=cp4p
   :license: GPL3 / GPL-3
   :recipe: /`r-cp4p <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cp4p>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cp4p/meta.yaml>`_

   


.. conda:package:: r-cp4p

   |downloads_r-cp4p| |docker_r-cp4p|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.6-7</code>,  <code>0.3.6-6</code>,  <code>0.3.6-5</code>,  <code>0.3.6-4</code>,  <code>0.3.6-3</code>,  <code>0.3.6-2</code>,  <code>0.3.6-1</code>,  <code>0.3.6-0</code>,  <code>0.3.5-1</code>,  </span></summary>
      

      ``0.3.6-7``,  ``0.3.6-6``,  ``0.3.6-5``,  ``0.3.6-4``,  ``0.3.6-3``,  ``0.3.6-2``,  ``0.3.6-1``,  ``0.3.6-0``,  ``0.3.5-1``,  ``0.3.5-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-limma: 
   :depends on bioconductor-multtest: 
   :depends on bioconductor-qvalue: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-mess: 

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

    pixi global install r-cp4p

to add into an existing workspace instead, run::

    pixi add r-cp4p

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-cp4p

Alternatively, to install into a new environment, run::

    conda create -n envname r-cp4p

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-cp4p:<tag>

(see `r-cp4p/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-cp4p| image:: https://img.shields.io/conda/dn/bioconda/r-cp4p.svg?style=flat
   :target: https://anaconda.org/bioconda/r-cp4p
   :alt:   (downloads)
.. |docker_r-cp4p| image:: https://quay.io/repository/biocontainers/r-cp4p/status
   :target: https://quay.io/repository/biocontainers/r-cp4p
.. _`r-cp4p/tags`: https://quay.io/repository/biocontainers/r-cp4p?tab=tags


.. raw:: html

    <script>
        var package = "r-cp4p";
        var versions = ["0.3.6","0.3.6","0.3.6","0.3.6","0.3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cp4p/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cp4p/README.html