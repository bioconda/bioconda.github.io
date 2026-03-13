:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deconveil'
.. highlight: bash

deconveil
=========

.. conda:recipe:: deconveil
   :replaces_section_title:
   :noindex:

   An extension of PyDESeq2\/DESeq2 designed to account for genome aneuploidy.

   :homepage: https://github.com/caravagnalab/DeConveil
   :license: MIT / MIT
   :recipe: /`deconveil <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deconveil>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deconveil/meta.yaml>`_
   :links: doi: :doi:`10.1101/2025.03.29.646108`

   


.. conda:package:: deconveil

   |downloads_deconveil| |docker_deconveil|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.4-0``

      

   
   :depends on anndata: ``>=0.8.0``
   :depends on cmdstanpy: ``>=1.2.0``
   :depends on formulaic: ``>=1.0.2``
   :depends on formulaic-contrasts: ``>=0.2.0``
   :depends on ipython: 
   :depends on jupyter: 
   :depends on matplotlib-base: ``>=3.6.2``
   :depends on numpy: ``>=1.23.0``
   :depends on pandas: ``>=1.4.0``
   :depends on pydeseq2: ``>=0.4.12``
   :depends on python: ``>=3.10``
   :depends on rpy2: ``>=3.5.0``
   :depends on scikit-learn: ``>=1.1.0``
   :depends on scipy: ``>=1.11.0``
   :depends on seaborn: ``>=0.12.2``

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

    pixi global install deconveil

to add into an existing workspace instead, run::

    pixi add deconveil

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install deconveil

Alternatively, to install into a new environment, run::

    conda create -n envname deconveil

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/deconveil:<tag>

(see `deconveil/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_deconveil| image:: https://img.shields.io/conda/dn/bioconda/deconveil.svg?style=flat
   :target: https://anaconda.org/bioconda/deconveil
   :alt:   (downloads)
.. |docker_deconveil| image:: https://quay.io/repository/biocontainers/deconveil/status
   :target: https://quay.io/repository/biocontainers/deconveil
.. _`deconveil/tags`: https://quay.io/repository/biocontainers/deconveil?tab=tags


.. raw:: html

    <script>
        var package = "deconveil";
        var versions = ["0.2.0","0.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deconveil/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deconveil/README.html