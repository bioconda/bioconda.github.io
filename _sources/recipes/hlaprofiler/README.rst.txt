:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hlaprofiler'
.. highlight: bash

hlaprofiler
===========

.. conda:recipe:: hlaprofiler
   :replaces_section_title:
   :noindex:

   HLAProfiler uses k\-mer profiles to predict HLA types from paired\-end RNA\-seq data.

   :homepage: https://github.com/ExpressionAnalysis/HLAProfiler
   :license: Custom non-commercial license
   :recipe: /`hlaprofiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hlaprofiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hlaprofiler/meta.yaml>`_

   


.. conda:package:: hlaprofiler

   |downloads_hlaprofiler| |docker_hlaprofiler|

   :versions:
      
      

      ``1.0.5-3``,  ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends on kraken-ea: 
   :depends on perl-base: 
   :depends on perl-class-load: 
   :depends on perl-file-compare: 
   :depends on perl-file-slurp: 
   :depends on perl-parallel-forkmanager: 
   :depends on perl-statistics-basic: 
   :depends on perl-test-trap: 

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

    pixi global install hlaprofiler

to add into an existing workspace instead, run::

    pixi add hlaprofiler

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hlaprofiler

Alternatively, to install into a new environment, run::

    conda create -n envname hlaprofiler

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hlaprofiler:<tag>

(see `hlaprofiler/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hlaprofiler| image:: https://img.shields.io/conda/dn/bioconda/hlaprofiler.svg?style=flat
   :target: https://anaconda.org/bioconda/hlaprofiler
   :alt:   (downloads)
.. |docker_hlaprofiler| image:: https://quay.io/repository/biocontainers/hlaprofiler/status
   :target: https://quay.io/repository/biocontainers/hlaprofiler
.. _`hlaprofiler/tags`: https://quay.io/repository/biocontainers/hlaprofiler?tab=tags


.. raw:: html

    <script>
        var package = "hlaprofiler";
        var versions = ["1.0.5","1.0.5","1.0.5","1.0.5","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hlaprofiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hlaprofiler/README.html