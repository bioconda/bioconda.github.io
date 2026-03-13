:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'liana'
.. highlight: bash

liana
=====

.. conda:recipe:: liana
   :replaces_section_title:
   :noindex:

   LIANA\+\: a one\-stop\-shop framework for cell\-cell communication.

   :homepage: https://github.com/saezlab/liana-py
   :documentation: https://liana-py.readthedocs.io
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`liana <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/liana>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/liana/meta.yaml>`_

   


.. conda:package:: liana

   |downloads_liana| |docker_liana|

   :versions:
      
      

      ``1.7.1-0``,  ``1.7.0-0``,  ``1.6.1-0``,  ``1.5.1-1``,  ``1.5.1-0``,  ``1.4.0-1``,  ``1.4.0-0``

      

   
   :depends on anndata: ``>=0.7.4``
   :depends on cell2cell: 
   :depends on corneto: 
   :depends on cvxpy: ``>=1.6,<2``
   :depends on decoupler-py: ``>=1.5.1``
   :depends on docrep: ``>=0.3.1``
   :depends on mofapy2: ``>=0.7.0``
   :depends on mofax: 
   :depends on mudata: 
   :depends on muon: 
   :depends on numba: ``>=0.60.0,<0.61.0``
   :depends on omnipath: ``>=1.0.6``
   :depends on pandas: ``>2.0.1``
   :depends on plotnine: ``>=0.10.1``
   :depends on pre-commit: ``>=3.0.0``
   :depends on pydeseq2: ``>=0.3.5``
   :depends on python: ``>=3.10,<3.14``
   :depends on requests: ``>=2.25.1,<3.0.0``
   :depends on scanpy: ``>=1.8.0``
   :depends on session-info2: 
   :depends on tqdm: ``>=4.0.0``

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

    pixi global install liana

to add into an existing workspace instead, run::

    pixi add liana

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install liana

Alternatively, to install into a new environment, run::

    conda create -n envname liana

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/liana:<tag>

(see `liana/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_liana| image:: https://img.shields.io/conda/dn/bioconda/liana.svg?style=flat
   :target: https://anaconda.org/bioconda/liana
   :alt:   (downloads)
.. |docker_liana| image:: https://quay.io/repository/biocontainers/liana/status
   :target: https://quay.io/repository/biocontainers/liana
.. _`liana/tags`: https://quay.io/repository/biocontainers/liana?tab=tags


.. raw:: html

    <script>
        var package = "liana";
        var versions = ["1.7.1","1.7.0","1.6.1","1.5.1","1.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/liana/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/liana/README.html