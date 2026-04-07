:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'euktect'
.. highlight: bash

euktect
=======

.. conda:recipe:: euktect
   :replaces_section_title:
   :noindex:

   Eukaryotic MAG quality assessment using HyenaDNA \(CPU\-only\)

   :homepage: https://github.com/NameFilled/Euktect
   :license: Apache-2.0
   :recipe: /`euktect <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/euktect>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/euktect/meta.yaml>`_
   :links: biotools: :biotools:`euktect`

   Euktect uses the HyenaDNA deep learning model to assess the quality of
   Eukaryotic Metagenome\-Assembled Genomes \(MAGs\). This CPU\-only build does
   not require CUDA or GPU hardware.



.. conda:package:: euktect

   |downloads_euktect| |docker_euktect|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on einops: 
   :depends on huggingface_hub: ``<0.15``
   :depends on hydra-core: ``>=1.3``
   :depends on liftover: 
   :depends on loguru: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on omegaconf: ``>=2.3``
   :depends on opt_einsum: 
   :depends on pandas: 
   :depends on polars: 
   :depends on protobuf: ``<=3.20``
   :depends on pyfaidx: 
   :depends on python: ``>=3.8``
   :depends on pytorch: ``* cpu_*``
   :depends on pytorch-lightning: ``>=1.8,<1.9``
   :depends on pyyaml: 
   :depends on rich: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on setuptools: ``<78``
   :depends on timm: 
   :depends on tqdm: 
   :depends on transformers: ``4.26.1``

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

    pixi global install euktect

to add into an existing workspace instead, run::

    pixi add euktect

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install euktect

Alternatively, to install into a new environment, run::

    conda create -n envname euktect

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/euktect:<tag>

(see `euktect/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_euktect| image:: https://img.shields.io/conda/dn/bioconda/euktect.svg?style=flat
   :target: https://anaconda.org/bioconda/euktect
   :alt:   (downloads)
.. |docker_euktect| image:: https://quay.io/repository/biocontainers/euktect/status
   :target: https://quay.io/repository/biocontainers/euktect
.. _`euktect/tags`: https://quay.io/repository/biocontainers/euktect?tab=tags


.. raw:: html

    <script>
        var package = "euktect";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/euktect/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/euktect/README.html