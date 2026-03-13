:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mogene10sttranscriptcluster.db'
.. highlight: bash

bioconductor-mogene10sttranscriptcluster.db
===========================================

.. conda:recipe:: bioconductor-mogene10sttranscriptcluster.db
   :replaces_section_title:
   :noindex:

   Affymetrix mogene10 annotation data \(chip mogene10sttranscriptcluster\)

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/mogene10sttranscriptcluster.db.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mogene10sttranscriptcluster.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mogene10sttranscriptcluster.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mogene10sttranscriptcluster.db/meta.yaml>`_

   Affymetrix mogene10 annotation data \(chip mogene10sttranscriptcluster\) assembled using data from public repositories


.. conda:package:: bioconductor-mogene10sttranscriptcluster.db

   |downloads_bioconductor-mogene10sttranscriptcluster.db| |docker_bioconductor-mogene10sttranscriptcluster.db|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>8.8.0-6</code>,  <code>8.8.0-5</code>,  <code>8.8.0-4</code>,  <code>8.8.0-3</code>,  <code>8.8.0-2</code>,  <code>8.8.0-1</code>,  <code>8.8.0-0</code>,  <code>8.7.0-7</code>,  <code>8.7.0-6</code>,  </span></summary>
      

      ``8.8.0-6``,  ``8.8.0-5``,  ``8.8.0-4``,  ``8.8.0-3``,  ``8.8.0-2``,  ``8.8.0-1``,  ``8.8.0-0``,  ``8.7.0-7``,  ``8.7.0-6``,  ``8.7.0-5``,  ``8.7.0-4``,  ``8.7.0-3``,  ``8.7.0-2``,  ``8.7.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-org.mm.eg.db: ``>=3.22.0,<3.23.0``
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

    pixi global install bioconductor-mogene10sttranscriptcluster.db

to add into an existing workspace instead, run::

    pixi add bioconductor-mogene10sttranscriptcluster.db

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mogene10sttranscriptcluster.db

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mogene10sttranscriptcluster.db

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mogene10sttranscriptcluster.db:<tag>

(see `bioconductor-mogene10sttranscriptcluster.db/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mogene10sttranscriptcluster.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mogene10sttranscriptcluster.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mogene10sttranscriptcluster.db
   :alt:   (downloads)
.. |docker_bioconductor-mogene10sttranscriptcluster.db| image:: https://quay.io/repository/biocontainers/bioconductor-mogene10sttranscriptcluster.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mogene10sttranscriptcluster.db
.. _`bioconductor-mogene10sttranscriptcluster.db/tags`: https://quay.io/repository/biocontainers/bioconductor-mogene10sttranscriptcluster.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mogene10sttranscriptcluster.db";
        var versions = ["8.8.0","8.8.0","8.8.0","8.8.0","8.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mogene10sttranscriptcluster.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mogene10sttranscriptcluster.db/README.html