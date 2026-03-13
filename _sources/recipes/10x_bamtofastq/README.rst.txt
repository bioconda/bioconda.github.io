:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe '10x_bamtofastq'
.. highlight: bash

10x_bamtofastq
==============

.. conda:recipe:: 10x_bamtofastq
   :replaces_section_title:
   :noindex:

   Tool for converting 10x BAMs produced by Cell Ranger\, Space Ranger\, Cell Ranger ATAC\, Cell Ranger DNA\, and Long Ranger back to FASTQ files that can be used as inputs to re\-run analysis.

   :homepage: https://github.com/10XGenomics/bamtofastq
   :documentation: https://github.com/10XGenomics/bamtofastq/blob/v1.4.1/README.md
   
   :license: MIT / MIT
   :recipe: /`10x_bamtofastq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/10x_bamtofastq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/10x_bamtofastq/meta.yaml>`_
   :links: usegalaxy-eu: :usegalaxy-eu:`10x_bamtofastq`

   


.. conda:package:: 10x_bamtofastq

   |downloads_10x_bamtofastq| |docker_10x_bamtofastq|

   :versions:
      
      

      ``1.4.1-4``,  ``1.4.1-3``,  ``1.4.1-2``,  ``1.4.1-1``,  ``1.4.1-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install 10x_bamtofastq

to add into an existing workspace instead, run::

    pixi add 10x_bamtofastq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install 10x_bamtofastq

Alternatively, to install into a new environment, run::

    conda create -n envname 10x_bamtofastq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/10x_bamtofastq:<tag>

(see `10x_bamtofastq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_10x_bamtofastq| image:: https://img.shields.io/conda/dn/bioconda/10x_bamtofastq.svg?style=flat
   :target: https://anaconda.org/bioconda/10x_bamtofastq
   :alt:   (downloads)
.. |docker_10x_bamtofastq| image:: https://quay.io/repository/biocontainers/10x_bamtofastq/status
   :target: https://quay.io/repository/biocontainers/10x_bamtofastq
.. _`10x_bamtofastq/tags`: https://quay.io/repository/biocontainers/10x_bamtofastq?tab=tags


.. raw:: html

    <script>
        var package = "10x_bamtofastq";
        var versions = ["1.4.1","1.4.1","1.4.1","1.4.1","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/10x_bamtofastq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/10x_bamtofastq/README.html