:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-reqon'
.. highlight: bash

bioconductor-reqon
==================

.. conda:recipe:: bioconductor-reqon
   :replaces_section_title:
   :noindex:

   Recalibrating Quality Of Nucleotides

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ReQON.html
   :license: GPL-2
   :recipe: /`bioconductor-reqon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reqon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-reqon/meta.yaml>`_

   Algorithm for recalibrating the base quality scores for aligned sequencing data in BAM format.


.. conda:package:: bioconductor-reqon

   |downloads_bioconductor-reqon| |docker_bioconductor-reqon|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  </span></summary>
      

      ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends on bioconductor-seqbias: ``>=1.50.0,<1.51.0``
   :depends on openjdk: 
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-rjava: 

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

    pixi global install bioconductor-reqon

to add into an existing workspace instead, run::

    pixi add bioconductor-reqon

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-reqon

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-reqon

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-reqon:<tag>

(see `bioconductor-reqon/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-reqon| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-reqon.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-reqon
   :alt:   (downloads)
.. |docker_bioconductor-reqon| image:: https://quay.io/repository/biocontainers/bioconductor-reqon/status
   :target: https://quay.io/repository/biocontainers/bioconductor-reqon
.. _`bioconductor-reqon/tags`: https://quay.io/repository/biocontainers/bioconductor-reqon?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-reqon";
        var versions = ["1.48.0","1.46.0","1.44.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-reqon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-reqon/README.html