:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-biodbncbi'
.. highlight: bash

bioconductor-biodbncbi
======================

.. conda:recipe:: bioconductor-biodbncbi
   :replaces_section_title:
   :noindex:

   biodbNcbi\, a library for connecting to NCBI Databases.

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/biodbNcbi.html
   :license: AGPL-3
   :recipe: /`bioconductor-biodbncbi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbncbi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-biodbncbi/meta.yaml>`_

   The biodbNcbi library provides access to the NCBI databases CCDS\, Gene\, Pubchem Comp and Pubchem Subst\, using biodb package framework. It allows to retrieve entries by their accession number. Web services can be accessed for searching the database by name or mass.


.. conda:package:: bioconductor-biodbncbi

   |downloads_bioconductor-biodbncbi| |docker_bioconductor-biodbncbi|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biodb: ``>=1.14.0,<1.15.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-chk: 
   :depends on r-r6: 
   :depends on r-xml: 

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

    pixi global install bioconductor-biodbncbi

to add into an existing workspace instead, run::

    pixi add bioconductor-biodbncbi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-biodbncbi

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-biodbncbi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-biodbncbi:<tag>

(see `bioconductor-biodbncbi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-biodbncbi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-biodbncbi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-biodbncbi
   :alt:   (downloads)
.. |docker_bioconductor-biodbncbi| image:: https://quay.io/repository/biocontainers/bioconductor-biodbncbi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-biodbncbi
.. _`bioconductor-biodbncbi/tags`: https://quay.io/repository/biocontainers/bioconductor-biodbncbi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-biodbncbi";
        var versions = ["1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-biodbncbi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-biodbncbi/README.html