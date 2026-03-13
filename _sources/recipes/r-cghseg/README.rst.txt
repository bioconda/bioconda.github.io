:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-cghseg'
.. highlight: bash

r-cghseg
========

.. conda:recipe:: r-cghseg
   :replaces_section_title:
   :noindex:

   Dedicated to the analysis of CGH \(Comparative Genomic Hybridization\) array profiles using segmentation models. \'cghseg\' package is intended to detect breakpoints from CGH profiles. It can handle both single and multiple profiles analysis\, to perform segmentation\, normalization and calling. Methods for joint segmentation are described in Picard and al. \(2011\).

   :homepage: https://CRAN.R-project.org/package=cghseg
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-cghseg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cghseg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-cghseg/meta.yaml>`_

   


.. conda:package:: r-cghseg

   |downloads_r-cghseg| |docker_r-cghseg|

   :versions:
      
      

      ``1.0.5-3``,  ``1.0.5-2``,  ``1.0.5-1``,  ``1.0.5-0``

      

   
   :depends on r-base: ``>=4.0,<4.1.0a0``

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

    pixi global install r-cghseg

to add into an existing workspace instead, run::

    pixi add r-cghseg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-cghseg

Alternatively, to install into a new environment, run::

    conda create -n envname r-cghseg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-cghseg:<tag>

(see `r-cghseg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-cghseg| image:: https://img.shields.io/conda/dn/bioconda/r-cghseg.svg?style=flat
   :target: https://anaconda.org/bioconda/r-cghseg
   :alt:   (downloads)
.. |docker_r-cghseg| image:: https://quay.io/repository/biocontainers/r-cghseg/status
   :target: https://quay.io/repository/biocontainers/r-cghseg
.. _`r-cghseg/tags`: https://quay.io/repository/biocontainers/r-cghseg?tab=tags


.. raw:: html

    <script>
        var package = "r-cghseg";
        var versions = ["1.0.5","1.0.5","1.0.5","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-cghseg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-cghseg/README.html