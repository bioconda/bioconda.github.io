:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vitessce-python'
.. highlight: bash

vitessce-python
===============

.. conda:recipe:: vitessce-python
   :replaces_section_title:
   :noindex:

   Jupyter widget facilitating interactive visualization of spatial single\-cell data with Vitessce

   :homepage: https://vitessce.io/
   :documentation: https://github.com/vitessce/vitessce-python/blob/main/README.md
   
   :developer docs: https://github.com/vitessce/vitessce-python
   :license: MIT
   :recipe: /`vitessce-python <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vitessce-python>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vitessce-python/meta.yaml>`_

   


.. conda:package:: vitessce-python

   |downloads_vitessce-python| |docker_vitessce-python|

   :versions:
      
      

      ``3.7.9-0``,  ``3.7.7-0``,  ``3.1.0-0``

      

   
   :depends on anndata: ``>=0.7.8``
   :depends on black: ``>=21.11b1``
   :depends on jsonschema: ``>=3.2``
   :depends on negspy: ``>=0.2.24``
   :depends on numcodecs: ``>=0.5.7,<0.16.0``
   :depends on numpy: ``>=1.21.2,<2.3``
   :depends on ome-zarr: ``>=0.2.1``
   :depends on pandas: ``>=1.1.2``
   :depends on python: ``>=3.7``
   :depends on scanpy: ``>=1.9.3``
   :depends on scipy: ``>=1.2.1``
   :depends on tifffile: ``>=2020.10.1``
   :depends on zarr: ``>=2.5.0,<3``

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

    pixi global install vitessce-python

to add into an existing workspace instead, run::

    pixi add vitessce-python

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vitessce-python

Alternatively, to install into a new environment, run::

    conda create -n envname vitessce-python

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vitessce-python:<tag>

(see `vitessce-python/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vitessce-python| image:: https://img.shields.io/conda/dn/bioconda/vitessce-python.svg?style=flat
   :target: https://anaconda.org/bioconda/vitessce-python
   :alt:   (downloads)
.. |docker_vitessce-python| image:: https://quay.io/repository/biocontainers/vitessce-python/status
   :target: https://quay.io/repository/biocontainers/vitessce-python
.. _`vitessce-python/tags`: https://quay.io/repository/biocontainers/vitessce-python?tab=tags


.. raw:: html

    <script>
        var package = "vitessce-python";
        var versions = ["3.7.9","3.7.7","3.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vitessce-python/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vitessce-python/README.html