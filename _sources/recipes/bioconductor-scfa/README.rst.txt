:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scfa'
.. highlight: bash

bioconductor-scfa
=================

.. conda:recipe:: bioconductor-scfa
   :replaces_section_title:
   :noindex:

   SCFA\: Subtyping via Consensus Factor Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SCFA.html
   :license: LGPL
   :recipe: /`bioconductor-scfa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scfa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scfa/meta.yaml>`_

   Subtyping via Consensus Factor Analysis \(SCFA\) can efficiently remove noisy signals from consistent molecular patterns in multi\-omics data. SCFA first uses an autoencoder to select only important features and then repeatedly performs factor analysis to represent the data with different numbers of factors. Using these representations\, it can reliably identify cancer subtypes and accurately predict risk scores of patients.


.. conda:package:: bioconductor-scfa

   |downloads_bioconductor-scfa| |docker_bioconductor-scfa|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cluster: 
   :depends on r-coro: 
   :depends on r-glmnet: 
   :depends on r-igraph: 
   :depends on r-matrix: 
   :depends on r-matrixstats: 
   :depends on r-psych: 
   :depends on r-rhpcblasctl: 
   :depends on r-survival: 
   :depends on r-torch: ``>=0.3.0``

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

    pixi global install bioconductor-scfa

to add into an existing workspace instead, run::

    pixi add bioconductor-scfa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scfa

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scfa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scfa:<tag>

(see `bioconductor-scfa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scfa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scfa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scfa
   :alt:   (downloads)
.. |docker_bioconductor-scfa| image:: https://quay.io/repository/biocontainers/bioconductor-scfa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scfa
.. _`bioconductor-scfa/tags`: https://quay.io/repository/biocontainers/bioconductor-scfa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scfa";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scfa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scfa/README.html