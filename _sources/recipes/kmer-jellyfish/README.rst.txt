:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmer-jellyfish'
.. highlight: bash

kmer-jellyfish
==============

.. conda:recipe:: kmer-jellyfish
   :replaces_section_title:
   :noindex:

   Jellyfish is a tool for fast\, memory\-efficient counting of k\-mers in DNA. A k\-mer is a substring of length k\, and counting the occurrences of all such substrings is a central step in many analyses of DNA sequence.

   :homepage: https://genome.umd.edu/jellyfish.html
   :documentation: https://genome.umd.edu/docs/JellyfishUserGuide.pdf
   
   :developer docs: https://github.com/gmarcais/Jellyfish
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`kmer-jellyfish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmer-jellyfish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmer-jellyfish/meta.yaml>`_
   :links: biotools: :biotools:`jellyfish`, doi: :doi:`10.1093/bioinformatics/btr011`, usegalaxy-eu: :usegalaxy-eu:`jellyfish`

   


.. conda:package:: kmer-jellyfish

   |downloads_kmer-jellyfish| |docker_kmer-jellyfish|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.1-6</code>,  <code>2.3.1-5</code>,  <code>2.3.1-4</code>,  <code>2.3.1-3</code>,  <code>2.3.1-2</code>,  <code>2.3.1-1</code>,  <code>2.3.1-0</code>,  <code>2.3.0-3</code>,  <code>2.3.0-2</code>,  </span></summary>
      

      ``2.3.1-6``,  ``2.3.1-5``,  ``2.3.1-4``,  ``2.3.1-3``,  ``2.3.1-2``,  ``2.3.1-1``,  ``2.3.1-0``,  ``2.3.0-3``,  ``2.3.0-2``,  ``2.3.0-1``,  ``2.3.0-0``,  ``1.1.12-6``,  ``1.1.12-4``,  ``1.1.12-2``,  ``1.1.12-1``,  ``1.1.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install kmer-jellyfish

to add into an existing workspace instead, run::

    pixi add kmer-jellyfish

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kmer-jellyfish

Alternatively, to install into a new environment, run::

    conda create -n envname kmer-jellyfish

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kmer-jellyfish:<tag>

(see `kmer-jellyfish/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kmer-jellyfish| image:: https://img.shields.io/conda/dn/bioconda/kmer-jellyfish.svg?style=flat
   :target: https://anaconda.org/bioconda/kmer-jellyfish
   :alt:   (downloads)
.. |docker_kmer-jellyfish| image:: https://quay.io/repository/biocontainers/kmer-jellyfish/status
   :target: https://quay.io/repository/biocontainers/kmer-jellyfish
.. _`kmer-jellyfish/tags`: https://quay.io/repository/biocontainers/kmer-jellyfish?tab=tags


.. raw:: html

    <script>
        var package = "kmer-jellyfish";
        var versions = ["2.3.1","2.3.1","2.3.1","2.3.1","2.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmer-jellyfish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmer-jellyfish/README.html