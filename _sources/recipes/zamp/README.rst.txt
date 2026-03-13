:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zamp'
.. highlight: bash

zamp
====

.. conda:recipe:: zamp
   :replaces_section_title:
   :noindex:

   zAMP\: bioinformatic pipeline designed for convenient\, reproducible and scalable amplicon\-based metagenomics

   :homepage: https://github.com/metagenlab/zAMP/
   :license: MIT / MIT
   :recipe: /`zamp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zamp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zamp/meta.yaml>`_

   


.. conda:package:: zamp

   |downloads_zamp| |docker_zamp|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on apptainer: ``>=1.3.2``
   :depends on attrmap: ``>=0.0.7``
   :depends on biopython: ``>=1.83``
   :depends on click: ``>=8.1.3``
   :depends on metasnek: ``>=0.0.8``
   :depends on pandas: ``>=2.2.1``
   :depends on python: ``>=3.11``
   :depends on snakemake-minimal: ``>=8.0.0,<=8.24.1``
   :depends on snaketool-utils: ``>=0.0.5``

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

    pixi global install zamp

to add into an existing workspace instead, run::

    pixi add zamp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install zamp

Alternatively, to install into a new environment, run::

    conda create -n envname zamp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/zamp:<tag>

(see `zamp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_zamp| image:: https://img.shields.io/conda/dn/bioconda/zamp.svg?style=flat
   :target: https://anaconda.org/bioconda/zamp
   :alt:   (downloads)
.. |docker_zamp| image:: https://quay.io/repository/biocontainers/zamp/status
   :target: https://quay.io/repository/biocontainers/zamp
.. _`zamp/tags`: https://quay.io/repository/biocontainers/zamp?tab=tags


.. raw:: html

    <script>
        var package = "zamp";
        var versions = ["1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zamp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zamp/README.html