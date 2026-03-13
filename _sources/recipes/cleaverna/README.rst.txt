:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cleaverna'
.. highlight: bash

cleaverna
=========

.. conda:recipe:: cleaverna
   :replaces_section_title:
   :noindex:

   Computational tool for scoring candidate cleavage sites of DNAzyme

   :homepage: https://github.com/reyhaneh-tavakoli/CleaveRNA
   :documentation: https://github.com/reyhaneh-tavakoli/CleaveRNA/blob/main/README.md
   
   :license: MIT / MIT
   :recipe: /`cleaverna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cleaverna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cleaverna/meta.yaml>`_

   CleaveRNA is Advanced machine learning\-based computational tool for scoring candidate
   DNAzyme cleavage sites in substrate RNA sequences using structural and
   thermodynamic features. The tool supports multiple
   analysis modes including training and prediction.
   Key features\:
   \- Machine learning\-based cleavage site prediction
   \- Multiple prediction modes for different use cases
   \- Feature extraction and model training capabilities
   \- Cross\-validation and performance metrics
   \- Single command\-line interface for all workflows



.. conda:package:: cleaverna

   |downloads_cleaverna| |docker_cleaverna|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on intarna: ``>=3.0``
   :depends on matplotlib-base: ``>=3.3.0``
   :depends on numpy: ``>=1.20.0``
   :depends on pandas: ``>=1.3.0``
   :depends on python: ``>=3.7``
   :depends on scikit-learn: ``>=1.0.0``
   :depends on tqdm: ``>=4.60.0``
   :depends on viennarna: 

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

    pixi global install cleaverna

to add into an existing workspace instead, run::

    pixi add cleaverna

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cleaverna

Alternatively, to install into a new environment, run::

    conda create -n envname cleaverna

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cleaverna:<tag>

(see `cleaverna/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cleaverna| image:: https://img.shields.io/conda/dn/bioconda/cleaverna.svg?style=flat
   :target: https://anaconda.org/bioconda/cleaverna
   :alt:   (downloads)
.. |docker_cleaverna| image:: https://quay.io/repository/biocontainers/cleaverna/status
   :target: https://quay.io/repository/biocontainers/cleaverna
.. _`cleaverna/tags`: https://quay.io/repository/biocontainers/cleaverna?tab=tags


.. raw:: html

    <script>
        var package = "cleaverna";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cleaverna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cleaverna/README.html