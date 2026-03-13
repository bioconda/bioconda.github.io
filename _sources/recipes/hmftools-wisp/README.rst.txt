:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-wisp'
.. highlight: bash

hmftools-wisp
=============

.. conda:recipe:: hmftools-wisp
   :replaces_section_title:
   :noindex:

   WISP performs tumor fraction estimate for longitudinal samples

   :homepage: https://github.com/hartwigmedical/hmftools/tree/master/wisp
   :license: GPL3 / GPL-3.0-only
   :recipe: /`hmftools-wisp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-wisp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-wisp/meta.yaml>`_

   


.. conda:package:: hmftools-wisp

   |downloads_hmftools-wisp| |docker_hmftools-wisp|

   :versions:
      
      

      ``1.2-0``

      

   
   :depends on openjdk: ``>=8,<=21``
   :depends on r-tidyverse: 

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

    pixi global install hmftools-wisp

to add into an existing workspace instead, run::

    pixi add hmftools-wisp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hmftools-wisp

Alternatively, to install into a new environment, run::

    conda create -n envname hmftools-wisp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hmftools-wisp:<tag>

(see `hmftools-wisp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hmftools-wisp| image:: https://img.shields.io/conda/dn/bioconda/hmftools-wisp.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-wisp
   :alt:   (downloads)
.. |docker_hmftools-wisp| image:: https://quay.io/repository/biocontainers/hmftools-wisp/status
   :target: https://quay.io/repository/biocontainers/hmftools-wisp
.. _`hmftools-wisp/tags`: https://quay.io/repository/biocontainers/hmftools-wisp?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-wisp";
        var versions = ["1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-wisp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-wisp/README.html