:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clever-toolkit'
.. highlight: bash

clever-toolkit
==============

.. conda:recipe:: clever-toolkit
   :replaces_section_title:
   :noindex:

   The CLEVER Toolkit.

   :homepage: https://bitbucket.org/tobiasmarschall/clever-toolkit
   :documentation: https://bitbucket.org/tobiasmarschall/clever-toolkit/wiki/Home
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`clever-toolkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clever-toolkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clever-toolkit/meta.yaml>`_

   CTK is a suite of tools to analyze next\-generation sequencing data and\, in particular\, to discover and genotype insertions and deletions from paired\-end reads.


.. conda:package:: clever-toolkit

   |downloads_clever-toolkit| |docker_clever-toolkit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4-14</code>,  <code>2.4-13</code>,  <code>2.4-12</code>,  <code>2.4-11</code>,  <code>2.4-10</code>,  <code>2.4-9</code>,  <code>2.4-8</code>,  <code>2.4-7</code>,  <code>2.4-6</code>,  </span></summary>
      

      ``2.4-14``,  ``2.4-13``,  ``2.4-12``,  ``2.4-11``,  ``2.4-10``,  ``2.4-9``,  ``2.4-8``,  ``2.4-7``,  ``2.4-6``,  ``2.4-5``,  ``2.4-0``,  ``2.3-0``,  ``2.2.1-0``,  ``2.1-3``,  ``2.0rc4-3``,  ``2.0rc4-2``,  ``2.0rc3-1``,  ``2.0rc3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: 
   :depends on bwa: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on matplotlib-base: 
   :depends on python: ``3.*``
   :depends on samtools: 

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

    pixi global install clever-toolkit

to add into an existing workspace instead, run::

    pixi add clever-toolkit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install clever-toolkit

Alternatively, to install into a new environment, run::

    conda create -n envname clever-toolkit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/clever-toolkit:<tag>

(see `clever-toolkit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_clever-toolkit| image:: https://img.shields.io/conda/dn/bioconda/clever-toolkit.svg?style=flat
   :target: https://anaconda.org/bioconda/clever-toolkit
   :alt:   (downloads)
.. |docker_clever-toolkit| image:: https://quay.io/repository/biocontainers/clever-toolkit/status
   :target: https://quay.io/repository/biocontainers/clever-toolkit
.. _`clever-toolkit/tags`: https://quay.io/repository/biocontainers/clever-toolkit?tab=tags


.. raw:: html

    <script>
        var package = "clever-toolkit";
        var versions = ["2.4","2.4","2.4","2.4","2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clever-toolkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clever-toolkit/README.html