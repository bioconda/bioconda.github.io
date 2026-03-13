:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dastk'
.. highlight: bash

dastk
=====

.. conda:recipe:: dastk
   :replaces_section_title:
   :noindex:

   Differential ATAC\-seq toolkit

   :homepage: https://github.com/Dowell-Lab/DAStk
   :license: BSD / BSD-3
   :recipe: /`dastk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dastk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dastk/meta.yaml>`_
   :links: doi: :doi:`10.3390/molecules23051136`, biotools: :biotools:`DAStk_-_Differential_ATAC-seq_toolkit`

   


.. conda:package:: dastk

   |downloads_dastk| |docker_dastk|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on adjusttext: 
   :depends on matplotlib-base: 
   :depends on matplotlib-venn: 
   :depends on networkx: ``>=2``
   :depends on pandas: 
   :depends on pybedtools: 
   :depends on python: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on upsetplot: 

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

    pixi global install dastk

to add into an existing workspace instead, run::

    pixi add dastk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dastk

Alternatively, to install into a new environment, run::

    conda create -n envname dastk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dastk:<tag>

(see `dastk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dastk| image:: https://img.shields.io/conda/dn/bioconda/dastk.svg?style=flat
   :target: https://anaconda.org/bioconda/dastk
   :alt:   (downloads)
.. |docker_dastk| image:: https://quay.io/repository/biocontainers/dastk/status
   :target: https://quay.io/repository/biocontainers/dastk
.. _`dastk/tags`: https://quay.io/repository/biocontainers/dastk?tab=tags


.. raw:: html

    <script>
        var package = "dastk";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dastk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dastk/README.html