:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmc'
.. highlight: bash

kmc
===

.. conda:recipe:: kmc
   :replaces_section_title:
   :noindex:

   Tools for efficient k\-mer counting and filtering of reads based on k\-mer content.

   :homepage: https://github.com/refresh-bio/kmc
   :documentation: https://github.com/refresh-bio/KMC/blob/v3.2.4/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`kmc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmc/meta.yaml>`_
   :links: biotools: :biotools:`kmc`, doi: :doi:`10.1093/bioinformatics/btx304`, doi: :doi:`10.1093/bioinformatics/btv022`, doi: :doi:`10.1186/1471-2105-14-160`

   KMC is a utility designed for counting k\-mers \(sequences
   of consecutive k symbols\) in a set of DNA sequences. KMC tools allow performing various operations on k\-mers sets.



.. conda:package:: kmc

   |downloads_kmc| |docker_kmc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.4-5</code>,  <code>3.2.4-4</code>,  <code>3.2.4-3</code>,  <code>3.2.4-2</code>,  <code>3.2.4-1</code>,  <code>3.2.4-0</code>,  <code>3.2.1-3</code>,  <code>3.2.1-2</code>,  <code>3.2.1-1</code>,  </span></summary>
      

      ``3.2.4-5``,  ``3.2.4-4``,  ``3.2.4-3``,  ``3.2.4-2``,  ``3.2.4-1``,  ``3.2.4-0``,  ``3.2.1-3``,  ``3.2.1-2``,  ``3.2.1-1``,  ``3.2.1-0``,  ``3.1.2rc1-0``,  ``3.1.1-1``,  ``3.1.1-0``,  ``3.1.1rc1-2``,  ``3.1.1rc1-1``,  ``3.1.1rc1-0``,  ``3.1.0-0``,  ``3.0.1-2``,  ``3.0.1-1``,  ``3.0.1-0``,  ``3.0.0-3``,  ``3.0.0-2``,  ``3.0.0-1``,  ``3.0.0-0``,  ``2.3.0-3``,  ``2.3.0-2``,  ``2.3.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on python: ``>=3``

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

    pixi global install kmc

to add into an existing workspace instead, run::

    pixi add kmc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install kmc

Alternatively, to install into a new environment, run::

    conda create -n envname kmc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/kmc:<tag>

(see `kmc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_kmc| image:: https://img.shields.io/conda/dn/bioconda/kmc.svg?style=flat
   :target: https://anaconda.org/bioconda/kmc
   :alt:   (downloads)
.. |docker_kmc| image:: https://quay.io/repository/biocontainers/kmc/status
   :target: https://quay.io/repository/biocontainers/kmc
.. _`kmc/tags`: https://quay.io/repository/biocontainers/kmc?tab=tags


.. raw:: html

    <script>
        var package = "kmc";
        var versions = ["3.2.4","3.2.4","3.2.4","3.2.4","3.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmc/README.html