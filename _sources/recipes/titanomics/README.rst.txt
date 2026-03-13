:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'titanomics'
.. highlight: bash

titanomics
==========

.. conda:recipe:: titanomics
   :replaces_section_title:
   :noindex:

   A comprehensive multi\-omics data analysis pipeline.

   :homepage: https://github.com/raw-lab/titan
   :license: BSD / BSD
   :recipe: /`titanomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/titanomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/titanomics/meta.yaml>`_

   


.. conda:package:: titanomics

   |downloads_titanomics| |docker_titanomics|

   :versions:
      
      

      ``0.1-0``

      

   
   :depends on bowtie2: 
   :depends on configargparse: 
   :depends on fastp: 
   :depends on fastqc: 
   :depends on flash2: 
   :depends on flye: 
   :depends on grpcio: ``<=1.43``
   :depends on megahit: 
   :depends on metaomestats: 
   :depends on psutil: 
   :depends on python: 
   :depends on ray-core: 
   :depends on ray-dashboard: 
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

    pixi global install titanomics

to add into an existing workspace instead, run::

    pixi add titanomics

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install titanomics

Alternatively, to install into a new environment, run::

    conda create -n envname titanomics

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/titanomics:<tag>

(see `titanomics/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_titanomics| image:: https://img.shields.io/conda/dn/bioconda/titanomics.svg?style=flat
   :target: https://anaconda.org/bioconda/titanomics
   :alt:   (downloads)
.. |docker_titanomics| image:: https://quay.io/repository/biocontainers/titanomics/status
   :target: https://quay.io/repository/biocontainers/titanomics
.. _`titanomics/tags`: https://quay.io/repository/biocontainers/titanomics?tab=tags


.. raw:: html

    <script>
        var package = "titanomics";
        var versions = ["0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/titanomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/titanomics/README.html