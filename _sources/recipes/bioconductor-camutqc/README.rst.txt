:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-camutqc'
.. highlight: bash

bioconductor-camutqc
====================

.. conda:recipe:: bioconductor-camutqc
   :replaces_section_title:
   :noindex:

   An R Package for Comprehensive Filtration and Selection of Cancer Somatic Mutations

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CaMutQC.html
   :license: GPL-3
   :recipe: /`bioconductor-camutqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-camutqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-camutqc/meta.yaml>`_

   CaMutQC is able to filter false positive mutations generated due to technical issues\, as well as to select candidate cancer mutations through a series of well\-structured functions by labeling mutations with various flags. And a detailed and vivid filter report will be offered after completing a whole filtration or selection section. Also\, CaMutQC integrates serveral methods and gene panels for Tumor Mutational Burden \(TMB\) estimation.


.. conda:package:: bioconductor-camutqc

   |downloads_bioconductor-camutqc| |docker_bioconductor-camutqc|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-clusterprofiler: ``>=4.18.0,<4.19.0``
   :depends on bioconductor-maftools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-meskit: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-dt: 
   :depends on r-ggplot2: 
   :depends on r-stringr: 
   :depends on r-tidyr: 
   :depends on r-vcfr: 

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

    pixi global install bioconductor-camutqc

to add into an existing workspace instead, run::

    pixi add bioconductor-camutqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-camutqc

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-camutqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-camutqc:<tag>

(see `bioconductor-camutqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-camutqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-camutqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-camutqc
   :alt:   (downloads)
.. |docker_bioconductor-camutqc| image:: https://quay.io/repository/biocontainers/bioconductor-camutqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-camutqc
.. _`bioconductor-camutqc/tags`: https://quay.io/repository/biocontainers/bioconductor-camutqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-camutqc";
        var versions = ["1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-camutqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-camutqc/README.html