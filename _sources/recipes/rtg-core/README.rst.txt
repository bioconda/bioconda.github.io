:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rtg-core'
.. highlight: bash

rtg-core
========

.. conda:recipe:: rtg-core
   :replaces_section_title:
   :noindex:

   RealTimeGenomics Core \-\- Software for alignment and analysis of next\-gen sequencing data.

   :homepage: https://github.com/RealTimeGenomics/rtg-core
   :documentation: https://realtimegenomics.github.io/rtg-core/index.html
   
   :license: BSD / BSD-2-Clause
   :recipe: /`rtg-core <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rtg-core>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rtg-core/meta.yaml>`_
   :links: biotools: :biotools:`rtg_core`

   


.. conda:package:: rtg-core

   |downloads_rtg-core| |docker_rtg-core|

   :versions:
      
      

      ``3.13-0``

      

   
   :depends on font-ttf-dejavu-sans-mono: 
   :depends on fontconfig: 
   :depends on openjdk: 
   :depends on zlib: 

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

    pixi global install rtg-core

to add into an existing workspace instead, run::

    pixi add rtg-core

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rtg-core

Alternatively, to install into a new environment, run::

    conda create -n envname rtg-core

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rtg-core:<tag>

(see `rtg-core/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rtg-core| image:: https://img.shields.io/conda/dn/bioconda/rtg-core.svg?style=flat
   :target: https://anaconda.org/bioconda/rtg-core
   :alt:   (downloads)
.. |docker_rtg-core| image:: https://quay.io/repository/biocontainers/rtg-core/status
   :target: https://quay.io/repository/biocontainers/rtg-core
.. _`rtg-core/tags`: https://quay.io/repository/biocontainers/rtg-core?tab=tags


.. raw:: html

    <script>
        var package = "rtg-core";
        var versions = ["3.13"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rtg-core/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rtg-core/README.html