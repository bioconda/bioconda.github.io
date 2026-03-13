:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pb-assembly'
.. highlight: bash

pb-assembly
===========

.. conda:recipe:: pb-assembly
   :replaces_section_title:
   :noindex:

   Meta\-package for Falcon\/Unzip tool\-suite \(originally by Jason Chin\)

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD 3-Clause Clear License
   :recipe: /`pb-assembly <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-assembly>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pb-assembly/meta.yaml>`_

   


.. conda:package:: pb-assembly

   |downloads_pb-assembly| |docker_pb-assembly|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.8-1</code>,  <code>0.0.8-0</code>,  <code>0.0.7-0</code>,  <code>0.0.6-7</code>,  <code>0.0.6-6</code>,  <code>0.0.6-5</code>,  <code>0.0.5-2</code>,  <code>0.0.5-1</code>,  <code>0.0.4-6</code>,  </span></summary>
      

      ``0.0.8-1``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-7``,  ``0.0.6-6``,  ``0.0.6-5``,  ``0.0.5-2``,  ``0.0.5-1``,  ``0.0.4-6``,  ``0.0.4-5``,  ``0.0.4-4``,  ``0.0.4-3``,  ``0.0.4-2``,  ``0.0.3-2``,  ``0.0.3-1``,  ``0.0.2-0``,  ``0.0.1-0``,  ``0.0.0-8``,  ``0.0.0-7``,  ``0.0.0-6``,  ``0.0.0-5``,  ``0.0.0-4``,  ``0.0.0-3``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: 
   :depends on blasr: 
   :depends on bwa: 
   :depends on minimap2: 
   :depends on mummer4: 
   :depends on nim-falcon: 
   :depends on pb-dazzler: 
   :depends on pb-falcon: ``>=2.2.2``
   :depends on pb-falcon-phase: 
   :depends on pbgcpp: 
   :depends on pbmm2: 
   :depends on python: 
   :depends on racon: 
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

    pixi global install pb-assembly

to add into an existing workspace instead, run::

    pixi add pb-assembly

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pb-assembly

Alternatively, to install into a new environment, run::

    conda create -n envname pb-assembly

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pb-assembly:<tag>

(see `pb-assembly/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pb-assembly| image:: https://img.shields.io/conda/dn/bioconda/pb-assembly.svg?style=flat
   :target: https://anaconda.org/bioconda/pb-assembly
   :alt:   (downloads)
.. |docker_pb-assembly| image:: https://quay.io/repository/biocontainers/pb-assembly/status
   :target: https://quay.io/repository/biocontainers/pb-assembly
.. _`pb-assembly/tags`: https://quay.io/repository/biocontainers/pb-assembly?tab=tags


.. raw:: html

    <script>
        var package = "pb-assembly";
        var versions = ["0.0.8","0.0.8","0.0.7","0.0.6","0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pb-assembly/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pb-assembly/README.html