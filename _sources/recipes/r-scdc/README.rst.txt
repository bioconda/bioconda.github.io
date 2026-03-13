:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-scdc'
.. highlight: bash

r-scdc
======

.. conda:recipe:: r-scdc
   :replaces_section_title:
   :noindex:

   SCDC adopts an ENSEMBLE method to integrate deconvolution results from different scRNA\-seq datasets that are produced in different laboratories and at different times\, implicitly addressing the batch\-effect confounding.

   :homepage: https://github.com/omnideconv/SCDC
   :license: MIT / MIT
   :recipe: /`r-scdc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scdc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scdc/meta.yaml>`_
   :links: doi: :doi:`10.1093/bib/bbz166`

   


.. conda:package:: r-scdc

   |downloads_r-scdc| |docker_r-scdc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0-10</code>,  <code>0-9</code>,  <code>0-8</code>,  <code>0-7</code>,  <code>0-6</code>,  <code>0-5</code>,  <code>0-4</code>,  <code>0-3</code>,  <code>0-2</code>,  </span></summary>
      

      ``0-10``,  ``0-9``,  ``0-8``,  ``0-7``,  ``0-6``,  ``0-5``,  ``0-4``,  ``0-3``,  ``0-2``,  ``0-1``,  ``0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.50.0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on r-base: ``>=4.0,<4.1``
   :depends on r-cowplot: ``>=1.1.1``
   :depends on r-ggplot2: ``>=3.3.5``
   :depends on r-l1pack: ``>=0.38.196``
   :depends on r-nnls: ``>=1.4``
   :depends on r-pheatmap: ``>=1.0.12``
   :depends on r-rcpp: ``>=1.0.7``
   :depends on r-reshape: ``>=0.8.8``
   :depends on xbioc: ``>=0.1.19``

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

    pixi global install r-scdc

to add into an existing workspace instead, run::

    pixi add r-scdc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-scdc

Alternatively, to install into a new environment, run::

    conda create -n envname r-scdc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-scdc:<tag>

(see `r-scdc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-scdc| image:: https://img.shields.io/conda/dn/bioconda/r-scdc.svg?style=flat
   :target: https://anaconda.org/bioconda/r-scdc
   :alt:   (downloads)
.. |docker_r-scdc| image:: https://quay.io/repository/biocontainers/r-scdc/status
   :target: https://quay.io/repository/biocontainers/r-scdc
.. _`r-scdc/tags`: https://quay.io/repository/biocontainers/r-scdc?tab=tags


.. raw:: html

    <script>
        var package = "r-scdc";
        var versions = ["0","0","0","0","0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-scdc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-scdc/README.html