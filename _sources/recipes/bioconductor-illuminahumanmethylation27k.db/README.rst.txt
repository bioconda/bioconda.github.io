:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-illuminahumanmethylation27k.db'
.. highlight: bash

bioconductor-illuminahumanmethylation27k.db
===========================================

.. conda:recipe:: bioconductor-illuminahumanmethylation27k.db
   :replaces_section_title:
   :noindex:

   Illumina Illumina Human Methylation 27k annotation data \(chip IlluminaHumanMethylation27k\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/IlluminaHumanMethylation27k.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-illuminahumanmethylation27k.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanmethylation27k.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-illuminahumanmethylation27k.db/meta.yaml>`_

   Illumina Illumina Human Methylation 27k annotation data \(chip IlluminaHumanMethylation27k\) assembled using data from public repositories


.. conda:package:: bioconductor-illuminahumanmethylation27k.db

   |downloads_bioconductor-illuminahumanmethylation27k.db| |docker_bioconductor-illuminahumanmethylation27k.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.8-14</code>,  <code>1.4.8-13</code>,  <code>1.4.8-12</code>,  <code>1.4.8-11</code>,  <code>1.4.8-10</code>,  <code>1.4.8-9</code>,  <code>1.4.8-8</code>,  <code>1.4.8-7</code>,  <code>1.4.8-6</code>,  </span></summary>
      

      ``1.4.8-14``,  ``1.4.8-13``,  ``1.4.8-12``,  ``1.4.8-11``,  ``1.4.8-10``,  ``1.4.8-9``,  ``1.4.8-8``,  ``1.4.8-7``,  ``1.4.8-6``,  ``1.4.8-5``,  ``1.4.8-4``,  ``1.4.8-3``,  ``1.4.8-2``,  ``1.4.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
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

    pixi global install bioconductor-illuminahumanmethylation27k.db

to add into an existing workspace instead, run::

    pixi add bioconductor-illuminahumanmethylation27k.db

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-illuminahumanmethylation27k.db

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-illuminahumanmethylation27k.db

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-illuminahumanmethylation27k.db:<tag>

(see `bioconductor-illuminahumanmethylation27k.db/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-illuminahumanmethylation27k.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-illuminahumanmethylation27k.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-illuminahumanmethylation27k.db
   :alt:   (downloads)
.. |docker_bioconductor-illuminahumanmethylation27k.db| image:: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylation27k.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylation27k.db
.. _`bioconductor-illuminahumanmethylation27k.db/tags`: https://quay.io/repository/biocontainers/bioconductor-illuminahumanmethylation27k.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-illuminahumanmethylation27k.db";
        var versions = ["1.4.8","1.4.8","1.4.8","1.4.8","1.4.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-illuminahumanmethylation27k.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-illuminahumanmethylation27k.db/README.html