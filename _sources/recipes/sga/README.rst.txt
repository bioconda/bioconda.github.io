:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sga'
.. highlight: bash

sga
===

.. conda:recipe:: sga
   :replaces_section_title:
   :noindex:

   SGA \- String Graph Assembler. SGA is a de novo assembler for DNA sequence reads. It is based on Gene Myers string graph formulation of assembly and uses the FM\-index\/Burrows\-Wheeler transform to efficiently find overlaps between sequence reads.

   :homepage: https://github.com/jts/sga
   :license: GPL / GPL-3.0-or-later
   :recipe: /`sga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sga/meta.yaml>`_
   :links: biotools: :biotools:`sga`

   


.. conda:package:: sga

   |downloads_sga| |docker_sga|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.15-11</code>,  <code>0.10.15-10</code>,  <code>0.10.15-9</code>,  <code>0.10.15-8</code>,  <code>0.10.15-7</code>,  <code>0.10.15-6</code>,  <code>0.10.15-5</code>,  <code>0.10.15-4</code>,  <code>0.10.15-3</code>,  </span></summary>
      

      ``0.10.15-11``,  ``0.10.15-10``,  ``0.10.15-9``,  ``0.10.15-8``,  ``0.10.15-7``,  ``0.10.15-6``,  ``0.10.15-5``,  ``0.10.15-4``,  ``0.10.15-3``,  ``0.10.15-2``,  ``0.10.15-1``,  ``0.10.15-0``,  ``0.10.13-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bamtools: ``>=2.5.3,<3.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on sparsehash: 

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

    pixi global install sga

to add into an existing workspace instead, run::

    pixi add sga

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sga

Alternatively, to install into a new environment, run::

    conda create -n envname sga

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sga:<tag>

(see `sga/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sga| image:: https://img.shields.io/conda/dn/bioconda/sga.svg?style=flat
   :target: https://anaconda.org/bioconda/sga
   :alt:   (downloads)
.. |docker_sga| image:: https://quay.io/repository/biocontainers/sga/status
   :target: https://quay.io/repository/biocontainers/sga
.. _`sga/tags`: https://quay.io/repository/biocontainers/sga?tab=tags


.. raw:: html

    <script>
        var package = "sga";
        var versions = ["0.10.15","0.10.15","0.10.15","0.10.15","0.10.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sga/README.html