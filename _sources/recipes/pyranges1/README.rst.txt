:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyranges1'
.. highlight: bash

pyranges1
=========

.. conda:recipe:: pyranges1
   :replaces_section_title:
   :noindex:

   GenomicRanges for Python.

   :homepage: http://github.com/pyranges/pyranges_1.x
   :license: MIT
   :recipe: /`pyranges1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyranges1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyranges1/meta.yaml>`_

   


.. conda:package:: pyranges1

   |downloads_pyranges1| |docker_pyranges1|

   :versions:
      
      

      ``1.3.2-0``,  ``1.3.0-0``,  ``1.1.6-0``

      

   
   :depends on bamread: 
   :depends on natsort: 
   :depends on pandas: 
   :depends on pybigwig: 
   :depends on pyrle: ``>=0.0.41``
   :depends on python: ``>=3.12``
   :depends on ruranges: ``>=0.1.1``
   :depends on tabulate: 

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

    pixi global install pyranges1

to add into an existing workspace instead, run::

    pixi add pyranges1

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyranges1

Alternatively, to install into a new environment, run::

    conda create -n envname pyranges1

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyranges1:<tag>

(see `pyranges1/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyranges1| image:: https://img.shields.io/conda/dn/bioconda/pyranges1.svg?style=flat
   :target: https://anaconda.org/bioconda/pyranges1
   :alt:   (downloads)
.. |docker_pyranges1| image:: https://quay.io/repository/biocontainers/pyranges1/status
   :target: https://quay.io/repository/biocontainers/pyranges1
.. _`pyranges1/tags`: https://quay.io/repository/biocontainers/pyranges1?tab=tags


.. raw:: html

    <script>
        var package = "pyranges1";
        var versions = ["1.3.2","1.3.0","1.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyranges1/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyranges1/README.html