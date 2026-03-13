:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hdxmsqc'
.. highlight: bash

bioconductor-hdxmsqc
====================

.. conda:recipe:: bioconductor-hdxmsqc
   :replaces_section_title:
   :noindex:

   An R package for quality Control for hydrogen deuterium exchange mass spectrometry experiments

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/hdxmsqc.html
   :license: file LICENSE
   :recipe: /`bioconductor-hdxmsqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hdxmsqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hdxmsqc/meta.yaml>`_

   The hdxmsqc package enables us to analyse and visualise the quality of HDX\-MS experiments. Either as a final quality check before downstream analysis and publication or as part of a interative procedure to determine the quality of the data. The package builds on the QFeatures and Spectra packages to integrate with other mass\-spectrometry data.


.. conda:package:: bioconductor-hdxmsqc

   |downloads_bioconductor-hdxmsqc| |docker_bioconductor-hdxmsqc|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocstyle: ``>=2.38.0,<2.39.0``
   :depends on bioconductor-mscoreutils: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-qfeatures: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-spectra: ``>=1.20.0,<1.21.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-knitr: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-hdxmsqc

to add into an existing workspace instead, run::

    pixi add bioconductor-hdxmsqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hdxmsqc

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hdxmsqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hdxmsqc:<tag>

(see `bioconductor-hdxmsqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hdxmsqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hdxmsqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hdxmsqc
   :alt:   (downloads)
.. |docker_bioconductor-hdxmsqc| image:: https://quay.io/repository/biocontainers/bioconductor-hdxmsqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hdxmsqc
.. _`bioconductor-hdxmsqc/tags`: https://quay.io/repository/biocontainers/bioconductor-hdxmsqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hdxmsqc";
        var versions = ["1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hdxmsqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hdxmsqc/README.html