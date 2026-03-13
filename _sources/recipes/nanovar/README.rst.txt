:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanovar'
.. highlight: bash

nanovar
=======

.. conda:recipe:: nanovar
   :replaces_section_title:
   :noindex:

   Structural variant caller using low\-depth long reads

   :homepage: https://github.com/cytham/nanovar
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`nanovar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanovar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanovar/meta.yaml>`_

   


.. conda:package:: nanovar

   |downloads_nanovar| |docker_nanovar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.3-1</code>,  <code>1.8.3-0</code>,  <code>1.8.2-0</code>,  <code>1.8.1-1</code>,  <code>1.8.1-0</code>,  <code>1.8.0-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.1-2</code>,  </span></summary>
      

      ``1.8.3-1``,  ``1.8.3-0``,  ``1.8.2-0``,  ``1.8.1-1``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.1-2``,  ``1.4.1-1``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.9-1``,  ``1.3.9-0``,  ``1.3.8-1``,  ``1.3.8-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.7-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: ``>=2.26.0``
   :depends on biopython: ``>=1.82``
   :depends on bs4: ``>=0.0.2``
   :depends on libgcc: ``>=14``
   :depends on matplotlib-base: ``>=2.2.3``
   :depends on minimap2: ``>=2.17``
   :depends on natsort: ``>=6.2.0``
   :depends on numpy: ``>=1.17.3,<2.0.0``
   :depends on pandas: ``>=2.2.3``
   :depends on pybedtools: ``>=0.8.2``
   :depends on pysam: ``>=0.15.3``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on samtools: ``>=1.3``
   :depends on scipy: ``>=1.2.1``
   :depends on tensorflow-cpu: ``>=2.0.0,<=2.15.1``

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

    pixi global install nanovar

to add into an existing workspace instead, run::

    pixi add nanovar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nanovar

Alternatively, to install into a new environment, run::

    conda create -n envname nanovar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nanovar:<tag>

(see `nanovar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nanovar| image:: https://img.shields.io/conda/dn/bioconda/nanovar.svg?style=flat
   :target: https://anaconda.org/bioconda/nanovar
   :alt:   (downloads)
.. |docker_nanovar| image:: https://quay.io/repository/biocontainers/nanovar/status
   :target: https://quay.io/repository/biocontainers/nanovar
.. _`nanovar/tags`: https://quay.io/repository/biocontainers/nanovar?tab=tags


.. raw:: html

    <script>
        var package = "nanovar";
        var versions = ["1.8.3","1.8.3","1.8.2","1.8.1","1.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanovar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanovar/README.html