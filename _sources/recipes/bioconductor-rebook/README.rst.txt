:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rebook'
.. highlight: bash

bioconductor-rebook
===================

.. conda:recipe:: bioconductor-rebook
   :replaces_section_title:
   :noindex:

   Re\-using Content in Bioconductor Books

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rebook.html
   :license: GPL-3
   :recipe: /`bioconductor-rebook <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rebook>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rebook/meta.yaml>`_

   Provides utilities to re\-use content across chapters of a Bioconductor book. This is mostly based on functionality developed while writing the OSCA book\, but generalized for potential use in other large books with heavy compute. Also contains some functions to assist book deployment.


.. conda:package:: bioconductor-rebook

   |downloads_bioconductor-rebook| |docker_bioconductor-rebook|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends on bioconductor-biocstyle: ``>=2.38.0,<2.39.0``
   :depends on bioconductor-dir.expiry: ``>=1.18.0,<1.19.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-codedepends: 
   :depends on r-filelock: 
   :depends on r-knitr: ``>=1.32``
   :depends on r-rmarkdown: 

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

    pixi global install bioconductor-rebook

to add into an existing workspace instead, run::

    pixi add bioconductor-rebook

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rebook

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rebook

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rebook:<tag>

(see `bioconductor-rebook/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rebook| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rebook.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rebook
   :alt:   (downloads)
.. |docker_bioconductor-rebook| image:: https://quay.io/repository/biocontainers/bioconductor-rebook/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rebook
.. _`bioconductor-rebook/tags`: https://quay.io/repository/biocontainers/bioconductor-rebook?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rebook";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.1","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rebook/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rebook/README.html