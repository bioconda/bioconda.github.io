:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scarches'
.. highlight: bash

scarches
========

.. conda:recipe:: scarches
   :replaces_section_title:
   :noindex:

   Transfer learning with Architecture Surgery on Single\-cell data

   :homepage: https://github.com/theislab/scarches
   :license: BSD-3-Clause
   :recipe: /`scarches <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scarches>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scarches/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-021-01001-7`

   


.. conda:package:: scarches

   |downloads_scarches| |docker_scarches|

   :versions:
      
      

      ``0.6.1-0``

      

   
   :depends on anndata: ``>=0.7.4``
   :depends on gdown: 
   :depends on h5py: ``>=2.10.0``
   :depends on leidenalg: 
   :depends on matplotlib-base: ``>=3.3.1``
   :depends on muon: 
   :depends on numpy: ``>=1.19.2``
   :depends on pandas: ``>=1.1.2``
   :depends on python: 
   :depends on pytorch: ``>=1.8.0``
   :depends on requests: 
   :depends on scanpy: ``>=1.6.0``
   :depends on schpl: ``>=1.0.0``
   :depends on scikit-learn: ``>=0.23.2``
   :depends on scipy: ``>=1.5.2``
   :depends on scvi-tools: ``>=0.12.1``
   :depends on tqdm: ``>=4.56.0``

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

    pixi global install scarches

to add into an existing workspace instead, run::

    pixi add scarches

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scarches

Alternatively, to install into a new environment, run::

    conda create -n envname scarches

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scarches:<tag>

(see `scarches/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scarches| image:: https://img.shields.io/conda/dn/bioconda/scarches.svg?style=flat
   :target: https://anaconda.org/bioconda/scarches
   :alt:   (downloads)
.. |docker_scarches| image:: https://quay.io/repository/biocontainers/scarches/status
   :target: https://quay.io/repository/biocontainers/scarches
.. _`scarches/tags`: https://quay.io/repository/biocontainers/scarches?tab=tags


.. raw:: html

    <script>
        var package = "scarches";
        var versions = ["0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scarches/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scarches/README.html