:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-r4cker'
.. highlight: bash

r-r4cker
========

.. conda:recipe:: r-r4cker
   :replaces_section_title:
   :noindex:

   Analysis of 4C\-seq \(circularized chromosome conformation capture\) data

   :homepage: https://github.com/rr1859/R.4Cker
   :license: Unknown
   :recipe: /`r-r4cker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-r4cker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-r4cker/meta.yaml>`_

   


.. conda:package:: r-r4cker

   |downloads_r-r4cker| |docker_r-r4cker|

   :versions:
      
      

      ``1.0-6``,  ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``,  ``0.0.0.9000-0``

      

   
   :depends on bioconductor-deseq2: 
   :depends on bioconductor-genomeinfodbdata: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-depmixs4: 
   :depends on r-ggplot2: 
   :depends on r-mass: 
   :depends on r-misctools: 
   :depends on r-psych: 
   :depends on r-rcolorbrewer: 

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

    pixi global install r-r4cker

to add into an existing workspace instead, run::

    pixi add r-r4cker

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-r4cker

Alternatively, to install into a new environment, run::

    conda create -n envname r-r4cker

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-r4cker:<tag>

(see `r-r4cker/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-r4cker| image:: https://img.shields.io/conda/dn/bioconda/r-r4cker.svg?style=flat
   :target: https://anaconda.org/bioconda/r-r4cker
   :alt:   (downloads)
.. |docker_r-r4cker| image:: https://quay.io/repository/biocontainers/r-r4cker/status
   :target: https://quay.io/repository/biocontainers/r-r4cker
.. _`r-r4cker/tags`: https://quay.io/repository/biocontainers/r-r4cker?tab=tags


.. raw:: html

    <script>
        var package = "r-r4cker";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-r4cker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-r4cker/README.html