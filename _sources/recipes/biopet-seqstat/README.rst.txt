:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopet-seqstat'
.. highlight: bash

biopet-seqstat
==============

.. conda:recipe:: biopet-seqstat
   :replaces_section_title:
   :noindex:

   SeqStat is a package that contains tools to generate stats from a FastQ file\, merge those stats for multiple samples\, and validate the generated stats files.

   :homepage: https://github.com/biopet/seqstat
   :license: MIT
   :recipe: /`biopet-seqstat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-seqstat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-seqstat/meta.yaml>`_

   SeqStat is a package that contains tools
   to generate stats from a FastQ file\,
   merge those stats for multiple samples\,
   and validate the generated stats files.

        
   \#\#\#\# Mode \- Generate

   Generate outputs several stats on a FASTQ file.

   Outputted stats\:

   \- Bases
      \- Total number
      \- Base qualities\, with the number of bases having that quality
      \- Number of each nucleotide
   \- Reads
      \- Total number
      \- minimum length
      \- maximum length
      \- A histogram of the average base qualities
      \- The quality encoding \(Sanger\, solexa etc.\)
      \- A histogram of the read lengths.
       
           

   \#\#\#\# Mode \- Merge

   This module will merge seqstat files together and keep the sample\/library\/readgroup structure.
   If required it\'s also possible to collapse this\, the output file then des not have any sample\/library\/readgroup structure.
       
           

   \#\#\#\# Mode \- Validate

   A file from SeqStat will validate the input files.
   If aggregation values can not be regenerated the file is considered corrupt.
   This should only happen when the user will edit the seqstat file manually.

   For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/seqstat


.. conda:package:: biopet-seqstat

   |downloads_biopet-seqstat| |docker_biopet-seqstat|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``,  ``1.0-1``,  ``1.0-0``,  ``0.1-2``,  ``0.1-1``,  ``0.1-0``

      

   
   :depends on openjdk: ``>=8,<9``
   :depends on python: 

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

    pixi global install biopet-seqstat

to add into an existing workspace instead, run::

    pixi add biopet-seqstat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biopet-seqstat

Alternatively, to install into a new environment, run::

    conda create -n envname biopet-seqstat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biopet-seqstat:<tag>

(see `biopet-seqstat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biopet-seqstat| image:: https://img.shields.io/conda/dn/bioconda/biopet-seqstat.svg?style=flat
   :target: https://anaconda.org/bioconda/biopet-seqstat
   :alt:   (downloads)
.. |docker_biopet-seqstat| image:: https://quay.io/repository/biocontainers/biopet-seqstat/status
   :target: https://quay.io/repository/biocontainers/biopet-seqstat
.. _`biopet-seqstat/tags`: https://quay.io/repository/biocontainers/biopet-seqstat?tab=tags


.. raw:: html

    <script>
        var package = "biopet-seqstat";
        var versions = ["1.0.1","1.0.1","1.0","1.0","0.1"];
    </script>





Notes
-----
biopet\-seqstat is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-seqstat\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-seqstat \-Xms512m \-Xmx1g\'. 


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet-seqstat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet-seqstat/README.html