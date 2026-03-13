:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylogenize'
.. highlight: bash

phylogenize
===========

.. conda:recipe:: phylogenize
   :replaces_section_title:
   :noindex:

   Phylogenize is a tool that allows users to link microbial genes to environments\, accounting for phylogeny.

   :homepage: https://github.com/pbradleylab/phylogenize
   :documentation: http://phylogenize.org
   
   :license: MIT / MIT
   :recipe: /`phylogenize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylogenize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylogenize/meta.yaml>`_

   


.. conda:package:: phylogenize

   |downloads_phylogenize| |docker_phylogenize|

   :versions:
      
      

      ``2.0.0-0``,  ``2.0a0-0``,  ``0.91-1``,  ``0.91-0``

      

   
   :depends on bioconductor-ancombc: ``2.0.1.*``
   :depends on bioconductor-biomformat: ``1.26.0.*``
   :depends on bioconductor-clusterprofiler: ``4.6.0.*``
   :depends on bioconductor-ggtree: ``3.6.0.*``
   :depends on bioconductor-maaslin2: ``1.12.0.*``
   :depends on bioconductor-qvalue: ``2.30.0.*``
   :depends on r-ashr: ``2.2_54.*``
   :depends on r-base: ``>=4.2,<4.3.0a0``
   :depends on r-castor: ``1.7.10.*``
   :depends on r-extradistr: ``1.9.1.*``
   :depends on r-functional: ``0.6.*``
   :depends on r-furrr: ``0.3.1.*``
   :depends on r-ggiraph: ``0.8.10.*``
   :depends on r-gtools: ``3.9.5.*``
   :depends on r-kableextra: ``1.4.0.*``
   :depends on r-pbapply: ``1.7_0.*``
   :depends on r-phangorn: ``2.11.1.*``
   :depends on r-phylolm: ``2.6.2.*``
   :depends on r-phytools: ``2.3_0.*``
   :depends on r-plotly: ``4.10.4.*``
   :depends on r-pryr: ``0.1.6.*``
   :depends on r-ragg: ``1.3.2.*``
   :depends on r-scales: ``1.3.0.*``
   :depends on r-seqinr: ``4.2_30.*``
   :depends on r-settings: ``0.2.7.*``
   :depends on r-stringi: ``>=1.8.0``
   :depends on r-stringr: ``1.5.0.*``
   :depends on r-svglite: ``2.1.3.*``
   :depends on r-testthat: ``3.2.1.1.*``
   :depends on r-tidymodels: ``1.2.0.*``
   :depends on r-tidyverse: ``2.0.0.*``
   :depends on repermulize: ``1.0.0.*``
   :depends on vsearch: ``2.30.0.*``

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

    pixi global install phylogenize

to add into an existing workspace instead, run::

    pixi add phylogenize

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phylogenize

Alternatively, to install into a new environment, run::

    conda create -n envname phylogenize

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phylogenize:<tag>

(see `phylogenize/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phylogenize| image:: https://img.shields.io/conda/dn/bioconda/phylogenize.svg?style=flat
   :target: https://anaconda.org/bioconda/phylogenize
   :alt:   (downloads)
.. |docker_phylogenize| image:: https://quay.io/repository/biocontainers/phylogenize/status
   :target: https://quay.io/repository/biocontainers/phylogenize
.. _`phylogenize/tags`: https://quay.io/repository/biocontainers/phylogenize?tab=tags


.. raw:: html

    <script>
        var package = "phylogenize";
        var versions = ["2.0.0","2.0a0","0.91","0.91"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylogenize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylogenize/README.html