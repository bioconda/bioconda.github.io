:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'iobrpy'
.. highlight: bash

iobrpy
======

.. conda:recipe:: iobrpy
   :replaces_section_title:
   :noindex:

   Immuno\-Oncology Biological Research using Python \(IOBRpy\)

   :homepage: https://github.com/IOBR/IOBRpy
   :license: MIT
   :recipe: /`iobrpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iobrpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iobrpy/meta.yaml>`_

   


.. conda:package:: iobrpy

   |downloads_iobrpy| |docker_iobrpy|

   :versions:
      
      

      ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.4-0``,  ``0.1.3-0``

      

   
   :depends on fastp: 
   :depends on gseapy: ``>=1.0.6``
   :depends on gzip: 
   :depends on joblib: ``>=1.3``
   :depends on matplotlib-base: ``>=3.7``
   :depends on multiqc: ``1.31``
   :depends on numpy: ``>=1.22``
   :depends on pandas: ``>=1.5``
   :depends on python: ``>=3.9``
   :depends on regex: ``>=2024.5``
   :depends on salmon: 
   :depends on scikit-learn: ``>=1.2``
   :depends on scipy: ``>=1.9``
   :depends on star: 
   :depends on statsmodels: ``>=0.13``
   :depends on tiktoken: ``>=0.11,<0.13``
   :depends on tqdm: ``>=4.66``
   :depends on trust4: 
   :depends on xarray: ``>=0.20``

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

    pixi global install iobrpy

to add into an existing workspace instead, run::

    pixi add iobrpy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install iobrpy

Alternatively, to install into a new environment, run::

    conda create -n envname iobrpy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/iobrpy:<tag>

(see `iobrpy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_iobrpy| image:: https://img.shields.io/conda/dn/bioconda/iobrpy.svg?style=flat
   :target: https://anaconda.org/bioconda/iobrpy
   :alt:   (downloads)
.. |docker_iobrpy| image:: https://quay.io/repository/biocontainers/iobrpy/status
   :target: https://quay.io/repository/biocontainers/iobrpy
.. _`iobrpy/tags`: https://quay.io/repository/biocontainers/iobrpy?tab=tags


.. raw:: html

    <script>
        var package = "iobrpy";
        var versions = ["0.1.7","0.1.6","0.1.4","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iobrpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iobrpy/README.html