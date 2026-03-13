:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-curatedadiporna'
.. highlight: bash

bioconductor-curatedadiporna
============================

.. conda:recipe:: bioconductor-curatedadiporna
   :replaces_section_title:
   :noindex:

   A Curated RNA\-Seq Dataset of MDI\-induced Differentiated Adipocytes \(3T3\-L1\)

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/curatedAdipoRNA.html
   :license: GPL-3
   :recipe: /`bioconductor-curatedadiporna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedadiporna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedadiporna/meta.yaml>`_

   A curated dataset of RNA\-Seq samples. The samples are MDI\-induced pre\-phagocytes \(3T3\-L1\) at different time points\/stage of differentiation. The package document the data collection\, pre\-processing and processing. In addition to the documentation\, the package contains the scripts that was used to generated the data.


.. conda:package:: bioconductor-curatedadiporna

   |downloads_bioconductor-curatedadiporna| |docker_bioconductor-curatedadiporna|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
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

    pixi global install bioconductor-curatedadiporna

to add into an existing workspace instead, run::

    pixi add bioconductor-curatedadiporna

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-curatedadiporna

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-curatedadiporna

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-curatedadiporna:<tag>

(see `bioconductor-curatedadiporna/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-curatedadiporna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-curatedadiporna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-curatedadiporna
   :alt:   (downloads)
.. |docker_bioconductor-curatedadiporna| image:: https://quay.io/repository/biocontainers/bioconductor-curatedadiporna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-curatedadiporna
.. _`bioconductor-curatedadiporna/tags`: https://quay.io/repository/biocontainers/bioconductor-curatedadiporna?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-curatedadiporna";
        var versions = ["1.26.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-curatedadiporna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-curatedadiporna/README.html