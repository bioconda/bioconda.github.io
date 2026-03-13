:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unifrac-binaries'
.. highlight: bash

unifrac-binaries
================

.. conda:recipe:: unifrac-binaries
   :replaces_section_title:
   :noindex:

   Fast phylogenetic diversity calculations

   :homepage: https://github.com/biocore/unifrac-binaries
   :license: BSD / BSD-3-Clause
   :recipe: /`unifrac-binaries <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unifrac-binaries>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unifrac-binaries/meta.yaml>`_

   UniFrac is a commonly phylogenetic diversity distance metric used in
   microbiome research. The metric relates two microbiome samples together
   within the context of an evolutionary history\, and produces a distance
   that corresponds to how similar two samples by the amount of overlapping
   branch length. This package contains command line utilities and
   a shared library.



.. conda:package:: unifrac-binaries

   |downloads_unifrac-binaries| |docker_unifrac-binaries|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6-0</code>,  <code>1.5.1-0</code>,  <code>1.5-0</code>,  <code>1.4-1</code>,  <code>1.4-0</code>,  <code>1.3.2-2</code>,  <code>1.3.2-0</code>,  <code>1.3.1-2</code>,  <code>1.3.1-1</code>,  </span></summary>
      

      ``1.6-0``,  ``1.5.1-0``,  ``1.5-0``,  ``1.4-1``,  ``1.4-0``,  ``1.3.2-2``,  ``1.3.2-0``,  ``1.3.1-2``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3-0``,  ``1.2.1-0``,  ``1.2-1``,  ``1.2-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-4``,  ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``1.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libaec: ``>=1.1.4,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on lz4: 
   :depends on scikit-bio-binaries: 
   :depends on zlib: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>osx-arm64</code></span>
      

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

    pixi global install unifrac-binaries

to add into an existing workspace instead, run::

    pixi add unifrac-binaries

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install unifrac-binaries

Alternatively, to install into a new environment, run::

    conda create -n envname unifrac-binaries

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/unifrac-binaries:<tag>

(see `unifrac-binaries/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_unifrac-binaries| image:: https://img.shields.io/conda/dn/bioconda/unifrac-binaries.svg?style=flat
   :target: https://anaconda.org/bioconda/unifrac-binaries
   :alt:   (downloads)
.. |docker_unifrac-binaries| image:: https://quay.io/repository/biocontainers/unifrac-binaries/status
   :target: https://quay.io/repository/biocontainers/unifrac-binaries
.. _`unifrac-binaries/tags`: https://quay.io/repository/biocontainers/unifrac-binaries?tab=tags


.. raw:: html

    <script>
        var package = "unifrac-binaries";
        var versions = ["1.6","1.5.1","1.5","1.4","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unifrac-binaries/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unifrac-binaries/README.html