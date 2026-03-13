:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bwameth'
.. highlight: bash

bwameth
=======

.. conda:recipe:: bwameth
   :replaces_section_title:
   :noindex:

   A fast and accurate aligner of BS\-seq reads.

   :homepage: https://github.com/brentp/bwa-meth
   :license: MIT / MIT
   :recipe: /`bwameth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwameth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwameth/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`bwameth`

   


.. conda:package:: bwameth

   |downloads_bwameth| |docker_bwameth|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.9-0</code>,  <code>0.2.8-0</code>,  <code>0.2.7-1</code>,  <code>0.2.7-0</code>,  <code>0.2.6-0</code>,  <code>0.2.5-0</code>,  <code>0.2.4-0</code>,  <code>0.2.3-0</code>,  <code>0.2.2-4</code>,  </span></summary>
      

      ``0.2.9-0``,  ``0.2.8-0``,  ``0.2.7-1``,  ``0.2.7-0``,  ``0.2.6-0``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.3-0``,  ``0.2.2-4``,  ``0.2.2-3``,  ``0.2.2-2``,  ``0.2.2-1``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-1``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bwa: 
   :depends on bwa-mem2: 
   :depends on python: 
   :depends on samtools: 
   :depends on toolshed: ``>=0.3.9``

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

    pixi global install bwameth

to add into an existing workspace instead, run::

    pixi add bwameth

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bwameth

Alternatively, to install into a new environment, run::

    conda create -n envname bwameth

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bwameth:<tag>

(see `bwameth/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bwameth| image:: https://img.shields.io/conda/dn/bioconda/bwameth.svg?style=flat
   :target: https://anaconda.org/bioconda/bwameth
   :alt:   (downloads)
.. |docker_bwameth| image:: https://quay.io/repository/biocontainers/bwameth/status
   :target: https://quay.io/repository/biocontainers/bwameth
.. _`bwameth/tags`: https://quay.io/repository/biocontainers/bwameth?tab=tags


.. raw:: html

    <script>
        var package = "bwameth";
        var versions = ["0.2.9","0.2.8","0.2.7","0.2.7","0.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bwameth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bwameth/README.html