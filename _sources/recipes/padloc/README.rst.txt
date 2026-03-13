:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'padloc'
.. highlight: bash

padloc
======

.. conda:recipe:: padloc
   :replaces_section_title:
   :noindex:

   Locate antiviral defence systems in prokaryotic genomes

   :homepage: https://github.com/padlocbio/padloc
   :license: MIT
   :recipe: /`padloc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/padloc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/padloc/meta.yaml>`_
   :links: biotools: :biotools:`padloc`

   


.. conda:package:: padloc

   |downloads_padloc| |docker_padloc|

   :versions:
      
      

      ``2.0.0-1``,  ``2.0.0-0``

      

   
   :depends on curl: 
   :depends on grep: 
   :depends on hmmer: ``>=3.3.2``
   :depends on prodigal: ``>=2.6.3``
   :depends on r-base: ``4.3.1``
   :depends on r-getopt: ``1.20.3``
   :depends on r-tidyverse: ``2.0.0``
   :depends on r-yaml: ``2.3.7``

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

    pixi global install padloc

to add into an existing workspace instead, run::

    pixi add padloc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install padloc

Alternatively, to install into a new environment, run::

    conda create -n envname padloc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/padloc:<tag>

(see `padloc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_padloc| image:: https://img.shields.io/conda/dn/bioconda/padloc.svg?style=flat
   :target: https://anaconda.org/bioconda/padloc
   :alt:   (downloads)
.. |docker_padloc| image:: https://quay.io/repository/biocontainers/padloc/status
   :target: https://quay.io/repository/biocontainers/padloc
.. _`padloc/tags`: https://quay.io/repository/biocontainers/padloc?tab=tags


.. raw:: html

    <script>
        var package = "padloc";
        var versions = ["2.0.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/padloc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/padloc/README.html