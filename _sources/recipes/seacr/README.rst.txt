:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seacr'
.. highlight: bash

seacr
=====

.. conda:recipe:: seacr
   :replaces_section_title:
   :noindex:

   SEACR is intended to call peaks and enriched regions from sparse CUT\&RUN or chromatin profiling data in which background is dominated by \"zeroes\" \(i.e. regions with no read coverage\). It requires R \(https\:\/\/www.r\-project.org\) and Bedtools \(https\:\/\/bedtools.readthedocs.io\/en\/latest\/\) to be available in your path\, and it requires bedgraphs from paired\-end sequencing as input\, which can be generated from read pair BED files \(i.e. BED coordinates reflecting the 5\' and 3\' termini of each read pair\) using bedtools genomecov with the \"\-bg\" flag\, or alternatively from name\-sorted paired\-end BAM files as described in \"Preparing input bedgraph files\" below.

   :homepage: https://github.com/FredHutch/SEACR
   :license: https://github.com/FredHutch/SEACR/blob/master/LICENSE
   :recipe: /`seacr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seacr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seacr/meta.yaml>`_

   


.. conda:package:: seacr

   |downloads_seacr| |docker_seacr|

   :versions:
      
      

      ``1.3-2``,  ``1.3-1``,  ``1.3-0``,  ``1.1-0``

      

   
   :depends on r-base: 

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

    pixi global install seacr

to add into an existing workspace instead, run::

    pixi add seacr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seacr

Alternatively, to install into a new environment, run::

    conda create -n envname seacr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seacr:<tag>

(see `seacr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seacr| image:: https://img.shields.io/conda/dn/bioconda/seacr.svg?style=flat
   :target: https://anaconda.org/bioconda/seacr
   :alt:   (downloads)
.. |docker_seacr| image:: https://quay.io/repository/biocontainers/seacr/status
   :target: https://quay.io/repository/biocontainers/seacr
.. _`seacr/tags`: https://quay.io/repository/biocontainers/seacr?tab=tags


.. raw:: html

    <script>
        var package = "seacr";
        var versions = ["1.3","1.3","1.3","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seacr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seacr/README.html