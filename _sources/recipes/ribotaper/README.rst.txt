:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribotaper'
.. highlight: bash

ribotaper
=========

.. conda:recipe:: ribotaper
   :replaces_section_title:
   :noindex:

   RiboTaper is a new analysis pipeline for Ribosome Profiling \(Ribo\-seq\) experiments\, which exploits the triplet periodicity of ribosomal footprints to call translated regions.

   :homepage: https://ohlerlab.mdc-berlin.de/software/RiboTaper_126/
   :license: GPL-3.0-or-later
   :recipe: /`ribotaper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotaper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotaper/meta.yaml>`_
   :links: biotools: :biotools:`ribotaper`, doi: :doi:`10.1038/nmeth.3688`

   


.. conda:package:: ribotaper

   |downloads_ribotaper| |docker_ribotaper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.1-0</code>,  <code>1.3.1a-9</code>,  <code>1.3.1a-8</code>,  <code>1.3.1a-7</code>,  <code>1.3.1a-6</code>,  <code>1.3.1a-5</code>,  <code>1.3.1a-4</code>,  <code>1.3.1a-3</code>,  <code>1.3.1a-2</code>,  </span></summary>
      

      ``1.3.1-0``,  ``1.3.1a-9``,  ``1.3.1a-8``,  ``1.3.1a-7``,  ``1.3.1a-6``,  ``1.3.1a-5``,  ``1.3.1a-4``,  ``1.3.1a-3``,  ``1.3.1a-2``,  ``1.3.1a-1``,  ``1.3.1a-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bedtools: ``==2.17.0``
   :depends on r-ade4: 
   :depends on r-domc: 
   :depends on r-foreach: 
   :depends on r-iterators: 
   :depends on r-multitaper: 
   :depends on r-seqinr: 
   :depends on r-xnomial: 
   :depends on samtools: 

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

    pixi global install ribotaper

to add into an existing workspace instead, run::

    pixi add ribotaper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ribotaper

Alternatively, to install into a new environment, run::

    conda create -n envname ribotaper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ribotaper:<tag>

(see `ribotaper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ribotaper| image:: https://img.shields.io/conda/dn/bioconda/ribotaper.svg?style=flat
   :target: https://anaconda.org/bioconda/ribotaper
   :alt:   (downloads)
.. |docker_ribotaper| image:: https://quay.io/repository/biocontainers/ribotaper/status
   :target: https://quay.io/repository/biocontainers/ribotaper
.. _`ribotaper/tags`: https://quay.io/repository/biocontainers/ribotaper?tab=tags


.. raw:: html

    <script>
        var package = "ribotaper";
        var versions = ["1.3.1","1.3.1a","1.3.1a","1.3.1a","1.3.1a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribotaper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribotaper/README.html