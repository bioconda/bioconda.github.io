:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-survtype'
.. highlight: bash

bioconductor-survtype
=====================

.. conda:recipe:: bioconductor-survtype
   :replaces_section_title:
   :noindex:

   Subtype Identification with Survival Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/survtype.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-survtype <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-survtype>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-survtype/meta.yaml>`_

   Subtypes are defined as groups of samples that have distinct molecular and clinical features. Genomic data can be analyzed for discovering patient subtypes\, associated with clinical data\, especially for survival information. This package is aimed to identify subtypes that are both clinically relevant and biologically meaningful.


.. conda:package:: bioconductor-survtype

   |downloads_bioconductor-survtype| |docker_bioconductor-survtype|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-clustvarsel: 
   :depends on r-pheatmap: 
   :depends on r-survival: 
   :depends on r-survminer: 

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

    pixi global install bioconductor-survtype

to add into an existing workspace instead, run::

    pixi add bioconductor-survtype

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-survtype

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-survtype

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-survtype:<tag>

(see `bioconductor-survtype/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-survtype| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-survtype.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-survtype
   :alt:   (downloads)
.. |docker_bioconductor-survtype| image:: https://quay.io/repository/biocontainers/bioconductor-survtype/status
   :target: https://quay.io/repository/biocontainers/bioconductor-survtype
.. _`bioconductor-survtype/tags`: https://quay.io/repository/biocontainers/bioconductor-survtype?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-survtype";
        var versions = ["1.26.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-survtype/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-survtype/README.html