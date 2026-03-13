:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'repermulize'
.. highlight: bash

repermulize
===========

.. conda:recipe:: repermulize
   :replaces_section_title:
   :noindex:

   Repermulize contains functions to perform gene\-to\-phenotype tests with permulation.

   :homepage: https://github.com/pbradleylab/phylogenize
   :license: MIT / MIT
   :recipe: /`repermulize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repermulize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repermulize/meta.yaml>`_

   


.. conda:package:: repermulize

   |downloads_repermulize| |docker_repermulize|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends on bioconductor-biomformat: ``1.26.0.*``
   :depends on bioconductor-ggtree: ``3.6.0.*``
   :depends on bioconductor-qvalue: ``2.30.0.*``
   :depends on bioconductor-s4vectors: ``0.36.0.*``
   :depends on r-ashr: ``2.2_54.*``
   :depends on r-base: ``>=4.2,<4.3.0a0``
   :depends on r-castor: ``1.7.10.*``
   :depends on r-dt: ``0.33.*``
   :depends on r-extradistr: ``1.9.1.*``
   :depends on r-forcats: ``1.0.0.*``
   :depends on r-kableextra: ``1.4.0.*``
   :depends on r-matrix: ``1.5_4.1.*``
   :depends on r-pbapply: ``1.7_0.*``
   :depends on r-phylolm: ``2.6.2.*``
   :depends on r-plotly: ``<=4.10.4``
   :depends on r-purrr: ``1.0.1.*``
   :depends on r-readr: ``2.1.4.*``
   :depends on r-seqinr: ``4.2_30.*``
   :depends on r-settings: ``0.2.7.*``
   :depends on r-stringr: ``1.5.0.*``
   :depends on r-tibble: ``3.2.1.*``
   :depends on r-tidyr: ``1.3.0.*``

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

    pixi global install repermulize

to add into an existing workspace instead, run::

    pixi add repermulize

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install repermulize

Alternatively, to install into a new environment, run::

    conda create -n envname repermulize

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/repermulize:<tag>

(see `repermulize/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_repermulize| image:: https://img.shields.io/conda/dn/bioconda/repermulize.svg?style=flat
   :target: https://anaconda.org/bioconda/repermulize
   :alt:   (downloads)
.. |docker_repermulize| image:: https://quay.io/repository/biocontainers/repermulize/status
   :target: https://quay.io/repository/biocontainers/repermulize
.. _`repermulize/tags`: https://quay.io/repository/biocontainers/repermulize?tab=tags


.. raw:: html

    <script>
        var package = "repermulize";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/repermulize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/repermulize/README.html