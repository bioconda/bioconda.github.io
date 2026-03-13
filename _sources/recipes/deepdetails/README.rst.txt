:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepdetails'
.. highlight: bash

deepdetails
===========

.. conda:recipe:: deepdetails
   :replaces_section_title:
   :noindex:

   Deep\-learning\-based DEconvolution of Tissue profiles with Accurate Interpretation of Locus\-specific Signals \(DeepDETAILS\)

   :homepage: https://details.yulab.org
   :developer docs: https://github.com/liyao001/DeepDETAILS
   :license: GPL-3.0
   :recipe: /`deepdetails <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepdetails>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepdetails/meta.yaml>`_
   :links: doi: :doi:`10.1101/2025.04.02.646189`

   


.. conda:package:: deepdetails

   |downloads_deepdetails| |docker_deepdetails|

   :versions:
      
      

      ``0.1.1rc1-0``,  ``0.0.1rc2-0``,  ``0.0.1rc1-0``

      

   
   :depends on bedtools: 
   :depends on biopython: 
   :depends on einops: 
   :depends on h5py: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pybedtools: 
   :depends on pybigwig: 
   :depends on pyfaidx: 
   :depends on python: ``>=3.8``
   :depends on pytorch: 
   :depends on pytorch-lightning: 
   :depends on scikit-learn: 
   :depends on scipy: ``>=1.11.1``
   :depends on tensorboard: 
   :depends on torchmetrics: 
   :depends on tqdm: 
   :depends on ucsc-bedgraphtobigwig: 
   :depends on wandb: 

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

    pixi global install deepdetails

to add into an existing workspace instead, run::

    pixi add deepdetails

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install deepdetails

Alternatively, to install into a new environment, run::

    conda create -n envname deepdetails

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/deepdetails:<tag>

(see `deepdetails/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_deepdetails| image:: https://img.shields.io/conda/dn/bioconda/deepdetails.svg?style=flat
   :target: https://anaconda.org/bioconda/deepdetails
   :alt:   (downloads)
.. |docker_deepdetails| image:: https://quay.io/repository/biocontainers/deepdetails/status
   :target: https://quay.io/repository/biocontainers/deepdetails
.. _`deepdetails/tags`: https://quay.io/repository/biocontainers/deepdetails?tab=tags


.. raw:: html

    <script>
        var package = "deepdetails";
        var versions = ["0.1.1rc1","0.0.1rc2","0.0.1rc1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepdetails/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepdetails/README.html