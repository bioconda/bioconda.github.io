:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tnbc.cms'
.. highlight: bash

bioconductor-tnbc.cms
=====================

.. conda:recipe:: bioconductor-tnbc.cms
   :replaces_section_title:
   :noindex:

   TNBC.CMS\: Prediction of TNBC Consensus Molecular Subtypes

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/TNBC.CMS.html
   :license: GPL-3
   :recipe: /`bioconductor-tnbc.cms <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tnbc.cms>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tnbc.cms/meta.yaml>`_

   This package implements a machine learning\-based classifier for the assignment of consensus molecular subtypes to TNBC samples. It also provides functions to summarize genomic and clinical characteristics.


.. conda:package:: bioconductor-tnbc.cms

   |downloads_bioconductor-tnbc.cms| |docker_bioconductor-tnbc.cms|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-gsva: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-e1071: 
   :depends on r-forestplot: 
   :depends on r-ggally: 
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-pheatmap: 
   :depends on r-pracma: 
   :depends on r-quadprog: 
   :depends on r-r.utils: 
   :depends on r-rcolorbrewer: 
   :depends on r-survival: 

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

    pixi global install bioconductor-tnbc.cms

to add into an existing workspace instead, run::

    pixi add bioconductor-tnbc.cms

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tnbc.cms

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tnbc.cms

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tnbc.cms:<tag>

(see `bioconductor-tnbc.cms/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tnbc.cms| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tnbc.cms.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tnbc.cms
   :alt:   (downloads)
.. |docker_bioconductor-tnbc.cms| image:: https://quay.io/repository/biocontainers/bioconductor-tnbc.cms/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tnbc.cms
.. _`bioconductor-tnbc.cms/tags`: https://quay.io/repository/biocontainers/bioconductor-tnbc.cms?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tnbc.cms";
        var versions = ["1.18.0","1.16.0","1.14.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tnbc.cms/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tnbc.cms/README.html