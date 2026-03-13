:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biodbkegg'
.. highlight: bash

bioconductor-biodbkegg
======================

.. conda:recipe:: bioconductor-biodbkegg
   :replaces_section_title:
   :noindex:

   biodbKegg\, a library for connecting to the KEGG Database

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/biodbKegg.html
   :license: AGPL-3
   :recipe: /`bioconductor-biodbkegg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbkegg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbkegg/meta.yaml>`_

   The biodbKegg library is an extension of the biodb framework package that provides access to the KEGG databases Compound\, Enzyme\, Genes\, Module\, Orthology and Reaction. It allows to retrieve entries by their accession numbers. Web services like \"find\"\, \"list\" and \"findExactMass\" are also available. Some functions for navigating along the pathways have also been implemented.


.. conda:package:: bioconductor-biodbkegg

   |downloads_bioconductor-biodbkegg| |docker_bioconductor-biodbkegg|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biodb: ``>=1.10.0,<1.11.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-chk: 
   :depends on r-lifecycle: 
   :depends on r-r6: 

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

    pixi global install bioconductor-biodbkegg

to add into an existing workspace instead, run::

    pixi add bioconductor-biodbkegg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-biodbkegg

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-biodbkegg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-biodbkegg:<tag>

(see `bioconductor-biodbkegg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-biodbkegg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biodbkegg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biodbkegg
   :alt:   (downloads)
.. |docker_bioconductor-biodbkegg| image:: https://quay.io/repository/biocontainers/bioconductor-biodbkegg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biodbkegg
.. _`bioconductor-biodbkegg/tags`: https://quay.io/repository/biocontainers/bioconductor-biodbkegg?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biodbkegg";
        var versions = ["1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biodbkegg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biodbkegg/README.html