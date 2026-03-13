:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metavelvet-sl-pipeline'
.. highlight: bash

metavelvet-sl-pipeline
======================

.. conda:recipe:: metavelvet-sl-pipeline
   :replaces_section_title:
   :noindex:

   Perl libraries that run the full pipeline for metavelvet\-sl

   :homepage: http://metavelvet.dna.bio.keio.ac.jp/MSL.html
   :license: 
   :recipe: /`metavelvet-sl-pipeline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metavelvet-sl-pipeline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metavelvet-sl-pipeline/meta.yaml>`_

   


.. conda:package:: metavelvet-sl-pipeline

   |downloads_metavelvet-sl-pipeline| |docker_metavelvet-sl-pipeline|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends on dwgsim: 
   :depends on libgcc: 
   :depends on libsvm: 
   :depends on metaphlan2: 
   :depends on metavelvet-sl: 
   :depends on metavelvet-sl-feature-extraction: 
   :depends on perl: ``5.22.0*``
   :depends on perl-app-cpanminus: 
   :depends on perl-module-build: 
   :depends on velvet: 
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

    pixi global install metavelvet-sl-pipeline

to add into an existing workspace instead, run::

    pixi add metavelvet-sl-pipeline

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metavelvet-sl-pipeline

Alternatively, to install into a new environment, run::

    conda create -n envname metavelvet-sl-pipeline

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metavelvet-sl-pipeline:<tag>

(see `metavelvet-sl-pipeline/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metavelvet-sl-pipeline| image:: https://img.shields.io/conda/dn/bioconda/metavelvet-sl-pipeline.svg?style=flat
   :target: https://anaconda.org/bioconda/metavelvet-sl-pipeline
   :alt:   (downloads)
.. |docker_metavelvet-sl-pipeline| image:: https://quay.io/repository/biocontainers/metavelvet-sl-pipeline/status
   :target: https://quay.io/repository/biocontainers/metavelvet-sl-pipeline
.. _`metavelvet-sl-pipeline/tags`: https://quay.io/repository/biocontainers/metavelvet-sl-pipeline?tab=tags


.. raw:: html

    <script>
        var package = "metavelvet-sl-pipeline";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metavelvet-sl-pipeline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metavelvet-sl-pipeline/README.html