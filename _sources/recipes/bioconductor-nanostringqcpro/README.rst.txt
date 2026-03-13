:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nanostringqcpro'
.. highlight: bash

bioconductor-nanostringqcpro
============================

.. conda:recipe:: bioconductor-nanostringqcpro
   :replaces_section_title:
   :noindex:

   Quality metrics and data processing methods for NanoString mRNA gene expression data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/NanoStringQCPro.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-nanostringqcpro <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanostringqcpro>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanostringqcpro/meta.yaml>`_

   NanoStringQCPro provides a set of quality metrics that can be used to assess the quality of NanoString mRNA gene expression data \-\- i.e. to identify outlier probes and outlier samples. It also provides different background subtraction and normalization approaches for this data. It outputs suggestions for flagging samples\/probes and an easily sharable html quality control output.


.. conda:package:: bioconductor-nanostringqcpro

   |downloads_bioconductor-nanostringqcpro| |docker_bioconductor-nanostringqcpro|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.17.0,<3.18.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-knitr: ``>=1.12``
   :depends on r-nmf: ``>=0.20.5``
   :depends on r-png: ``>=0.1-7``
   :depends on r-rcolorbrewer: ``>=1.0-5``

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

    pixi global install bioconductor-nanostringqcpro

to add into an existing workspace instead, run::

    pixi add bioconductor-nanostringqcpro

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-nanostringqcpro

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-nanostringqcpro

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-nanostringqcpro:<tag>

(see `bioconductor-nanostringqcpro/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-nanostringqcpro| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nanostringqcpro.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nanostringqcpro
   :alt:   (downloads)
.. |docker_bioconductor-nanostringqcpro| image:: https://quay.io/repository/biocontainers/bioconductor-nanostringqcpro/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nanostringqcpro
.. _`bioconductor-nanostringqcpro/tags`: https://quay.io/repository/biocontainers/bioconductor-nanostringqcpro?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nanostringqcpro";
        var versions = ["1.32.0","1.30.0","1.26.0","1.24.0","1.22.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nanostringqcpro/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nanostringqcpro/README.html