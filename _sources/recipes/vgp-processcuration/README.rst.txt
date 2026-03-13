:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vgp-processcuration'
.. highlight: bash

vgp-processcuration
===================

.. conda:recipe:: vgp-processcuration
   :replaces_section_title:
   :noindex:

   ProcessCurated \- Toolkit for processing manually curated genome assemblies

   :homepage: https://github.com/vgl-hub/vgl-curation
   :documentation: https://github.com/vgl-hub/vgl-curation/blob/postcuration_1.0/README.md
   
   :license: MIT / MIT
   :recipe: /`vgp-processcuration <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vgp-processcuration>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vgp-processcuration/meta.yaml>`_

   ProcessCurated is a toolkit for processing manually curated genome assemblies.
   It reconciles AGP files manually curated in PretextView to rename\, reorient\,
   and sort assemblies in preparation for submission. The tool performs three main
   operations\: correcting and splitting AGP files while assigning unlocalized sequences\,
   assigning chromosome names to scaffolds\, and reorienting and renaming sequences
   based on MashMap alignment data.



.. conda:package:: vgp-processcuration

   |downloads_vgp-processcuration| |docker_vgp-processcuration|

   :versions:
      
      

      ``1.1-0``,  ``1.0-0``

      

   
   :depends on biopython: ``>=1.85``
   :depends on natsort: ``>=8.4.0``
   :depends on pandas: ``>=2.3``
   :depends on python: ``>=3.9``

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

    pixi global install vgp-processcuration

to add into an existing workspace instead, run::

    pixi add vgp-processcuration

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vgp-processcuration

Alternatively, to install into a new environment, run::

    conda create -n envname vgp-processcuration

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vgp-processcuration:<tag>

(see `vgp-processcuration/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vgp-processcuration| image:: https://img.shields.io/conda/dn/bioconda/vgp-processcuration.svg?style=flat
   :target: https://anaconda.org/bioconda/vgp-processcuration
   :alt:   (downloads)
.. |docker_vgp-processcuration| image:: https://quay.io/repository/biocontainers/vgp-processcuration/status
   :target: https://quay.io/repository/biocontainers/vgp-processcuration
.. _`vgp-processcuration/tags`: https://quay.io/repository/biocontainers/vgp-processcuration?tab=tags


.. raw:: html

    <script>
        var package = "vgp-processcuration";
        var versions = ["1.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vgp-processcuration/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vgp-processcuration/README.html