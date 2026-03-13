:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-findit2'
.. highlight: bash

bioconductor-findit2
====================

.. conda:recipe:: bioconductor-findit2
   :replaces_section_title:
   :noindex:

   find influential TF and Target based on multi\-omics data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/FindIT2.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-findit2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-findit2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-findit2/meta.yaml>`_

   This package implements functions to find influential TF and target based on different input type. It have five module\: Multi\-peak multi\-gene annotaion\(mmPeakAnno module\)\, Calculate regulation potential\(calcRP module\)\, Find influential Target based on ChIP\-Seq and RNA\-Seq data\(Find influential Target module\)\, Find influential TF based on different input\(Find influential TF module\)\, Calculate peak\-gene or peak\-peak correlation\(peakGeneCor module\). And there are also some other useful function like integrate different source information\, calculate jaccard similarity for your TF.


.. conda:package:: bioconductor-findit2

   |downloads_bioconductor-findit2| |docker_bioconductor-findit2|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-multiassayexperiment: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-qvalue: ``>=2.42.0,<2.43.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-glmnet: 
   :depends on r-patchwork: 
   :depends on r-progress: 
   :depends on r-purrr: 
   :depends on r-rlang: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-withr: 

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

    pixi global install bioconductor-findit2

to add into an existing workspace instead, run::

    pixi add bioconductor-findit2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-findit2

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-findit2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-findit2:<tag>

(see `bioconductor-findit2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-findit2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-findit2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-findit2
   :alt:   (downloads)
.. |docker_bioconductor-findit2| image:: https://quay.io/repository/biocontainers/bioconductor-findit2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-findit2
.. _`bioconductor-findit2/tags`: https://quay.io/repository/biocontainers/bioconductor-findit2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-findit2";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-findit2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-findit2/README.html