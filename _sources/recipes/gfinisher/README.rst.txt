:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gfinisher'
.. highlight: bash

gfinisher
=========

.. conda:recipe:: gfinisher
   :replaces_section_title:
   :noindex:

   GFinisher is an application tools for refinement and finalization of prokaryotic genomes assemblies using the bias of GC Skew to identify assembly errors and organizes the contigs\/scaffolds with genomes references.

   :homepage: https://sourceforge.net/projects/gfinisher/
   :license: Unknown
   :recipe: /`gfinisher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfinisher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfinisher/meta.yaml>`_

   


.. conda:package:: gfinisher

   |downloads_gfinisher| |docker_gfinisher|

   :versions:
      
      

      ``1.4-0``

      

   
   :depends on java-jdk: ``>=6``
   :depends on python: ``2.7*``

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

    pixi global install gfinisher

to add into an existing workspace instead, run::

    pixi add gfinisher

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gfinisher

Alternatively, to install into a new environment, run::

    conda create -n envname gfinisher

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gfinisher:<tag>

(see `gfinisher/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gfinisher| image:: https://img.shields.io/conda/dn/bioconda/gfinisher.svg?style=flat
   :target: https://anaconda.org/bioconda/gfinisher
   :alt:   (downloads)
.. |docker_gfinisher| image:: https://quay.io/repository/biocontainers/gfinisher/status
   :target: https://quay.io/repository/biocontainers/gfinisher
.. _`gfinisher/tags`: https://quay.io/repository/biocontainers/gfinisher?tab=tags


.. raw:: html

    <script>
        var package = "gfinisher";
        var versions = ["1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gfinisher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gfinisher/README.html