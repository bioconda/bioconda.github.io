:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spectraltad'
.. highlight: bash

bioconductor-spectraltad
========================

.. conda:recipe:: bioconductor-spectraltad
   :replaces_section_title:
   :noindex:

   SpectralTAD\: Hierarchical TAD detection using spectral clustering

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SpectralTAD.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-spectraltad <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spectraltad>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spectraltad/meta.yaml>`_

   SpectralTAD is an R package designed to identify Topologically Associated Domains \(TADs\) from Hi\-C contact matrices. It uses a modified version of spectral clustering that uses a sliding window to quickly detect TADs. The function works on a range of different formats of contact matrices and returns a bed file of TAD coordinates. The method does not require users to adjust any parameters to work and gives them control over the number of hierarchical levels to be returned.


.. conda:package:: bioconductor-spectraltad

   |downloads_bioconductor-spectraltad| |docker_bioconductor-spectraltad|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-hiccompare: ``>=1.32.0,<1.33.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cluster: 
   :depends on r-dplyr: 
   :depends on r-magrittr: 
   :depends on r-matrix: 
   :depends on r-primme: 

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

    pixi global install bioconductor-spectraltad

to add into an existing workspace instead, run::

    pixi add bioconductor-spectraltad

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-spectraltad

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-spectraltad

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-spectraltad:<tag>

(see `bioconductor-spectraltad/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-spectraltad| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spectraltad.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spectraltad
   :alt:   (downloads)
.. |docker_bioconductor-spectraltad| image:: https://quay.io/repository/biocontainers/bioconductor-spectraltad/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spectraltad
.. _`bioconductor-spectraltad/tags`: https://quay.io/repository/biocontainers/bioconductor-spectraltad?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spectraltad";
        var versions = ["1.26.0","1.22.0","1.18.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spectraltad/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spectraltad/README.html