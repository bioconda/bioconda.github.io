:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngseqbasic'
.. highlight: bash

ngseqbasic
==========

.. conda:recipe:: ngseqbasic
   :replaces_section_title:
   :noindex:

   Basic ChIP\/DNaseI\/ATAC analysis \- from FASTQ to visualisation of tracks\, in one command.

   :homepage: http://userweb.molbiol.ox.ac.uk/public/telenius/NGseqBasicManual/external/instructionsBioconda.html
   :license: GPL-3.0-or-later
   :recipe: /`ngseqbasic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngseqbasic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngseqbasic/meta.yaml>`_

   


.. conda:package:: ngseqbasic

   |downloads_ngseqbasic| |docker_ngseqbasic|

   :versions:
      
      

      ``20.0-0``,  ``2.0.1-1``,  ``2.0.1-0``

      

   
   :depends on bedtools: ``>=2.31.0``
   :depends on bowtie: ``>=1.3.1``
   :depends on bowtie2: ``>=2.5.1``
   :depends on fastqc: ``>=0.12.1``
   :depends on flash2: ``>=2.2.00``
   :depends on perl: ``>=5.32.1``
   :depends on samtools: ``>=1.18``
   :depends on trim-galore: ``>=0.4.1``
   :depends on ucsc-bedclip: ``>=357``
   :depends on ucsc-bedgraphpack: ``>=357``
   :depends on ucsc-bedgraphtobigwig: ``>=357``
   :depends on ucsc-bedtobigbed: ``>=357``
   :depends on ucsc-bigbedtobed: ``>=357``

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

    pixi global install ngseqbasic

to add into an existing workspace instead, run::

    pixi add ngseqbasic

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ngseqbasic

Alternatively, to install into a new environment, run::

    conda create -n envname ngseqbasic

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ngseqbasic:<tag>

(see `ngseqbasic/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ngseqbasic| image:: https://img.shields.io/conda/dn/bioconda/ngseqbasic.svg?style=flat
   :target: https://anaconda.org/bioconda/ngseqbasic
   :alt:   (downloads)
.. |docker_ngseqbasic| image:: https://quay.io/repository/biocontainers/ngseqbasic/status
   :target: https://quay.io/repository/biocontainers/ngseqbasic
.. _`ngseqbasic/tags`: https://quay.io/repository/biocontainers/ngseqbasic?tab=tags


.. raw:: html

    <script>
        var package = "ngseqbasic";
        var versions = ["20.0","2.0.1","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngseqbasic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngseqbasic/README.html