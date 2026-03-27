:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'celltypist-so'
.. highlight: bash

celltypist-so
=============

.. conda:recipe:: celltypist-so
   :replaces_section_title:
   :noindex:

   Fork of CellTypist without leidenalg in the package requirements.

   :homepage: https://github.com/Mena-SA-Kamel/celltypist-SO
   :license: MIT
   :recipe: /`celltypist-so <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/celltypist-so>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/celltypist-so/meta.yaml>`_

   


.. conda:package:: celltypist-so

   |downloads_celltypist-so| |docker_celltypist-so|

   :versions:
      
      

      ``1.6.5-0``

      

   
   :depends on click: ``>=7.1.2``
   :depends on numpy: ``>=1.19.0``
   :depends on openpyxl: ``>=3.0.4``
   :depends on pandas: ``>=1.0.5``
   :depends on python: ``>=3.10``
   :depends on requests: ``>=2.23.0``
   :depends on scanpy: ``>=1.7.0``
   :depends on scikit-learn: ``>=0.24.1``

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

    pixi global install celltypist-so

to add into an existing workspace instead, run::

    pixi add celltypist-so

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install celltypist-so

Alternatively, to install into a new environment, run::

    conda create -n envname celltypist-so

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/celltypist-so:<tag>

(see `celltypist-so/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_celltypist-so| image:: https://img.shields.io/conda/dn/bioconda/celltypist-so.svg?style=flat
   :target: https://anaconda.org/bioconda/celltypist-so
   :alt:   (downloads)
.. |docker_celltypist-so| image:: https://quay.io/repository/biocontainers/celltypist-so/status
   :target: https://quay.io/repository/biocontainers/celltypist-so
.. _`celltypist-so/tags`: https://quay.io/repository/biocontainers/celltypist-so?tab=tags


.. raw:: html

    <script>
        var package = "celltypist-so";
        var versions = ["1.6.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/celltypist-so/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/celltypist-so/README.html