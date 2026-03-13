:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pathoscope'
.. highlight: bash

pathoscope
==========

.. conda:recipe:: pathoscope
   :replaces_section_title:
   :noindex:

   Species identification and strain attribution with unassembled sequencing data.

   :homepage: https://github.com/PathoScope/PathoScope
   :documentation: https://github.com/PathoScope/PathoScope/wiki
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pathoscope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathoscope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathoscope/meta.yaml>`_

   


.. conda:package:: pathoscope

   |downloads_pathoscope| |docker_pathoscope|

   :versions:
      
      

      ``2.0.7-2``,  ``2.0.7-1``,  ``2.0.7-0``,  ``2.0.6-1``,  ``2.0.6-0``

      

   
   :depends on bowtie2: 
   :depends on python: ``>=3``
   :depends on samtools: 

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

    pixi global install pathoscope

to add into an existing workspace instead, run::

    pixi add pathoscope

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pathoscope

Alternatively, to install into a new environment, run::

    conda create -n envname pathoscope

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pathoscope:<tag>

(see `pathoscope/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pathoscope| image:: https://img.shields.io/conda/dn/bioconda/pathoscope.svg?style=flat
   :target: https://anaconda.org/bioconda/pathoscope
   :alt:   (downloads)
.. |docker_pathoscope| image:: https://quay.io/repository/biocontainers/pathoscope/status
   :target: https://quay.io/repository/biocontainers/pathoscope
.. _`pathoscope/tags`: https://quay.io/repository/biocontainers/pathoscope?tab=tags


.. raw:: html

    <script>
        var package = "pathoscope";
        var versions = ["2.0.7","2.0.7","2.0.7","2.0.6","2.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pathoscope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pathoscope/README.html