:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cats-rf'
.. highlight: bash

cats-rf
=======

.. conda:recipe:: cats-rf
   :replaces_section_title:
   :noindex:

   Reference\-free transcriptome assembly quality assessment tool.

   :homepage: https://github.com/bodulic/CATS-rf
   :documentation: https://github.com/bodulic/CATS-rf/blob/main/README.md
   
   :license: MIT
   :recipe: /`cats-rf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cats-rf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cats-rf/meta.yaml>`_

   CATS\-rf evaluates transcriptome assemblies using RNA\-seq reads without requiring a reference genome.



.. conda:package:: cats-rf

   |downloads_cats-rf| |docker_cats-rf|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on bash: 
   :depends on bedtools: 
   :depends on bowtie2: 
   :depends on coreutils: 
   :depends on gawk: 
   :depends on kallisto: 
   :depends on pandoc: 
   :depends on parallel: ``>=20220922``
   :depends on pysamstats: 
   :depends on python: ``>=3.6``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-data.table: 
   :depends on r-ggdist: 
   :depends on r-ggplot2: 
   :depends on r-rmarkdown: 
   :depends on samtools: 
   :depends on sed: 

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

    pixi global install cats-rf

to add into an existing workspace instead, run::

    pixi add cats-rf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cats-rf

Alternatively, to install into a new environment, run::

    conda create -n envname cats-rf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cats-rf:<tag>

(see `cats-rf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cats-rf| image:: https://img.shields.io/conda/dn/bioconda/cats-rf.svg?style=flat
   :target: https://anaconda.org/bioconda/cats-rf
   :alt:   (downloads)
.. |docker_cats-rf| image:: https://quay.io/repository/biocontainers/cats-rf/status
   :target: https://quay.io/repository/biocontainers/cats-rf
.. _`cats-rf/tags`: https://quay.io/repository/biocontainers/cats-rf?tab=tags


.. raw:: html

    <script>
        var package = "cats-rf";
        var versions = ["1.0.4","1.0.3","1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cats-rf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cats-rf/README.html