:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'assembly-stats'
.. highlight: bash

assembly-stats
==============

.. conda:recipe:: assembly-stats
   :replaces_section_title:
   :noindex:

   Get assembly statistics from FASTA and FASTQ files

   :homepage: https://github.com/sanger-pathogens/assembly-stats
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`assembly-stats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assembly-stats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/assembly-stats/meta.yaml>`_

   


.. conda:package:: assembly-stats

   |downloads_assembly-stats| |docker_assembly-stats|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.1-10</code>,  <code>1.0.1-9</code>,  <code>1.0.1-8</code>,  <code>1.0.1-7</code>,  <code>1.0.1-6</code>,  <code>1.0.1-5</code>,  <code>1.0.1-4</code>,  <code>1.0.1-3</code>,  <code>1.0.1-2</code>,  </span></summary>
      

      ``1.0.1-10``,  ``1.0.1-9``,  ``1.0.1-8``,  ``1.0.1-7``,  ``1.0.1-6``,  ``1.0.1-5``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      
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

    pixi global install assembly-stats

to add into an existing workspace instead, run::

    pixi add assembly-stats

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install assembly-stats

Alternatively, to install into a new environment, run::

    conda create -n envname assembly-stats

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/assembly-stats:<tag>

(see `assembly-stats/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_assembly-stats| image:: https://img.shields.io/conda/dn/bioconda/assembly-stats.svg?style=flat
   :target: https://anaconda.org/bioconda/assembly-stats
   :alt:   (downloads)
.. |docker_assembly-stats| image:: https://quay.io/repository/biocontainers/assembly-stats/status
   :target: https://quay.io/repository/biocontainers/assembly-stats
.. _`assembly-stats/tags`: https://quay.io/repository/biocontainers/assembly-stats?tab=tags


.. raw:: html

    <script>
        var package = "assembly-stats";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/assembly-stats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/assembly-stats/README.html