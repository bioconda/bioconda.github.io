:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cascade-reg'
.. highlight: bash

cascade-reg
===========

.. conda:recipe:: cascade-reg
   :replaces_section_title:
   :noindex:

   Causal discovery of gene regulatory programs from single\-cell genomics

   :homepage: https://github.com/gao-lab/CASCADE
   :documentation: https://cascade-reg.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`cascade-reg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cascade-reg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cascade-reg/meta.yaml>`_

   CASCADE stands for Causality\-Aware Single\-Cell Adaptive
   Discover\/Deduction\/Design Engine. It is a deep learning\-based bioinformatics
   tool for causal gene regulatory network discovery\, counterfactual
   perturbation effect prediction\, and targeted intervention design based on
   high\-content single\-cell perturbation screens.



.. conda:package:: cascade-reg

   |downloads_cascade-reg| |docker_cascade-reg|

   :versions:
      
      

      ``0.5.1-0``

      

   
   :depends on adjusttext: 
   :depends on anndata: 
   :depends on kneed: 
   :depends on loguru: 
   :depends on matplotlib-base: 
   :depends on networkx: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pynvml: 
   :depends on python: 
   :depends on pytorch: ``>=2``
   :depends on pytorch-lightning: ``>=2``
   :depends on pyyaml: 
   :depends on rich: 
   :depends on scanpy: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn: 
   :depends on tensorboard: 

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

    pixi global install cascade-reg

to add into an existing workspace instead, run::

    pixi add cascade-reg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cascade-reg

Alternatively, to install into a new environment, run::

    conda create -n envname cascade-reg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cascade-reg:<tag>

(see `cascade-reg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cascade-reg| image:: https://img.shields.io/conda/dn/bioconda/cascade-reg.svg?style=flat
   :target: https://anaconda.org/bioconda/cascade-reg
   :alt:   (downloads)
.. |docker_cascade-reg| image:: https://quay.io/repository/biocontainers/cascade-reg/status
   :target: https://quay.io/repository/biocontainers/cascade-reg
.. _`cascade-reg/tags`: https://quay.io/repository/biocontainers/cascade-reg?tab=tags


.. raw:: html

    <script>
        var package = "cascade-reg";
        var versions = ["0.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cascade-reg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cascade-reg/README.html