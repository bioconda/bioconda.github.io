:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-imodmixdata'
.. highlight: bash

bioconductor-imodmixdata
========================

.. conda:recipe:: bioconductor-imodmixdata
   :replaces_section_title:
   :noindex:

   Data for iModMix Package

   :homepage: https://bioconductor.org/packages/3.22/data/experiment/html/iModMixData.html
   :license: GPL-3
   :recipe: /`bioconductor-imodmixdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imodmixdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-imodmixdata/meta.yaml>`_

   Provides example datasets for the iModMix package\, including gene\, protein\, and metabolite partial correlation matrices derived from ccRCC4 and FloresData\_K\_TK studies. The data are preprocessed and ready to use for testing\, demonstrating iModMix workflows\, and exploring correlation networks.


.. conda:package:: bioconductor-imodmixdata

   |downloads_bioconductor-imodmixdata| |docker_bioconductor-imodmixdata|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
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

    pixi global install bioconductor-imodmixdata

to add into an existing workspace instead, run::

    pixi add bioconductor-imodmixdata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-imodmixdata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-imodmixdata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-imodmixdata:<tag>

(see `bioconductor-imodmixdata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-imodmixdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-imodmixdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-imodmixdata
   :alt:   (downloads)
.. |docker_bioconductor-imodmixdata| image:: https://quay.io/repository/biocontainers/bioconductor-imodmixdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-imodmixdata
.. _`bioconductor-imodmixdata/tags`: https://quay.io/repository/biocontainers/bioconductor-imodmixdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-imodmixdata";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-imodmixdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-imodmixdata/README.html