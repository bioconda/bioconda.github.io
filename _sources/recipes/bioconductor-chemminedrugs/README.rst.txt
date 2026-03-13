:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chemminedrugs'
.. highlight: bash

bioconductor-chemminedrugs
==========================

.. conda:recipe:: bioconductor-chemminedrugs
   :replaces_section_title:
   :noindex:

   DrugBank data set

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/ChemmineDrugs.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-chemminedrugs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chemminedrugs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chemminedrugs/meta.yaml>`_

   An annotation package for use with ChemmineR. This package includes data from DrugBank. DUD data can be downloaded using the \"DUD\(\)\" function in ChemmineR.


.. conda:package:: bioconductor-chemminedrugs

   |downloads_bioconductor-chemminedrugs| |docker_bioconductor-chemminedrugs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.2-14</code>,  <code>1.0.2-13</code>,  <code>1.0.2-12</code>,  <code>1.0.2-11</code>,  <code>1.0.2-10</code>,  <code>1.0.2-9</code>,  <code>1.0.2-8</code>,  <code>1.0.2-7</code>,  <code>1.0.2-6</code>,  </span></summary>
      

      ``1.0.2-14``,  ``1.0.2-13``,  ``1.0.2-12``,  ``1.0.2-11``,  ``1.0.2-10``,  ``1.0.2-9``,  ``1.0.2-8``,  ``1.0.2-7``,  ``1.0.2-6``,  ``1.0.2-5``,  ``1.0.2-4``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-chemminer: ``>=3.62.0,<3.63.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-rsqlite: 

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

    pixi global install bioconductor-chemminedrugs

to add into an existing workspace instead, run::

    pixi add bioconductor-chemminedrugs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-chemminedrugs

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-chemminedrugs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-chemminedrugs:<tag>

(see `bioconductor-chemminedrugs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-chemminedrugs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chemminedrugs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chemminedrugs
   :alt:   (downloads)
.. |docker_bioconductor-chemminedrugs| image:: https://quay.io/repository/biocontainers/bioconductor-chemminedrugs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chemminedrugs
.. _`bioconductor-chemminedrugs/tags`: https://quay.io/repository/biocontainers/bioconductor-chemminedrugs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chemminedrugs";
        var versions = ["1.0.2","1.0.2","1.0.2","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chemminedrugs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chemminedrugs/README.html