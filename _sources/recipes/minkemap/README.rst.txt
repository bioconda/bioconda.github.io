:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minkemap'
.. highlight: bash

minkemap
========

.. conda:recipe:: minkemap
   :replaces_section_title:
   :noindex:

   A Python\-based Circular Genome Visualization Tool

   :homepage: https://github.com/erinyoung/MinkeMap
   :license: MIT
   :recipe: /`minkemap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minkemap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minkemap/meta.yaml>`_

   


.. conda:package:: minkemap

   |downloads_minkemap| |docker_minkemap|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on biopython: 
   :depends on mappy: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pycirclize: 
   :depends on python: ``>=3.9``

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

    pixi global install minkemap

to add into an existing workspace instead, run::

    pixi add minkemap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install minkemap

Alternatively, to install into a new environment, run::

    conda create -n envname minkemap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/minkemap:<tag>

(see `minkemap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_minkemap| image:: https://img.shields.io/conda/dn/bioconda/minkemap.svg?style=flat
   :target: https://anaconda.org/bioconda/minkemap
   :alt:   (downloads)
.. |docker_minkemap| image:: https://quay.io/repository/biocontainers/minkemap/status
   :target: https://quay.io/repository/biocontainers/minkemap
.. _`minkemap/tags`: https://quay.io/repository/biocontainers/minkemap?tab=tags


.. raw:: html

    <script>
        var package = "minkemap";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minkemap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minkemap/README.html