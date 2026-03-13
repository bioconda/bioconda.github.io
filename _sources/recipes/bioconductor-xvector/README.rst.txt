:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xvector'
.. highlight: bash

bioconductor-xvector
====================

.. conda:recipe:: bioconductor-xvector
   :replaces_section_title:
   :noindex:

   Foundation of external vector representation and manipulation in Bioconductor

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/XVector.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-xvector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xvector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xvector/meta.yaml>`_
   :links: biotools: :biotools:`xvector`, doi: :doi:`10.1038/nmeth.3252`

   Provides memory efficient S4 classes for storing sequences \"externally\" \(e.g. behind an R external pointer\, or on disk\).


.. conda:package:: bioconductor-xvector

   |downloads_bioconductor-xvector| |docker_bioconductor-xvector|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.50.0-0</code>,  <code>0.46.0-2</code>,  <code>0.46.0-1</code>,  <code>0.46.0-0</code>,  <code>0.42.0-2</code>,  <code>0.42.0-1</code>,  <code>0.42.0-0</code>,  <code>0.40.0-0</code>,  <code>0.38.0-1</code>,  </span></summary>
      

      ``0.50.0-0``,  ``0.46.0-2``,  ``0.46.0-1``,  ``0.46.0-0``,  ``0.42.0-2``,  ``0.42.0-1``,  ``0.42.0-0``,  ``0.40.0-0``,  ``0.38.0-1``,  ``0.38.0-0``,  ``0.34.0-2``,  ``0.34.0-1``,  ``0.34.0-0``,  ``0.32.0-0``,  ``0.30.0-1``,  ``0.30.0-0``,  ``0.28.0-0``,  ``0.26.0-0``,  ``0.24.0-1``,  ``0.22.0-0``,  ``0.20.0-0``,  ``0.18.0-0``,  ``0.16.0-0``,  ``0.14.1-0``,  ``0.12.1-0``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-xvector

to add into an existing workspace instead, run::

    pixi add bioconductor-xvector

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-xvector

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-xvector

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-xvector:<tag>

(see `bioconductor-xvector/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-xvector| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xvector.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xvector
   :alt:   (downloads)
.. |docker_bioconductor-xvector| image:: https://quay.io/repository/biocontainers/bioconductor-xvector/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xvector
.. _`bioconductor-xvector/tags`: https://quay.io/repository/biocontainers/bioconductor-xvector?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-xvector";
        var versions = ["0.50.0","0.46.0","0.46.0","0.46.0","0.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xvector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xvector/README.html