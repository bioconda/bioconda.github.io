:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bwa-meme'
.. highlight: bash

bwa-meme
========

.. conda:recipe:: bwa-meme
   :replaces_section_title:
   :noindex:

   Faster BWA\-MEM2 using learned\-index

   :homepage: https://github.com/kaist-ina/BWA-MEME
   :license: MIT
   :recipe: /`bwa-meme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwa-meme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwa-meme/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btac137`

   


.. conda:package:: bwa-meme

   |downloads_bwa-meme| |docker_bwa-meme|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.6-2</code>,  <code>1.0.6-1</code>,  <code>1.0.6-0</code>,  <code>1.0.5-0</code>,  <code>1.0.4-2</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-0</code>,  </span></summary>
      

      ``1.0.6-2``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``

   :additional platforms:
      

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

    pixi global install bwa-meme

to add into an existing workspace instead, run::

    pixi add bwa-meme

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bwa-meme

Alternatively, to install into a new environment, run::

    conda create -n envname bwa-meme

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bwa-meme:<tag>

(see `bwa-meme/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bwa-meme| image:: https://img.shields.io/conda/dn/bioconda/bwa-meme.svg?style=flat
   :target: https://anaconda.org/bioconda/bwa-meme
   :alt:   (downloads)
.. |docker_bwa-meme| image:: https://quay.io/repository/biocontainers/bwa-meme/status
   :target: https://quay.io/repository/biocontainers/bwa-meme
.. _`bwa-meme/tags`: https://quay.io/repository/biocontainers/bwa-meme?tab=tags


.. raw:: html

    <script>
        var package = "bwa-meme";
        var versions = ["1.0.6","1.0.6","1.0.6","1.0.5","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bwa-meme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bwa-meme/README.html