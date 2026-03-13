:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cenote-taker3'
.. highlight: bash

cenote-taker3
=============

.. conda:recipe:: cenote-taker3
   :replaces_section_title:
   :noindex:

   Cenote\-Taker 3\: Discover and annotate the virome.

   :homepage: https://github.com/mtisza1/Cenote-Taker3
   :documentation: https://github.com/mtisza1/Cenote-Taker3/blob/v3.4.4/README.md
   
   :license: MIT / MIT
   :recipe: /`cenote-taker3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cenote-taker3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cenote-taker3/meta.yaml>`_

   


.. conda:package:: cenote-taker3

   |downloads_cenote-taker3| |docker_cenote-taker3|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.4-0</code>,  <code>3.4.3-0</code>,  <code>3.4.2-0</code>,  <code>3.4.1-0</code>,  <code>3.4.0-0</code>,  <code>3.3.2-0</code>,  <code>3.3.1-0</code>,  <code>3.3.0-0</code>,  <code>3.2.1-0</code>,  </span></summary>
      

      ``3.4.4-0``,  ``3.4.3-0``,  ``3.4.2-0``,  ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.2-0``,  ``3.3.1-0``,  ``3.3.0-0``,  ``3.2.1-0``,  ``3.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: 
   :depends on biopython: 
   :depends on coreutils: 
   :depends on findutils: 
   :depends on grep: 
   :depends on hhsuite: 
   :depends on minimap2: 
   :depends on mmseqs2: ``>=18.8cc5c``
   :depends on numpy: 
   :depends on pandas: 
   :depends on phanotate: 
   :depends on prodigal: 
   :depends on pyarrow: 
   :depends on pyhmmer: ``>=0.12.0``
   :depends on pyrodigal-gv: ``>=0.3.1``
   :depends on python: ``>=3.6``
   :depends on samtools: 
   :depends on sed: 
   :depends on seqkit: 
   :depends on tbl2asn-forever: 
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

    pixi global install cenote-taker3

to add into an existing workspace instead, run::

    pixi add cenote-taker3

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cenote-taker3

Alternatively, to install into a new environment, run::

    conda create -n envname cenote-taker3

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cenote-taker3:<tag>

(see `cenote-taker3/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cenote-taker3| image:: https://img.shields.io/conda/dn/bioconda/cenote-taker3.svg?style=flat
   :target: https://anaconda.org/bioconda/cenote-taker3
   :alt:   (downloads)
.. |docker_cenote-taker3| image:: https://quay.io/repository/biocontainers/cenote-taker3/status
   :target: https://quay.io/repository/biocontainers/cenote-taker3
.. _`cenote-taker3/tags`: https://quay.io/repository/biocontainers/cenote-taker3?tab=tags


.. raw:: html

    <script>
        var package = "cenote-taker3";
        var versions = ["3.4.4","3.4.3","3.4.2","3.4.1","3.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cenote-taker3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cenote-taker3/README.html