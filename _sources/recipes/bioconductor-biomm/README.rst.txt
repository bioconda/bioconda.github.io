:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biomm'
.. highlight: bash

bioconductor-biomm
==================

.. conda:recipe:: bioconductor-biomm
   :replaces_section_title:
   :noindex:

   BioMM\: Biological\-informed Multi\-stage Machine learning framework for phenotype prediction using omics data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/BioMM.html
   :license: GPL-3
   :recipe: /`bioconductor-biomm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biomm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biomm/meta.yaml>`_

   The identification of reproducible biological patterns from high\-dimensional omics data is a key factor in understanding the biology of complex disease or traits. Incorporating prior biological knowledge into machine learning is an important step in advancing such research. We have proposed a biologically informed multi\-stage machine learing framework termed BioMM specifically for phenotype prediction based on omics\-scale data where we can evaluate different machine learning models with prior biological meta information.


.. conda:package:: bioconductor-biomm

   |downloads_bioconductor-biomm| |docker_bioconductor-biomm|

   :versions:
      
      

      ``1.15.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      

   
   :depends on bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-topgo: ``>=2.52.0,<2.53.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-cmplot: 
   :depends on r-e1071: 
   :depends on r-ggplot2: 
   :depends on r-glmnet: 
   :depends on r-imager: 
   :depends on r-lattice: 
   :depends on r-nsprcomp: 
   :depends on r-precrec: 
   :depends on r-ranger: 
   :depends on r-rms: 
   :depends on r-vioplot: 
   :depends on r-xlsx: 

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

    pixi global install bioconductor-biomm

to add into an existing workspace instead, run::

    pixi add bioconductor-biomm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-biomm

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-biomm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-biomm:<tag>

(see `bioconductor-biomm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-biomm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biomm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biomm
   :alt:   (downloads)
.. |docker_bioconductor-biomm| image:: https://quay.io/repository/biocontainers/bioconductor-biomm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biomm
.. _`bioconductor-biomm/tags`: https://quay.io/repository/biocontainers/bioconductor-biomm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biomm";
        var versions = ["1.15.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biomm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biomm/README.html