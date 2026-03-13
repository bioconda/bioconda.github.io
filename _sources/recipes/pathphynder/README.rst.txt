:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pathphynder'
.. highlight: bash

pathphynder
===========

.. conda:recipe:: pathphynder
   :replaces_section_title:
   :noindex:

   A workflow for ancient DNA placement into reference phylogenies.

   :homepage: https://github.com/ruidlpm/pathPhynder
   :license: MIT / MIT
   :recipe: /`pathphynder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathphynder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pathphynder/meta.yaml>`_
   :links: doi: :doi:`10.1093/molbev/msac017`

   Ancient DNA data is characterized by deamination and low\-coverage sequencing\, which results in a high fraction of missing data and erroneous calls. 
   These factors affect the estimation of phylogenetic trees with modern and ancient DNA\, especially when dealing with many ancient samples sequenced to lower coverage. 
   Furthermore\, most ancient DNA analyses of the Y chromosome\, for example\, rely on previously known markers\, but additional variation will continuously emerge as more data is generated. 
   This workflow offers a solution for integrating ancient and present\-day haploid data\, first by identifiying informative markers in a high coverage dataset\, second\, by calling and filtering these SNPs in ancient samples and lastly\, by traversing the tree and evaluate the number of derived and ancestral markers in the ancients to find the most likely branch where it belongs.



.. conda:package:: pathphynder

   |downloads_pathphynder| |docker_pathphynder|

   :versions:
      
      

      ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-3``,  ``1.2.1-2``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.2.0-0``

      

   
   :depends on phynder: 
   :depends on python: 
   :depends on r-base: 
   :depends on r-optparse: 
   :depends on r-phytools: 
   :depends on r-scales: 
   :depends on samtools: 

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

    pixi global install pathphynder

to add into an existing workspace instead, run::

    pixi add pathphynder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pathphynder

Alternatively, to install into a new environment, run::

    conda create -n envname pathphynder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pathphynder:<tag>

(see `pathphynder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pathphynder| image:: https://img.shields.io/conda/dn/bioconda/pathphynder.svg?style=flat
   :target: https://anaconda.org/bioconda/pathphynder
   :alt:   (downloads)
.. |docker_pathphynder| image:: https://quay.io/repository/biocontainers/pathphynder/status
   :target: https://quay.io/repository/biocontainers/pathphynder
.. _`pathphynder/tags`: https://quay.io/repository/biocontainers/pathphynder?tab=tags


.. raw:: html

    <script>
        var package = "pathphynder";
        var versions = ["1.2.4","1.2.3","1.2.2","1.2.1","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pathphynder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pathphynder/README.html