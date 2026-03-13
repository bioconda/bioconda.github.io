:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'markerrepo'
.. highlight: bash

markerrepo
==========

.. conda:recipe:: markerrepo
   :replaces_section_title:
   :noindex:

   A tool for marker list management and annotation in the single cell context.

   :homepage: https://pypi.org/project/markerrepo/
   :license: MIT
   :recipe: /`markerrepo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/markerrepo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/markerrepo/meta.yaml>`_

   


.. conda:package:: markerrepo

   |downloads_markerrepo| |docker_markerrepo|

   :versions:
      
      

      ``0.1.5-0``

      

   
   :depends on apybiomart: 
   :depends on gitpython: 
   :depends on intervaltree: 
   :depends on ipython: 
   :depends on matplotlib-base: ``>=3.7.1``
   :depends on numpy: 
   :depends on pandas: ``>=1.5.3``
   :depends on python: 
   :depends on pyyaml: ``>=6.0``
   :depends on requests: 
   :depends on scanpy: 
   :depends on scikit-learn: ``>=1.2.2``
   :depends on seaborn: ``>=0.12.2``

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

    pixi global install markerrepo

to add into an existing workspace instead, run::

    pixi add markerrepo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install markerrepo

Alternatively, to install into a new environment, run::

    conda create -n envname markerrepo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/markerrepo:<tag>

(see `markerrepo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_markerrepo| image:: https://img.shields.io/conda/dn/bioconda/markerrepo.svg?style=flat
   :target: https://anaconda.org/bioconda/markerrepo
   :alt:   (downloads)
.. |docker_markerrepo| image:: https://quay.io/repository/biocontainers/markerrepo/status
   :target: https://quay.io/repository/biocontainers/markerrepo
.. _`markerrepo/tags`: https://quay.io/repository/biocontainers/markerrepo?tab=tags


.. raw:: html

    <script>
        var package = "markerrepo";
        var versions = ["0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/markerrepo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/markerrepo/README.html