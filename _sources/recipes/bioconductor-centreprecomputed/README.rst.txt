:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-centreprecomputed'
.. highlight: bash

bioconductor-centreprecomputed
==============================

.. conda:recipe:: bioconductor-centreprecomputed
   :replaces_section_title:
   :noindex:

   Hub package for the precomputed data of CENTRE and example data

   :homepage: https://bioconductor.org/packages/3.22/data/experiment/html/CENTREprecomputed.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-centreprecomputed <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-centreprecomputed>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-centreprecomputed/meta.yaml>`_

   Interface and documentation for the Experiment Hub records needed by the CENTRE Bioconductor software package. The Experiment Hub records contains the precomputed fisher combined p\-values\, CRUP correlations. Additionally\, the records hold ChIP\-seq and RNA\-seq data used for the example of the software package.


.. conda:package:: bioconductor-centreprecomputed

   |downloads_bioconductor-centreprecomputed| |docker_bioconductor-centreprecomputed|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dbi: 
   :depends on r-rsqlite: 

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

    pixi global install bioconductor-centreprecomputed

to add into an existing workspace instead, run::

    pixi add bioconductor-centreprecomputed

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-centreprecomputed

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-centreprecomputed

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-centreprecomputed:<tag>

(see `bioconductor-centreprecomputed/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-centreprecomputed| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-centreprecomputed.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-centreprecomputed
   :alt:   (downloads)
.. |docker_bioconductor-centreprecomputed| image:: https://quay.io/repository/biocontainers/bioconductor-centreprecomputed/status
   :target: https://quay.io/repository/biocontainers/bioconductor-centreprecomputed
.. _`bioconductor-centreprecomputed/tags`: https://quay.io/repository/biocontainers/bioconductor-centreprecomputed?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-centreprecomputed";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-centreprecomputed/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-centreprecomputed/README.html