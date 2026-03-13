:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flexsweep'
.. highlight: bash

flexsweep
=========

.. conda:recipe:: flexsweep
   :replaces_section_title:
   :noindex:

   A versatile tool for detecting selective sweeps.

   :homepage: https://github.com/jmurga/flexsweep
   :documentation: https://flexsweep.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`flexsweep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexsweep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexsweep/meta.yaml>`_

   


.. conda:package:: flexsweep

   |downloads_flexsweep| |docker_flexsweep|

   :versions:
      
      

      ``1.3-0``,  ``1.0-0``

      

   
   :depends on click: ``>=8.1.7,<9.0.0``
   :depends on demes: ``>=0.2.3,<0.3.0``
   :depends on joblib: ``>=1.4.2,<2.0.0``
   :depends on matplotlib-base: ``>=3.9.2,<4.0.0``
   :depends on numba: ``>=0.60.0,<0.61.0``
   :depends on numpy: ``1.26.4``
   :depends on polars: ``>=1.14.0,<2.0.0``
   :depends on pyarrow: ``>=17.0.0,<18.0.0``
   :depends on pybedtools: ``>=0.12.0``
   :depends on python: ``>=3.12``
   :depends on scikit-allel: ``>=1.3.8,<2.0.0``
   :depends on scikit-learn: ``>=1.5.1,<2.0.0``
   :depends on scipy: ``>=1.14.0,<2.0.0``
   :depends on tbb: ``>=2022.1.0,<2023.0.0``
   :depends on tensorflow: ``2.17.*``
   :depends on threadpoolctl: ``>=3.5.0,<4.0.0``

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

    pixi global install flexsweep

to add into an existing workspace instead, run::

    pixi add flexsweep

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install flexsweep

Alternatively, to install into a new environment, run::

    conda create -n envname flexsweep

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/flexsweep:<tag>

(see `flexsweep/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_flexsweep| image:: https://img.shields.io/conda/dn/bioconda/flexsweep.svg?style=flat
   :target: https://anaconda.org/bioconda/flexsweep
   :alt:   (downloads)
.. |docker_flexsweep| image:: https://quay.io/repository/biocontainers/flexsweep/status
   :target: https://quay.io/repository/biocontainers/flexsweep
.. _`flexsweep/tags`: https://quay.io/repository/biocontainers/flexsweep?tab=tags


.. raw:: html

    <script>
        var package = "flexsweep";
        var versions = ["1.3","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flexsweep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flexsweep/README.html