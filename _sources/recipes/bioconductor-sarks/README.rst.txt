:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sarks'
.. highlight: bash

bioconductor-sarks
==================

.. conda:recipe:: bioconductor-sarks
   :replaces_section_title:
   :noindex:

   Suffix Array Kernel Smoothing for discovery of correlative sequence motifs and multi\-motif domains

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/sarks.html
   :license: BSD_3_clause + file LICENSE
   :recipe: /`bioconductor-sarks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sarks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sarks/meta.yaml>`_

   Suffix Array Kernel Smoothing \(see https\:\/\/academic.oup.com\/bioinformatics\/article\-abstract\/35\/20\/3944\/5418797\)\, or SArKS\, identifies sequence motifs whose presence correlates with numeric scores \(such as differential expression statistics\) assigned to the sequences \(such as gene promoters\). SArKS smooths over sequence similarity\, quantified by location within a suffix array based on the full set of input sequences. A second round of smoothing over spatial proximity within sequences reveals multi\-motif domains. Discovered motifs can then be merged or extended based on adjacency within MMDs. False positive rates are estimated and controlled by permutation testing.


.. conda:package:: bioconductor-sarks

   |downloads_bioconductor-sarks| |docker_bioconductor-sarks|

   :versions:
      
      

      ``1.22.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on openjdk: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-binom: 
   :depends on r-cluster: 
   :depends on r-rjava: 

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

    pixi global install bioconductor-sarks

to add into an existing workspace instead, run::

    pixi add bioconductor-sarks

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sarks

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sarks

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sarks:<tag>

(see `bioconductor-sarks/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sarks| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sarks.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sarks
   :alt:   (downloads)
.. |docker_bioconductor-sarks| image:: https://quay.io/repository/biocontainers/bioconductor-sarks/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sarks
.. _`bioconductor-sarks/tags`: https://quay.io/repository/biocontainers/bioconductor-sarks?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sarks";
        var versions = ["1.22.0","1.18.0","1.14.0","1.12.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sarks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sarks/README.html