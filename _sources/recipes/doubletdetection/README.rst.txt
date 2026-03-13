:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'doubletdetection'
.. highlight: bash

doubletdetection
================

.. conda:recipe:: doubletdetection
   :replaces_section_title:
   :noindex:

   Method to detect and enable removal of doublets from single\-cell RNA\-sequencing.

   :homepage: https://github.com/JonathanShor/DoubletDetection
   :documentation: https://doubletdetection.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`doubletdetection <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/doubletdetection>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/doubletdetection/meta.yaml>`_

   


.. conda:package:: doubletdetection

   |downloads_doubletdetection| |docker_doubletdetection|

   :versions:
      
      

      ``4.3.0.post1-0``,  ``4.2-0``

      

   
   :depends on anndata: ``>=0.8``
   :depends on ipywidgets: 
   :depends on leidenalg: 
   :depends on louvain: 
   :depends on matplotlib-base: ``>=3.6``
   :depends on numpy: ``>=1.24``
   :depends on pandas: ``>=0.22.0``
   :depends on phenograph: 
   :depends on python: ``>=3.10``
   :depends on scanpy: ``>1.10.0``
   :depends on scipy: ``>=1.8``
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

    pixi global install doubletdetection

to add into an existing workspace instead, run::

    pixi add doubletdetection

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install doubletdetection

Alternatively, to install into a new environment, run::

    conda create -n envname doubletdetection

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/doubletdetection:<tag>

(see `doubletdetection/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_doubletdetection| image:: https://img.shields.io/conda/dn/bioconda/doubletdetection.svg?style=flat
   :target: https://anaconda.org/bioconda/doubletdetection
   :alt:   (downloads)
.. |docker_doubletdetection| image:: https://quay.io/repository/biocontainers/doubletdetection/status
   :target: https://quay.io/repository/biocontainers/doubletdetection
.. _`doubletdetection/tags`: https://quay.io/repository/biocontainers/doubletdetection?tab=tags


.. raw:: html

    <script>
        var package = "doubletdetection";
        var versions = ["4.3.0.post1","4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/doubletdetection/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/doubletdetection/README.html