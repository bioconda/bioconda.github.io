:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyctv_taxonomy'
.. highlight: bash

pyctv_taxonomy
==============

.. conda:recipe:: pyctv_taxonomy
   :replaces_section_title:
   :noindex:

   pyctv\_taxonomy\: download and use the ICTV Virus Metadata Resource

   :homepage: https://github.com/linsalrob/pyctv
   :license: MIT / MIT
   :recipe: /`pyctv_taxonomy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyctv_taxonomy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyctv_taxonomy/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.7728567`

   


.. conda:package:: pyctv_taxonomy

   |downloads_pyctv_taxonomy| |docker_pyctv_taxonomy|

   :versions:
      
      

      ``0.25-0``

      

   
   :depends on openpyxl: 
   :depends on python: ``>=3``
   :depends on requests: 

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

    pixi global install pyctv_taxonomy

to add into an existing workspace instead, run::

    pixi add pyctv_taxonomy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyctv_taxonomy

Alternatively, to install into a new environment, run::

    conda create -n envname pyctv_taxonomy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyctv_taxonomy:<tag>

(see `pyctv_taxonomy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyctv_taxonomy| image:: https://img.shields.io/conda/dn/bioconda/pyctv_taxonomy.svg?style=flat
   :target: https://anaconda.org/bioconda/pyctv_taxonomy
   :alt:   (downloads)
.. |docker_pyctv_taxonomy| image:: https://quay.io/repository/biocontainers/pyctv_taxonomy/status
   :target: https://quay.io/repository/biocontainers/pyctv_taxonomy
.. _`pyctv_taxonomy/tags`: https://quay.io/repository/biocontainers/pyctv_taxonomy?tab=tags


.. raw:: html

    <script>
        var package = "pyctv_taxonomy";
        var versions = ["0.25"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyctv_taxonomy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyctv_taxonomy/README.html