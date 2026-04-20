:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fasttree'
.. highlight: bash

fasttree
========

.. conda:recipe:: fasttree
   :replaces_section_title:
   :noindex:

   FastTree infers approximately\-maximum\-likelihood phylogenetic trees from alignments of nucleotide or protein sequences.

   :homepage: https://morgannprice.github.io/fasttree
   :developer docs: https://github.com/morgannprice/fasttree
   :license: GPL / GPL-2.0-or-later
   :recipe: /`fasttree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fasttree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fasttree/meta.yaml>`_
   :links: biotools: :biotools:`fasttree`, usegalaxy-eu: :usegalaxy-eu:`fasttree`, doi: :doi:`10.1093/molbev/msp077`

   


.. conda:package:: fasttree

   |downloads_fasttree| |docker_fasttree|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.2.0-1</code>,  <code>2.2.0-0</code>,  <code>2.1.11-5</code>,  <code>2.1.11-4</code>,  <code>2.1.11-3</code>,  <code>2.1.11-2</code>,  <code>2.1.11-1</code>,  <code>2.1.11-0</code>,  <code>2.1.10-6</code>,  </span></summary>
      

      ``2.2.0-1``,  ``2.2.0-0``,  ``2.1.11-5``,  ``2.1.11-4``,  ``2.1.11-3``,  ``2.1.11-2``,  ``2.1.11-1``,  ``2.1.11-0``,  ``2.1.10-6``,  ``2.1.10-5``,  ``2.1.10-4``,  ``2.1.10-3``,  ``2.1.10-2``,  ``2.1.10-0``,  ``2.1.9-2``,  ``2.1.9-1``,  ``2.1.9-0``,  ``2.1.8-9``,  ``2.1.8-8``,  ``2.1.8-7``,  ``2.1.8-6``,  ``2.1.8-5``,  ``2.1.8-4``,  ``2.1.8-2``,  ``2.1.8-1``,  ``2.1.3-7``,  ``2.1.3-6``,  ``2.1.3-5``,  ``2.1.3-4``,  ``2.1.3-3``,  ``2.1.3-2``,  ``2.1.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libgomp: 

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

    pixi global install fasttree

to add into an existing workspace instead, run::

    pixi add fasttree

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fasttree

Alternatively, to install into a new environment, run::

    conda create -n envname fasttree

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fasttree:<tag>

(see `fasttree/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fasttree| image:: https://img.shields.io/conda/dn/bioconda/fasttree.svg?style=flat
   :target: https://anaconda.org/bioconda/fasttree
   :alt:   (downloads)
.. |docker_fasttree| image:: https://quay.io/repository/biocontainers/fasttree/status
   :target: https://quay.io/repository/biocontainers/fasttree
.. _`fasttree/tags`: https://quay.io/repository/biocontainers/fasttree?tab=tags


.. raw:: html

    <script>
        var package = "fasttree";
        var versions = ["2.2.0","2.2.0","2.1.11","2.1.11","2.1.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fasttree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fasttree/README.html