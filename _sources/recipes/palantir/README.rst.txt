:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'palantir'
.. highlight: bash

palantir
========

.. conda:recipe:: palantir
   :replaces_section_title:
   :noindex:

   Palantir for modeling continuous cell state and cell fate choices in single cell data

   :homepage: https://github.com/dpeerlab/palantir
   :documentation: https://palantir.readthedocs.io
   
   :license: GPL / GPL-2.0-only
   :recipe: /`palantir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/palantir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/palantir/meta.yaml>`_

   


.. conda:package:: palantir

   |downloads_palantir| |docker_palantir|

   :versions:
      
      

      ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.6-0``,  ``1.3.4-0``,  ``1.3.3-0``

      

   
   :depends on anndata: ``>=0.8.0``
   :depends on fcsparser: ``>=0.1.2``
   :depends on igraph: ``>=0.11.8``
   :depends on joblib: 
   :depends on leidenalg: ``>=0.9.1``
   :depends on matplotlib-base: ``>=3.8.0``
   :depends on mellon: ``>=1.6.1``
   :depends on ml_dtypes: ``>=0.5.0``
   :depends on networkx: ``>=2.1``
   :depends on numpy: ``>=1.14.2``
   :depends on pandas: ``>=0.22.0``
   :depends on pygam: 
   :depends on python: 
   :depends on scanpy: ``>=1.6.0``
   :depends on scikit-learn: 
   :depends on scipy: ``>=1.3``

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

    pixi global install palantir

to add into an existing workspace instead, run::

    pixi add palantir

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install palantir

Alternatively, to install into a new environment, run::

    conda create -n envname palantir

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/palantir:<tag>

(see `palantir/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_palantir| image:: https://img.shields.io/conda/dn/bioconda/palantir.svg?style=flat
   :target: https://anaconda.org/bioconda/palantir
   :alt:   (downloads)
.. |docker_palantir| image:: https://quay.io/repository/biocontainers/palantir/status
   :target: https://quay.io/repository/biocontainers/palantir
.. _`palantir/tags`: https://quay.io/repository/biocontainers/palantir?tab=tags


.. raw:: html

    <script>
        var package = "palantir";
        var versions = ["1.4.4","1.4.3","1.4.2","1.4.1","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/palantir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/palantir/README.html