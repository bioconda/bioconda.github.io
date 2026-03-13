:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnamining'
.. highlight: bash

rnamining
=========

.. conda:recipe:: rnamining
   :replaces_section_title:
   :noindex:

   Package to predict potential coding of RNA sequences provided in fasta format

   :homepage: https://github.com/lfreitasl/RNAmining/tree/pypackage
   :license: MIT
   :recipe: /`rnamining <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnamining>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnamining/meta.yaml>`_

   


.. conda:package:: rnamining

   |downloads_rnamining| |docker_rnamining|

   :versions:
      
      

      ``1.0.4-0``

      

   
   :depends on biopython: ``>=1.78``
   :depends on pandas: ``>=0.23.3``
   :depends on python: ``>=3.8``
   :depends on scikit-learn: ``>=0.21.3``
   :depends on scipy: 
   :depends on xgboost: ``1.2.0``

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

    pixi global install rnamining

to add into an existing workspace instead, run::

    pixi add rnamining

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rnamining

Alternatively, to install into a new environment, run::

    conda create -n envname rnamining

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rnamining:<tag>

(see `rnamining/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rnamining| image:: https://img.shields.io/conda/dn/bioconda/rnamining.svg?style=flat
   :target: https://anaconda.org/bioconda/rnamining
   :alt:   (downloads)
.. |docker_rnamining| image:: https://quay.io/repository/biocontainers/rnamining/status
   :target: https://quay.io/repository/biocontainers/rnamining
.. _`rnamining/tags`: https://quay.io/repository/biocontainers/rnamining?tab=tags


.. raw:: html

    <script>
        var package = "rnamining";
        var versions = ["1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnamining/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnamining/README.html