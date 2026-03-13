:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hubmapr'
.. highlight: bash

bioconductor-hubmapr
====================

.. conda:recipe:: bioconductor-hubmapr
   :replaces_section_title:
   :noindex:

   Interface to \'HuBMAP\'

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/HuBMAPR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hubmapr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hubmapr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hubmapr/meta.yaml>`_

   \'HuBMAP\' provides an open\, global bio\-molecular atlas of the human body at the cellular level. The \`datasets\(\)\`\, \`samples\(\)\`\, \`donors\(\)\`\, \`publications\(\)\`\, and \`collections\(\)\` functions retrieves the information for each of these entity types. \`\*\_details\(\)\` are available for individual entries of each entity type. \`\*\_derived\(\)\` are available for retrieving derived datasets or samples for individual entries of each entity type. Data files can be accessed using \`files\_globus\_url\(\)\`.


.. conda:package:: bioconductor-hubmapr

   |downloads_bioconductor-hubmapr| |docker_bioconductor-hubmapr|

   :versions:
      
      

      ``1.4.0-0``,  ``0.99.6-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-httr2: 
   :depends on r-purrr: 
   :depends on r-rjsoncons: 
   :depends on r-rlang: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-whisker: 

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

    pixi global install bioconductor-hubmapr

to add into an existing workspace instead, run::

    pixi add bioconductor-hubmapr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hubmapr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hubmapr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hubmapr:<tag>

(see `bioconductor-hubmapr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hubmapr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hubmapr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hubmapr
   :alt:   (downloads)
.. |docker_bioconductor-hubmapr| image:: https://quay.io/repository/biocontainers/bioconductor-hubmapr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hubmapr
.. _`bioconductor-hubmapr/tags`: https://quay.io/repository/biocontainers/bioconductor-hubmapr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hubmapr";
        var versions = ["1.4.0","0.99.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hubmapr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hubmapr/README.html