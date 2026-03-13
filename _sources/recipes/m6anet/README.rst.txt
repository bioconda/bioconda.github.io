:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'm6anet'
.. highlight: bash

m6anet
======

.. conda:recipe:: m6anet
   :replaces_section_title:
   :noindex:

   m6anet is a python package for detection of m6a modifications from Nanopore direct RNA sequencing data.

   :homepage: https://github.com/GoekeLab/m6anet
   :license: MIT
   :recipe: /`m6anet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/m6anet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/m6anet/meta.yaml>`_

   


.. conda:package:: m6anet

   |downloads_m6anet| |docker_m6anet|

   :versions:
      
      

      ``2.1.0-0``,  ``2.0.2-0``

      

   
   :depends on joblib: 
   :depends on numpy: ``>=1.18.0``
   :depends on pandas: ``>=0.25.3``
   :depends on python: ``>=3.7,<3.9``
   :depends on pytorch: ``1.6.0``
   :depends on scikit-learn: ``>=0.24.0``
   :depends on scipy: ``>=1.10``
   :depends on toml: ``>=0.10.2``
   :depends on tqdm: 
   :depends on typing-extensions: 
   :depends on ujson: 

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

    pixi global install m6anet

to add into an existing workspace instead, run::

    pixi add m6anet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install m6anet

Alternatively, to install into a new environment, run::

    conda create -n envname m6anet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/m6anet:<tag>

(see `m6anet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_m6anet| image:: https://img.shields.io/conda/dn/bioconda/m6anet.svg?style=flat
   :target: https://anaconda.org/bioconda/m6anet
   :alt:   (downloads)
.. |docker_m6anet| image:: https://quay.io/repository/biocontainers/m6anet/status
   :target: https://quay.io/repository/biocontainers/m6anet
.. _`m6anet/tags`: https://quay.io/repository/biocontainers/m6anet?tab=tags


.. raw:: html

    <script>
        var package = "m6anet";
        var versions = ["2.1.0","2.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/m6anet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/m6anet/README.html