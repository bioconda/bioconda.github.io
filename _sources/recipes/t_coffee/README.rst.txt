:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 't-coffee'
.. highlight: bash

t-coffee
========

.. conda:recipe:: t_coffee
   :replaces_section_title:
   :noindex:

   A collection of tools for Multiple Alignments of DNA\, RNA\, Protein Sequence.

   :homepage: https://github.com/cbcrg/tcoffee
   :documentation: https://tcoffee.org/Projects/tcoffee/documentation/index.html
   
   :license: GPL / GPL-2.0-only
   :recipe: /`t_coffee <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/t_coffee>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/t_coffee/meta.yaml>`_
   :links: doi: :doi:`10.1006/jmbi.2000.4042`, usegalaxy-eu: :usegalaxy-eu:`t_coffee`, biotools: :biotools:`tcoffee`

   


.. conda:package:: t-coffee

   |downloads_t-coffee| |docker_t-coffee|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>13.46.2.7c9e712d-0</code>,  <code>13.46.1.b8b01e06-2</code>,  <code>13.46.1.b8b01e06-1</code>,  <code>13.46.1.b8b01e06-0</code>,  <code>13.46.0.919e8c6b-4</code>,  <code>13.46.0.919e8c6b-3</code>,  <code>13.46.0.919e8c6b-2</code>,  <code>13.46.0.919e8c6b-1</code>,  <code>13.46.0.919e8c6b-0</code>,  </span></summary>
      

      ``13.46.2.7c9e712d-0``,  ``13.46.1.b8b01e06-2``,  ``13.46.1.b8b01e06-1``,  ``13.46.1.b8b01e06-0``,  ``13.46.0.919e8c6b-4``,  ``13.46.0.919e8c6b-3``,  ``13.46.0.919e8c6b-2``,  ``13.46.0.919e8c6b-1``,  ``13.46.0.919e8c6b-0``,  ``13.45.0.4846264-7``,  ``13.45.0.4846264-6``,  ``13.45.0.4846264-5``,  ``13.45.0.4846264-4``,  ``13.45.0.4846264-3``,  ``13.45.0.4846264-2``,  ``13.45.0.4846264-1``,  ``13.45.0.4846264-0``,  ``13.39.0.d675aed-2``,  ``13.39.0.d675aed-1``,  ``13.39.0.d675aed-0``,  ``12.00.7fb08c2-2``,  ``12.00.7fb08c2-1``,  ``12.00.7fb08c2-0``,  ``11.00.8cbe486-0``

      
      .. raw:: html

         </details>
      

   
   :depends on clustalo: ``1.2.4``
   :depends on clustalw: ``2.1``
   :depends on consan: ``1.2``
   :depends on dialign-tx: ``>=1.0.2``
   :depends on famsa: ``2.2.3``
   :depends on kalign2: ``2.04``
   :depends on libgcc: ``>=13``
   :depends on libgfortran: 
   :depends on libgfortran5: ``>=13.4.0``
   :depends on libstdcxx: ``>=13``
   :depends on mafft: ``7.526``
   :depends on muscle: ``3.8.1551``
   :depends on mustang: ``>=3.2.3``
   :depends on pasta: ``1.9.2``
   :depends on perl: ``5.32.*``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on phylip: ``3.697``
   :depends on poa: ``>=2.0``
   :depends on prank: ``170427``
   :depends on probcons: ``1.12``
   :depends on probconsrna: ``1.10``
   :depends on proda: ``1.0``
   :depends on sap: ``1.1.3``
   :depends on tmalign: ``20170708``
   :depends on viennarna: ``2.7.0``

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

    pixi global install t-coffee

to add into an existing workspace instead, run::

    pixi add t-coffee

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install t-coffee

Alternatively, to install into a new environment, run::

    conda create -n envname t-coffee

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/t-coffee:<tag>

(see `t-coffee/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_t-coffee| image:: https://img.shields.io/conda/dn/bioconda/t-coffee.svg?style=flat
   :target: https://anaconda.org/bioconda/t-coffee
   :alt:   (downloads)
.. |docker_t-coffee| image:: https://quay.io/repository/biocontainers/t-coffee/status
   :target: https://quay.io/repository/biocontainers/t-coffee
.. _`t-coffee/tags`: https://quay.io/repository/biocontainers/t-coffee?tab=tags


.. raw:: html

    <script>
        var package = "t-coffee";
        var versions = ["13.46.2.7c9e712d","13.46.1.b8b01e06","13.46.1.b8b01e06","13.46.1.b8b01e06","13.46.0.919e8c6b"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/t-coffee/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/t-coffee/README.html