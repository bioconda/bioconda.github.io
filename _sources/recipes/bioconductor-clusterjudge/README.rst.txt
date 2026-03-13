:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clusterjudge'
.. highlight: bash

bioconductor-clusterjudge
=========================

.. conda:recipe:: bioconductor-clusterjudge
   :replaces_section_title:
   :noindex:

   Judging Quality of Clustering Methods using Mutual Information

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/ClusterJudge.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-clusterjudge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterjudge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterjudge/meta.yaml>`_

   ClusterJudge implements the functions\, examples and other software published as an algorithm by Gibbons\, FD and Roth FP. The article is called \"Judging the Quality of Gene Expression\-Based Clustering Methods Using Gene Annotation\" and it appeared in Genome Research\, vol. 12\, pp1574\-1581 \(2002\). See package\?ClusterJudge for an overview.


.. conda:package:: bioconductor-clusterjudge

   |downloads_bioconductor-clusterjudge| |docker_bioconductor-clusterjudge|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.1-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-httr: 
   :depends on r-infotheo: 
   :depends on r-jsonlite: 
   :depends on r-lattice: 
   :depends on r-latticeextra: 

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

    pixi global install bioconductor-clusterjudge

to add into an existing workspace instead, run::

    pixi add bioconductor-clusterjudge

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-clusterjudge

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-clusterjudge

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-clusterjudge:<tag>

(see `bioconductor-clusterjudge/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-clusterjudge| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clusterjudge.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clusterjudge
   :alt:   (downloads)
.. |docker_bioconductor-clusterjudge| image:: https://quay.io/repository/biocontainers/bioconductor-clusterjudge/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clusterjudge
.. _`bioconductor-clusterjudge/tags`: https://quay.io/repository/biocontainers/bioconductor-clusterjudge?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-clusterjudge";
        var versions = ["1.32.0","1.28.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clusterjudge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clusterjudge/README.html