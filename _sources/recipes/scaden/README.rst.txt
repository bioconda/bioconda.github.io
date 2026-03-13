:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scaden'
.. highlight: bash

scaden
======

.. conda:recipe:: scaden
   :replaces_section_title:
   :noindex:

   Cell type deconvolution using single cell data

   :homepage: https://github.com/KevinMenden/scaden
   :license: MIT
   :recipe: /`scaden <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scaden>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scaden/meta.yaml>`_

   


.. conda:package:: scaden

   |downloads_scaden| |docker_scaden|

   :versions:
      
      

      ``1.1.2-0``,  ``1.1.1-0``,  ``0.9.4-0``,  ``0.9.2-0``,  ``0.9.0-0``

      

   
   :depends on click: 
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.16.0,<1.19.0``
   :depends on pandas: 
   :depends on python: ``>=3``
   :depends on rich: 
   :depends on scanpy: 
   :depends on scikit-learn: 
   :depends on scipy: ``1.4.1.*``
   :depends on seaborn: 
   :depends on tensorflow: ``>=2``
   :depends on tqdm: 

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

    pixi global install scaden

to add into an existing workspace instead, run::

    pixi add scaden

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scaden

Alternatively, to install into a new environment, run::

    conda create -n envname scaden

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scaden:<tag>

(see `scaden/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scaden| image:: https://img.shields.io/conda/dn/bioconda/scaden.svg?style=flat
   :target: https://anaconda.org/bioconda/scaden
   :alt:   (downloads)
.. |docker_scaden| image:: https://quay.io/repository/biocontainers/scaden/status
   :target: https://quay.io/repository/biocontainers/scaden
.. _`scaden/tags`: https://quay.io/repository/biocontainers/scaden?tab=tags


.. raw:: html

    <script>
        var package = "scaden";
        var versions = ["1.1.2","1.1.1","0.9.4","0.9.2","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scaden/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scaden/README.html