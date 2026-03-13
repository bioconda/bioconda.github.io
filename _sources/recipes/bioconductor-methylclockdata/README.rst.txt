:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylclockdata'
.. highlight: bash

bioconductor-methylclockdata
============================

.. conda:recipe:: bioconductor-methylclockdata
   :replaces_section_title:
   :noindex:

   Data for methylclock package

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/methylclockData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-methylclockdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylclockdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylclockdata/meta.yaml>`_

   Collection of 9 datasets\, andrews and bakulski cord blood\, blood gse35069\, blood gse35069 chen\, blood gse35069 complete\, combined cord blood\, cord bloo d gse68456\, gervin and lyle cord blood\, guintivano dlpfc and saliva gse48472\". Data downloaded from \[meffil\]\(https\:\/\/github.com\/perishky\/meffil\/\). Data used to estimate cell counts using Extrinsic epigenetic age acceleration \(EEAA\) method Collection of 12 datasets to use with MethylClock package to estimate chronological and gestational DNA methylationwith estimators to use wit different methylation clocks


.. conda:package:: bioconductor-methylclockdata

   |downloads_bioconductor-methylclockdata| |docker_bioconductor-methylclockdata|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-experimenthubdata: ``>=1.36.0,<1.37.0``
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

    pixi global install bioconductor-methylclockdata

to add into an existing workspace instead, run::

    pixi add bioconductor-methylclockdata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-methylclockdata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-methylclockdata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-methylclockdata:<tag>

(see `bioconductor-methylclockdata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-methylclockdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylclockdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylclockdata
   :alt:   (downloads)
.. |docker_bioconductor-methylclockdata| image:: https://quay.io/repository/biocontainers/bioconductor-methylclockdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylclockdata
.. _`bioconductor-methylclockdata/tags`: https://quay.io/repository/biocontainers/bioconductor-methylclockdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-methylclockdata";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.1","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylclockdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylclockdata/README.html