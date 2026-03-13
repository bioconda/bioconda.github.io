:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'masurca'
.. highlight: bash

masurca
=======

.. conda:recipe:: masurca
   :replaces_section_title:
   :noindex:

   MaSuRCA \(Maryland Super\-Read Celera Assembler\) genome assembly software.

   :homepage: https://masurca.blogspot.co.uk
   :documentation: https://github.com/alekseyzimin/masurca/blob/v4.1.4/README.md
   
   :developer docs: https://github.com/alekseyzimin/masurca
   :license: GPL3 / GPL-3.0-only
   :recipe: /`masurca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/masurca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/masurca/meta.yaml>`_
   :links: biotools: :biotools:`masurca`, doi: :doi:`10.1093/bioinformatics/btt476`

   MaSuRCA \(Maryland Super\-Read Celera Assembler\) genome assembly software. MaSuRCA requires Illumina data\, and supports third\-generation PacBio\/Nanopore MinION reads for hybrid assembly.


.. conda:package:: masurca

   |downloads_masurca| |docker_masurca|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.1.4-0</code>,  <code>4.1.3-1</code>,  <code>4.1.3-0</code>,  <code>4.1.2-0</code>,  <code>4.1.1-2</code>,  <code>4.1.1-1</code>,  <code>4.1.1-0</code>,  <code>4.1.0-1</code>,  <code>4.1.0-0</code>,  </span></summary>
      

      ``4.1.4-0``,  ``4.1.3-1``,  ``4.1.3-0``,  ``4.1.2-0``,  ``4.1.1-2``,  ``4.1.1-1``,  ``4.1.1-0``,  ``4.1.0-1``,  ``4.1.0-0``,  ``4.0.9-1``,  ``4.0.9-0``,  ``4.0.8-1``,  ``4.0.8-0``,  ``4.0.7-1``,  ``4.0.7-0``,  ``4.0.6-0``,  ``3.4.2-1``,  ``3.4.2-0``,  ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.9-0``,  ``3.3.8-0``,  ``3.3.7-0``,  ``3.3.6-0``,  ``3.3.5-0``,  ``3.3.4-0``,  ``3.3.3-0``,  ``3.3.1-0``,  ``3.3.0-0``,  ``3.2.9-0``,  ``3.2.8-0``,  ``3.2.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boost-cpp: 
   :depends on bwa: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on grep: 
   :depends on libgcc: ``>=12``
   :depends on libstdcxx: ``>=12``
   :depends on libxcrypt: ``>=4.4.36``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on perl: 

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

    pixi global install masurca

to add into an existing workspace instead, run::

    pixi add masurca

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install masurca

Alternatively, to install into a new environment, run::

    conda create -n envname masurca

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/masurca:<tag>

(see `masurca/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_masurca| image:: https://img.shields.io/conda/dn/bioconda/masurca.svg?style=flat
   :target: https://anaconda.org/bioconda/masurca
   :alt:   (downloads)
.. |docker_masurca| image:: https://quay.io/repository/biocontainers/masurca/status
   :target: https://quay.io/repository/biocontainers/masurca
.. _`masurca/tags`: https://quay.io/repository/biocontainers/masurca?tab=tags


.. raw:: html

    <script>
        var package = "masurca";
        var versions = ["4.1.4","4.1.3","4.1.3","4.1.2","4.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/masurca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/masurca/README.html