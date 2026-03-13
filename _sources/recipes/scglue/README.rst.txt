:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scglue'
.. highlight: bash

scglue
======

.. conda:recipe:: scglue
   :replaces_section_title:
   :noindex:

   Graph\-linked unified embedding for unpaired single\-cell multi\-omics data integration

   :homepage: https://github.com/gao-lab/GLUE
   :documentation: https://scglue.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`scglue <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scglue>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scglue/meta.yaml>`_

   GLUE is a flexible framework that utilizes prior knowledge about feature
   relations to bridge the gap between different feature spaces during unpaired
   multi\-modal data integration.



.. conda:package:: scglue

   |downloads_scglue| |docker_scglue|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``

      

   
   :depends on anndata: ``>=0.7``
   :depends on dill: ``>=0.2.3``
   :depends on h5py: ``>=2.10``
   :depends on leidenalg: ``>=0.7``
   :depends on matplotlib-base: ``>=3.1.2``
   :depends on muon: ``>=0.1.5``
   :depends on networkx: ``>=2``
   :depends on numpy: ``>=1.19,<1.22``
   :depends on packaging: ``>=16.8``
   :depends on pandas: ``>=1.1``
   :depends on parse: ``>=1.3.2``
   :depends on pybedtools: ``>=0.8.1``
   :depends on pynvml: ``>=8.0.1``
   :depends on pyro-ppl: ``>=1.0``
   :depends on python: ``>=3.6``
   :depends on pytorch: ``>=1.8``
   :depends on pytorch-ignite: ``>=0.4.1``
   :depends on scanpy: ``>=1.5``
   :depends on scikit-learn: ``>=0.21.2``
   :depends on scipy: ``>=1.3``
   :depends on seaborn: ``>=0.9``
   :depends on sparse: ``>=0.3.1``
   :depends on statsmodels: ``>=0.10``
   :depends on tensorboardx: ``>=1.4``
   :depends on tqdm: ``>=4.27``

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

    pixi global install scglue

to add into an existing workspace instead, run::

    pixi add scglue

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scglue

Alternatively, to install into a new environment, run::

    conda create -n envname scglue

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scglue:<tag>

(see `scglue/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scglue| image:: https://img.shields.io/conda/dn/bioconda/scglue.svg?style=flat
   :target: https://anaconda.org/bioconda/scglue
   :alt:   (downloads)
.. |docker_scglue| image:: https://quay.io/repository/biocontainers/scglue/status
   :target: https://quay.io/repository/biocontainers/scglue
.. _`scglue/tags`: https://quay.io/repository/biocontainers/scglue?tab=tags


.. raw:: html

    <script>
        var package = "scglue";
        var versions = ["0.4.0","0.3.2","0.3.1","0.2.3","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scglue/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scglue/README.html