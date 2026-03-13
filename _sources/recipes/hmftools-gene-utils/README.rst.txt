:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-gene-utils'
.. highlight: bash

hmftools-gene-utils
===================

.. conda:recipe:: hmftools-gene-utils
   :replaces_section_title:
   :noindex:

   Routines to generate resources files from Ensembl for use by many of the HMF applications

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/gene-utils
   :license: GPL / GPL-3.0-only
   :recipe: /`hmftools-gene-utils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-gene-utils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-gene-utils/meta.yaml>`_

   


.. conda:package:: hmftools-gene-utils

   |downloads_hmftools-gene-utils| |docker_hmftools-gene-utils|

   :versions:
      
      

      ``1.3-0``,  ``1.2-0``

      

   
   :depends on openjdk: ``>=8,<=21``

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

    pixi global install hmftools-gene-utils

to add into an existing workspace instead, run::

    pixi add hmftools-gene-utils

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hmftools-gene-utils

Alternatively, to install into a new environment, run::

    conda create -n envname hmftools-gene-utils

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hmftools-gene-utils:<tag>

(see `hmftools-gene-utils/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hmftools-gene-utils| image:: https://img.shields.io/conda/dn/bioconda/hmftools-gene-utils.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-gene-utils
   :alt:   (downloads)
.. |docker_hmftools-gene-utils| image:: https://quay.io/repository/biocontainers/hmftools-gene-utils/status
   :target: https://quay.io/repository/biocontainers/hmftools-gene-utils
.. _`hmftools-gene-utils/tags`: https://quay.io/repository/biocontainers/hmftools-gene-utils?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-gene-utils";
        var versions = ["1.3","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-gene-utils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-gene-utils/README.html