:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jpredapi'
.. highlight: bash

jpredapi
========

.. conda:recipe:: jpredapi
   :replaces_section_title:
   :noindex:

   Python library for submitting jobs to JPRED \- A Protein Secondary Structure Prediction Server

   :homepage: https://github.com/MoseleyBioinformaticsLab/jpredapi
   :license: MIT / MIT
   :recipe: /`jpredapi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jpredapi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jpredapi/meta.yaml>`_

   


.. conda:package:: jpredapi

   |downloads_jpredapi| |docker_jpredapi|

   :versions:
      
      

      ``1.5.6-0``

      

   
   :depends on docopt: ``>=0.6.2``
   :depends on python: 
   :depends on requests: ``>=2.13.0``
   :depends on retrying: ``>=1.3.3``

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

    pixi global install jpredapi

to add into an existing workspace instead, run::

    pixi add jpredapi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install jpredapi

Alternatively, to install into a new environment, run::

    conda create -n envname jpredapi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/jpredapi:<tag>

(see `jpredapi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_jpredapi| image:: https://img.shields.io/conda/dn/bioconda/jpredapi.svg?style=flat
   :target: https://anaconda.org/bioconda/jpredapi
   :alt:   (downloads)
.. |docker_jpredapi| image:: https://quay.io/repository/biocontainers/jpredapi/status
   :target: https://quay.io/repository/biocontainers/jpredapi
.. _`jpredapi/tags`: https://quay.io/repository/biocontainers/jpredapi?tab=tags


.. raw:: html

    <script>
        var package = "jpredapi";
        var versions = ["1.5.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jpredapi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jpredapi/README.html