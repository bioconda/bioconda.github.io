:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'abundancebin'
.. highlight: bash

abundancebin
============

.. conda:recipe:: abundancebin
   :replaces_section_title:
   :noindex:

   Abundance\-based tool for binning metagenomic sequences.

   :homepage: https://omics.informatics.indiana.edu/AbundanceBin
   :license: Copyright
   :recipe: /`abundancebin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abundancebin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/abundancebin/meta.yaml>`_
   :links: doi: :doi:`10.1007/978-3-642-12683-3_35`

   AbundanceBin is an abundance\-based tool for binning metagenomic sequences\,
   such that the reads classified in a bin belong to species of identical or
   very similar abundances. AbundanceBin also gives estimations of species
   abundances and their genome sizes — two important characteristic parameters
   for a microbial community.



.. conda:package:: abundancebin

   |downloads_abundancebin| |docker_abundancebin|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.1-9</code>,  <code>1.0.1-8</code>,  <code>1.0.1-7</code>,  <code>1.0.1-6</code>,  <code>1.0.1-5</code>,  <code>1.0.1-4</code>,  <code>1.0.1-3</code>,  <code>1.0.1-2</code>,  <code>1.0.1-1</code>,  </span></summary>
      

      ``1.0.1-9``,  ``1.0.1-8``,  ``1.0.1-7``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
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

    pixi global install abundancebin

to add into an existing workspace instead, run::

    pixi add abundancebin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install abundancebin

Alternatively, to install into a new environment, run::

    conda create -n envname abundancebin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/abundancebin:<tag>

(see `abundancebin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_abundancebin| image:: https://img.shields.io/conda/dn/bioconda/abundancebin.svg?style=flat
   :target: https://anaconda.org/bioconda/abundancebin
   :alt:   (downloads)
.. |docker_abundancebin| image:: https://quay.io/repository/biocontainers/abundancebin/status
   :target: https://quay.io/repository/biocontainers/abundancebin
.. _`abundancebin/tags`: https://quay.io/repository/biocontainers/abundancebin?tab=tags


.. raw:: html

    <script>
        var package = "abundancebin";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/abundancebin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/abundancebin/README.html