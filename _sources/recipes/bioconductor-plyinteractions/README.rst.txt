:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-plyinteractions'
.. highlight: bash

bioconductor-plyinteractions
============================

.. conda:recipe:: bioconductor-plyinteractions
   :replaces_section_title:
   :noindex:

   Extending tidy verbs to genomic interactions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/plyinteractions.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-plyinteractions <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plyinteractions>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plyinteractions/meta.yaml>`_

   Operate on \`GInteractions\` objects as tabular data using \`dplyr\`\-like verbs. The functions and methods in \`plyinteractions\` provide a grammatical approach to manipulate \`GInteractions\`\, to facilitate their integration in genomic analysis workflows.


.. conda:package:: bioconductor-plyinteractions

   |downloads_bioconductor-plyinteractions| |docker_bioconductor-plyinteractions|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-interactionset: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-plyranges: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-rlang: 
   :depends on r-tibble: 
   :depends on r-tidyselect: 

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

    pixi global install bioconductor-plyinteractions

to add into an existing workspace instead, run::

    pixi add bioconductor-plyinteractions

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-plyinteractions

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-plyinteractions

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-plyinteractions:<tag>

(see `bioconductor-plyinteractions/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-plyinteractions| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-plyinteractions.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-plyinteractions
   :alt:   (downloads)
.. |docker_bioconductor-plyinteractions| image:: https://quay.io/repository/biocontainers/bioconductor-plyinteractions/status
   :target: https://quay.io/repository/biocontainers/bioconductor-plyinteractions
.. _`bioconductor-plyinteractions/tags`: https://quay.io/repository/biocontainers/bioconductor-plyinteractions?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-plyinteractions";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-plyinteractions/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-plyinteractions/README.html