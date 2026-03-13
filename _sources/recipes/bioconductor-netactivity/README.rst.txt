:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-netactivity'
.. highlight: bash

bioconductor-netactivity
========================

.. conda:recipe:: bioconductor-netactivity
   :replaces_section_title:
   :noindex:

   Compute gene set scores from a deep learning framework

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/NetActivity.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-netactivity <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netactivity>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netactivity/meta.yaml>`_

   \#\' NetActivity enables to compute gene set scores from previously trained sparsely\-connected autoencoders. The package contains a function to prepare the data \(\`prepareSummarizedExperiment\`\) and a function to compute the gene set scores \(\`computeGeneSetScores\`\). The package \`NetActivityData\` contains different pre\-trained models to be directly applied to the data. Alternatively\, the users might use the package to compute gene set scores using custom models.


.. conda:package:: bioconductor-netactivity

   |downloads_bioconductor-netactivity| |docker_bioconductor-netactivity|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-airway: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-delayedmatrixstats: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-netactivitydata: ``>=1.12.0,<1.13.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
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

    pixi global install bioconductor-netactivity

to add into an existing workspace instead, run::

    pixi add bioconductor-netactivity

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-netactivity

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-netactivity

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-netactivity:<tag>

(see `bioconductor-netactivity/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-netactivity| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netactivity.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-netactivity
   :alt:   (downloads)
.. |docker_bioconductor-netactivity| image:: https://quay.io/repository/biocontainers/bioconductor-netactivity/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netactivity
.. _`bioconductor-netactivity/tags`: https://quay.io/repository/biocontainers/bioconductor-netactivity?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-netactivity";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netactivity/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netactivity/README.html