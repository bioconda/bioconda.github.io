:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'enhancedsppider'
.. highlight: bash

enhancedsppider
===============

.. conda:recipe:: enhancedsppider
   :replaces_section_title:
   :noindex:

   Enhanced sppIDer for species identification from sequencing data

   :homepage: https://github.com/JohnnyChen1113/EnhancedSppIDer
   :license: MIT / MIT
   :recipe: /`enhancedsppider <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enhancedsppider>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enhancedsppider/meta.yaml>`_

   EnhancedSppIDer is a bioinformatics pipeline for species identification 
   and read extraction from Illumina\, PacBio\, and Oxford Nanopore sequencing data.



.. conda:package:: enhancedsppider

   |downloads_enhancedsppider| |docker_enhancedsppider|

   :versions:
      
      

      ``0.2.2-0``,  ``0.2.0-0``

      

   
   :depends on bedtools: 
   :depends on biopython: 
   :depends on bwa: 
   :depends on python: ``>=3.8``
   :depends on r-base: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on samtools: 
   :depends on seqtk: 

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

    pixi global install enhancedsppider

to add into an existing workspace instead, run::

    pixi add enhancedsppider

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install enhancedsppider

Alternatively, to install into a new environment, run::

    conda create -n envname enhancedsppider

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/enhancedsppider:<tag>

(see `enhancedsppider/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_enhancedsppider| image:: https://img.shields.io/conda/dn/bioconda/enhancedsppider.svg?style=flat
   :target: https://anaconda.org/bioconda/enhancedsppider
   :alt:   (downloads)
.. |docker_enhancedsppider| image:: https://quay.io/repository/biocontainers/enhancedsppider/status
   :target: https://quay.io/repository/biocontainers/enhancedsppider
.. _`enhancedsppider/tags`: https://quay.io/repository/biocontainers/enhancedsppider?tab=tags


.. raw:: html

    <script>
        var package = "enhancedsppider";
        var versions = ["0.2.2","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/enhancedsppider/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/enhancedsppider/README.html