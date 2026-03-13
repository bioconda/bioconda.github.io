:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-smokingmouse'
.. highlight: bash

bioconductor-smokingmouse
=========================

.. conda:recipe:: bioconductor-smokingmouse
   :replaces_section_title:
   :noindex:

   Provides access to smokingMouse project data

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/smokingMouse.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-smokingmouse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-smokingmouse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-smokingmouse/meta.yaml>`_

   This is an ExperimentHub package that provides access to the data at the gene\, exon\, transcript and junction level used in the analyses of the smokingMouse project. See https\:\/\/github.com\/LieberInstitute\/smokingMouse\_Indirects. This datasets contain the expression counts of genes\, transcripts\, exons and exon\-exon junctions across 208 mice samples from pup and adult brains and adult blood. They also contain relevant information of these samples and features\, such as conditions\, QC metrics and if they were used after filtering steps and also if the features were differently expressed in the different experiments.


.. conda:package:: bioconductor-smokingmouse

   |downloads_bioconductor-smokingmouse| |docker_bioconductor-smokingmouse|

   :versions:
      
      

      ``1.8.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on curl: 
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

    pixi global install bioconductor-smokingmouse

to add into an existing workspace instead, run::

    pixi add bioconductor-smokingmouse

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-smokingmouse

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-smokingmouse

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-smokingmouse:<tag>

(see `bioconductor-smokingmouse/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-smokingmouse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-smokingmouse.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-smokingmouse
   :alt:   (downloads)
.. |docker_bioconductor-smokingmouse| image:: https://quay.io/repository/biocontainers/bioconductor-smokingmouse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-smokingmouse
.. _`bioconductor-smokingmouse/tags`: https://quay.io/repository/biocontainers/bioconductor-smokingmouse?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-smokingmouse";
        var versions = ["1.8.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-smokingmouse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-smokingmouse/README.html