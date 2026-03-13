:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-organismdbi'
.. highlight: bash

bioconductor-organismdbi
========================

.. conda:recipe:: bioconductor-organismdbi
   :replaces_section_title:
   :noindex:

   Software to enable the smooth interfacing of different database packages

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/OrganismDbi.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-organismdbi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-organismdbi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-organismdbi/meta.yaml>`_
   :links: biotools: :biotools:`organismdbi`, doi: :doi:`10.1038/nmeth.3252`

   The package enables a simple unified interface to several annotation packages each of which has its own schema by taking advantage of the fact that each of these packages implements a select methods.


.. conda:package:: bioconductor-organismdbi

   |downloads_bioconductor-organismdbi| |docker_bioconductor-organismdbi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.48.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.14.1-0``,  ``1.12.1-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-graph: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rbgl: ``>=1.86.0,<1.87.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-biocmanager: 
   :depends on r-dbi: 

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

    pixi global install bioconductor-organismdbi

to add into an existing workspace instead, run::

    pixi add bioconductor-organismdbi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-organismdbi

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-organismdbi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-organismdbi:<tag>

(see `bioconductor-organismdbi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-organismdbi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-organismdbi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-organismdbi
   :alt:   (downloads)
.. |docker_bioconductor-organismdbi| image:: https://quay.io/repository/biocontainers/bioconductor-organismdbi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-organismdbi
.. _`bioconductor-organismdbi/tags`: https://quay.io/repository/biocontainers/bioconductor-organismdbi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-organismdbi";
        var versions = ["1.52.0","1.48.0","1.44.0","1.42.0","1.40.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-organismdbi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-organismdbi/README.html