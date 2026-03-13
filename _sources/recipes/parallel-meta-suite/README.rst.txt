:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parallel-meta-suite'
.. highlight: bash

parallel-meta-suite
===================

.. conda:recipe:: parallel-meta-suite
   :replaces_section_title:
   :noindex:

   Parallel\-META\-Suite is an interactive software package for rapid and comprehensive microbiome analysis.

   :homepage: https://github.com/qdu-bioinfo/parallel-meta-suite
   :license: GPL3
   :recipe: /`parallel-meta-suite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parallel-meta-suite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parallel-meta-suite/meta.yaml>`_

   


.. conda:package:: parallel-meta-suite

   |downloads_parallel-meta-suite| |docker_parallel-meta-suite|

   :versions:
      
      

      ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on hmmer: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on r-pheatmap: 
   :depends on vsearch: 

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

    pixi global install parallel-meta-suite

to add into an existing workspace instead, run::

    pixi add parallel-meta-suite

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install parallel-meta-suite

Alternatively, to install into a new environment, run::

    conda create -n envname parallel-meta-suite

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/parallel-meta-suite:<tag>

(see `parallel-meta-suite/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_parallel-meta-suite| image:: https://img.shields.io/conda/dn/bioconda/parallel-meta-suite.svg?style=flat
   :target: https://anaconda.org/bioconda/parallel-meta-suite
   :alt:   (downloads)
.. |docker_parallel-meta-suite| image:: https://quay.io/repository/biocontainers/parallel-meta-suite/status
   :target: https://quay.io/repository/biocontainers/parallel-meta-suite
.. _`parallel-meta-suite/tags`: https://quay.io/repository/biocontainers/parallel-meta-suite?tab=tags


.. raw:: html

    <script>
        var package = "parallel-meta-suite";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parallel-meta-suite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parallel-meta-suite/README.html