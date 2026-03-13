:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-abdiv'
.. highlight: bash

r-abdiv
=======

.. conda:recipe:: r-abdiv
   :replaces_section_title:
   :noindex:

   Alpha and Beta Diversity Measures

   :homepage: https://github.com/kylebittinger/abdiv
   :license: MIT
   :recipe: /`r-abdiv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-abdiv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-abdiv/meta.yaml>`_

   \'A collection of measures for measuring ecological diversity.
    Ecological diversity comes in two flavors\: alpha diversity measures the
    diversity within a single site or sample\, and beta diversity measures the
    diversity across two sites or samples. This package overlaps considerably
    with other R packages such as \'\'vegan\'\'\, \'\'gUniFrac\'\'\, \'\'betapart\'\'\, and \'\'fossil\'\'.
    We also include a wide range of functions that are implemented in software
    outside the R ecosystem\, such as \'\'scipy\'\'\, \'\'Mothur\'\'\, and \'\'scikit\-bio\'\'.  The
    implementations here are designed to be basic and clear to the reader.\'


.. conda:package:: r-abdiv

   |downloads_r-abdiv| |docker_r-abdiv|

   :versions:
      
      

      ``0.2.0-3``,  ``0.2.0-2``,  ``0.2.0-1``,  ``0.2.0-0``

      

   
   :depends on r-ape: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-testthat: ``>=2.1.0``
   :depends on r-vegan: 

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

    pixi global install r-abdiv

to add into an existing workspace instead, run::

    pixi add r-abdiv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-abdiv

Alternatively, to install into a new environment, run::

    conda create -n envname r-abdiv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-abdiv:<tag>

(see `r-abdiv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-abdiv| image:: https://img.shields.io/conda/dn/bioconda/r-abdiv.svg?style=flat
   :target: https://anaconda.org/bioconda/r-abdiv
   :alt:   (downloads)
.. |docker_r-abdiv| image:: https://quay.io/repository/biocontainers/r-abdiv/status
   :target: https://quay.io/repository/biocontainers/r-abdiv
.. _`r-abdiv/tags`: https://quay.io/repository/biocontainers/r-abdiv?tab=tags


.. raw:: html

    <script>
        var package = "r-abdiv";
        var versions = ["0.2.0","0.2.0","0.2.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-abdiv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-abdiv/README.html