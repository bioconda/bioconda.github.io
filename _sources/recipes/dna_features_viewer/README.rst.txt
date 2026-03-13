:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dna_features_viewer'
.. highlight: bash

dna_features_viewer
===================

.. conda:recipe:: dna_features_viewer
   :replaces_section_title:
   :noindex:

   Plot features from DNA sequences \(e.g. Genbank\) with Python.

   :homepage: https://github.com/Edinburgh-Genome-Foundry/DnaFeaturesViewer
   :documentation: https://edinburgh-genome-foundry.github.io/DnaFeaturesViewer
   
   :license: MIT / MIT
   :recipe: /`dna_features_viewer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dna_features_viewer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dna_features_viewer/meta.yaml>`_

   


.. conda:package:: dna_features_viewer

   |downloads_dna_features_viewer| |docker_dna_features_viewer|

   :versions:
      
      

      ``3.1.5-0``,  ``3.1.4-0``,  ``3.1.3-0``,  ``3.1.2-0``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.3-0``,  ``3.0.2-0``,  ``3.0.1-0``

      

   
   :depends on biopython: 
   :depends on matplotlib-base: ``>=3``
   :depends on packaging: 
   :depends on python: 

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

    pixi global install dna_features_viewer

to add into an existing workspace instead, run::

    pixi add dna_features_viewer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dna_features_viewer

Alternatively, to install into a new environment, run::

    conda create -n envname dna_features_viewer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dna_features_viewer:<tag>

(see `dna_features_viewer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dna_features_viewer| image:: https://img.shields.io/conda/dn/bioconda/dna_features_viewer.svg?style=flat
   :target: https://anaconda.org/bioconda/dna_features_viewer
   :alt:   (downloads)
.. |docker_dna_features_viewer| image:: https://quay.io/repository/biocontainers/dna_features_viewer/status
   :target: https://quay.io/repository/biocontainers/dna_features_viewer
.. _`dna_features_viewer/tags`: https://quay.io/repository/biocontainers/dna_features_viewer?tab=tags


.. raw:: html

    <script>
        var package = "dna_features_viewer";
        var versions = ["3.1.5","3.1.4","3.1.3","3.1.2","3.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dna_features_viewer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dna_features_viewer/README.html