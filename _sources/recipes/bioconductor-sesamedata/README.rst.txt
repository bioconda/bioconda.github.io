:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sesamedata'
.. highlight: bash

bioconductor-sesamedata
=======================

.. conda:recipe:: bioconductor-sesamedata
   :replaces_section_title:
   :noindex:

   Supporting Data for SeSAMe Package

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/sesameData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sesamedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sesamedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sesamedata/meta.yaml>`_

   Provides supporting annotation and test data for SeSAMe package. This includes chip tango addresses\, mapping information\, performance annotation\, and trained predictor for Infinium array data. This package provides user access to essential annotation data for working with many generations of the Infinium DNA methylation array. Current we support human array \(HM27\, HM450\, EPIC\)\, mouse array \(MM285\) and the HorvathMethylChip40 \(Mammal40\) array.


.. conda:package:: bioconductor-sesamedata

   |downloads_bioconductor-sesamedata| |docker_bioconductor-sesamedata|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.1-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-readr: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-sesamedata

to add into an existing workspace instead, run::

    pixi add bioconductor-sesamedata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sesamedata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sesamedata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sesamedata:<tag>

(see `bioconductor-sesamedata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sesamedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sesamedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sesamedata
   :alt:   (downloads)
.. |docker_bioconductor-sesamedata| image:: https://quay.io/repository/biocontainers/bioconductor-sesamedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sesamedata
.. _`bioconductor-sesamedata/tags`: https://quay.io/repository/biocontainers/bioconductor-sesamedata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sesamedata";
        var versions = ["1.28.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sesamedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sesamedata/README.html