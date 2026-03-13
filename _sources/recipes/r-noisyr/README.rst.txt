:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-noisyr'
.. highlight: bash

r-noisyr
========

.. conda:recipe:: r-noisyr
   :replaces_section_title:
   :noindex:

   Quantifies and removes technical noise from high\-throughput sequencing data. Two approaches are used\, one based on the count matrix\, and one using the alignment BAM files directly. Contains several options for every step of the process\, as well as tools to quality check and assess the stability of output.

   :homepage: https://github.com/Core-Bioinformatics/noisyR
   :license: GPL2 / GPL-2.0-only
   :recipe: /`r-noisyr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-noisyr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-noisyr/meta.yaml>`_

   


.. conda:package:: r-noisyr

   |downloads_r-noisyr| |docker_r-noisyr|

   :versions:
      
      

      ``1.0.0-3``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-genomicranges: 
   :depends on bioconductor-iranges: 
   :depends on bioconductor-preprocesscore: 
   :depends on bioconductor-rsamtools: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-doparallel: 
   :depends on r-dplyr: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-magrittr: 
   :depends on r-philentropy: 
   :depends on r-tibble: 

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

    pixi global install r-noisyr

to add into an existing workspace instead, run::

    pixi add r-noisyr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-noisyr

Alternatively, to install into a new environment, run::

    conda create -n envname r-noisyr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-noisyr:<tag>

(see `r-noisyr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-noisyr| image:: https://img.shields.io/conda/dn/bioconda/r-noisyr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-noisyr
   :alt:   (downloads)
.. |docker_r-noisyr| image:: https://quay.io/repository/biocontainers/r-noisyr/status
   :target: https://quay.io/repository/biocontainers/r-noisyr
.. _`r-noisyr/tags`: https://quay.io/repository/biocontainers/r-noisyr?tab=tags


.. raw:: html

    <script>
        var package = "r-noisyr";
        var versions = ["1.0.0","1.0.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-noisyr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-noisyr/README.html