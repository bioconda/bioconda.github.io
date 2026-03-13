:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp'
.. highlight: bash

bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp
=====================================================

.. conda:recipe:: bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp
   :replaces_section_title:
   :noindex:

   RcisTarget motif databases for human \(hg19\) \- Subset of 4.6k motifs

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/RcisTarget.hg19.motifDBs.cisbpOnly.500bp.html
   :license: GPL-3
   :recipe: /`bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp/meta.yaml>`_

   RcisTarget databases\: Gene\-based motif rankings and annotation to transcription factors. This package contains a subset of 4.6k motifs \(cisbp motifs\)\, scored only within 500bp upstream and the TSS. See RcisTarget tutorial to download the full databases\, containing 20k motifs and search space up to 10kbp around the TSS.


.. conda:package:: bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp

   |downloads_bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp| |docker_bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.17.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.17.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.9.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 

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

    pixi global install bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp

to add into an existing workspace instead, run::

    pixi add bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp:<tag>

(see `bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp
   :alt:   (downloads)
.. |docker_bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp| image:: https://quay.io/repository/biocontainers/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp
.. _`bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp/tags`: https://quay.io/repository/biocontainers/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp";
        var versions = ["1.30.0","1.26.0","1.22.0","1.20.0","1.17.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcistarget.hg19.motifdbs.cisbponly.500bp/README.html