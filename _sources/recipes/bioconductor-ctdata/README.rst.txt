:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ctdata'
.. highlight: bash

bioconductor-ctdata
===================

.. conda:recipe:: bioconductor-ctdata
   :replaces_section_title:
   :noindex:

   Data companion to CTexploreR

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CTdata.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ctdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctdata/meta.yaml>`_

   Data from publicly available databases \(GTEx\, CCLE\, TCGA and ENCODE\) that go with CTexploreR in order to re\-define a comprehensive and thoroughly curated list of CT genes and their main characteristics.


.. conda:package:: bioconductor-ctdata

   |downloads_bioconductor-ctdata| |docker_bioconductor-ctdata|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.2-0``

      

   
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-ctdata

to add into an existing workspace instead, run::

    pixi add bioconductor-ctdata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ctdata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ctdata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ctdata:<tag>

(see `bioconductor-ctdata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ctdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ctdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ctdata
   :alt:   (downloads)
.. |docker_bioconductor-ctdata| image:: https://quay.io/repository/biocontainers/bioconductor-ctdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ctdata
.. _`bioconductor-ctdata/tags`: https://quay.io/repository/biocontainers/bioconductor-ctdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ctdata";
        var versions = ["1.10.0","1.6.0","1.2.0","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ctdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ctdata/README.html