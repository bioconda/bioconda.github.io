:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-seqmagick'
.. highlight: bash

r-seqmagick
===========

.. conda:recipe:: r-seqmagick
   :replaces_section_title:
   :noindex:

   Supports reading and writing sequences for different formats \(currently interleaved and sequential formats for \'FASTA\' and \'PHYLIP\'\)\, file conversion\, and manipulation \(e.g. filter sequences that contain specify pattern\, export consensus sequence from an alignment\).

   :homepage: https://github.com/YuLab-SMU/seqmagick
   :license: OTHER / Artistic-2.0
   :recipe: /`r-seqmagick <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-seqmagick>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-seqmagick/meta.yaml>`_

   


.. conda:package:: r-seqmagick

   |downloads_r-seqmagick| |docker_r-seqmagick|

   :versions:
      
      

      ``0.1.8-1``,  ``0.1.8-0``,  ``0.1.7-1``,  ``0.1.7-0``,  ``0.1.6-1``,  ``0.1.6-0``,  ``0.1.5-1``,  ``0.1.5-0``

      

   
   :depends on bioconductor-biostrings: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-magrittr: 
   :depends on r-yulab.utils: ``>0.1.6``

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

    pixi global install r-seqmagick

to add into an existing workspace instead, run::

    pixi add r-seqmagick

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-seqmagick

Alternatively, to install into a new environment, run::

    conda create -n envname r-seqmagick

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-seqmagick:<tag>

(see `r-seqmagick/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-seqmagick| image:: https://img.shields.io/conda/dn/bioconda/r-seqmagick.svg?style=flat
   :target: https://anaconda.org/bioconda/r-seqmagick
   :alt:   (downloads)
.. |docker_r-seqmagick| image:: https://quay.io/repository/biocontainers/r-seqmagick/status
   :target: https://quay.io/repository/biocontainers/r-seqmagick
.. _`r-seqmagick/tags`: https://quay.io/repository/biocontainers/r-seqmagick?tab=tags


.. raw:: html

    <script>
        var package = "r-seqmagick";
        var versions = ["0.1.8","0.1.8","0.1.7","0.1.7","0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-seqmagick/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-seqmagick/README.html