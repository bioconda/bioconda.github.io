:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dapcy'
.. highlight: bash

dapcy
=====

.. conda:recipe:: dapcy
   :replaces_section_title:
   :noindex:

   An sklearn implementation of discriminant analysis of principal components \(DAPC\) for population genetics.

   :homepage: https://gitlab.com/uhasselt-bioinfo/dapcy
   :documentation: https://uhasselt-bioinfo.gitlab.io/dapcy
   
   :license: MIT / MIT
   :recipe: /`dapcy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dapcy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dapcy/meta.yaml>`_

   


.. conda:package:: dapcy

   |downloads_dapcy| |docker_dapcy|

   :versions:
      
      

      ``1.3.1-0``,  ``1.3.0.post1-0``,  ``1.3.0-0``,  ``1.0.1-0``,  ``0.1.1-0``

      

   
   :depends on bed-reader: 
   :depends on bio2zarr: ``>=0.1.6``
   :depends on joblib: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.6``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn: 
   :depends on sgkit: 

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

    pixi global install dapcy

to add into an existing workspace instead, run::

    pixi add dapcy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dapcy

Alternatively, to install into a new environment, run::

    conda create -n envname dapcy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dapcy:<tag>

(see `dapcy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dapcy| image:: https://img.shields.io/conda/dn/bioconda/dapcy.svg?style=flat
   :target: https://anaconda.org/bioconda/dapcy
   :alt:   (downloads)
.. |docker_dapcy| image:: https://quay.io/repository/biocontainers/dapcy/status
   :target: https://quay.io/repository/biocontainers/dapcy
.. _`dapcy/tags`: https://quay.io/repository/biocontainers/dapcy?tab=tags


.. raw:: html

    <script>
        var package = "dapcy";
        var versions = ["1.3.1","1.3.0.post1","1.3.0","1.0.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dapcy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dapcy/README.html