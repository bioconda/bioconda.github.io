:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-wormbase'
.. highlight: bash

r-wormbase
==========

.. conda:recipe:: r-wormbase
   :replaces_section_title:
   :noindex:

   Fetch Caenorhabditis elegans genome annotations from WormBase.

   :homepage: https://r.acidgenomics.com/packages/wormbase/
   :developer docs: https://github.com/acidgenomics/r-wormbase
   :license: GPL / AGPL-3.0
   :recipe: /`r-wormbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-wormbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-wormbase/meta.yaml>`_

   


.. conda:package:: r-wormbase

   |downloads_r-wormbase| |docker_r-wormbase|

   :versions:
      
      

      ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.2-0``,  ``0.4.1-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.46.0``
   :depends on bioconductor-iranges: ``>=2.34.0``
   :depends on bioconductor-s4vectors: ``>=0.38.0``
   :depends on r-acidbase: ``>=0.7.0``
   :depends on r-acidcli: ``>=0.2.8``
   :depends on r-acidgenerics: ``>=0.6.13``
   :depends on r-acidplyr: ``>=0.4.3``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-goalie: ``>=0.7.0``
   :depends on r-httr2: ``>=0.2.3``
   :depends on r-pipette: ``>=0.14.0``
   :depends on r-syntactic: ``>=0.6.7``

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

    pixi global install r-wormbase

to add into an existing workspace instead, run::

    pixi add r-wormbase

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-wormbase

Alternatively, to install into a new environment, run::

    conda create -n envname r-wormbase

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-wormbase:<tag>

(see `r-wormbase/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-wormbase| image:: https://img.shields.io/conda/dn/bioconda/r-wormbase.svg?style=flat
   :target: https://anaconda.org/bioconda/r-wormbase
   :alt:   (downloads)
.. |docker_r-wormbase| image:: https://quay.io/repository/biocontainers/r-wormbase/status
   :target: https://quay.io/repository/biocontainers/r-wormbase
.. _`r-wormbase/tags`: https://quay.io/repository/biocontainers/r-wormbase?tab=tags


.. raw:: html

    <script>
        var package = "r-wormbase";
        var versions = ["0.5.0","0.5.0","0.4.2","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-wormbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-wormbase/README.html