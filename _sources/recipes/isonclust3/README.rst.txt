:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'isonclust3'
.. highlight: bash

isonclust3
==========

.. conda:recipe:: isonclust3
   :replaces_section_title:
   :noindex:

   De novo clustering of long transcript reads into genes

   :homepage: https://github.com/aljpetri/isONclust3
   :license: GPL-3.0-or-later
   :recipe: /`isonclust3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isonclust3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/isonclust3/meta.yaml>`_

   isONclust3 is a tool for clustering either PacBio Iso\-Seq reads\, or Oxford Nanopore reads into clusters\, where each cluster represents all reads that came from a gene family. Output is a tsv file with each read assigned to a cluster\-ID and a folder \'fastq\' containing one fastq file per cluster generated. Detailed information is available in the isONclust3 paper https\:\/\/doi.org\/10.1093\/bioinformatics\/btaf207



.. conda:package:: isonclust3

   |downloads_isonclust3| |docker_isonclust3|

   :versions:
      
      

      ``0.3.0-0``

      

   

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

    pixi global install isonclust3

to add into an existing workspace instead, run::

    pixi add isonclust3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install isonclust3

Alternatively, to install into a new environment, run::

    conda create -n envname isonclust3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/isonclust3:<tag>

(see `isonclust3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_isonclust3| image:: https://img.shields.io/conda/dn/bioconda/isonclust3.svg?style=flat
   :target: https://anaconda.org/bioconda/isonclust3
   :alt:   (downloads)
.. |docker_isonclust3| image:: https://quay.io/repository/biocontainers/isonclust3/status
   :target: https://quay.io/repository/biocontainers/isonclust3
.. _`isonclust3/tags`: https://quay.io/repository/biocontainers/isonclust3?tab=tags


.. raw:: html

    <script>
        var package = "isonclust3";
        var versions = ["0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/isonclust3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/isonclust3/README.html