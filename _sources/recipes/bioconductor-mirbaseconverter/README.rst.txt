:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirbaseconverter'
.. highlight: bash

bioconductor-mirbaseconverter
=============================

.. conda:recipe:: bioconductor-mirbaseconverter
   :replaces_section_title:
   :noindex:

   A comprehensive and high\-efficiency tool for converting and retrieving the information of miRNAs in different miRBase versions

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/miRBaseConverter.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mirbaseconverter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirbaseconverter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirbaseconverter/meta.yaml>`_

   A comprehensive tool for converting and retrieving the miRNA Name\, Accession\, Sequence\, Version\, History and Family information in different miRBase versions. It can process a huge number of miRNAs in a short time without other depends.


.. conda:package:: bioconductor-mirbaseconverter

   |downloads_bioconductor-mirbaseconverter| |docker_bioconductor-mirbaseconverter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.30.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
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

    pixi global install bioconductor-mirbaseconverter

to add into an existing workspace instead, run::

    pixi add bioconductor-mirbaseconverter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mirbaseconverter

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mirbaseconverter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mirbaseconverter:<tag>

(see `bioconductor-mirbaseconverter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mirbaseconverter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirbaseconverter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirbaseconverter
   :alt:   (downloads)
.. |docker_bioconductor-mirbaseconverter| image:: https://quay.io/repository/biocontainers/bioconductor-mirbaseconverter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirbaseconverter
.. _`bioconductor-mirbaseconverter/tags`: https://quay.io/repository/biocontainers/bioconductor-mirbaseconverter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mirbaseconverter";
        var versions = ["1.34.0","1.30.0","1.24.0","1.22.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirbaseconverter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirbaseconverter/README.html