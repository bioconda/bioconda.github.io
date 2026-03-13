:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-seamless'
.. highlight: bash

r-seamless
==========

.. conda:recipe:: r-seamless
   :replaces_section_title:
   :noindex:

   Given a bulk transcriptomic \(RNA\-seq\) sample of an Myeloid Leukemia patient calculates immune composition and drug resistance for different small\-molecule inhibitors.

   :homepage: https://github.com/eonurk/seAMLess
   :license: GPL3 / GPL-3
   :recipe: /`r-seamless <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-seamless>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-seamless/meta.yaml>`_

   


.. conda:package:: r-seamless

   |downloads_r-seamless| |docker_r-seamless|

   :versions:
      
      

      ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-3``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends on bioconductor-biobase: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-ggplot2: 
   :depends on r-ggtern: 
   :depends on r-music: 
   :depends on r-optparse: 
   :depends on r-randomforest: 
   :depends on xbioc: 

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

    pixi global install r-seamless

to add into an existing workspace instead, run::

    pixi add r-seamless

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-seamless

Alternatively, to install into a new environment, run::

    conda create -n envname r-seamless

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-seamless:<tag>

(see `r-seamless/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-seamless| image:: https://img.shields.io/conda/dn/bioconda/r-seamless.svg?style=flat
   :target: https://anaconda.org/bioconda/r-seamless
   :alt:   (downloads)
.. |docker_r-seamless| image:: https://quay.io/repository/biocontainers/r-seamless/status
   :target: https://quay.io/repository/biocontainers/r-seamless
.. _`r-seamless/tags`: https://quay.io/repository/biocontainers/r-seamless?tab=tags


.. raw:: html

    <script>
        var package = "r-seamless";
        var versions = ["0.1.1","0.1.1","0.1.0","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-seamless/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-seamless/README.html