:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'neoloop'
.. highlight: bash

neoloop
=======

.. conda:recipe:: neoloop
   :replaces_section_title:
   :noindex:

   Predict neo\-loops induced by structural variations

   :homepage: https://github.com/XiaoTaoWang/NeoLoopFinder
   :license: OTHER / https://github.com/XiaoTaoWang/NeoLoopFinder/blob/master/LICENSE
   :recipe: /`neoloop <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neoloop>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neoloop/meta.yaml>`_

   


.. conda:package:: neoloop

   |downloads_neoloop| |docker_neoloop|

   :versions:
      
      

      ``0.4.3.post2-0``

      

   
   :depends on cooler: 
   :depends on h5py: 
   :depends on intervaltree: 
   :depends on joblib: ``1.1.0.*``
   :depends on matplotlib-base: 
   :depends on networkx: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pomegranate: ``0.14.8.*``
   :depends on pybigwig: 
   :depends on pyensembl: 
   :depends on python: ``>=3.6``
   :depends on r-base: 
   :depends on r-mgcv: 
   :depends on rpy2: 
   :depends on scikit-learn: ``1.1.2.*``
   :depends on scipy: 
   :depends on tadlib: 

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

    pixi global install neoloop

to add into an existing workspace instead, run::

    pixi add neoloop

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install neoloop

Alternatively, to install into a new environment, run::

    conda create -n envname neoloop

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/neoloop:<tag>

(see `neoloop/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_neoloop| image:: https://img.shields.io/conda/dn/bioconda/neoloop.svg?style=flat
   :target: https://anaconda.org/bioconda/neoloop
   :alt:   (downloads)
.. |docker_neoloop| image:: https://quay.io/repository/biocontainers/neoloop/status
   :target: https://quay.io/repository/biocontainers/neoloop
.. _`neoloop/tags`: https://quay.io/repository/biocontainers/neoloop?tab=tags


.. raw:: html

    <script>
        var package = "neoloop";
        var versions = ["0.4.3.post2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/neoloop/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/neoloop/README.html