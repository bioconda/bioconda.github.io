:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shorah'
.. highlight: bash

shorah
======

.. conda:recipe:: shorah/1.99.0
   :replaces_section_title:
   :noindex:

   The Short Reads Assembly into Haplotypes \(ShoRAH\) program for inferring viral haplotypes from NGS data

   :homepage: https://github.com/cbg-ethz/shorah
   :license: GPL3 / GPLv3
   :recipe: /`shorah <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shorah>`_/`1.99.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shorah/1.99.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shorah/1.99.0/meta.yaml>`_
   :links: biotools: :biotools:`shorah`

   


.. conda:package:: shorah

   |downloads_shorah| |docker_shorah|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.99.2-8</code>,  <code>1.99.2-7</code>,  <code>1.99.2-6</code>,  <code>1.99.2-5</code>,  <code>1.99.2-4</code>,  <code>1.99.2-3</code>,  <code>1.99.2-2</code>,  <code>1.99.2-1</code>,  <code>1.99.2-0</code>,  </span></summary>
      

      ``1.99.2-8``,  ``1.99.2-7``,  ``1.99.2-6``,  ``1.99.2-5``,  ``1.99.2-4``,  ``1.99.2-3``,  ``1.99.2-2``,  ``1.99.2-1``,  ``1.99.2-0``,  ``1.99.1-1``,  ``1.99.1-0``,  ``1.99.0-8``,  ``1.99.0-7``,  ``1.99.0-6``,  ``1.99.0-5``,  ``1.99.0-4``,  ``1.99.0-3``,  ``1.99.0-2``,  ``1.99.0-1``,  ``1.99.0-0``,  ``1.1.3-11``,  ``1.1.3-10``,  ``1.1.3-9``,  ``1.1.3-8``,  ``1.1.3-7``,  ``1.1.3-6``,  ``1.1.3-5``,  ``1.1.3-4``,  ``1.1.3-2``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on biopython: 
   :depends on htslib: ``>=1.17,<1.24.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``
   :depends on numpy: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

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

    pixi global install shorah

to add into an existing workspace instead, run::

    pixi add shorah

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install shorah

Alternatively, to install into a new environment, run::

    conda create -n envname shorah

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/shorah:<tag>

(see `shorah/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_shorah| image:: https://img.shields.io/conda/dn/bioconda/shorah.svg?style=flat
   :target: https://anaconda.org/bioconda/shorah
   :alt:   (downloads)
.. |docker_shorah| image:: https://quay.io/repository/biocontainers/shorah/status
   :target: https://quay.io/repository/biocontainers/shorah
.. _`shorah/tags`: https://quay.io/repository/biocontainers/shorah?tab=tags


.. raw:: html

    <script>
        var package = "shorah";
        var versions = ["1.99.2","1.99.2","1.99.2","1.99.2","1.99.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shorah/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shorah/README.html