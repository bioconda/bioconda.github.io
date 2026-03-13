:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crisprbwa'
.. highlight: bash

bioconductor-crisprbwa
======================

.. conda:recipe:: bioconductor-crisprbwa
   :replaces_section_title:
   :noindex:

   BWA\-based alignment of CRISPR gRNA spacer sequences

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/crisprBwa.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-crisprbwa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprbwa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprbwa/meta.yaml>`_

   Provides a user\-friendly interface to map on\-targets and off\-targets of CRISPR gRNA spacer sequences using bwa. The alignment is fast\, and can be performed using either commonly\-used or custom CRISPR nucleases. The alignment can work with any reference or custom genomes. Currently not supported on Windows machines.


.. conda:package:: bioconductor-crisprbwa

   |downloads_bioconductor-crisprbwa| |docker_bioconductor-crisprbwa|

   :versions:
      
      

      ``1.14.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-crisprbase: ``>=1.14.0,<1.15.0``
   :depends on bioconductor-rbwa: ``>=1.14.0,<1.15.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-readr: 
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

    pixi global install bioconductor-crisprbwa

to add into an existing workspace instead, run::

    pixi add bioconductor-crisprbwa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-crisprbwa

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-crisprbwa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-crisprbwa:<tag>

(see `bioconductor-crisprbwa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-crisprbwa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crisprbwa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crisprbwa
   :alt:   (downloads)
.. |docker_bioconductor-crisprbwa| image:: https://quay.io/repository/biocontainers/bioconductor-crisprbwa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crisprbwa
.. _`bioconductor-crisprbwa/tags`: https://quay.io/repository/biocontainers/bioconductor-crisprbwa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-crisprbwa";
        var versions = ["1.14.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crisprbwa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crisprbwa/README.html