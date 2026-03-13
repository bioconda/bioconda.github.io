:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-minionqc'
.. highlight: bash

r-minionqc
==========

.. conda:recipe:: r-minionqc
   :replaces_section_title:
   :noindex:

   Quality control for MinION sequencing data

   :homepage: https://github.com/roblanf/minion_qc/blob/master/MinIONQC.R
   :license: MIT
   :recipe: /`r-minionqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-minionqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-minionqc/meta.yaml>`_

   


.. conda:package:: r-minionqc

   |downloads_r-minionqc| |docker_r-minionqc|

   :versions:
      
      

      ``1.4.2-5``,  ``1.4.2-4``,  ``1.4.2-3``,  ``1.4.2-2``,  ``1.4.2-1``,  ``1.4.2-0``,  ``1.4.1-3``,  ``1.4.1-2``,  ``1.4.1-1``

      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-data.table: 
   :depends on r-futile.logger: 
   :depends on r-ggplot2: 
   :depends on r-optparse: 
   :depends on r-plyr: 
   :depends on r-readr: 
   :depends on r-reshape2: 
   :depends on r-scales: 
   :depends on r-viridis: 
   :depends on r-yaml: 

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

    pixi global install r-minionqc

to add into an existing workspace instead, run::

    pixi add r-minionqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-minionqc

Alternatively, to install into a new environment, run::

    conda create -n envname r-minionqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-minionqc:<tag>

(see `r-minionqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-minionqc| image:: https://img.shields.io/conda/dn/bioconda/r-minionqc.svg?style=flat
   :target: https://anaconda.org/bioconda/r-minionqc
   :alt:   (downloads)
.. |docker_r-minionqc| image:: https://quay.io/repository/biocontainers/r-minionqc/status
   :target: https://quay.io/repository/biocontainers/r-minionqc
.. _`r-minionqc/tags`: https://quay.io/repository/biocontainers/r-minionqc?tab=tags


.. raw:: html

    <script>
        var package = "r-minionqc";
        var versions = ["1.4.2","1.4.2","1.4.2","1.4.2","1.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-minionqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-minionqc/README.html