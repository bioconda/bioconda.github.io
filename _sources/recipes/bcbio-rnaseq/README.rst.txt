:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcbio-rnaseq'
.. highlight: bash

bcbio-rnaseq
============

.. conda:recipe:: bcbio-rnaseq
   :replaces_section_title:
   :noindex:

   Report generation for bcbio\-nextgen RNA\-seq runs

   :homepage: https://github.com/roryk/bcbio.rnaseq
   :license: MIT
   :recipe: /`bcbio-rnaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-rnaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-rnaseq/meta.yaml>`_

   


.. conda:package:: bcbio-rnaseq

   |downloads_bcbio-rnaseq| |docker_bcbio-rnaseq|

   :versions:
      
      

      ``1.2.0-3``,  ``1.2.0-2``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.1-1``,  ``1.0.4-1``,  ``1.0.3-1``

      

   
   :depends on bioconductor-biomart: 
   :depends on bioconductor-clusterprofiler: 
   :depends on bioconductor-degreport: 
   :depends on bioconductor-deseq2: 
   :depends on bioconductor-edger: 
   :depends on bioconductor-org.hs.eg.db: 
   :depends on bioconductor-org.mm.eg.db: 
   :depends on bioconductor-tximport: 
   :depends on bioconductor-vsn: 
   :depends on openjdk: 
   :depends on r-base: ``3.3.2*``
   :depends on r-chbutils: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-hexbin: 
   :depends on r-knitr: 
   :depends on r-matrixstats: 
   :depends on r-pheatmap: 
   :depends on r-quantreg: 
   :depends on r-readr: 
   :depends on r-rmarkdown: 
   :depends on r-sleuth: 
   :depends on r-stringr: 

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

    pixi global install bcbio-rnaseq

to add into an existing workspace instead, run::

    pixi add bcbio-rnaseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bcbio-rnaseq

Alternatively, to install into a new environment, run::

    conda create -n envname bcbio-rnaseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bcbio-rnaseq:<tag>

(see `bcbio-rnaseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bcbio-rnaseq| image:: https://img.shields.io/conda/dn/bioconda/bcbio-rnaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bcbio-rnaseq
   :alt:   (downloads)
.. |docker_bcbio-rnaseq| image:: https://quay.io/repository/biocontainers/bcbio-rnaseq/status
   :target: https://quay.io/repository/biocontainers/bcbio-rnaseq
.. _`bcbio-rnaseq/tags`: https://quay.io/repository/biocontainers/bcbio-rnaseq?tab=tags


.. raw:: html

    <script>
        var package = "bcbio-rnaseq";
        var versions = ["1.2.0","1.2.0","1.2.0","1.2.0","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcbio-rnaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcbio-rnaseq/README.html