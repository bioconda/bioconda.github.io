:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnachipintegrator'
.. highlight: bash

rnachipintegrator
=================

.. conda:recipe:: rnachipintegrator
   :replaces_section_title:
   :noindex:

   Analyse genes against peak data\, and vice versa

   :homepage: https://github.com/fls-bioinformatics-core/RnaChipIntegrator
   :documentation: https://rnachipintegrator.readthedocs.io
   
   :license: OTHER / Artistic License
   :recipe: /`rnachipintegrator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnachipintegrator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnachipintegrator/meta.yaml>`_

   RnaChipIntegrator is a utility that performs integrated analyses of \'gene\' data \(a set of genes or other genomic features\) with \'peak\' data \(a set of regions\, for example ChIP peaks\) to identify the genes nearest to each peak\, and vice versa


.. conda:package:: rnachipintegrator

   |downloads_rnachipintegrator| |docker_rnachipintegrator|

   :versions:
      
      

      ``3.0.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.3-1``,  ``1.0.3-0``

      

   
   :depends on python: 
   :depends on xlsxwriter: ``>=0.8.4``

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

    pixi global install rnachipintegrator

to add into an existing workspace instead, run::

    pixi add rnachipintegrator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rnachipintegrator

Alternatively, to install into a new environment, run::

    conda create -n envname rnachipintegrator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rnachipintegrator:<tag>

(see `rnachipintegrator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rnachipintegrator| image:: https://img.shields.io/conda/dn/bioconda/rnachipintegrator.svg?style=flat
   :target: https://anaconda.org/bioconda/rnachipintegrator
   :alt:   (downloads)
.. |docker_rnachipintegrator| image:: https://quay.io/repository/biocontainers/rnachipintegrator/status
   :target: https://quay.io/repository/biocontainers/rnachipintegrator
.. _`rnachipintegrator/tags`: https://quay.io/repository/biocontainers/rnachipintegrator?tab=tags


.. raw:: html

    <script>
        var package = "rnachipintegrator";
        var versions = ["3.0.0","2.0.0","2.0.0","1.2.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnachipintegrator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnachipintegrator/README.html