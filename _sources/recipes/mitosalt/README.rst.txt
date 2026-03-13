:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mitosalt'
.. highlight: bash

mitosalt
========

.. conda:recipe:: mitosalt
   :replaces_section_title:
   :noindex:

   MitoSAlt is a pipeline to identify large deletions and duplications in human and mouse mitochondrial genomes from next generation whole genome\/exome sequencing data. The pipeline is capable of analyzing any circular genome in principle\, as long as a proper configuration file is provided.

   :homepage: https://sourceforge.net/projects/mitosalt/
   :license: MIT / MIT-0
   :recipe: /`mitosalt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitosalt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitosalt/meta.yaml>`_

   This mitosalt version\:

   \- lets us choose the destination folder of the reference genomes and indices
     \- \`export MITOSALT\_DATA\=\/path\/to\/mitosalt\/genomedata\`
   \- downloads user\-selected reference genomes and builds indices
     \- \`download\-mitosalt\-db.sh \-h \[human\_genome\_url\, blank for custom hg19 genome\]\`
     \- \`download\-mitosalt\-db.sh \-m \[mouse\_genome\_url\, blank for custom GRCm38.p6 genome\]\`
     \- \`download\-mitosalt\-db.sh \-h \[human\_genome\_url\, blank for custom hg19 genome\] \-m \[mouse\_genome\_url\, blank for custom GRCm38.p6 genome\]\`
   \- runs the pipeline with paired\-end reads
     \- \`mitosalt.pl \<config\_file\> \<fastq file 1\> \<fastq file 2\> \<study name\>\`
   \- runs the pipeline with single\-end reads
     \- \`mitosalt\_se.pl \<config\_file\> \<fastq file\> \<study name\>\`
   \- provides configuration file template in the package at \`\$CONDA\_PREFIX\/share\/mitosalt\-1.1.1\-3\/\`



.. conda:package:: mitosalt

   |downloads_mitosalt| |docker_mitosalt|

   :versions:
      
      

      ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``

      

   
   :depends on bbmap: 
   :depends on bedtools: ``2.31.1.*``
   :depends on bioconductor-biostrings: ``2.70.1.*``
   :depends on hisat2: 
   :depends on last: ``1608.*``
   :depends on openjdk: ``>=11.0.1``
   :depends on perl: ``5.32.*``
   :depends on r-base: ``4.3.3.*``
   :depends on r-plotrix: ``3.8_4.*``
   :depends on r-rcolorbrewer: ``1.1.*``
   :depends on sambamba: 
   :depends on samtools: ``1.21.*``
   :depends on ucsc-bedgraphtobigwig: 
   :depends on ucsc-fasize: 
   :depends on ucsc-fasomerecords: 

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

    pixi global install mitosalt

to add into an existing workspace instead, run::

    pixi add mitosalt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mitosalt

Alternatively, to install into a new environment, run::

    conda create -n envname mitosalt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mitosalt:<tag>

(see `mitosalt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mitosalt| image:: https://img.shields.io/conda/dn/bioconda/mitosalt.svg?style=flat
   :target: https://anaconda.org/bioconda/mitosalt
   :alt:   (downloads)
.. |docker_mitosalt| image:: https://quay.io/repository/biocontainers/mitosalt/status
   :target: https://quay.io/repository/biocontainers/mitosalt
.. _`mitosalt/tags`: https://quay.io/repository/biocontainers/mitosalt?tab=tags


.. raw:: html

    <script>
        var package = "mitosalt";
        var versions = ["1.1.1","1.1.1","1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mitosalt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mitosalt/README.html