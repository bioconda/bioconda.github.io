:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tracegroomer'
.. highlight: bash

tracegroomer
============

.. conda:recipe:: tracegroomer
   :replaces_section_title:
   :noindex:

   Format and normalise tracer metabolomics given file\(s\)\, to produce the .csv files which are ready for DIMet analysis.

   :homepage: https://github.com/cbib/TraceGroomer
   :license: MIT
   :recipe: /`tracegroomer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tracegroomer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tracegroomer/meta.yaml>`_

   


.. conda:package:: tracegroomer

   |downloads_tracegroomer| |docker_tracegroomer|

   :versions:
      
      

      ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends on click: ``>=8.1.7,<9.0.0``
   :depends on matplotlib-base: ``>=3.8.2,<4.0.0``
   :depends on mypy: ``>=1.8.0,<2.0.0``
   :depends on numpy: ``>=1.26.4,<2.0.0``
   :depends on openpyxl: ``>=3.1.2,<4.0.0``
   :depends on pandas: ``>=2.2.0,<3.0.0``
   :depends on pydantic: ``>=1.10.8,<2.0.0``
   :depends on python: ``>=3.10.0,<4.0.0``
   :depends on python-dotenv: ``>=1.0.1,<2.0.0``
   :depends on pyyaml: ``>=6.0.1,<7.0.0``
   :depends on scikit-learn: ``>=1.4.0,<2.0.0``
   :depends on scipy: ``>=1.12.0,<2.0.0``
   :depends on seaborn: ``>=0.13.2,<0.14.0``
   :depends on sphinx: ``>=7.2.6,<8.0.0``

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

    pixi global install tracegroomer

to add into an existing workspace instead, run::

    pixi add tracegroomer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tracegroomer

Alternatively, to install into a new environment, run::

    conda create -n envname tracegroomer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tracegroomer:<tag>

(see `tracegroomer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tracegroomer| image:: https://img.shields.io/conda/dn/bioconda/tracegroomer.svg?style=flat
   :target: https://anaconda.org/bioconda/tracegroomer
   :alt:   (downloads)
.. |docker_tracegroomer| image:: https://quay.io/repository/biocontainers/tracegroomer/status
   :target: https://quay.io/repository/biocontainers/tracegroomer
.. _`tracegroomer/tags`: https://quay.io/repository/biocontainers/tracegroomer?tab=tags


.. raw:: html

    <script>
        var package = "tracegroomer";
        var versions = ["0.1.4","0.1.3","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tracegroomer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tracegroomer/README.html