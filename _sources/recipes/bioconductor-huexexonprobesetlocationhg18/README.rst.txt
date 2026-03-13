:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-huexexonprobesetlocationhg18'
.. highlight: bash

bioconductor-huexexonprobesetlocationhg18
=========================================

.. conda:recipe:: bioconductor-huexexonprobesetlocationhg18
   :replaces_section_title:
   :noindex:

   Exon\-level probeset chromosome location for microarrays of type HuEx

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/HuExExonProbesetLocationHg18.html
   :license: LGPL
   :recipe: /`bioconductor-huexexonprobesetlocationhg18 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-huexexonprobesetlocationhg18>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-huexexonprobesetlocationhg18/meta.yaml>`_

   This package was automatically created by package AnnotationDbi version 1.8.0. The exon\-level probeset genome location was retrieved from Netaffx using AffyCompatible. The exon\-level probeset genome location was retrieved from Netaffx using AffyCompatible. Genome release hg18.


.. conda:package:: bioconductor-huexexonprobesetlocationhg18

   |downloads_bioconductor-huexexonprobesetlocationhg18| |docker_bioconductor-huexexonprobesetlocationhg18|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.2-14</code>,  <code>0.0.2-13</code>,  <code>0.0.2-12</code>,  <code>0.0.2-11</code>,  <code>0.0.2-10</code>,  <code>0.0.2-9</code>,  <code>0.0.2-8</code>,  <code>0.0.2-7</code>,  <code>0.0.2-6</code>,  </span></summary>
      

      ``0.0.2-14``,  ``0.0.2-13``,  ``0.0.2-12``,  ``0.0.2-11``,  ``0.0.2-10``,  ``0.0.2-9``,  ``0.0.2-8``,  ``0.0.2-7``,  ``0.0.2-6``,  ``0.0.2-5``,  ``0.0.2-4``,  ``0.0.2-3``,  ``0.0.2-2``,  ``0.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
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

    pixi global install bioconductor-huexexonprobesetlocationhg18

to add into an existing workspace instead, run::

    pixi add bioconductor-huexexonprobesetlocationhg18

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-huexexonprobesetlocationhg18

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-huexexonprobesetlocationhg18

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-huexexonprobesetlocationhg18:<tag>

(see `bioconductor-huexexonprobesetlocationhg18/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-huexexonprobesetlocationhg18| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-huexexonprobesetlocationhg18.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-huexexonprobesetlocationhg18
   :alt:   (downloads)
.. |docker_bioconductor-huexexonprobesetlocationhg18| image:: https://quay.io/repository/biocontainers/bioconductor-huexexonprobesetlocationhg18/status
   :target: https://quay.io/repository/biocontainers/bioconductor-huexexonprobesetlocationhg18
.. _`bioconductor-huexexonprobesetlocationhg18/tags`: https://quay.io/repository/biocontainers/bioconductor-huexexonprobesetlocationhg18?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-huexexonprobesetlocationhg18";
        var versions = ["0.0.2","0.0.2","0.0.2","0.0.2","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-huexexonprobesetlocationhg18/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-huexexonprobesetlocationhg18/README.html