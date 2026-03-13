:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'iqkm'
.. highlight: bash

iqkm
====

.. conda:recipe:: iqkm
   :replaces_section_title:
   :noindex:

   Identification and quantification of KEGG Modules in metagenomes\/genomes

   :homepage: https://github.com/lijingdi/iqKM
   :license: GPL3 / GPL-3.0-only
   :recipe: /`iqkm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iqkm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iqkm/meta.yaml>`_

   


.. conda:package:: iqkm

   |downloads_iqkm| |docker_iqkm|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends on bwa: ``>=0.7.17``
   :depends on hmmer: ``>=3.1``
   :depends on markdown: 
   :depends on networkx: 
   :depends on prodigal: ``>=2.6.3``
   :depends on pylint: 
   :depends on pysam: 
   :depends on pytest: 
   :depends on python: ``>=3.8``
   :depends on samtools: ``>=1.3.1``

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

    pixi global install iqkm

to add into an existing workspace instead, run::

    pixi add iqkm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install iqkm

Alternatively, to install into a new environment, run::

    conda create -n envname iqkm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/iqkm:<tag>

(see `iqkm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_iqkm| image:: https://img.shields.io/conda/dn/bioconda/iqkm.svg?style=flat
   :target: https://anaconda.org/bioconda/iqkm
   :alt:   (downloads)
.. |docker_iqkm| image:: https://quay.io/repository/biocontainers/iqkm/status
   :target: https://quay.io/repository/biocontainers/iqkm
.. _`iqkm/tags`: https://quay.io/repository/biocontainers/iqkm?tab=tags


.. raw:: html

    <script>
        var package = "iqkm";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iqkm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iqkm/README.html