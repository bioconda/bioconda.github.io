:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'basenji'
.. highlight: bash

basenji
=======

.. conda:recipe:: basenji
   :replaces_section_title:
   :noindex:

   Sequential regulatory activity predictions with deep convolutional neural networks.

   :homepage: https://github.com/calico/basenji
   :license: Apache / Apache-2.0
   :recipe: /`basenji <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/basenji>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/basenji/meta.yaml>`_

   


.. conda:package:: basenji

   |downloads_basenji| |docker_basenji|

   :versions:
      
      

      ``0.6-0``,  ``0.5.1-0``,  ``0.5-0``,  ``0.4.1647b01-0``

      

   
   :depends on astropy: 
   :depends on cooler: 
   :depends on cooltools: 
   :depends on h5py: 
   :depends on intervaltree: 
   :depends on joblib: 
   :depends on matplotlib-base: 
   :depends on natsort: 
   :depends on networkx: 
   :depends on numpy: 
   :depends on packaging: 
   :depends on pandas: 
   :depends on pillow: 
   :depends on pybedtools: 
   :depends on pybigwig: 
   :depends on pysam: 
   :depends on python: ``>=3.8``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn: 
   :depends on statsmodels: 
   :depends on tabulate: 
   :depends on tensorflow: 

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

    pixi global install basenji

to add into an existing workspace instead, run::

    pixi add basenji

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install basenji

Alternatively, to install into a new environment, run::

    conda create -n envname basenji

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/basenji:<tag>

(see `basenji/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_basenji| image:: https://img.shields.io/conda/dn/bioconda/basenji.svg?style=flat
   :target: https://anaconda.org/bioconda/basenji
   :alt:   (downloads)
.. |docker_basenji| image:: https://quay.io/repository/biocontainers/basenji/status
   :target: https://quay.io/repository/biocontainers/basenji
.. _`basenji/tags`: https://quay.io/repository/biocontainers/basenji?tab=tags


.. raw:: html

    <script>
        var package = "basenji";
        var versions = ["0.6","0.5.1","0.5","0.4.1647b01"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/basenji/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/basenji/README.html