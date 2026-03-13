:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mash'
.. highlight: bash

mash
====

.. conda:recipe:: mash
   :replaces_section_title:
   :noindex:

   Fast sequence distance estimator that uses MinHash.

   :homepage: https://github.com/marbl/Mash
   :documentation: https://mash.readthedocs.io/en/latest
   
   :license: https://github.com/marbl/Mash/blob/master/LICENSE.txt
   :recipe: /`mash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mash/meta.yaml>`_
   :links: biotools: :biotools:`mash`, usegalaxy-eu: :usegalaxy-eu:`mash_screen`, usegalaxy-eu: :usegalaxy-eu:`mash_sketch`, doi: :doi:`10.1186/s13059-016-0997-x`, doi: :doi:`10.1186/s13059-019-1841-x`

   


.. conda:package:: mash

   |downloads_mash| |docker_mash|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3-10</code>,  <code>2.3-9</code>,  <code>2.3-8</code>,  <code>2.3-7</code>,  <code>2.3-6</code>,  <code>2.3-5</code>,  <code>2.3-4</code>,  <code>2.3-3</code>,  <code>2.3-2</code>,  </span></summary>
      

      ``2.3-10``,  ``2.3-9``,  ``2.3-8``,  ``2.3-7``,  ``2.3-6``,  ``2.3-5``,  ``2.3-4``,  ``2.3-3``,  ``2.3-2``,  ``2.3-1``,  ``2.3-0``,  ``2.2.2-2``,  ``2.2.2-1``,  ``2.2.2-0``,  ``2.2.1-1``,  ``2.2.1-0``,  ``2.2-0``,  ``2.1.1-0``,  ``2.1-1``,  ``2.1-0``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``,  ``1.1-0``,  ``1.0.2-2``,  ``1.0.2-1``

      
      .. raw:: html

         </details>
      

   
   :depends on capnproto: ``>=1.0.2,<1.0.3.0a0``
   :depends on gsl: ``>=2.8,<2.9.0a0``
   :depends on libcblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: 
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx: 
   :depends on libstdcxx-ng: ``>=12``
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

    pixi global install mash

to add into an existing workspace instead, run::

    pixi add mash

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mash

Alternatively, to install into a new environment, run::

    conda create -n envname mash

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mash:<tag>

(see `mash/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mash| image:: https://img.shields.io/conda/dn/bioconda/mash.svg?style=flat
   :target: https://anaconda.org/bioconda/mash
   :alt:   (downloads)
.. |docker_mash| image:: https://quay.io/repository/biocontainers/mash/status
   :target: https://quay.io/repository/biocontainers/mash
.. _`mash/tags`: https://quay.io/repository/biocontainers/mash?tab=tags


.. raw:: html

    <script>
        var package = "mash";
        var versions = ["2.3","2.3","2.3","2.3","2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mash/README.html