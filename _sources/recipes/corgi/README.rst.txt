:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'corgi'
.. highlight: bash

corgi
=====

.. conda:recipe:: corgi
   :replaces_section_title:
   :noindex:

   Classifier for ORganelle Genomes Inter alia

   :homepage: https://pypi.org/project/bio-corgi/
   :documentation: https://rbturnbull.github.io/corgi/
   
   :developer docs: https://github.com/rbturnbull/corgi
   :license: Apache-2.0
   :recipe: /`corgi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corgi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corgi/meta.yaml>`_

   


.. conda:package:: corgi

   |downloads_corgi| |docker_corgi|

   :versions:
      
      

      ``0.4.3-0``,  ``0.4.1-0``,  ``0.4.0-0``

      

   
   :depends on appdirs: ``>=1.4.4,<2.0.0``
   :depends on beautifulsoup4: ``>=4.10.0,<5.0.0``
   :depends on biopython: ``>=1.79.0,<2.0.0``
   :depends on cryptography: ``>=36.0.1,<37.0.0``
   :depends on dask-core: ``>=2021.7.1,<2022.0.0``
   :depends on fastai: ``>=2.4.1,<3.0.0``
   :depends on h5py: ``>=3.1.0,<4.0.0``
   :depends on httpx: ``>=0.20.0,<0.21.0``
   :depends on humanize: ``>=3.10.0,<4.0.0``
   :depends on optuna: ``>=2.10.0,<3.0.0``
   :depends on plotly: ``>=5.3.1,<6.0.0``
   :depends on progressbar2: ``>=3.53.1,<4.0.0``
   :depends on pyarrow: ``>=5.0.0``
   :depends on pymysql: ``>=1.0.2,<2.0.0``
   :depends on python: ``>=3.8,<3.12``
   :depends on termgraph: ``>=0.5.3,<0.6.0``
   :depends on torchapp: ``>=0.3.1``
   :depends on wandb: ``>=0.12.9,<0.13.0``

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

    pixi global install corgi

to add into an existing workspace instead, run::

    pixi add corgi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install corgi

Alternatively, to install into a new environment, run::

    conda create -n envname corgi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/corgi:<tag>

(see `corgi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_corgi| image:: https://img.shields.io/conda/dn/bioconda/corgi.svg?style=flat
   :target: https://anaconda.org/bioconda/corgi
   :alt:   (downloads)
.. |docker_corgi| image:: https://quay.io/repository/biocontainers/corgi/status
   :target: https://quay.io/repository/biocontainers/corgi
.. _`corgi/tags`: https://quay.io/repository/biocontainers/corgi?tab=tags


.. raw:: html

    <script>
        var package = "corgi";
        var versions = ["0.4.3","0.4.1","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/corgi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/corgi/README.html