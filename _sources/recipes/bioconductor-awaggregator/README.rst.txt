:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-awaggregator'
.. highlight: bash

bioconductor-awaggregator
=========================

.. conda:recipe:: bioconductor-awaggregator
   :replaces_section_title:
   :noindex:

   Attribute\-Weighted Aggregation

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/AWAggregator.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-awaggregator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-awaggregator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-awaggregator/meta.yaml>`_

   This package implements an attribute\-weighted aggregation algorithm which leverages peptide\-spectrum match \(PSM\) attributes to provide a more accurate estimate of protein abundance compared to conventional aggregation methods. This algorithm employs pre\-trained random forest models to predict the quantitative inaccuracy of PSMs based on their attributes. PSMs are then aggregated to the protein level using a weighted average\, taking the predicted inaccuracy into account. Additionally\, the package allows users to construct their own training sets that are more relevant to their specific experimental conditions if desired.


.. conda:package:: bioconductor-awaggregator

   |downloads_bioconductor-awaggregator| |docker_bioconductor-awaggregator|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-peptides: 
   :depends on r-progress: 
   :depends on r-purrr: 
   :depends on r-ranger: 
   :depends on r-rlang: 
   :depends on r-stringr: 
   :depends on r-tidyr: 
   :depends on r-toordinal: 

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

    pixi global install bioconductor-awaggregator

to add into an existing workspace instead, run::

    pixi add bioconductor-awaggregator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-awaggregator

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-awaggregator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-awaggregator:<tag>

(see `bioconductor-awaggregator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-awaggregator| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-awaggregator.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-awaggregator
   :alt:   (downloads)
.. |docker_bioconductor-awaggregator| image:: https://quay.io/repository/biocontainers/bioconductor-awaggregator/status
   :target: https://quay.io/repository/biocontainers/bioconductor-awaggregator
.. _`bioconductor-awaggregator/tags`: https://quay.io/repository/biocontainers/bioconductor-awaggregator?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-awaggregator";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-awaggregator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-awaggregator/README.html