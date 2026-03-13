:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lepwrap'
.. highlight: bash

lepwrap
=======

.. conda:recipe:: lepwrap
   :replaces_section_title:
   :noindex:

   The Snakemake pipeline to use Lep\-Map3 to create linkage maps and LepAnchor for anchoring\+orienting genome assemblies.

   :homepage: https://github.com/pdimens/LepWrap
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`lepwrap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lepwrap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lepwrap/meta.yaml>`_

   


.. conda:package:: lepwrap

   |downloads_lepwrap| |docker_lepwrap|

   :versions:
      
      

      ``5.0-0``,  ``4.0.1-0``,  ``4.0-0``

      

   
   :depends on bzip2: 
   :depends on font-ttf-dejavu-sans-mono: 
   :depends on font-ttf-ubuntu: 
   :depends on graphviz: 
   :depends on imagemagick: 
   :depends on openjdk: 
   :depends on pandoc: 
   :depends on pygraphviz: 
   :depends on python: ``>=3.9``
   :depends on r-base: ``>=4``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-readr: 
   :depends on r-stringr: 
   :depends on r-tidyr: 
   :depends on sed: 
   :depends on snakemake-minimal: ``>=6.4``

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

    pixi global install lepwrap

to add into an existing workspace instead, run::

    pixi add lepwrap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lepwrap

Alternatively, to install into a new environment, run::

    conda create -n envname lepwrap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lepwrap:<tag>

(see `lepwrap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lepwrap| image:: https://img.shields.io/conda/dn/bioconda/lepwrap.svg?style=flat
   :target: https://anaconda.org/bioconda/lepwrap
   :alt:   (downloads)
.. |docker_lepwrap| image:: https://quay.io/repository/biocontainers/lepwrap/status
   :target: https://quay.io/repository/biocontainers/lepwrap
.. _`lepwrap/tags`: https://quay.io/repository/biocontainers/lepwrap?tab=tags


.. raw:: html

    <script>
        var package = "lepwrap";
        var versions = ["5.0","4.0.1","4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lepwrap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lepwrap/README.html