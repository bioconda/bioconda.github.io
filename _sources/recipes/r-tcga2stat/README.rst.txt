:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-tcga2stat'
.. highlight: bash

r-tcga2stat
===========

.. conda:recipe:: r-tcga2stat
   :replaces_section_title:
   :noindex:

   Automatically downloads and processes TCGA genomics and clinical data into a format convenient for statistical analyses in the R environment.

   :homepage: http://www.liuzlab.org/TCGA2STAT/
   :license: GPL2 / GPL-2
   :recipe: /`r-tcga2stat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tcga2stat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-tcga2stat/meta.yaml>`_

   


.. conda:package:: r-tcga2stat

   |downloads_r-tcga2stat| |docker_r-tcga2stat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2-11</code>,  <code>1.2-10</code>,  <code>1.2-9</code>,  <code>1.2-8</code>,  <code>1.2-7</code>,  <code>1.2-6</code>,  <code>1.2-5</code>,  <code>1.2-4</code>,  <code>1.2-3</code>,  </span></summary>
      

      ``1.2-11``,  ``1.2-10``,  ``1.2-9``,  ``1.2-8``,  ``1.2-7``,  ``1.2-6``,  ``1.2-5``,  ``1.2-4``,  ``1.2-3``,  ``1.2-2``,  ``1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-cntools: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-xml: 

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

    pixi global install r-tcga2stat

to add into an existing workspace instead, run::

    pixi add r-tcga2stat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-tcga2stat

Alternatively, to install into a new environment, run::

    conda create -n envname r-tcga2stat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-tcga2stat:<tag>

(see `r-tcga2stat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-tcga2stat| image:: https://img.shields.io/conda/dn/bioconda/r-tcga2stat.svg?style=flat
   :target: https://anaconda.org/bioconda/r-tcga2stat
   :alt:   (downloads)
.. |docker_r-tcga2stat| image:: https://quay.io/repository/biocontainers/r-tcga2stat/status
   :target: https://quay.io/repository/biocontainers/r-tcga2stat
.. _`r-tcga2stat/tags`: https://quay.io/repository/biocontainers/r-tcga2stat?tab=tags


.. raw:: html

    <script>
        var package = "r-tcga2stat";
        var versions = ["1.2","1.2","1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-tcga2stat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-tcga2stat/README.html