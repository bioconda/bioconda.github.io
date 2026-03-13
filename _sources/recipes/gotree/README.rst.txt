:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gotree'
.. highlight: bash

gotree
======

.. conda:recipe:: gotree
   :replaces_section_title:
   :noindex:

   gotree is a set of command line tools to manipulate phylogenetic trees.

   :homepage: https://github.com/evolbioinfo/gotree
   :documentation: https://github.com/evolbioinfo/gotree/blob/v0.5.1/README.md
   
   :license: GPL / GPL-2.0-or-later
   :recipe: /`gotree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gotree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gotree/meta.yaml>`_
   :links: doi: :doi:`10.1093/nargab/lqab075`, biotools: :biotools:`gotree`

   


.. conda:package:: gotree

   |downloads_gotree| |docker_gotree|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.5-0</code>,  <code>0.4.4-0</code>,  <code>0.4.3-2</code>,  <code>0.4.3-1</code>,  <code>0.4.3-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-1</code>,  </span></summary>
      

      ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-2``,  ``0.4.3-1``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.2.10-1``,  ``0.2.10-0``

      
      .. raw:: html

         </details>
      

   

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

    pixi global install gotree

to add into an existing workspace instead, run::

    pixi add gotree

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gotree

Alternatively, to install into a new environment, run::

    conda create -n envname gotree

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gotree:<tag>

(see `gotree/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gotree| image:: https://img.shields.io/conda/dn/bioconda/gotree.svg?style=flat
   :target: https://anaconda.org/bioconda/gotree
   :alt:   (downloads)
.. |docker_gotree| image:: https://quay.io/repository/biocontainers/gotree/status
   :target: https://quay.io/repository/biocontainers/gotree
.. _`gotree/tags`: https://quay.io/repository/biocontainers/gotree?tab=tags


.. raw:: html

    <script>
        var package = "gotree";
        var versions = ["0.5.1","0.5.0","0.4.5","0.4.4","0.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gotree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gotree/README.html