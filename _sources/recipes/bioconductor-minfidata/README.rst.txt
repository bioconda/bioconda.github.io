:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-minfidata'
.. highlight: bash

bioconductor-minfidata
======================

.. conda:recipe:: bioconductor-minfidata
   :replaces_section_title:
   :noindex:

   Example data for the Illumina Methylation 450k array

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/minfiData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-minfidata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minfidata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minfidata/meta.yaml>`_

   Data from 6 samples across 2 groups from 450k methylation arrays.


.. conda:package:: bioconductor-minfidata

   |downloads_bioconductor-minfidata| |docker_bioconductor-minfidata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.56.0-0</code>,  <code>0.52.0-0</code>,  <code>0.48.0-0</code>,  <code>0.46.0-0</code>,  <code>0.44.0-0</code>,  <code>0.40.0-1</code>,  <code>0.40.0-0</code>,  <code>0.38.0-0</code>,  <code>0.36.0-1</code>,  </span></summary>
      

      ``0.56.0-0``,  ``0.52.0-0``,  ``0.48.0-0``,  ``0.46.0-0``,  ``0.44.0-0``,  ``0.40.0-1``,  ``0.40.0-0``,  ``0.38.0-0``,  ``0.36.0-1``,  ``0.36.0-0``,  ``0.34.0-0``,  ``0.32.0-0``,  ``0.30.0-1``,  ``0.28.0-1``,  ``0.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-illuminahumanmethylation450kanno.ilmn12.hg19: ``>=0.6.0,<0.7.0``
   :depends on bioconductor-illuminahumanmethylation450kmanifest: ``>=0.4.0,<0.5.0``
   :depends on bioconductor-minfi: ``>=1.56.0,<1.57.0``
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

    pixi global install bioconductor-minfidata

to add into an existing workspace instead, run::

    pixi add bioconductor-minfidata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-minfidata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-minfidata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-minfidata:<tag>

(see `bioconductor-minfidata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-minfidata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-minfidata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-minfidata
   :alt:   (downloads)
.. |docker_bioconductor-minfidata| image:: https://quay.io/repository/biocontainers/bioconductor-minfidata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-minfidata
.. _`bioconductor-minfidata/tags`: https://quay.io/repository/biocontainers/bioconductor-minfidata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-minfidata";
        var versions = ["0.56.0","0.52.0","0.48.0","0.46.0","0.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-minfidata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-minfidata/README.html