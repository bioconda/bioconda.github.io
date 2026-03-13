:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-struct'
.. highlight: bash

bioconductor-struct
===================

.. conda:recipe:: bioconductor-struct
   :replaces_section_title:
   :noindex:

   Statistics in R Using Class\-based Templates

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/struct.html
   :license: GPL-3
   :recipe: /`bioconductor-struct <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-struct>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-struct/meta.yaml>`_

   Defines and includes a set of class\-based templates for developing and implementing data processing and analysis workflows\, with a strong emphasis on statistics and machine learning. The templates can be used and where needed extended to \'wrap\' tools and methods from other packages into a common standardised structure to allow for effective and fast integration. Model objects can be combined into sequences\, and sequences nested in iterators using overloaded operators to simplify and improve readability of the code. Ontology lookup has been integrated and implemented to provide standardised definitions for methods\, inputs and outputs wrapped using the class\-based templates.


.. conda:package:: bioconductor-struct

   |downloads_bioconductor-struct| |docker_bioconductor-struct|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.1-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.22.1-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-rols: ``>=3.6.0,<3.7.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-knitr: 
   :depends on r-ontologyindex: 

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

    pixi global install bioconductor-struct

to add into an existing workspace instead, run::

    pixi add bioconductor-struct

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-struct

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-struct

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-struct:<tag>

(see `bioconductor-struct/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-struct| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-struct.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-struct
   :alt:   (downloads)
.. |docker_bioconductor-struct| image:: https://quay.io/repository/biocontainers/bioconductor-struct/status
   :target: https://quay.io/repository/biocontainers/bioconductor-struct
.. _`bioconductor-struct/tags`: https://quay.io/repository/biocontainers/bioconductor-struct?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-struct";
        var versions = ["1.22.1","1.18.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-struct/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-struct/README.html