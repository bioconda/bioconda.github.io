:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lrzip'
.. highlight: bash

lrzip
=====

.. conda:recipe:: lrzip
   :replaces_section_title:
   :noindex:

   Long Range ZIP or Lzma RZIP. This is a compression program optimised for large files. The larger the file and the more memory you have\, the better the compression advantage this will provide\, especially once the files are larger than 100MB. The advantage can be chosen to be either size \(much smaller than bzip2\) or speed \(much faster than bzip2\).

   :homepage: https://github.com/ckolivas/lrzip
   :license: GPLv2
   :recipe: /`lrzip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lrzip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lrzip/meta.yaml>`_

   


.. conda:package:: lrzip

   |downloads_lrzip| |docker_lrzip|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.651-1</code>,  <code>0.651-0</code>,  <code>0.621-7</code>,  <code>0.621-6</code>,  <code>0.621-5</code>,  <code>0.621-4</code>,  <code>0.621-3</code>,  <code>0.621-2</code>,  <code>0.621-1</code>,  </span></summary>
      

      ``0.651-1``,  ``0.651-0``,  ``0.621-7``,  ``0.621-6``,  ``0.621-5``,  ``0.621-4``,  ``0.621-3``,  ``0.621-2``,  ``0.621-1``,  ``0.621-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on lz4-c: ``>=1.9.3,<1.10.0a0``
   :depends on lzo: ``>=2.10,<3.0a0``
   :depends on zlib: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install lrzip

to add into an existing workspace instead, run::

    pixi add lrzip

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lrzip

Alternatively, to install into a new environment, run::

    conda create -n envname lrzip

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lrzip:<tag>

(see `lrzip/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lrzip| image:: https://img.shields.io/conda/dn/bioconda/lrzip.svg?style=flat
   :target: https://anaconda.org/bioconda/lrzip
   :alt:   (downloads)
.. |docker_lrzip| image:: https://quay.io/repository/biocontainers/lrzip/status
   :target: https://quay.io/repository/biocontainers/lrzip
.. _`lrzip/tags`: https://quay.io/repository/biocontainers/lrzip?tab=tags


.. raw:: html

    <script>
        var package = "lrzip";
        var versions = ["0.651","0.651","0.621","0.621","0.621"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lrzip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lrzip/README.html