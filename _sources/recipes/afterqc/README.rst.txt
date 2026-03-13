:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'afterqc'
.. highlight: bash

afterqc
=======

.. conda:recipe:: afterqc
   :replaces_section_title:
   :noindex:

   Automatic Filtering\, Trimming\, Error Removing and Quality Control for fastq data. AfterQC can simply go through all fastq files in a folder and then output three folders\: good\, bad and QC folders\, which contains good reads\, bad reads and the QC results of each fastq file\/pair. Currently it supports processing data from HiSeq 2000\/2500\/3000\/4000\, Nextseq 500\/550\, MiniSeq...and other Illumina 1.8 or newer formats.

   :homepage: https://github.com/OpenGene/AfterQC
   :license: MIT / MIT
   :recipe: /`afterqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/afterqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/afterqc/meta.yaml>`_

   


.. conda:package:: afterqc

   |downloads_afterqc| |docker_afterqc|

   :versions:
      
      

      ``0.9.7-4``,  ``0.9.7-3``,  ``0.9.7-2``,  ``0.9.7-0``,  ``0.9.6-0``

      

   
   :depends on python: ``>=2.7,<3.0a0``

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

    pixi global install afterqc

to add into an existing workspace instead, run::

    pixi add afterqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install afterqc

Alternatively, to install into a new environment, run::

    conda create -n envname afterqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/afterqc:<tag>

(see `afterqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_afterqc| image:: https://img.shields.io/conda/dn/bioconda/afterqc.svg?style=flat
   :target: https://anaconda.org/bioconda/afterqc
   :alt:   (downloads)
.. |docker_afterqc| image:: https://quay.io/repository/biocontainers/afterqc/status
   :target: https://quay.io/repository/biocontainers/afterqc
.. _`afterqc/tags`: https://quay.io/repository/biocontainers/afterqc?tab=tags


.. raw:: html

    <script>
        var package = "afterqc";
        var versions = ["0.9.7","0.9.7","0.9.7","0.9.7","0.9.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/afterqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/afterqc/README.html