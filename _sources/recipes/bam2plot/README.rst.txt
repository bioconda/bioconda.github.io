:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bam2plot'
.. highlight: bash

bam2plot
========

.. conda:recipe:: bam2plot
   :replaces_section_title:
   :noindex:

   Plot of coverage from bam file

   :homepage: https://github.com/willros/bam2plot
   :license: GPL-3.0-only
   :recipe: /`bam2plot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bam2plot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bam2plot/meta.yaml>`_

   


.. conda:package:: bam2plot

   |downloads_bam2plot| |docker_bam2plot|

   :versions:
      
      

      ``0.4.0-0``,  ``0.3.7-0``,  ``0.3.6-0``

      

   
   :depends on mappy: ``>=2.28``
   :depends on mosdepth: 
   :depends on polars: ``>=0.20.15``
   :depends on pyarrow: 
   :depends on pyfastx: 
   :depends on pysam: ``>=0.22.0``
   :depends on python: ``>=3.10``
   :depends on seaborn: ``>=0.13.2``

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

    pixi global install bam2plot

to add into an existing workspace instead, run::

    pixi add bam2plot

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bam2plot

Alternatively, to install into a new environment, run::

    conda create -n envname bam2plot

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bam2plot:<tag>

(see `bam2plot/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bam2plot| image:: https://img.shields.io/conda/dn/bioconda/bam2plot.svg?style=flat
   :target: https://anaconda.org/bioconda/bam2plot
   :alt:   (downloads)
.. |docker_bam2plot| image:: https://quay.io/repository/biocontainers/bam2plot/status
   :target: https://quay.io/repository/biocontainers/bam2plot
.. _`bam2plot/tags`: https://quay.io/repository/biocontainers/bam2plot?tab=tags


.. raw:: html

    <script>
        var package = "bam2plot";
        var versions = ["0.4.0","0.3.7","0.3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bam2plot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bam2plot/README.html