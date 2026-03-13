:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seq.hotspot'
.. highlight: bash

bioconductor-seq.hotspot
========================

.. conda:recipe:: bioconductor-seq.hotspot
   :replaces_section_title:
   :noindex:

   Targeted sequencing panel design based on mutation hotspots

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/seq.hotSPOT.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-seq.hotspot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seq.hotspot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seq.hotspot/meta.yaml>`_

   seq.hotSPOT provides a resource for designing effective sequencing panels to help improve mutation capture efficacy for ultradeep sequencing projects. Using SNV datasets\, this package designs custom panels for any tissue of interest and identify the genomic regions likely to contain the most mutations. Establishing efficient targeted sequencing panels can allow researchers to study mutation burden in tissues at high depth without the economic burden of whole\-exome or whole\-genome sequencing. This tool was developed to make high\-depth sequencing panels to study low\-frequency clonal mutations in clinically normal and cancerous tissues.


.. conda:package:: bioconductor-seq.hotspot

   |downloads_bioconductor-seq.hotspot| |docker_bioconductor-seq.hotspot|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-hash: 
   :depends on r-r.utils: 

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

    pixi global install bioconductor-seq.hotspot

to add into an existing workspace instead, run::

    pixi add bioconductor-seq.hotspot

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-seq.hotspot

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-seq.hotspot

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-seq.hotspot:<tag>

(see `bioconductor-seq.hotspot/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-seq.hotspot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seq.hotspot.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seq.hotspot
   :alt:   (downloads)
.. |docker_bioconductor-seq.hotspot| image:: https://quay.io/repository/biocontainers/bioconductor-seq.hotspot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seq.hotspot
.. _`bioconductor-seq.hotspot/tags`: https://quay.io/repository/biocontainers/bioconductor-seq.hotspot?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seq.hotspot";
        var versions = ["1.10.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seq.hotspot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seq.hotspot/README.html