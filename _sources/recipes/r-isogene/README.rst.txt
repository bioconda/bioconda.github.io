:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-isogene'
.. highlight: bash

r-isogene
=========

.. conda:recipe:: r-isogene
   :replaces_section_title:
   :noindex:

   Offers framework for testing for monotonic relationship between gene expression.

   :homepage: https://CRAN.R-project.org/package=IsoGene
   :license: GPL3 / GPL-3
   :recipe: /`r-isogene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-isogene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-isogene/meta.yaml>`_

   


.. conda:package:: r-isogene

   |downloads_r-isogene| |docker_r-isogene|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0_24-9</code>,  <code>1.0_24-8</code>,  <code>1.0_24-7</code>,  <code>1.0_24-6</code>,  <code>1.0_24-5</code>,  <code>1.0_24-4</code>,  <code>1.0_24-3</code>,  <code>1.0_24-2</code>,  <code>1.0_24-1</code>,  </span></summary>
      

      ``1.0_24-9``,  ``1.0_24-8``,  ``1.0_24-7``,  ``1.0_24-6``,  ``1.0_24-5``,  ``1.0_24-4``,  ``1.0_24-3``,  ``1.0_24-2``,  ``1.0_24-1``,  ``1.0_24-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-affy: 
   :depends on bioconductor-biobase: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-ff: ``>=2.0.0``
   :depends on r-iso: 
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

    pixi global install r-isogene

to add into an existing workspace instead, run::

    pixi add r-isogene

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-isogene

Alternatively, to install into a new environment, run::

    conda create -n envname r-isogene

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-isogene:<tag>

(see `r-isogene/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-isogene| image:: https://img.shields.io/conda/dn/bioconda/r-isogene.svg?style=flat
   :target: https://anaconda.org/bioconda/r-isogene
   :alt:   (downloads)
.. |docker_r-isogene| image:: https://quay.io/repository/biocontainers/r-isogene/status
   :target: https://quay.io/repository/biocontainers/r-isogene
.. _`r-isogene/tags`: https://quay.io/repository/biocontainers/r-isogene?tab=tags


.. raw:: html

    <script>
        var package = "r-isogene";
        var versions = ["1.0_24","1.0_24","1.0_24","1.0_24","1.0_24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-isogene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-isogene/README.html