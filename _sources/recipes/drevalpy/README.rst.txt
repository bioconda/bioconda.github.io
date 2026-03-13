:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'drevalpy'
.. highlight: bash

drevalpy
========

.. conda:recipe:: drevalpy
   :replaces_section_title:
   :noindex:

   Drug response evaluation of cancer drug response models in a fair setting

   :homepage: https://github.com/daisybio/drevalpy
   :documentation: https://drevalpy.readthedocs.io/en/latest/index.html
   
   :license: MIT
   :recipe: /`drevalpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drevalpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drevalpy/meta.yaml>`_
   :links: https: :https:`//www.biorxiv.org/content/10.1101/2025.05.26.655288v1`

   


.. conda:package:: drevalpy

   |downloads_drevalpy| |docker_drevalpy|

   :versions:
      
      

      ``1.4.1-0``,  ``1.4.0-0``

      

   
   :depends on curve-curator: 
   :depends on flaky: 
   :depends on importlib-resources: 
   :depends on matplotlib-base: 
   :depends on networkx: 
   :depends on numpy: ``>=1.20``
   :depends on pandas: 
   :depends on plotly: 
   :depends on poetry: ``>=2.0.1,<3.0.0``
   :depends on python: ``>=3.11,<3.14``
   :depends on pytorch: ``>=2.1``
   :depends on pytorch-lightning: ``>=2.5``
   :depends on pyyaml: 
   :depends on ray: 
   :depends on requests: 
   :depends on scikit-learn: ``>=1.4``
   :depends on scikit-posthocs: 
   :depends on scipy: 
   :depends on starlette: ``>=0.49.1``
   :depends on toml: ``>=0.10.2,<0.11.0``
   :depends on torch-geometric: 

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

    pixi global install drevalpy

to add into an existing workspace instead, run::

    pixi add drevalpy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install drevalpy

Alternatively, to install into a new environment, run::

    conda create -n envname drevalpy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/drevalpy:<tag>

(see `drevalpy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_drevalpy| image:: https://img.shields.io/conda/dn/bioconda/drevalpy.svg?style=flat
   :target: https://anaconda.org/bioconda/drevalpy
   :alt:   (downloads)
.. |docker_drevalpy| image:: https://quay.io/repository/biocontainers/drevalpy/status
   :target: https://quay.io/repository/biocontainers/drevalpy
.. _`drevalpy/tags`: https://quay.io/repository/biocontainers/drevalpy?tab=tags


.. raw:: html

    <script>
        var package = "drevalpy";
        var versions = ["1.4.1","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/drevalpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/drevalpy/README.html