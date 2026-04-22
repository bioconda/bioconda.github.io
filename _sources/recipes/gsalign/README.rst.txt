:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gsalign'
.. highlight: bash

gsalign
=======

.. conda:recipe:: gsalign
   :replaces_section_title:
   :noindex:

   GSAlign\: An ultra\-fast sequence alignment tool

   :homepage: https://github.com/hsinnan75/GSAlign
   :license: MIT / MIT
   :recipe: /`gsalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gsalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gsalign/meta.yaml>`_
   :links: doi: :doi:`10.1101/782193`

   An ultra\-fast sequence alignment tool for genome sequence comparison.


.. conda:package:: gsalign

   |downloads_gsalign| |docker_gsalign|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.22-8</code>,  <code>1.0.22-7</code>,  <code>1.0.22-6</code>,  <code>1.0.22-5</code>,  <code>1.0.22-4</code>,  <code>1.0.22-3</code>,  <code>1.0.22-2</code>,  <code>1.0.22-1</code>,  <code>1.0.22-0</code>,  </span></summary>
      

      ``1.0.22-8``,  ``1.0.22-7``,  ``1.0.22-6``,  ``1.0.22-5``,  ``1.0.22-4``,  ``1.0.22-3``,  ``1.0.22-2``,  ``1.0.22-1``,  ``1.0.22-0``,  ``1.0.21-0``,  ``1.0.20-0``,  ``1.0.16-0``,  ``1.0.15-0``,  ``1.0.14-0``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.11-0``,  ``1.0.10-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-1``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boost-cpp: 
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.8.1,<6.0a0``
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

    pixi global install gsalign

to add into an existing workspace instead, run::

    pixi add gsalign

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gsalign

Alternatively, to install into a new environment, run::

    conda create -n envname gsalign

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gsalign:<tag>

(see `gsalign/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gsalign| image:: https://img.shields.io/conda/dn/bioconda/gsalign.svg?style=flat
   :target: https://anaconda.org/bioconda/gsalign
   :alt:   (downloads)
.. |docker_gsalign| image:: https://quay.io/repository/biocontainers/gsalign/status
   :target: https://quay.io/repository/biocontainers/gsalign
.. _`gsalign/tags`: https://quay.io/repository/biocontainers/gsalign?tab=tags


.. raw:: html

    <script>
        var package = "gsalign";
        var versions = ["1.0.22","1.0.22","1.0.22","1.0.22","1.0.22"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gsalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gsalign/README.html