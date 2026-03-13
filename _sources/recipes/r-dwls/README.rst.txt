:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-dwls'
.. highlight: bash

r-dwls
======

.. conda:recipe:: r-dwls
   :replaces_section_title:
   :noindex:

   Deconvolution of bulk mRNA data using single\-cell RNAseq to provide cell type specific signatures

   :homepage: https://github.com/omnideconv/DWLS
   :license: GPL / GPL-2
   :recipe: /`r-dwls <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dwls>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-dwls/meta.yaml>`_

   


.. conda:package:: r-dwls

   |downloads_r-dwls| |docker_r-dwls|

   :versions:
      
      

      ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on bioconductor-mast: ``>=1.4.1``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-e1071: ``>=1.7.0``
   :depends on r-magrittr: 
   :depends on r-quadprog: ``>=1.5``
   :depends on r-reshape: ``>=0.8.8``
   :depends on r-rocr: ``>=1.0``
   :depends on r-seurat: ``>=2.3.4``
   :depends on r-varhandle: ``>=2.0.3``

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

    pixi global install r-dwls

to add into an existing workspace instead, run::

    pixi add r-dwls

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-dwls

Alternatively, to install into a new environment, run::

    conda create -n envname r-dwls

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-dwls:<tag>

(see `r-dwls/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-dwls| image:: https://img.shields.io/conda/dn/bioconda/r-dwls.svg?style=flat
   :target: https://anaconda.org/bioconda/r-dwls
   :alt:   (downloads)
.. |docker_r-dwls| image:: https://quay.io/repository/biocontainers/r-dwls/status
   :target: https://quay.io/repository/biocontainers/r-dwls
.. _`r-dwls/tags`: https://quay.io/repository/biocontainers/r-dwls?tab=tags


.. raw:: html

    <script>
        var package = "r-dwls";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-dwls/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-dwls/README.html