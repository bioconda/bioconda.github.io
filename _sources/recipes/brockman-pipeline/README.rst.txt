:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'brockman-pipeline'
.. highlight: bash

brockman-pipeline
=================

.. conda:recipe:: brockman-pipeline
   :replaces_section_title:
   :noindex:

   Brockman Representation Of Chromatin by K\-mers in Mark\-Associated Nucleotides

   :homepage: https://github.com/Carldeboer/Brockman
   :license: GPL-3.0
   :recipe: /`brockman-pipeline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/brockman-pipeline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/brockman-pipeline/meta.yaml>`_

   


.. conda:package:: brockman-pipeline

   |downloads_brockman-pipeline| |docker_brockman-pipeline|

   :versions:
      
      

      ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on amused: 
   :depends on bedtools: 
   :depends on bowtie2: 
   :depends on bzip2: 
   :depends on jemalloc: 
   :depends on ncurses: 
   :depends on ruby: ``>=2.4``
   :depends on ruby-dna-tools: 
   :depends on samtools: 
   :depends on trimmomatic: 
   :depends on ucsc-twobittofa: 
   :depends on zlib: 

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

    pixi global install brockman-pipeline

to add into an existing workspace instead, run::

    pixi add brockman-pipeline

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install brockman-pipeline

Alternatively, to install into a new environment, run::

    conda create -n envname brockman-pipeline

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/brockman-pipeline:<tag>

(see `brockman-pipeline/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_brockman-pipeline| image:: https://img.shields.io/conda/dn/bioconda/brockman-pipeline.svg?style=flat
   :target: https://anaconda.org/bioconda/brockman-pipeline
   :alt:   (downloads)
.. |docker_brockman-pipeline| image:: https://quay.io/repository/biocontainers/brockman-pipeline/status
   :target: https://quay.io/repository/biocontainers/brockman-pipeline
.. _`brockman-pipeline/tags`: https://quay.io/repository/biocontainers/brockman-pipeline?tab=tags


.. raw:: html

    <script>
        var package = "brockman-pipeline";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/brockman-pipeline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/brockman-pipeline/README.html