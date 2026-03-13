:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-riborex'
.. highlight: bash

r-riborex
=========

.. conda:recipe:: r-riborex
   :replaces_section_title:
   :noindex:

   Riborex is a R package for identification of differential translation from Ribo\-seq data.

   :homepage: https://github.com/smithlabcode/riborex
   :license: GPL-3.0
   :recipe: /`r-riborex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-riborex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-riborex/meta.yaml>`_

   


.. conda:package:: r-riborex

   |downloads_r-riborex| |docker_r-riborex|

   :versions:
      
      

      ``2.4.0-7``,  ``2.4.0-6``,  ``2.4.0-5``,  ``2.4.0-4``,  ``2.4.0-3``,  ``2.4.0-2``,  ``2.4.0-1``,  ``2.4.0-0``

      

   
   :depends on bioconductor-deseq2: 
   :depends on bioconductor-edger: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-fdrtool: 

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

    pixi global install r-riborex

to add into an existing workspace instead, run::

    pixi add r-riborex

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-riborex

Alternatively, to install into a new environment, run::

    conda create -n envname r-riborex

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-riborex:<tag>

(see `r-riborex/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-riborex| image:: https://img.shields.io/conda/dn/bioconda/r-riborex.svg?style=flat
   :target: https://anaconda.org/bioconda/r-riborex
   :alt:   (downloads)
.. |docker_r-riborex| image:: https://quay.io/repository/biocontainers/r-riborex/status
   :target: https://quay.io/repository/biocontainers/r-riborex
.. _`r-riborex/tags`: https://quay.io/repository/biocontainers/r-riborex?tab=tags


.. raw:: html

    <script>
        var package = "r-riborex";
        var versions = ["2.4.0","2.4.0","2.4.0","2.4.0","2.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-riborex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-riborex/README.html