:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicsupersignature'
.. highlight: bash

bioconductor-genomicsupersignature
==================================

.. conda:recipe:: bioconductor-genomicsupersignature
   :replaces_section_title:
   :noindex:

   Interpretation of RNA\-seq experiments through robust\, efficient comparison to public databases

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GenomicSuperSignature.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomicsupersignature <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicsupersignature>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicsupersignature/meta.yaml>`_

   This package provides a novel method for interpreting new transcriptomic datasets through near\-instantaneous comparison to public archives without high\-performance computing requirements. Through the pre\-computed index\, users can identify public resources associated with their dataset such as gene sets\, MeSH term\, and publication. Functions to identify interpretable annotations and intuitive visualization options are implemented in this package.


.. conda:package:: bioconductor-genomicsupersignature

   |downloads_bioconductor-genomicsupersignature| |docker_bioconductor-genomicsupersignature|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.1-0``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-flextable: 
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-irlba: 
   :depends on r-plotly: 

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

    pixi global install bioconductor-genomicsupersignature

to add into an existing workspace instead, run::

    pixi add bioconductor-genomicsupersignature

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-genomicsupersignature

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-genomicsupersignature

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-genomicsupersignature:<tag>

(see `bioconductor-genomicsupersignature/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-genomicsupersignature| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicsupersignature.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicsupersignature
   :alt:   (downloads)
.. |docker_bioconductor-genomicsupersignature| image:: https://quay.io/repository/biocontainers/bioconductor-genomicsupersignature/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicsupersignature
.. _`bioconductor-genomicsupersignature/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicsupersignature?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomicsupersignature";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicsupersignature/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicsupersignature/README.html