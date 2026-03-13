:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastqmetrics'
.. highlight: bash

fastqmetrics
============

.. conda:recipe:: fastqmetrics
   :replaces_section_title:
   :noindex:

   Extract metrics from a fastq file\, streaming

   :homepage: https://github.com/wdecoster/fastqmetrics
   :license: MIT / MIT License
   :recipe: /`fastqmetrics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqmetrics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqmetrics/meta.yaml>`_

   


.. conda:package:: fastqmetrics

   |downloads_fastqmetrics| |docker_fastqmetrics|

   :versions:
      
      

      ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends on nanoget: ``>=0.14.0,<1.8.0``
   :depends on python: ``>=3``

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

    pixi global install fastqmetrics

to add into an existing workspace instead, run::

    pixi add fastqmetrics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fastqmetrics

Alternatively, to install into a new environment, run::

    conda create -n envname fastqmetrics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fastqmetrics:<tag>

(see `fastqmetrics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fastqmetrics| image:: https://img.shields.io/conda/dn/bioconda/fastqmetrics.svg?style=flat
   :target: https://anaconda.org/bioconda/fastqmetrics
   :alt:   (downloads)
.. |docker_fastqmetrics| image:: https://quay.io/repository/biocontainers/fastqmetrics/status
   :target: https://quay.io/repository/biocontainers/fastqmetrics
.. _`fastqmetrics/tags`: https://quay.io/repository/biocontainers/fastqmetrics?tab=tags


.. raw:: html

    <script>
        var package = "fastqmetrics";
        var versions = ["0.1.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastqmetrics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastqmetrics/README.html