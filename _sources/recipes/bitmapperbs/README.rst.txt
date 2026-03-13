:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bitmapperbs'
.. highlight: bash

bitmapperbs
===========

.. conda:recipe:: bitmapperbs
   :replaces_section_title:
   :noindex:

   BitMapperBS\: a fast and accurate read aligner for whole\-genome bisulfite sequencing

   :homepage: https://github.com/chhylp123/BitMapperBS
   :license: Apache License 2
   :recipe: /`bitmapperbs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bitmapperbs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bitmapperbs/meta.yaml>`_

   


.. conda:package:: bitmapperbs

   |downloads_bitmapperbs| |docker_bitmapperbs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.2.3-6</code>,  <code>1.0.2.3-5</code>,  <code>1.0.2.3-4</code>,  <code>1.0.2.3-3</code>,  <code>1.0.2.3-2</code>,  <code>1.0.2.3-1</code>,  <code>1.0.2.3-0</code>,  <code>1.0.2.1-0</code>,  <code>1.0.2.0-0</code>,  </span></summary>
      

      ``1.0.2.3-6``,  ``1.0.2.3-5``,  ``1.0.2.3-4``,  ``1.0.2.3-3``,  ``1.0.2.3-2``,  ``1.0.2.3-1``,  ``1.0.2.3-0``,  ``1.0.2.1-0``,  ``1.0.2.0-0``,  ``1.0.1.6-0``,  ``1.0.1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libdivsufsort: ``>=2.0.2,<2.1.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.6.3,<6.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on xz: 
   :depends on zlib: 

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

    pixi global install bitmapperbs

to add into an existing workspace instead, run::

    pixi add bitmapperbs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bitmapperbs

Alternatively, to install into a new environment, run::

    conda create -n envname bitmapperbs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bitmapperbs:<tag>

(see `bitmapperbs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bitmapperbs| image:: https://img.shields.io/conda/dn/bioconda/bitmapperbs.svg?style=flat
   :target: https://anaconda.org/bioconda/bitmapperbs
   :alt:   (downloads)
.. |docker_bitmapperbs| image:: https://quay.io/repository/biocontainers/bitmapperbs/status
   :target: https://quay.io/repository/biocontainers/bitmapperbs
.. _`bitmapperbs/tags`: https://quay.io/repository/biocontainers/bitmapperbs?tab=tags


.. raw:: html

    <script>
        var package = "bitmapperbs";
        var versions = ["1.0.2.3","1.0.2.3","1.0.2.3","1.0.2.3","1.0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bitmapperbs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bitmapperbs/README.html