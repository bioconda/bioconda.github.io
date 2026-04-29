:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'skesa'
.. highlight: bash

skesa
=====

.. conda:recipe:: skesa
   :replaces_section_title:
   :noindex:

   Strategic Kmer Extension for Scrupulous Assemblies \& Sequence Assembly Using Target Enrichment.

   :homepage: https://github.com/ncbi/SKESA
   :documentation: https://github.com/ncbi/SKESA/blob/skesa.2.4.0_saute.1.3.0_2/README.md
   
   :license: Public Domain
   :recipe: /`skesa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skesa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skesa/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-018-1540-z`, doi: :doi:`10.1186/s12859-021-04174-9`

   


.. conda:package:: skesa

   |downloads_skesa| |docker_skesa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5.1-3</code>,  <code>2.5.1-2</code>,  <code>2.5.1-1</code>,  <code>2.5.1-0</code>,  <code>2.4.0-0</code>,  <code>2.3.0-2</code>,  <code>2.3.0-1</code>,  <code>2.3.0-0</code>,  <code>2.2-2</code>,  </span></summary>
      

      ``2.5.1-3``,  ``2.5.1-2``,  ``2.5.1-1``,  ``2.5.1-0``,  ``2.4.0-0``,  ``2.3.0-2``,  ``2.3.0-1``,  ``2.3.0-0``,  ``2.2-2``,  ``2.2-1``,  ``2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boost-cpp: ``>=1.70,<1.72``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libstdcxx-ng: 
   :depends on libzlib: ``>=1.2.13,<2.0a0``

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

    pixi global install skesa

to add into an existing workspace instead, run::

    pixi add skesa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install skesa

Alternatively, to install into a new environment, run::

    conda create -n envname skesa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/skesa:<tag>

(see `skesa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_skesa| image:: https://img.shields.io/conda/dn/bioconda/skesa.svg?style=flat
   :target: https://anaconda.org/bioconda/skesa
   :alt:   (downloads)
.. |docker_skesa| image:: https://quay.io/repository/biocontainers/skesa/status
   :target: https://quay.io/repository/biocontainers/skesa
.. _`skesa/tags`: https://quay.io/repository/biocontainers/skesa?tab=tags


.. raw:: html

    <script>
        var package = "skesa";
        var versions = ["2.5.1","2.5.1","2.5.1","2.5.1","2.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/skesa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/skesa/README.html