:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xlaevis2probe'
.. highlight: bash

bioconductor-xlaevis2probe
==========================

.. conda:recipe:: bioconductor-xlaevis2probe
   :replaces_section_title:
   :noindex:

   Probe sequence data for microarrays of type xlaevis2

   :homepage: https://bioconductor.org/packages/3.20/data/annotation/html/xlaevis2probe.html
   :license: LGPL
   :recipe: /`bioconductor-xlaevis2probe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xlaevis2probe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xlaevis2probe/meta.yaml>`_

   This package was automatically created by package AnnotationForge version 1.11.21. The probe sequence data was obtained from http\:\/\/www.affymetrix.com. The file name was X\\\_laevis\\\_2\\\_probe\\\_tab.


.. conda:package:: bioconductor-xlaevis2probe

   |downloads_bioconductor-xlaevis2probe| |docker_bioconductor-xlaevis2probe|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.18.0-14</code>,  <code>2.18.0-13</code>,  <code>2.18.0-12</code>,  <code>2.18.0-11</code>,  <code>2.18.0-10</code>,  <code>2.18.0-9</code>,  <code>2.18.0-8</code>,  <code>2.18.0-7</code>,  <code>2.18.0-6</code>,  </span></summary>
      

      ``2.18.0-14``,  ``2.18.0-13``,  ``2.18.0-12``,  ``2.18.0-11``,  ``2.18.0-10``,  ``2.18.0-9``,  ``2.18.0-8``,  ``2.18.0-7``,  ``2.18.0-6``,  ``2.18.0-5``,  ``2.18.0-4``,  ``2.18.0-3``,  ``2.18.0-2``,  ``2.18.0-0``

      
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

    pixi global install bioconductor-xlaevis2probe

to add into an existing workspace instead, run::

    pixi add bioconductor-xlaevis2probe

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-xlaevis2probe

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-xlaevis2probe

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-xlaevis2probe:<tag>

(see `bioconductor-xlaevis2probe/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-xlaevis2probe| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xlaevis2probe.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xlaevis2probe
   :alt:   (downloads)
.. |docker_bioconductor-xlaevis2probe| image:: https://quay.io/repository/biocontainers/bioconductor-xlaevis2probe/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xlaevis2probe
.. _`bioconductor-xlaevis2probe/tags`: https://quay.io/repository/biocontainers/bioconductor-xlaevis2probe?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-xlaevis2probe";
        var versions = ["2.18.0","2.18.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xlaevis2probe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xlaevis2probe/README.html