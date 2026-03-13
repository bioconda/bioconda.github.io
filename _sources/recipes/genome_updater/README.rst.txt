:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genome_updater'
.. highlight: bash

genome_updater
==============

.. conda:recipe:: genome_updater
   :replaces_section_title:
   :noindex:

   genome\_updater\: bash script to download\/update snapshots of refseq\/genbank

   :homepage: https://github.com/pirovc/genome_updater
   :license: MIT / MIT License
   :recipe: /`genome_updater <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genome_updater>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genome_updater/meta.yaml>`_

   Bash script to download\/update snapshots of files from NCBI genomes repository 
   \(refseq\/genbank\) with track of changes and without redundancy  



.. conda:package:: genome_updater

   |downloads_genome_updater| |docker_genome_updater|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.2-0</code>,  <code>0.7.1-0</code>,  <code>0.7.0-0</code>,  <code>0.6.4-0</code>,  <code>0.6.3-1</code>,  <code>0.6.3-0</code>,  <code>0.6.2-0</code>,  <code>0.6.1-0</code>,  <code>0.6.0-0</code>,  </span></summary>
      

      ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.4-0``,  ``0.6.3-1``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.5-0``,  ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bc: 
   :depends on coreutils: 
   :depends on curl: 
   :depends on findutils: 
   :depends on gawk: 
   :depends on parallel: ``>=20160822``
   :depends on tar: 
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

    pixi global install genome_updater

to add into an existing workspace instead, run::

    pixi add genome_updater

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genome_updater

Alternatively, to install into a new environment, run::

    conda create -n envname genome_updater

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genome_updater:<tag>

(see `genome_updater/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genome_updater| image:: https://img.shields.io/conda/dn/bioconda/genome_updater.svg?style=flat
   :target: https://anaconda.org/bioconda/genome_updater
   :alt:   (downloads)
.. |docker_genome_updater| image:: https://quay.io/repository/biocontainers/genome_updater/status
   :target: https://quay.io/repository/biocontainers/genome_updater
.. _`genome_updater/tags`: https://quay.io/repository/biocontainers/genome_updater?tab=tags


.. raw:: html

    <script>
        var package = "genome_updater";
        var versions = ["0.7.2","0.7.1","0.7.0","0.6.4","0.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genome_updater/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genome_updater/README.html