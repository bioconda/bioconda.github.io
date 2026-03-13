:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'alfred'
.. highlight: bash

alfred
======

.. conda:recipe:: alfred
   :replaces_section_title:
   :noindex:

   BAM alignment statistics\, feature counting and feature annotation

   :homepage: https://github.com/tobiasrausch/alfred
   :documentation: https://github.com/tobiasrausch/alfred/blob/v0.5.1/README.md
   
   :license: BSD / BSD-3-Clause
   :recipe: /`alfred <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alfred>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/alfred/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty1007`, biotools: :biotools:`alfred`

   


.. conda:package:: alfred

   |downloads_alfred| |docker_alfred|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.1-0</code>,  <code>0.3.2-1</code>,  <code>0.3.2-0</code>,  <code>0.3.1-2</code>,  <code>0.3.1-1</code>,  <code>0.3.1-0</code>,  <code>0.2.8-0</code>,  <code>0.2.7-2</code>,  <code>0.2.7-1</code>,  </span></summary>
      

      ``0.5.1-0``,  ``0.3.2-1``,  ``0.3.2-0``,  ``0.3.1-2``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.2.8-0``,  ``0.2.7-2``,  ``0.2.7-1``,  ``0.2.7-0``,  ``0.2.6-2``,  ``0.2.6-1``,  ``0.2.6-0``,  ``0.2.5-2``,  ``0.2.5-1``,  ``0.2.5-0``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.1-2``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.1.19-0``,  ``0.1.18-0``,  ``0.1.17-2``,  ``0.1.17-1``,  ``0.1.17-0``,  ``0.1.16-1``,  ``0.1.16-0``,  ``0.1.15-0``,  ``0.1.13-0``,  ``0.1.12-1``,  ``0.1.12-0``,  ``0.1.9-0``,  ``0.1.8-1``,  ``0.1.8-0``,  ``0.1.7-2``,  ``0.1.7-1``,  ``0.1.7-0``,  ``0.1.6-2``,  ``0.1.5-4``,  ``0.1.5-3``,  ``0.1.5-2``,  ``0.1.5-1``,  ``0.1.3-4``,  ``0.1.3-3``,  ``0.1.3-2``,  ``0.1.3-1``,  ``0.1.2-4``,  ``0.1.2-3``,  ``0.1.2-2``,  ``0.1.2-1``

      
      .. raw:: html

         </details>
      

   
   :depends on boost-cpp: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on htslib: ``>=1.22.1,<1.23.0a0``
   :depends on libdeflate: ``>=1.22,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

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

    pixi global install alfred

to add into an existing workspace instead, run::

    pixi add alfred

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install alfred

Alternatively, to install into a new environment, run::

    conda create -n envname alfred

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/alfred:<tag>

(see `alfred/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_alfred| image:: https://img.shields.io/conda/dn/bioconda/alfred.svg?style=flat
   :target: https://anaconda.org/bioconda/alfred
   :alt:   (downloads)
.. |docker_alfred| image:: https://quay.io/repository/biocontainers/alfred/status
   :target: https://quay.io/repository/biocontainers/alfred
.. _`alfred/tags`: https://quay.io/repository/biocontainers/alfred?tab=tags


.. raw:: html

    <script>
        var package = "alfred";
        var versions = ["0.5.1","0.3.2","0.3.2","0.3.1","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/alfred/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/alfred/README.html