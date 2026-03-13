:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gffcompare'
.. highlight: bash

gffcompare
==========

.. conda:recipe:: gffcompare
   :replaces_section_title:
   :noindex:

   GffCompare by Geo Pertea.

   :homepage: https://ccb.jhu.edu/software/stringtie/gffcompare.shtml
   :documentation: https://github.com/gpertea/gffcompare/blob/v0.12.10/README.md
   
   :developer docs: https://github.com/gpertea/gffcompare
   :license: Artistic License 2.0
   :recipe: /`gffcompare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gffcompare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gffcompare/meta.yaml>`_
   :links: biotools: :biotools:`gffcompare`, usegalaxy-eu: :usegalaxy-eu:`gffcompare`

   


.. conda:package:: gffcompare

   |downloads_gffcompare| |docker_gffcompare|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.12.10-0</code>,  <code>0.12.9-0</code>,  <code>0.12.6-4</code>,  <code>0.12.6-3</code>,  <code>0.12.6-2</code>,  <code>0.12.6-1</code>,  <code>0.12.6-0</code>,  <code>0.11.2-3</code>,  <code>0.11.2-2</code>,  </span></summary>
      

      ``0.12.10-0``,  ``0.12.9-0``,  ``0.12.6-4``,  ``0.12.6-3``,  ``0.12.6-2``,  ``0.12.6-1``,  ``0.12.6-0``,  ``0.11.2-3``,  ``0.11.2-2``,  ``0.11.2-1``,  ``0.11.2-0``,  ``0.10.6-0``,  ``0.9.8-0``

      
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

    pixi global install gffcompare

to add into an existing workspace instead, run::

    pixi add gffcompare

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gffcompare

Alternatively, to install into a new environment, run::

    conda create -n envname gffcompare

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gffcompare:<tag>

(see `gffcompare/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gffcompare| image:: https://img.shields.io/conda/dn/bioconda/gffcompare.svg?style=flat
   :target: https://anaconda.org/bioconda/gffcompare
   :alt:   (downloads)
.. |docker_gffcompare| image:: https://quay.io/repository/biocontainers/gffcompare/status
   :target: https://quay.io/repository/biocontainers/gffcompare
.. _`gffcompare/tags`: https://quay.io/repository/biocontainers/gffcompare?tab=tags


.. raw:: html

    <script>
        var package = "gffcompare";
        var versions = ["0.12.10","0.12.9","0.12.6","0.12.6","0.12.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gffcompare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gffcompare/README.html