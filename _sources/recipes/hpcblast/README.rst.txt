:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hpcblast'
.. highlight: bash

hpcblast
========

.. conda:recipe:: hpcblast
   :replaces_section_title:
   :noindex:

   A wrapper for NCBI\-BLAST\+ suite which provides a simple and efficient method to accelerate the blast search

   :homepage: https://github.com/yodeng/hpc-blast
   :license: MIT / MIT
   :recipe: /`hpcblast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hpcblast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hpcblast/meta.yaml>`_

   hpcblast provides a simple and efficient method for running the NCBI\-BLAST\+ suite program in localhost or the HPC environment \(Sun Grid Engine\). It splits the input sequence file and run all chunked tasks in parallel to accelerate the blast search speed. When there are many sequences in the input file for blast comparison and the running speed is slow\, using hpcblast can significantly improve the performance. All of this can be easy done only by adding the hpc\-blast command at the head of your blast command line.


.. conda:package:: hpcblast

   |downloads_hpcblast| |docker_hpcblast|

   :versions:
      
      

      ``1.0.2-0``

      

   
   :depends on blast: 
   :depends on pip: 
   :depends on python: ``>=3.5``
   :depends on runjob: ``>=2.10.5``

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

    pixi global install hpcblast

to add into an existing workspace instead, run::

    pixi add hpcblast

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hpcblast

Alternatively, to install into a new environment, run::

    conda create -n envname hpcblast

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hpcblast:<tag>

(see `hpcblast/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hpcblast| image:: https://img.shields.io/conda/dn/bioconda/hpcblast.svg?style=flat
   :target: https://anaconda.org/bioconda/hpcblast
   :alt:   (downloads)
.. |docker_hpcblast| image:: https://quay.io/repository/biocontainers/hpcblast/status
   :target: https://quay.io/repository/biocontainers/hpcblast
.. _`hpcblast/tags`: https://quay.io/repository/biocontainers/hpcblast?tab=tags


.. raw:: html

    <script>
        var package = "hpcblast";
        var versions = ["1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hpcblast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hpcblast/README.html