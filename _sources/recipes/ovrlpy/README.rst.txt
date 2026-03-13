:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ovrlpy'
.. highlight: bash

ovrlpy
======

.. conda:recipe:: ovrlpy
   :replaces_section_title:
   :noindex:

   A python tool to investigate cell overlaps in imaging\-based spatial transcriptomics data.

   :homepage: https://github.com/HiDiHlabs/ovrl.py
   :documentation: https://ovrlpy.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`ovrlpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ovrlpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ovrlpy/meta.yaml>`_

   


.. conda:package:: ovrlpy

   |downloads_ovrlpy| |docker_ovrlpy|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.2.1-0``

      

   
   :depends on anndata: ``>=0.10``
   :depends on matplotlib-base: ``>=3.8,<4.dev0``
   :depends on matplotlib-scalebar: 
   :depends on numpy: ``>=1.25,<3.dev0``
   :depends on pandas: ``>=2.0,<3.dev0``
   :depends on polars: ``>=1.0,<2.dev0``
   :depends on python: ``>=3.11,<3.14``
   :depends on scikit-image: ``>=0.18``
   :depends on scikit-learn: ``>=1.4,<2.dev0``
   :depends on scipy: ``>=1.11,<2.dev0``
   :depends on tqdm: ``>=4.65,<5.dev0``
   :depends on umap-learn: ``>=0.5,<1.dev0``

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

    pixi global install ovrlpy

to add into an existing workspace instead, run::

    pixi add ovrlpy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ovrlpy

Alternatively, to install into a new environment, run::

    conda create -n envname ovrlpy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ovrlpy:<tag>

(see `ovrlpy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ovrlpy| image:: https://img.shields.io/conda/dn/bioconda/ovrlpy.svg?style=flat
   :target: https://anaconda.org/bioconda/ovrlpy
   :alt:   (downloads)
.. |docker_ovrlpy| image:: https://quay.io/repository/biocontainers/ovrlpy/status
   :target: https://quay.io/repository/biocontainers/ovrlpy
.. _`ovrlpy/tags`: https://quay.io/repository/biocontainers/ovrlpy?tab=tags


.. raw:: html

    <script>
        var package = "ovrlpy";
        var versions = ["1.1.0","1.0.1","1.0.0","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ovrlpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ovrlpy/README.html