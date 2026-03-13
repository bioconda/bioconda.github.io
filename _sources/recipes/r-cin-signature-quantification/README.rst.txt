:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cin-signature-quantification'
.. highlight: bash

r-cin-signature-quantification
==============================

.. conda:recipe:: r-cin-signature-quantification
   :replaces_section_title:
   :noindex:

   Quantification of copy number signatures in cancer samples from copy number profiles. The signatures are a readout of mutational processes resulting in chromosomal instability \(CIN\). Methods from Drews et al. \(Nature\, 2022\) and Macintyre et al. \(Nature Genetics\, 2018\) are included.

   :homepage: https://github.com/markowetzlab/CINSignatureQuantification
   :license: ASL
   :recipe: /`r-cin-signature-quantification <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cin-signature-quantification>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cin-signature-quantification/meta.yaml>`_

   


.. conda:package:: r-cin-signature-quantification

   |downloads_r-cin-signature-quantification| |docker_r-cin-signature-quantification|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.46.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: ``>=1.14``
   :depends on r-doparallel: ``>=1.0.16``
   :depends on r-foreach: ``>=1.5.1``
   :depends on r-knitr: 
   :depends on r-limsolve: ``>=1.5.6``
   :depends on r-rmarkdown: 
   :depends on r-stringr: ``>=1.4``
   :depends on r-testthat: ``>=3.0.0``

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

    pixi global install r-cin-signature-quantification

to add into an existing workspace instead, run::

    pixi add r-cin-signature-quantification

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-cin-signature-quantification

Alternatively, to install into a new environment, run::

    conda create -n envname r-cin-signature-quantification

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-cin-signature-quantification:<tag>

(see `r-cin-signature-quantification/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-cin-signature-quantification| image:: https://img.shields.io/conda/dn/bioconda/r-cin-signature-quantification.svg?style=flat
   :target: https://anaconda.org/bioconda/r-cin-signature-quantification
   :alt:   (downloads)
.. |docker_r-cin-signature-quantification| image:: https://quay.io/repository/biocontainers/r-cin-signature-quantification/status
   :target: https://quay.io/repository/biocontainers/r-cin-signature-quantification
.. _`r-cin-signature-quantification/tags`: https://quay.io/repository/biocontainers/r-cin-signature-quantification?tab=tags


.. raw:: html

    <script>
        var package = "r-cin-signature-quantification";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cin-signature-quantification/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cin-signature-quantification/README.html