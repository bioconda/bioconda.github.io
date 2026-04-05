:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnastructure'
.. highlight: bash

rnastructure
============

.. conda:recipe:: rnastructure
   :replaces_section_title:
   :noindex:

   RNAstructure is a complete package for RNA and DNA secondary structure  prediction and analysis. It includes algorithms for   secondary structure  prediction\, including facility to predict base pairing probabilities. It  also can be used to predict bimolecular structures and can predict the  equilibrium binding affinity of an oligonucleotide to a structured RNA  target. This is useful for siRNA design. It can also predict secondary  structures common to two\, unaligned sequences\, which is much more accurate  than single sequence secondary structure prediction. Finally\, RNAstructure  can take a number of different types of experiment mapping data to constrain  or restrain structure prediction. These include chemical mapping\, enzymatic  mapping\, NMR\, and SHAPE data.

   :homepage: http://rna.urmc.rochester.edu/RNAstructure.html
   :license: GPL / GPL-2.0-only
   :recipe: /`rnastructure <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnastructure>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnastructure/meta.yaml>`_

   


.. conda:package:: rnastructure

   |downloads_rnastructure| |docker_rnastructure|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>6.5-1</code>,  <code>6.5-0</code>,  <code>6.4-2</code>,  <code>6.4-1</code>,  <code>6.4-0</code>,  <code>6.3-3</code>,  <code>6.3-2</code>,  <code>6.3-1</code>,  <code>6.3-0</code>,  </span></summary>
      

      ``6.5-1``,  ``6.5-0``,  ``6.4-2``,  ``6.4-1``,  ``6.4-0``,  ``6.3-3``,  ``6.3-2``,  ``6.3-1``,  ``6.3-0``,  ``6.1-2``,  ``6.1-1``,  ``6.1-0``,  ``6.0-1``,  ``6.0-0``,  ``5.7-2``,  ``5.7-1``,  ``5.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=14``
   :depends on libstdcxx: ``>=14``

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

    pixi global install rnastructure

to add into an existing workspace instead, run::

    pixi add rnastructure

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rnastructure

Alternatively, to install into a new environment, run::

    conda create -n envname rnastructure

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rnastructure:<tag>

(see `rnastructure/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rnastructure| image:: https://img.shields.io/conda/dn/bioconda/rnastructure.svg?style=flat
   :target: https://anaconda.org/bioconda/rnastructure
   :alt:   (downloads)
.. |docker_rnastructure| image:: https://quay.io/repository/biocontainers/rnastructure/status
   :target: https://quay.io/repository/biocontainers/rnastructure
.. _`rnastructure/tags`: https://quay.io/repository/biocontainers/rnastructure?tab=tags


.. raw:: html

    <script>
        var package = "rnastructure";
        var versions = ["6.5","6.5","6.4","6.4","6.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnastructure/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnastructure/README.html