:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-consensusseeker'
.. highlight: bash

bioconductor-consensusseeker
============================

.. conda:recipe:: bioconductor-consensusseeker
   :replaces_section_title:
   :noindex:

   Detection of consensus regions inside a group of experiences using genomic positions and genomic ranges

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/consensusSeekeR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-consensusseeker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-consensusseeker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-consensusseeker/meta.yaml>`_
   :links: biotools: :biotools:`consensusseeker`, doi: :doi:`10.1515/sagmb-2014-0098`

   This package compares genomic positions and genomic ranges from multiple experiments to extract common regions. The size of the analyzed region is adjustable as well as the number of experiences in which a feature must be present in a potential region to tag this region as a consensus region. In genomic analysis where feature identification generates a position value surrounded by a genomic range\, such as ChIP\-Seq peaks and nucleosome positions\, the replication of an experiment may result in slight differences between predicted values. This package enables the conciliation of the results into consensus regions.


.. conda:package:: bioconductor-consensusseeker

   |downloads_bioconductor-consensusseeker| |docker_bioconductor-consensusseeker|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-stringr: 

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

    pixi global install bioconductor-consensusseeker

to add into an existing workspace instead, run::

    pixi add bioconductor-consensusseeker

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-consensusseeker

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-consensusseeker

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-consensusseeker:<tag>

(see `bioconductor-consensusseeker/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-consensusseeker| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-consensusseeker.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-consensusseeker
   :alt:   (downloads)
.. |docker_bioconductor-consensusseeker| image:: https://quay.io/repository/biocontainers/bioconductor-consensusseeker/status
   :target: https://quay.io/repository/biocontainers/bioconductor-consensusseeker
.. _`bioconductor-consensusseeker/tags`: https://quay.io/repository/biocontainers/bioconductor-consensusseeker?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-consensusseeker";
        var versions = ["1.38.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-consensusseeker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-consensusseeker/README.html