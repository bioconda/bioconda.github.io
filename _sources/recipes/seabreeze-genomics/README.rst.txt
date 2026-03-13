:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seabreeze-genomics'
.. highlight: bash

seabreeze-genomics
==================

.. conda:recipe:: seabreeze-genomics
   :replaces_section_title:
   :noindex:

   Analyzing Structural Variation Between Bacterial Genome Assemblies.

   :homepage: https://github.com/barricklab/seabreeze
   :documentation: https://barricklab.github.io/seabreeze
   
   :license: MIT / MIT
   :recipe: /`seabreeze-genomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seabreeze-genomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seabreeze-genomics/meta.yaml>`_

   


.. conda:package:: seabreeze-genomics

   |downloads_seabreeze-genomics| |docker_seabreeze-genomics|

   :versions:
      
      

      ``1.5.0-0``,  ``1.4.0-0``

      

   
   :depends on click: 
   :depends on coloredlogs: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pytest: 
   :depends on python: ``>=3.11``
   :depends on snakemake-minimal: ``<8``

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

    pixi global install seabreeze-genomics

to add into an existing workspace instead, run::

    pixi add seabreeze-genomics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seabreeze-genomics

Alternatively, to install into a new environment, run::

    conda create -n envname seabreeze-genomics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seabreeze-genomics:<tag>

(see `seabreeze-genomics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seabreeze-genomics| image:: https://img.shields.io/conda/dn/bioconda/seabreeze-genomics.svg?style=flat
   :target: https://anaconda.org/bioconda/seabreeze-genomics
   :alt:   (downloads)
.. |docker_seabreeze-genomics| image:: https://quay.io/repository/biocontainers/seabreeze-genomics/status
   :target: https://quay.io/repository/biocontainers/seabreeze-genomics
.. _`seabreeze-genomics/tags`: https://quay.io/repository/biocontainers/seabreeze-genomics?tab=tags


.. raw:: html

    <script>
        var package = "seabreeze-genomics";
        var versions = ["1.5.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seabreeze-genomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seabreeze-genomics/README.html