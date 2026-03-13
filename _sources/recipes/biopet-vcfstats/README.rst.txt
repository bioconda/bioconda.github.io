:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biopet-vcfstats'
.. highlight: bash

biopet-vcfstats
===============

.. conda:recipe:: biopet-vcfstats
   :replaces_section_title:
   :noindex:

   Vcfstats is a tool that can generate metrics from a vcf file.

   :homepage: https://github.com/biopet/vcfstats
   :license: MIT
   :recipe: /`biopet-vcfstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-vcfstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biopet-vcfstats/meta.yaml>`_

   Vcfstats is a tool that can generate metrics from a vcf file.

    \- General stats \(default\, can be disabled\)
    \- Genotype stats \(default\, can be disabled\)
    \- Sample compare \(default\, can be disabled\)
    \- Sample distributions \(default\, can be disabled\)
    \- Field histograms

   This tool can run locally single threaded but also on a Apache Spark cluster.

   For documentation and manuals visit our github.io page\: https\:\/\/biopet.github.io\/vcfstats


.. conda:package:: biopet-vcfstats

   |downloads_biopet-vcfstats| |docker_biopet-vcfstats|

   :versions:
      
      

      ``1.2-1``,  ``1.2-0``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
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

    pixi global install biopet-vcfstats

to add into an existing workspace instead, run::

    pixi add biopet-vcfstats

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install biopet-vcfstats

Alternatively, to install into a new environment, run::

    conda create -n envname biopet-vcfstats

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/biopet-vcfstats:<tag>

(see `biopet-vcfstats/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_biopet-vcfstats| image:: https://img.shields.io/conda/dn/bioconda/biopet-vcfstats.svg?style=flat
   :target: https://anaconda.org/bioconda/biopet-vcfstats
   :alt:   (downloads)
.. |docker_biopet-vcfstats| image:: https://quay.io/repository/biocontainers/biopet-vcfstats/status
   :target: https://quay.io/repository/biocontainers/biopet-vcfstats
.. _`biopet-vcfstats/tags`: https://quay.io/repository/biocontainers/biopet-vcfstats?tab=tags


.. raw:: html

    <script>
        var package = "biopet-vcfstats";
        var versions = ["1.2","1.2","1.1","1.1","1.1"];
    </script>





Notes
-----
biopet\-vcfstats is a Java program that comes with a custom wrapper shell script. By default \'no default java option\' is set in the wrapper. The command that runs the program is \'biopet\-vcfstats\'. If you want to overwrite it you can specify memory options directly after your binaries. If you have \_JAVA\_OPTIONS set globally this will take precedence. For example run it with \'biopet\-vcfstats \-Xms512m \-Xmx1g\'. 


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biopet-vcfstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biopet-vcfstats/README.html