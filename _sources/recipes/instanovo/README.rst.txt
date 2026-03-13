:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'instanovo'
.. highlight: bash

instanovo
=========

.. conda:recipe:: instanovo
   :replaces_section_title:
   :noindex:

   InstaNovo enables diffusion\-powered de novo peptide sequencing in large scale proteomics experiments.

   :homepage: https://github.com/instadeepai/instanovo
   :documentation: https://instadeepai.github.io/InstaNovo/
   
   :license: APACHE / Apache-2.0
   :recipe: /`instanovo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/instanovo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/instanovo/meta.yaml>`_
   :links: doi: :doi:`10.1038/s42256-025-01019-5`, biotools: :biotools:`instanovo`

   


.. conda:package:: instanovo

   |downloads_instanovo| |docker_instanovo|

   :versions:
      
      

      ``1.2.2-1``,  ``1.2.2-0``,  ``1.1.4-0``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.0.0-0``

      

   
   :depends on accelerate: ``>=1.6.0``
   :depends on datasets: ``>=3.5.0``
   :depends on gitpython: ``>=3.1.44``
   :depends on hydra-core: ``>=1.3.2``
   :depends on importlib-resources: ``>=6.5.2``
   :depends on jaxtyping: ``>=0.2.34``
   :depends on jiwer: ``>=3.0.5``
   :depends on matchms: ``>=0.28.1``
   :depends on neptune: ``>=1.13.0``
   :depends on numpy: ``>=2.0.2``
   :depends on omegaconf: ``>=2.3.0``
   :depends on pandas: ``>=2.2.3``
   :depends on platformdirs: ``>=4.5.1``
   :depends on polars: ``>=1.12.0``
   :depends on pubchempy: ``>=1.0.4``
   :depends on pyteomics: ``>=4.7.5``
   :depends on python: ``>=3.10,<3.14``
   :depends on python-dotenv: ``>=1.0.1``
   :depends on pyyaml: ``>=6.0.2``
   :depends on requests: ``>=2.32.3``
   :depends on s3fs: ``>=2024.12.0``
   :depends on scikit-learn: ``>=1.5.2``
   :depends on signalrcore: ``>=0.9.5``
   :depends on spectrum_utils: ``>=0.4.2``
   :depends on tensorboard: ``>=2.18.0``
   :depends on tqdm: ``>=4.67.0``
   :depends on transfusion-asr: ``>=0.1.0``
   :depends on typer: ``>=0.15.1``

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

    pixi global install instanovo

to add into an existing workspace instead, run::

    pixi add instanovo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install instanovo

Alternatively, to install into a new environment, run::

    conda create -n envname instanovo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/instanovo:<tag>

(see `instanovo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_instanovo| image:: https://img.shields.io/conda/dn/bioconda/instanovo.svg?style=flat
   :target: https://anaconda.org/bioconda/instanovo
   :alt:   (downloads)
.. |docker_instanovo| image:: https://quay.io/repository/biocontainers/instanovo/status
   :target: https://quay.io/repository/biocontainers/instanovo
.. _`instanovo/tags`: https://quay.io/repository/biocontainers/instanovo?tab=tags


.. raw:: html

    <script>
        var package = "instanovo";
        var versions = ["1.2.2","1.2.2","1.1.4","1.1.3","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/instanovo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/instanovo/README.html