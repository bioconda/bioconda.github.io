:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'marge'
.. highlight: bash

marge
=====

.. conda:recipe:: marge
   :replaces_section_title:
   :noindex:

   Model\-based Analysis of Regulation of Gene Expression

   :homepage: http://cistrome.org/MARGE
   :license: MIT / MIT
   :recipe: /`marge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/marge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/marge/meta.yaml>`_

   


.. conda:package:: marge

   |downloads_marge| |docker_marge|

   :versions:
      
      

      ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on hdf5: 
   :depends on numpy: 
   :depends on pytables: 
   :depends on python: ``>3``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on snakemake: ``3.*``
   :depends on twobitreader: 
   :depends on ucsc-bedclip: 
   :depends on ucsc-bigwigaverageoverbed: 
   :depends on ucsc-bigwigsummary: 
   :depends on ucsc-bigwigtobedgraph: 

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

    pixi global install marge

to add into an existing workspace instead, run::

    pixi add marge

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install marge

Alternatively, to install into a new environment, run::

    conda create -n envname marge

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/marge:<tag>

(see `marge/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_marge| image:: https://img.shields.io/conda/dn/bioconda/marge.svg?style=flat
   :target: https://anaconda.org/bioconda/marge
   :alt:   (downloads)
.. |docker_marge| image:: https://quay.io/repository/biocontainers/marge/status
   :target: https://quay.io/repository/biocontainers/marge
.. _`marge/tags`: https://quay.io/repository/biocontainers/marge?tab=tags


.. raw:: html

    <script>
        var package = "marge";
        var versions = ["1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/marge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/marge/README.html