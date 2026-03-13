:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cnmf'
.. highlight: bash

cnmf
====

.. conda:recipe:: cnmf
   :replaces_section_title:
   :noindex:

   Consensus NMF for scRNA\-Seq data.

   :homepage: https://github.com/dylkot/cNMF
   :license: MIT / MIT
   :recipe: /`cnmf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnmf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnmf/meta.yaml>`_
   :links: doi: :doi:`10.7554/eLife.43803`

   


.. conda:package:: cnmf

   |downloads_cnmf| |docker_cnmf|

   :versions:
      
      

      ``1.7.0-0``,  ``1.6.0-0``

      

   
   :depends on anndata: ``>=0.9``
   :depends on fastcluster: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on palettable: 
   :depends on pandas: 
   :depends on python: ``>=3.7``
   :depends on pyyaml: 
   :depends on scanpy: 
   :depends on scikit-learn: ``>=1.0``
   :depends on scipy: 

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

    pixi global install cnmf

to add into an existing workspace instead, run::

    pixi add cnmf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cnmf

Alternatively, to install into a new environment, run::

    conda create -n envname cnmf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cnmf:<tag>

(see `cnmf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cnmf| image:: https://img.shields.io/conda/dn/bioconda/cnmf.svg?style=flat
   :target: https://anaconda.org/bioconda/cnmf
   :alt:   (downloads)
.. |docker_cnmf| image:: https://quay.io/repository/biocontainers/cnmf/status
   :target: https://quay.io/repository/biocontainers/cnmf
.. _`cnmf/tags`: https://quay.io/repository/biocontainers/cnmf?tab=tags


.. raw:: html

    <script>
        var package = "cnmf";
        var versions = ["1.7.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cnmf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cnmf/README.html