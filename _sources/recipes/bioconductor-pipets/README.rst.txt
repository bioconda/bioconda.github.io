:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-pipets'
.. highlight: bash

bioconductor-pipets
===================

.. conda:recipe:: bioconductor-pipets
   :replaces_section_title:
   :noindex:

   Poisson Identification of PEaks from Term\-Seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/PIPETS.html
   :license: GPL-3
   :recipe: /`bioconductor-pipets <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pipets>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pipets/meta.yaml>`_

   PIPETS provides statistically robust analysis for 3\'\-seq\/term\-seq data. It utilizes a sliding window approach to apply a Poisson Distribution test to identify genomic positions with termination read coverage that is significantly higher than the surrounding signal. PIPETS then condenses proximal signal and produces strand specific results that contain all significant termination peaks.


.. conda:package:: bioconductor-pipets

   |downloads_bioconductor-pipets| |docker_bioconductor-pipets|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 

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

    pixi global install bioconductor-pipets

to add into an existing workspace instead, run::

    pixi add bioconductor-pipets

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-pipets

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-pipets

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-pipets:<tag>

(see `bioconductor-pipets/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-pipets| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pipets.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-pipets
   :alt:   (downloads)
.. |docker_bioconductor-pipets| image:: https://quay.io/repository/biocontainers/bioconductor-pipets/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pipets
.. _`bioconductor-pipets/tags`: https://quay.io/repository/biocontainers/bioconductor-pipets?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-pipets";
        var versions = ["1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pipets/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pipets/README.html