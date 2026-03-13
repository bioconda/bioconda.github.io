:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rocpai'
.. highlight: bash

bioconductor-rocpai
===================

.. conda:recipe:: bioconductor-rocpai
   :replaces_section_title:
   :noindex:

   Receiver Operating Characteristic Partial Area Indexes for evaluating classifiers

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ROCpAI.html
   :license: GPL-3
   :recipe: /`bioconductor-rocpai <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rocpai>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rocpai/meta.yaml>`_

   The package analyzes the Curve ROC\, identificates it among different types of Curve ROC and calculates the area under de curve through the method that is most accuracy. This package is able to standarizate proper and improper pAUC.


.. conda:package:: bioconductor-rocpai

   |downloads_bioconductor-rocpai| |docker_bioconductor-rocpai|

   :versions:
      
      

      ``1.22.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-fission: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-boot: 
   :depends on r-knitr: 

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

    pixi global install bioconductor-rocpai

to add into an existing workspace instead, run::

    pixi add bioconductor-rocpai

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rocpai

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rocpai

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rocpai:<tag>

(see `bioconductor-rocpai/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rocpai| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rocpai.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rocpai
   :alt:   (downloads)
.. |docker_bioconductor-rocpai| image:: https://quay.io/repository/biocontainers/bioconductor-rocpai/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rocpai
.. _`bioconductor-rocpai/tags`: https://quay.io/repository/biocontainers/bioconductor-rocpai?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rocpai";
        var versions = ["1.22.0","1.14.0","1.12.0","1.10.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rocpai/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rocpai/README.html