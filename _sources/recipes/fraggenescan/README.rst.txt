:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fraggenescan'
.. highlight: bash

fraggenescan
============

.. conda:recipe:: fraggenescan
   :replaces_section_title:
   :noindex:

   FragGeneScan is an application for finding \(fragmented\) genes in short reads.

   :homepage: https://sourceforge.net/projects/fraggenescan
   :license: BSD
   :recipe: /`fraggenescan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fraggenescan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fraggenescan/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkq747`, biotools: :biotools:`fraggenescan`

   FragGeneScan is an application for finding \(fragmented\) genes in short
   reads. It can also be applied to predict prokaryotic genes in incomplete
   assemblies or complete genomes.



.. conda:package:: fraggenescan

   |downloads_fraggenescan| |docker_fraggenescan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32-1</code>,  <code>1.32-0</code>,  <code>1.31-8</code>,  <code>1.31-7</code>,  <code>1.31-6</code>,  <code>1.31-5</code>,  <code>1.31-4</code>,  <code>1.31-3</code>,  <code>1.31-2</code>,  </span></summary>
      

      ``1.32-1``,  ``1.32-0``,  ``1.31-8``,  ``1.31-7``,  ``1.31-6``,  ``1.31-5``,  ``1.31-4``,  ``1.31-3``,  ``1.31-2``,  ``1.31-1``,  ``1.31-0``,  ``1.30-2``,  ``1.30-1``,  ``1.30-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on perl: 

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

    pixi global install fraggenescan

to add into an existing workspace instead, run::

    pixi add fraggenescan

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fraggenescan

Alternatively, to install into a new environment, run::

    conda create -n envname fraggenescan

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fraggenescan:<tag>

(see `fraggenescan/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fraggenescan| image:: https://img.shields.io/conda/dn/bioconda/fraggenescan.svg?style=flat
   :target: https://anaconda.org/bioconda/fraggenescan
   :alt:   (downloads)
.. |docker_fraggenescan| image:: https://quay.io/repository/biocontainers/fraggenescan/status
   :target: https://quay.io/repository/biocontainers/fraggenescan
.. _`fraggenescan/tags`: https://quay.io/repository/biocontainers/fraggenescan?tab=tags


.. raw:: html

    <script>
        var package = "fraggenescan";
        var versions = ["1.32","1.32","1.31","1.31","1.31"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fraggenescan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fraggenescan/README.html