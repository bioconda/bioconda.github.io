:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tissuetreg'
.. highlight: bash

bioconductor-tissuetreg
=======================

.. conda:recipe:: bioconductor-tissuetreg
   :replaces_section_title:
   :noindex:

   TWGBS and RNA\-seq data from tissue T regulatory cells from mice

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/tissueTreg.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-tissuetreg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tissuetreg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tissuetreg/meta.yaml>`_

   The package provides ready to use epigenomes \(obtained from TWGBS\) and transcriptomes \(RNA\-seq\) from various tissues as obtained in the study \(Delacher and Imbusch 2017\, PMID\: 28783152\). Regulatory T cells \(Treg cells\) perform two distinct functions\: they maintain self\-tolerance\, and they support organ homeostasis by differentiating into specialized tissue Treg cells. The underlying dataset characterises the epigenetic and transcriptomic modifications for specialized tissue Treg cells.


.. conda:package:: bioconductor-tissuetreg

   |downloads_bioconductor-tissuetreg| |docker_bioconductor-tissuetreg|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.17.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.17.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-tissuetreg

to add into an existing workspace instead, run::

    pixi add bioconductor-tissuetreg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tissuetreg

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tissuetreg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tissuetreg:<tag>

(see `bioconductor-tissuetreg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tissuetreg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tissuetreg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tissuetreg
   :alt:   (downloads)
.. |docker_bioconductor-tissuetreg| image:: https://quay.io/repository/biocontainers/bioconductor-tissuetreg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tissuetreg
.. _`bioconductor-tissuetreg/tags`: https://quay.io/repository/biocontainers/bioconductor-tissuetreg?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tissuetreg";
        var versions = ["1.30.0","1.26.0","1.22.0","1.20.0","1.17.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tissuetreg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tissuetreg/README.html