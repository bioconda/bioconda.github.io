:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crisprbase'
.. highlight: bash

bioconductor-crisprbase
=======================

.. conda:recipe:: bioconductor-crisprbase
   :replaces_section_title:
   :noindex:

   Base functions and classes for CRISPR gRNA design

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/crisprBase.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-crisprbase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprbase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprbase/meta.yaml>`_

   Provides S4 classes for general nucleases\, CRISPR nucleases\, CRISPR nickases\, and base editors.Several CRISPR\-specific genome arithmetic functions are implemented to help extract genomic coordinates of spacer and protospacer sequences. Commonly\-used CRISPR nuclease objects are provided that can be readily used in other packages. Both DNA\- and RNA\-targeting nucleases are supported.


.. conda:package:: bioconductor-crisprbase

   |downloads_bioconductor-crisprbase| |docker_bioconductor-crisprbase|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-stringr: 

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

    pixi global install bioconductor-crisprbase

to add into an existing workspace instead, run::

    pixi add bioconductor-crisprbase

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-crisprbase

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-crisprbase

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-crisprbase:<tag>

(see `bioconductor-crisprbase/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-crisprbase| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crisprbase.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crisprbase
   :alt:   (downloads)
.. |docker_bioconductor-crisprbase| image:: https://quay.io/repository/biocontainers/bioconductor-crisprbase/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crisprbase
.. _`bioconductor-crisprbase/tags`: https://quay.io/repository/biocontainers/bioconductor-crisprbase?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-crisprbase";
        var versions = ["1.14.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crisprbase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crisprbase/README.html