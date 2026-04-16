:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pandaseq'
.. highlight: bash

pandaseq
========

.. conda:recipe:: pandaseq
   :replaces_section_title:
   :noindex:

   PANDASEQ is a program to align Illumina reads\, optionally with PCR primers embedded in the sequence\, and reconstruct an overlapping sequence.

   :homepage: https://github.com/neufeld/pandaseq
   :license: GPL3
   :recipe: /`pandaseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pandaseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pandaseq/meta.yaml>`_

   


.. conda:package:: pandaseq

   |downloads_pandaseq| |docker_pandaseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.11-10</code>,  <code>2.11-9</code>,  <code>2.11-8</code>,  <code>2.11-7</code>,  <code>2.11-6</code>,  <code>2.11-5</code>,  <code>2.11-4</code>,  <code>2.11-3</code>,  <code>2.11-2</code>,  </span></summary>
      

      ``2.11-10``,  ``2.11-9``,  ``2.11-8``,  ``2.11-7``,  ``2.11-6``,  ``2.11-5``,  ``2.11-4``,  ``2.11-3``,  ``2.11-2``,  ``2.11-1``,  ``2.10-0``,  ``2.8.1-8``,  ``2.8.1-7``,  ``2.8.1-6``,  ``2.8.1-5``,  ``2.8.1-4``,  ``2.8.1-3``,  ``2.8.1-2``,  ``2.8.1-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

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

    pixi global install pandaseq

to add into an existing workspace instead, run::

    pixi add pandaseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pandaseq

Alternatively, to install into a new environment, run::

    conda create -n envname pandaseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pandaseq:<tag>

(see `pandaseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pandaseq| image:: https://img.shields.io/conda/dn/bioconda/pandaseq.svg?style=flat
   :target: https://anaconda.org/bioconda/pandaseq
   :alt:   (downloads)
.. |docker_pandaseq| image:: https://quay.io/repository/biocontainers/pandaseq/status
   :target: https://quay.io/repository/biocontainers/pandaseq
.. _`pandaseq/tags`: https://quay.io/repository/biocontainers/pandaseq?tab=tags


.. raw:: html

    <script>
        var package = "pandaseq";
        var versions = ["2.11","2.11","2.11","2.11","2.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pandaseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pandaseq/README.html