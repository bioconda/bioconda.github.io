:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylics'
.. highlight: bash

phylics
=======

.. conda:recipe:: phylics
   :replaces_section_title:
   :noindex:

   Single\-cell CNV data analysis toolkit

   :homepage: https://github.com/bioinformatics-polito/PhyliCS
   :license: AGPL3
   :recipe: /`phylics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylics/meta.yaml>`_

   


.. conda:package:: phylics

   |downloads_phylics| |docker_phylics|

   :versions:
      
      

      ``1.0.7-0``,  ``1.0.5-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on anndata: ``>=0.7.5``
   :depends on ipython: ``>=7.19.0``
   :depends on joblib: ``>=1.0.0``
   :depends on matplotlib-base: ``>=3.3.1``
   :depends on numpy: ``>=1.19.5``
   :depends on pandas: ``>=1.1.3``
   :depends on python: ``>=3.7,<3.9``
   :depends on scikit-learn: ``>=0.24``
   :depends on scipy: ``>=1.6.0``
   :depends on seaborn: ``>=0.11.1``
   :depends on statsmodels: ``>=0.12.0``
   :depends on typing: 
   :depends on umap-learn: ``>=0.4.6``

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

    pixi global install phylics

to add into an existing workspace instead, run::

    pixi add phylics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phylics

Alternatively, to install into a new environment, run::

    conda create -n envname phylics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phylics:<tag>

(see `phylics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phylics| image:: https://img.shields.io/conda/dn/bioconda/phylics.svg?style=flat
   :target: https://anaconda.org/bioconda/phylics
   :alt:   (downloads)
.. |docker_phylics| image:: https://quay.io/repository/biocontainers/phylics/status
   :target: https://quay.io/repository/biocontainers/phylics
.. _`phylics/tags`: https://quay.io/repository/biocontainers/phylics?tab=tags


.. raw:: html

    <script>
        var package = "phylics";
        var versions = ["1.0.7","1.0.5","1.0.3","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylics/README.html