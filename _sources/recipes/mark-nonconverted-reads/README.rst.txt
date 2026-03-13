:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mark-nonconverted-reads'
.. highlight: bash

mark-nonconverted-reads
=======================

.. conda:recipe:: mark-nonconverted-reads
   :replaces_section_title:
   :noindex:

   A simple filter to mark potential nonconverted reads from methylation experiments

   :homepage: https://github.com/nebiolabs/mark-nonconverted-reads
   :license: AGPL-3.0
   :recipe: /`mark-nonconverted-reads <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mark-nonconverted-reads>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mark-nonconverted-reads/meta.yaml>`_

   


.. conda:package:: mark-nonconverted-reads

   |downloads_mark-nonconverted-reads| |docker_mark-nonconverted-reads|

   :versions:
      
      

      ``1.2-0``,  ``1.1-1``,  ``1.0-0``

      

   
   :depends on pysam: 
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

    pixi global install mark-nonconverted-reads

to add into an existing workspace instead, run::

    pixi add mark-nonconverted-reads

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mark-nonconverted-reads

Alternatively, to install into a new environment, run::

    conda create -n envname mark-nonconverted-reads

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mark-nonconverted-reads:<tag>

(see `mark-nonconverted-reads/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mark-nonconverted-reads| image:: https://img.shields.io/conda/dn/bioconda/mark-nonconverted-reads.svg?style=flat
   :target: https://anaconda.org/bioconda/mark-nonconverted-reads
   :alt:   (downloads)
.. |docker_mark-nonconverted-reads| image:: https://quay.io/repository/biocontainers/mark-nonconverted-reads/status
   :target: https://quay.io/repository/biocontainers/mark-nonconverted-reads
.. _`mark-nonconverted-reads/tags`: https://quay.io/repository/biocontainers/mark-nonconverted-reads?tab=tags


.. raw:: html

    <script>
        var package = "mark-nonconverted-reads";
        var versions = ["1.2","1.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mark-nonconverted-reads/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mark-nonconverted-reads/README.html