:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'labrat'
.. highlight: bash

labrat
======

.. conda:recipe:: labrat
   :replaces_section_title:
   :noindex:

   A package to quantify changes in alternative polyadenylation isoform abundance using RNAseq data

   :homepage: https://github.com/TaliaferroLab/LABRAT
   :license: MIT / MIT
   :recipe: /`labrat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/labrat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/labrat/meta.yaml>`_
   :links: https: :https:`//bmcgenomics.biomedcentral.com/articles/10.1186/s12864-021-07781-1`

   


.. conda:package:: labrat

   |downloads_labrat| |docker_labrat|

   :versions:
      
      

      ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.2-0``

      

   
   :depends on biopython: ``>=1.76``
   :depends on gffutils: ``>=0.9``
   :depends on numpy: ``>=1.15.4``
   :depends on pandas: ``>=1.0``
   :depends on python: ``>=3.6``
   :depends on salmon: ``0.14.*``
   :depends on scipy: ``>=1.3.0``
   :depends on statsmodels: ``>=0.10``

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

    pixi global install labrat

to add into an existing workspace instead, run::

    pixi add labrat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install labrat

Alternatively, to install into a new environment, run::

    conda create -n envname labrat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/labrat:<tag>

(see `labrat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_labrat| image:: https://img.shields.io/conda/dn/bioconda/labrat.svg?style=flat
   :target: https://anaconda.org/bioconda/labrat
   :alt:   (downloads)
.. |docker_labrat| image:: https://quay.io/repository/biocontainers/labrat/status
   :target: https://quay.io/repository/biocontainers/labrat
.. _`labrat/tags`: https://quay.io/repository/biocontainers/labrat?tab=tags


.. raw:: html

    <script>
        var package = "labrat";
        var versions = ["0.3.0","0.3.0","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/labrat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/labrat/README.html