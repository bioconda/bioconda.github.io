:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyrovelocity'
.. highlight: bash

pyrovelocity
============

.. conda:recipe:: pyrovelocity
   :replaces_section_title:
   :noindex:

   Probabilistic RNA velocity for cell fate uncertainty estimation

   :homepage: https://github.com/pinellolab/pyrovelocity
   :documentation: https://pyrovelocity.readthedocs.io/en/latest/
   
   :license: GPL / Affero GPL V3
   :recipe: /`pyrovelocity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrovelocity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyrovelocity/meta.yaml>`_

   


.. conda:package:: pyrovelocity

   |downloads_pyrovelocity| |docker_pyrovelocity|

   :versions:
      
      

      ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends on adjusttext: 
   :depends on anndata: ``0.7.5``
   :depends on astropy: 
   :depends on h5py: 
   :depends on ipykernel: 
   :depends on ipywidgets: 
   :depends on jupyterlab: 
   :depends on pyro-ppl: ``1.6.0``
   :depends on python: ``3.8.8``
   :depends on pytorch-gpu: ``1.8.*``
   :depends on pytorch-lightning: ``1.3.0``
   :depends on scvelo: ``0.2.4``
   :depends on scvi-tools: ``0.13.0``
   :depends on seaborn: ``0.11.2``
   :depends on torchmetrics: ``0.5.1``

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

    pixi global install pyrovelocity

to add into an existing workspace instead, run::

    pixi add pyrovelocity

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyrovelocity

Alternatively, to install into a new environment, run::

    conda create -n envname pyrovelocity

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyrovelocity:<tag>

(see `pyrovelocity/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyrovelocity| image:: https://img.shields.io/conda/dn/bioconda/pyrovelocity.svg?style=flat
   :target: https://anaconda.org/bioconda/pyrovelocity
   :alt:   (downloads)
.. |docker_pyrovelocity| image:: https://quay.io/repository/biocontainers/pyrovelocity/status
   :target: https://quay.io/repository/biocontainers/pyrovelocity
.. _`pyrovelocity/tags`: https://quay.io/repository/biocontainers/pyrovelocity?tab=tags


.. raw:: html

    <script>
        var package = "pyrovelocity";
        var versions = ["0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyrovelocity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyrovelocity/README.html