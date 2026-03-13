:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flexynesis'
.. highlight: bash

flexynesis
==========

.. conda:recipe:: flexynesis
   :replaces_section_title:
   :noindex:

   A deep\-learning\-based multi\-omics bulk sequencing data integration suite with a focus on \(pre\-\)clinical endpoint prediction.

   :homepage: https://github.com/BIMSBbioinfo/flexynesis
   :documentation: https://bimsbstatic.mdc-berlin.de/akalin/buyar/flexynesis/site/getting_started
   
   :license: OTHER
   :recipe: /`flexynesis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexynesis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexynesis/meta.yaml>`_

   This is a deep\-learning based multi\-omics bulk sequencing data integration suite with a focus on \(pre\-\)clinical endpoint prediction.


.. conda:package:: flexynesis

   |downloads_flexynesis| |docker_flexynesis|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.7-0</code>,  <code>1.1.6-0</code>,  <code>1.1.5-0</code>,  <code>1.1.4-0</code>,  <code>1.1.3-1</code>,  <code>1.1.3-0</code>,  <code>1.1.1-0</code>,  <code>1.1.0-0</code>,  <code>1.0.8-0</code>,  </span></summary>
      

      ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``0.2.20-0``,  ``0.2.19-0``,  ``0.2.18-0``,  ``0.2.17-0``,  ``0.2.16-0``,  ``0.2.14-0``,  ``0.2.13-0``,  ``0.2.12-0``,  ``0.2.11-0``,  ``0.2.10-0``

      
      .. raw:: html

         </details>
      

   
   :depends on captum: 
   :depends on geomloss: 
   :depends on ipykernel: 
   :depends on ipywidgets: 
   :depends on lifelines: 
   :depends on lightning: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on papermill: 
   :depends on plotnine: 
   :depends on pot: 
   :depends on python: ``>=3.11``
   :depends on python-louvain: 
   :depends on pytorch: 
   :depends on pytorch_geometric: 
   :depends on pyyaml: 
   :depends on rich: 
   :depends on safetensors: 
   :depends on scikit-optimize: 
   :depends on scikit-survival: 
   :depends on scipy: 
   :depends on seaborn-base: 
   :depends on torchvision: 
   :depends on tqdm: 
   :depends on umap-learn: 
   :depends on xgboost: 

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

    pixi global install flexynesis

to add into an existing workspace instead, run::

    pixi add flexynesis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install flexynesis

Alternatively, to install into a new environment, run::

    conda create -n envname flexynesis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/flexynesis:<tag>

(see `flexynesis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_flexynesis| image:: https://img.shields.io/conda/dn/bioconda/flexynesis.svg?style=flat
   :target: https://anaconda.org/bioconda/flexynesis
   :alt:   (downloads)
.. |docker_flexynesis| image:: https://quay.io/repository/biocontainers/flexynesis/status
   :target: https://quay.io/repository/biocontainers/flexynesis
.. _`flexynesis/tags`: https://quay.io/repository/biocontainers/flexynesis?tab=tags


.. raw:: html

    <script>
        var package = "flexynesis";
        var versions = ["1.1.7","1.1.6","1.1.5","1.1.4","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flexynesis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flexynesis/README.html