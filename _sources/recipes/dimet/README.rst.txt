:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dimet'
.. highlight: bash

dimet
=====

.. conda:recipe:: dimet
   :replaces_section_title:
   :noindex:

   A tool for Differential Isotope\-labeled targeted Metabolomics data

   :homepage: https://github.com/cbib/DIMet.git
   :license: MIT
   :recipe: /`dimet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dimet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dimet/meta.yaml>`_

   


.. conda:package:: dimet

   |downloads_dimet| |docker_dimet|

   :versions:
      
      

      ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends on click: 
   :depends on coverage: 
   :depends on hydra-colorlog: ``>=1.2.0,<1.3.0``
   :depends on hydra-core: ``>=1.3.2,<1.4.0``
   :depends on matplotlib-base: ``>=3.8.3``
   :depends on numpy: ``>=1.26.4``
   :depends on pandas: ``>=2.2.0``
   :depends on pydantic: ``>=2.6.1``
   :depends on python: ``>=3.9,<4.0``
   :depends on python-dotenv: ``>=1.0,<2.0``
   :depends on pyyaml: ``>=6.0,<7.0``
   :depends on scikit-learn: ``>=1.4.0``
   :depends on scipy: ``>=1.9.1,<1.10.0``
   :depends on seaborn: ``>=0.13.2``
   :depends on statsmodels: ``>=0.13.5,<0.14.0``

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

    pixi global install dimet

to add into an existing workspace instead, run::

    pixi add dimet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dimet

Alternatively, to install into a new environment, run::

    conda create -n envname dimet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dimet:<tag>

(see `dimet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dimet| image:: https://img.shields.io/conda/dn/bioconda/dimet.svg?style=flat
   :target: https://anaconda.org/bioconda/dimet
   :alt:   (downloads)
.. |docker_dimet| image:: https://quay.io/repository/biocontainers/dimet/status
   :target: https://quay.io/repository/biocontainers/dimet
.. _`dimet/tags`: https://quay.io/repository/biocontainers/dimet?tab=tags


.. raw:: html

    <script>
        var package = "dimet";
        var versions = ["0.2.4","0.2.4","0.2.2","0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dimet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dimet/README.html