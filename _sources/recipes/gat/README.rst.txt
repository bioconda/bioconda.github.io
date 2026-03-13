:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gat'
.. highlight: bash

gat
===

.. conda:recipe:: gat
   :replaces_section_title:
   :noindex:

   Genomic Association Tester

   :homepage: https://github.com/AndreasHeger/gat
   :license: MIT
   :recipe: /`gat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gat/meta.yaml>`_
   :links: biotools: :biotools:`gat`, doi: :doi:`10.1093/bioinformatics/btt343`

   


.. conda:package:: gat

   |downloads_gat| |docker_gat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.6-4</code>,  <code>1.3.6-3</code>,  <code>1.3.6-2</code>,  <code>1.3.6-1</code>,  <code>1.3.6-0</code>,  <code>1.3.5-3</code>,  <code>1.3.5-2</code>,  <code>1.3.5-1</code>,  <code>1.3.5-0</code>,  </span></summary>
      

      ``1.3.6-4``,  ``1.3.6-3``,  ``1.3.6-2``,  ``1.3.6-1``,  ``1.3.6-0``,  ``1.3.5-3``,  ``1.3.5-2``,  ``1.3.5-1``,  ``1.3.5-0``,  ``1.3.3-0``,  ``1.2.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on libzlib: ``>=1.2.11,<1.3.0a0``
   :depends on matplotlib: ``>=1.3.0``
   :depends on numpy: ``>=1.7``
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27mu``
   :depends on scipy: ``>=0.11``
   :depends on zlib: ``>=1.2.11,<1.3.0a0``

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

    pixi global install gat

to add into an existing workspace instead, run::

    pixi add gat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gat

Alternatively, to install into a new environment, run::

    conda create -n envname gat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gat:<tag>

(see `gat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gat| image:: https://img.shields.io/conda/dn/bioconda/gat.svg?style=flat
   :target: https://anaconda.org/bioconda/gat
   :alt:   (downloads)
.. |docker_gat| image:: https://quay.io/repository/biocontainers/gat/status
   :target: https://quay.io/repository/biocontainers/gat
.. _`gat/tags`: https://quay.io/repository/biocontainers/gat?tab=tags


.. raw:: html

    <script>
        var package = "gat";
        var versions = ["1.3.6","1.3.6","1.3.6","1.3.6","1.3.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gat/README.html