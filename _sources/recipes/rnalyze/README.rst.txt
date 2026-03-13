:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnalyze'
.. highlight: bash

rnalyze
=======

.. conda:recipe:: rnalyze
   :replaces_section_title:
   :noindex:

   A comprehensive pipeline for RNA\-Seq data analysis.

   :homepage: https://github.com/MohamedElsisii/rnalyze
   :documentation: https://github.com/MohamedElsisii/rnalyze#readme
   
   :license: MIT
   :recipe: /`rnalyze <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnalyze>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnalyze/meta.yaml>`_

   rnalyze is a Bash\-based pipeline for analyzing RNA\-Seq data. It supports both single\-end and paired\-end data\,
   includes quality control\, trimming\, alignment\, and feature counting\, and is highly customizable.



.. conda:package:: rnalyze

   |downloads_rnalyze| |docker_rnalyze|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on bowtie2: 
   :depends on bwa: 
   :depends on cutadapt: ``5.0.*``
   :depends on fastqc: 
   :depends on hisat2: 
   :depends on multiqc: 
   :depends on samtools: 
   :depends on sra-tools: 
   :depends on subread: 
   :depends on trimmomatic: 
   :depends on xopen: ``1.6.0.*``

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

    pixi global install rnalyze

to add into an existing workspace instead, run::

    pixi add rnalyze

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rnalyze

Alternatively, to install into a new environment, run::

    conda create -n envname rnalyze

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rnalyze:<tag>

(see `rnalyze/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rnalyze| image:: https://img.shields.io/conda/dn/bioconda/rnalyze.svg?style=flat
   :target: https://anaconda.org/bioconda/rnalyze
   :alt:   (downloads)
.. |docker_rnalyze| image:: https://quay.io/repository/biocontainers/rnalyze/status
   :target: https://quay.io/repository/biocontainers/rnalyze
.. _`rnalyze/tags`: https://quay.io/repository/biocontainers/rnalyze?tab=tags


.. raw:: html

    <script>
        var package = "rnalyze";
        var versions = ["1.0.1","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnalyze/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnalyze/README.html