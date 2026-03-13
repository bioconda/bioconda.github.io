:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gfold'
.. highlight: bash

gfold
=====

.. conda:recipe:: gfold
   :replaces_section_title:
   :noindex:

   Find differentially expressed genes from RNA\-seq data with few replicates using generalized fold changes.

   :homepage: http://compbio.tongji.edu.cn/~fengjx/GFOLD/gfold.html
   :license: MIT
   :recipe: /`gfold <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfold>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfold/meta.yaml>`_

   


.. conda:package:: gfold

   |downloads_gfold| |docker_gfold|

   :versions:
      
      

      ``1.1.4-2``,  ``1.1.4-1``,  ``1.1.4-0``

      

   
   :depends on gsl: ``2.2*``
   :depends on libgcc: 
   :depends on openblas: 

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

    pixi global install gfold

to add into an existing workspace instead, run::

    pixi add gfold

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gfold

Alternatively, to install into a new environment, run::

    conda create -n envname gfold

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gfold:<tag>

(see `gfold/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gfold| image:: https://img.shields.io/conda/dn/bioconda/gfold.svg?style=flat
   :target: https://anaconda.org/bioconda/gfold
   :alt:   (downloads)
.. |docker_gfold| image:: https://quay.io/repository/biocontainers/gfold/status
   :target: https://quay.io/repository/biocontainers/gfold
.. _`gfold/tags`: https://quay.io/repository/biocontainers/gfold?tab=tags


.. raw:: html

    <script>
        var package = "gfold";
        var versions = ["1.1.4","1.1.4","1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gfold/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gfold/README.html