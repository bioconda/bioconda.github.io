:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bandwagon'
.. highlight: bash

bandwagon
=========

.. conda:recipe:: bandwagon
   :replaces_section_title:
   :noindex:

   Simulate DNA band patterns for gel migration experiments

   :homepage: https://github.com/Edinburgh-Genome-Foundry/bandwagon
   :documentation: https://github.com/Edinburgh-Genome-Foundry/bandwagon/blob/v0.3.4/README.rst
   
   :license: MIT / MIT
   :recipe: /`bandwagon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bandwagon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bandwagon/meta.yaml>`_

   


.. conda:package:: bandwagon

   |downloads_bandwagon| |docker_bandwagon|

   :versions:
      
      

      ``0.3.4-0``

      

   
   :depends on biopython: 
   :depends on dna_features_viewer: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on python: ``>=3.9``
   :depends on scipy: 
   :depends on snapgene-reader: 

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

    pixi global install bandwagon

to add into an existing workspace instead, run::

    pixi add bandwagon

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bandwagon

Alternatively, to install into a new environment, run::

    conda create -n envname bandwagon

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bandwagon:<tag>

(see `bandwagon/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bandwagon| image:: https://img.shields.io/conda/dn/bioconda/bandwagon.svg?style=flat
   :target: https://anaconda.org/bioconda/bandwagon
   :alt:   (downloads)
.. |docker_bandwagon| image:: https://quay.io/repository/biocontainers/bandwagon/status
   :target: https://quay.io/repository/biocontainers/bandwagon
.. _`bandwagon/tags`: https://quay.io/repository/biocontainers/bandwagon?tab=tags


.. raw:: html

    <script>
        var package = "bandwagon";
        var versions = ["0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bandwagon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bandwagon/README.html