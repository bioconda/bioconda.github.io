:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-antiprofilesdata'
.. highlight: bash

bioconductor-antiprofilesdata
=============================

.. conda:recipe:: bioconductor-antiprofilesdata
   :replaces_section_title:
   :noindex:

   Normal colon and cancer preprocessed affy data for antiProfile building.

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/antiProfilesData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-antiprofilesdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-antiprofilesdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-antiprofilesdata/meta.yaml>`_

   Colon normal tissue and cancer samples used in Corrada Bravo\, et al. gene expression anti\-profiles paper\: BMC Bioinformatics 2012\, 13\:272 doi\:10.1186\/1471\-2105\-13\-272. Measurements are z\-scores obtained from the GeneExpression Barcode in the \'frma\' package


.. conda:package:: bioconductor-antiprofilesdata

   |downloads_bioconductor-antiprofilesdata| |docker_bioconductor-antiprofilesdata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-1</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.25.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-data-packages: ``>=20260207``
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

    pixi global install bioconductor-antiprofilesdata

to add into an existing workspace instead, run::

    pixi add bioconductor-antiprofilesdata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-antiprofilesdata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-antiprofilesdata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-antiprofilesdata:<tag>

(see `bioconductor-antiprofilesdata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-antiprofilesdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-antiprofilesdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-antiprofilesdata
   :alt:   (downloads)
.. |docker_bioconductor-antiprofilesdata| image:: https://quay.io/repository/biocontainers/bioconductor-antiprofilesdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-antiprofilesdata
.. _`bioconductor-antiprofilesdata/tags`: https://quay.io/repository/biocontainers/bioconductor-antiprofilesdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-antiprofilesdata";
        var versions = ["1.46.0","1.38.0","1.36.0","1.34.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-antiprofilesdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-antiprofilesdata/README.html