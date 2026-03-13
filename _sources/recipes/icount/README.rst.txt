:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'icount'
.. highlight: bash

icount
======

.. conda:recipe:: icount
   :replaces_section_title:
   :noindex:

   Computational pipeline for analysis of iCLIP data

   :homepage: https://github.com/tomazc/iCount
   :license: MIT / MIT
   :recipe: /`icount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/icount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/icount/meta.yaml>`_

   iCount is a Python module and associated command\-line interface \(CLI\)\, which provides all the commands needed to process iCLIP data on protein\-RNA interactions.


.. conda:package:: icount

   |downloads_icount| |docker_icount|

   :versions:
      
      

      ``2.0.0-1``,  ``2.0.0-0``

      

   
   :depends on bedtools: ``>=2.26.0``
   :depends on cutadapt: ``>=1.10``
   :depends on matplotlib: 
   :depends on numpy: 
   :depends on numpydoc: 
   :depends on pandas: 
   :depends on pybedtools: 
   :depends on pysam: 
   :depends on python: ``>=3``
   :depends on sphinx: ``>=1.4``
   :depends on star: 

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

    pixi global install icount

to add into an existing workspace instead, run::

    pixi add icount

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install icount

Alternatively, to install into a new environment, run::

    conda create -n envname icount

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/icount:<tag>

(see `icount/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_icount| image:: https://img.shields.io/conda/dn/bioconda/icount.svg?style=flat
   :target: https://anaconda.org/bioconda/icount
   :alt:   (downloads)
.. |docker_icount| image:: https://quay.io/repository/biocontainers/icount/status
   :target: https://quay.io/repository/biocontainers/icount
.. _`icount/tags`: https://quay.io/repository/biocontainers/icount?tab=tags


.. raw:: html

    <script>
        var package = "icount";
        var versions = ["2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/icount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/icount/README.html