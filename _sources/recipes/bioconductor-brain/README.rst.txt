:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-brain'
.. highlight: bash

bioconductor-brain
==================

.. conda:recipe:: bioconductor-brain
   :replaces_section_title:
   :noindex:

   Baffling Recursive Algorithm for Isotope distributioN calculations

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BRAIN.html
   :license: GPL-2
   :recipe: /`bioconductor-brain <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brain>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brain/meta.yaml>`_
   :links: biotools: :biotools:`brain`, doi: :doi:`10.1021/ac303439m`

   Package for calculating aggregated isotopic distribution and exact center\-masses for chemical substances \(in this version composed of C\, H\, N\, O and S\). This is an implementation of the BRAIN algorithm described in the paper by J. Claesen\, P. Dittwald\, T. Burzykowski and D. Valkenborg.


.. conda:package:: bioconductor-brain

   |downloads_bioconductor-brain| |docker_bioconductor-brain|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.56.0-0</code>,  <code>1.52.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  </span></summary>
      

      ``1.56.0-0``,  ``1.52.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.1-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-lattice: 
   :depends on r-polynomf: 

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

    pixi global install bioconductor-brain

to add into an existing workspace instead, run::

    pixi add bioconductor-brain

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-brain

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-brain

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-brain:<tag>

(see `bioconductor-brain/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-brain| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-brain.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-brain
   :alt:   (downloads)
.. |docker_bioconductor-brain| image:: https://quay.io/repository/biocontainers/bioconductor-brain/status
   :target: https://quay.io/repository/biocontainers/bioconductor-brain
.. _`bioconductor-brain/tags`: https://quay.io/repository/biocontainers/bioconductor-brain?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-brain";
        var versions = ["1.56.0","1.52.0","1.48.0","1.46.0","1.44.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-brain/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-brain/README.html