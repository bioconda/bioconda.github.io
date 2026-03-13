:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'diapysef'
.. highlight: bash

diapysef
========

.. conda:recipe:: diapysef
   :replaces_section_title:
   :noindex:

   Analysis\, conversion and visualization of diaPASEF data.

   :homepage: https://github.com/Roestlab/dia-pasef
   :license: MIT / MIT
   :recipe: /`diapysef <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/diapysef>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/diapysef/meta.yaml>`_

   


.. conda:package:: diapysef

   |downloads_diapysef| |docker_diapysef|

   :versions:
      
      

      ``1.0.10-0``,  ``1.0.8-0``,  ``0.3.5-1``,  ``0.3.5-0``

      

   
   :depends on click: 
   :depends on joblib: 
   :depends on matplotlib-base: 
   :depends on mesa-libgl-cos6-x86_64: 
   :depends on numpy: 
   :depends on opencv: 
   :depends on pandas: 
   :depends on patsy: 
   :depends on pyopenms: 
   :depends on python: 
   :depends on scikit-image: 
   :depends on seaborn: 
   :depends on statsmodels: 
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

    pixi global install diapysef

to add into an existing workspace instead, run::

    pixi add diapysef

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install diapysef

Alternatively, to install into a new environment, run::

    conda create -n envname diapysef

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/diapysef:<tag>

(see `diapysef/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_diapysef| image:: https://img.shields.io/conda/dn/bioconda/diapysef.svg?style=flat
   :target: https://anaconda.org/bioconda/diapysef
   :alt:   (downloads)
.. |docker_diapysef| image:: https://quay.io/repository/biocontainers/diapysef/status
   :target: https://quay.io/repository/biocontainers/diapysef
.. _`diapysef/tags`: https://quay.io/repository/biocontainers/diapysef?tab=tags


.. raw:: html

    <script>
        var package = "diapysef";
        var versions = ["1.0.10","1.0.8","0.3.5","0.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/diapysef/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/diapysef/README.html