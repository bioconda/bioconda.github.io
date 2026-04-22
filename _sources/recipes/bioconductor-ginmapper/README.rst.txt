:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ginmapper'
.. highlight: bash

bioconductor-ginmapper
======================

.. conda:recipe:: bioconductor-ginmapper
   :replaces_section_title:
   :noindex:

   Gene Identifier Mapper

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/ginmappeR.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-ginmapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ginmapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ginmapper/meta.yaml>`_

   Provides functionalities to translate gene or protein identifiers between state\-of\-art biological databases\: CARD \(\<https\:\/\/card.mcmaster.ca\/\>\)\, NCBI Protein\, Nucleotide and Gene \(\<https\:\/\/www.ncbi.nlm.nih.gov\/\>\)\, UniProt \(\<https\:\/\/www.uniprot.org\/\>\) and KEGG \(\<https\:\/\/www.kegg.jp\>\). Also offers complementary functionality like NCBI identical proteins or UniProt similar genes clusters retrieval.


.. conda:package:: bioconductor-ginmapper

   |downloads_bioconductor-ginmapper| |docker_bioconductor-ginmapper|

   :versions:
      
      

      ``1.6.0-0``

      

   
   :depends on bioconductor-keggrest: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-uniprot.ws: ``>=2.50.0,<2.51.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cachem: 
   :depends on r-httr: 
   :depends on r-jsonlite: 
   :depends on r-memoise: 
   :depends on r-rentrez: 
   :depends on r-rvest: 
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

    pixi global install bioconductor-ginmapper

to add into an existing workspace instead, run::

    pixi add bioconductor-ginmapper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ginmapper

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ginmapper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ginmapper:<tag>

(see `bioconductor-ginmapper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ginmapper| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ginmapper.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ginmapper
   :alt:   (downloads)
.. |docker_bioconductor-ginmapper| image:: https://quay.io/repository/biocontainers/bioconductor-ginmapper/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ginmapper
.. _`bioconductor-ginmapper/tags`: https://quay.io/repository/biocontainers/bioconductor-ginmapper?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ginmapper";
        var versions = ["1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ginmapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ginmapper/README.html