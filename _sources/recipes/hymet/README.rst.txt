:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hymet'
.. highlight: bash

hymet
=====

.. conda:recipe:: hymet
   :replaces_section_title:
   :noindex:

   HYMET provides hybrid Mash\+minimap2 metagenomic classification with benchmark and case\-study tooling.

   :homepage: https://github.com/ieeta-pt/HYMET
   :license: MIT / MIT
   :recipe: /`hymet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hymet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hymet/meta.yaml>`_
   :links: biotools: :biotools:`hymet`

   HYMET couples Mash candidate filtering\, minimap2 alignment\, and a weighted LCA resolver to classify contigs
   and reads. The project bundles the new Python CLI \(\`bin\/hymet\`\)\, the legacy Perl pipeline\, CAMI benchmark
   harnesses\, and case\-study analysis scripts so users can reproduce the published experiments directly.



.. conda:package:: hymet

   |downloads_hymet| |docker_hymet|

   :versions:
      
      

      ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on biopython: 
   :depends on csvkit: 
   :depends on mash: 
   :depends on matplotlib-base: 
   :depends on minimap2: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on perl: 
   :depends on python: ``>=3.9``
   :depends on seaborn: 
   :depends on taxonkit: 
   :depends on wget: 

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

    pixi global install hymet

to add into an existing workspace instead, run::

    pixi add hymet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hymet

Alternatively, to install into a new environment, run::

    conda create -n envname hymet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hymet:<tag>

(see `hymet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hymet| image:: https://img.shields.io/conda/dn/bioconda/hymet.svg?style=flat
   :target: https://anaconda.org/bioconda/hymet
   :alt:   (downloads)
.. |docker_hymet| image:: https://quay.io/repository/biocontainers/hymet/status
   :target: https://quay.io/repository/biocontainers/hymet
.. _`hymet/tags`: https://quay.io/repository/biocontainers/hymet?tab=tags


.. raw:: html

    <script>
        var package = "hymet";
        var versions = ["1.3.0","1.2.1","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hymet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hymet/README.html