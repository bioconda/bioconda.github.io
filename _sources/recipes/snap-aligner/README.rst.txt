:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snap-aligner'
.. highlight: bash

snap-aligner
============

.. conda:recipe:: snap-aligner
   :replaces_section_title:
   :noindex:

   Scalable Nucleotide Alignment Program \-\- a fast and accurate read aligner for high\-throughput sequencing data.

   :homepage: https://snap.cs.berkeley.edu
   :documentation: https://www.microsoft.com/en-us/research/project/snap
   
   :developer docs: https://github.com/amplab/snap
   :license: APACHE / Apache-2.0
   :recipe: /`snap-aligner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snap-aligner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snap-aligner/meta.yaml>`_

   


.. conda:package:: snap-aligner

   |downloads_snap-aligner| |docker_snap-aligner|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0.5-2</code>,  <code>2.0.5-1</code>,  <code>2.0.5-0</code>,  <code>2.0.3-4</code>,  <code>2.0.3-3</code>,  <code>2.0.3-2</code>,  <code>2.0.3-1</code>,  <code>2.0.3-0</code>,  <code>2.0.2-0</code>,  </span></summary>
      

      ``2.0.5-2``,  ``2.0.5-1``,  ``2.0.5-0``,  ``2.0.3-4``,  ``2.0.3-3``,  ``2.0.3-2``,  ``2.0.3-1``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.0beta.23-0``,  ``1.0beta.18-0``,  ``1.0dev.97-3``,  ``1.0dev.97-2``,  ``1.0dev.97-1``,  ``1.0dev.97-0``,  ``1.0dev.96-4``,  ``1.0dev.96-3``,  ``1.0dev.96-2``,  ``1.0dev.96-1``,  ``1.0dev.96-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install snap-aligner

to add into an existing workspace instead, run::

    pixi add snap-aligner

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snap-aligner

Alternatively, to install into a new environment, run::

    conda create -n envname snap-aligner

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snap-aligner:<tag>

(see `snap-aligner/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snap-aligner| image:: https://img.shields.io/conda/dn/bioconda/snap-aligner.svg?style=flat
   :target: https://anaconda.org/bioconda/snap-aligner
   :alt:   (downloads)
.. |docker_snap-aligner| image:: https://quay.io/repository/biocontainers/snap-aligner/status
   :target: https://quay.io/repository/biocontainers/snap-aligner
.. _`snap-aligner/tags`: https://quay.io/repository/biocontainers/snap-aligner?tab=tags


.. raw:: html

    <script>
        var package = "snap-aligner";
        var versions = ["2.0.5","2.0.5","2.0.5","2.0.3","2.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snap-aligner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snap-aligner/README.html