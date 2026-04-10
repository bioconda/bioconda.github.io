:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mitofinder'
.. highlight: bash

mitofinder
==========

.. conda:recipe:: mitofinder
   :replaces_section_title:
   :noindex:

   Mitofinder is a pipeline to assemble mitochondrial genomes and annotate mitochondrial genes from trimmed read sequencing data.

   :homepage: https://github.com/RemiAllio/MitoFinder
   :license: MIT / MIT
   :recipe: /`mitofinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitofinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mitofinder/meta.yaml>`_

   


.. conda:package:: mitofinder

   |downloads_mitofinder| |docker_mitofinder|

   :versions:
      
      

      ``1.4.1-1``,  ``1.4.1-0``,  ``1.4-0``

      

   
   :depends on biopython: 
   :depends on blast: 
   :depends on idba: 
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on megahit: 
   :depends on openjdk: 
   :depends on pandas: 
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27mu``
   :depends on spades: 
   :depends on trnascan-se: 

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

    pixi global install mitofinder

to add into an existing workspace instead, run::

    pixi add mitofinder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mitofinder

Alternatively, to install into a new environment, run::

    conda create -n envname mitofinder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mitofinder:<tag>

(see `mitofinder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mitofinder| image:: https://img.shields.io/conda/dn/bioconda/mitofinder.svg?style=flat
   :target: https://anaconda.org/bioconda/mitofinder
   :alt:   (downloads)
.. |docker_mitofinder| image:: https://quay.io/repository/biocontainers/mitofinder/status
   :target: https://quay.io/repository/biocontainers/mitofinder
.. _`mitofinder/tags`: https://quay.io/repository/biocontainers/mitofinder?tab=tags


.. raw:: html

    <script>
        var package = "mitofinder";
        var versions = ["1.4.1","1.4.1","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mitofinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mitofinder/README.html