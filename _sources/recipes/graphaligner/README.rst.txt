:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graphaligner'
.. highlight: bash

graphaligner
============

.. conda:recipe:: graphaligner
   :replaces_section_title:
   :noindex:

   Sequence to graph aligner for long reads.

   :homepage: https://github.com/maickrau/GraphAligner
   :documentation: https://github.com/maickrau/GraphAligner/blob/v1.0.20/README.md
   
   :license: MIT / MIT
   :recipe: /`graphaligner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphaligner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphaligner/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-020-02157-2`

   


.. conda:package:: graphaligner

   |downloads_graphaligner| |docker_graphaligner|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.20-1</code>,  <code>1.0.20-0</code>,  <code>1.0.19-1</code>,  <code>1.0.19-0</code>,  <code>1.0.18-0</code>,  <code>1.0.17-0</code>,  <code>1.0.17b-2</code>,  <code>1.0.17b-1</code>,  <code>1.0.17b-0</code>,  </span></summary>
      

      ``1.0.20-1``,  ``1.0.20-0``,  ``1.0.19-1``,  ``1.0.19-0``,  ``1.0.18-0``,  ``1.0.17-0``,  ``1.0.17b-2``,  ``1.0.17b-1``,  ``1.0.17b-0``,  ``1.0.16-1``,  ``1.0.16-0``,  ``1.0.15-1``,  ``1.0.15-0``,  ``1.0.14-1``,  ``1.0.14-0``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.11-0``,  ``1.0.10-0``,  ``1.0.9-1``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bamtools: ``>=2.5.3,<3.0a0``
   :depends on jemalloc: ``5.2.0``
   :depends on libdivsufsort: ``>=2.0.2,<2.1.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on protobuf: ``<5``

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

    pixi global install graphaligner

to add into an existing workspace instead, run::

    pixi add graphaligner

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install graphaligner

Alternatively, to install into a new environment, run::

    conda create -n envname graphaligner

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/graphaligner:<tag>

(see `graphaligner/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_graphaligner| image:: https://img.shields.io/conda/dn/bioconda/graphaligner.svg?style=flat
   :target: https://anaconda.org/bioconda/graphaligner
   :alt:   (downloads)
.. |docker_graphaligner| image:: https://quay.io/repository/biocontainers/graphaligner/status
   :target: https://quay.io/repository/biocontainers/graphaligner
.. _`graphaligner/tags`: https://quay.io/repository/biocontainers/graphaligner?tab=tags


.. raw:: html

    <script>
        var package = "graphaligner";
        var versions = ["1.0.20","1.0.20","1.0.19","1.0.19","1.0.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graphaligner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graphaligner/README.html