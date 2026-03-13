:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dcgsa'
.. highlight: bash

bioconductor-dcgsa
==================

.. conda:recipe:: bioconductor-dcgsa
   :replaces_section_title:
   :noindex:

   Distance\-correlation based Gene Set Analysis for longitudinal gene expression profiles

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/dcGSA.html
   :license: GPL-2
   :recipe: /`bioconductor-dcgsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dcgsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dcgsa/meta.yaml>`_
   :links: biotools: :biotools:`dcgsa`, doi: :doi:`10.1038/nmeth.3252`

   Distance\-correlation based Gene Set Analysis for longitudinal gene expression profiles. In longitudinal studies\, the gene expression profiles were collected at each visit from each subject and hence there are multiple measurements of the gene expression profiles for each subject. The dcGSA package could be used to assess the associations between gene sets and clinical outcomes of interest by fully taking advantage of the longitudinal nature of both the gene expression profiles and clinical outcomes.


.. conda:package:: bioconductor-dcgsa

   |downloads_bioconductor-dcgsa| |docker_bioconductor-dcgsa|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrix: 

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

    pixi global install bioconductor-dcgsa

to add into an existing workspace instead, run::

    pixi add bioconductor-dcgsa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-dcgsa

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-dcgsa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-dcgsa:<tag>

(see `bioconductor-dcgsa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-dcgsa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dcgsa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dcgsa
   :alt:   (downloads)
.. |docker_bioconductor-dcgsa| image:: https://quay.io/repository/biocontainers/bioconductor-dcgsa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dcgsa
.. _`bioconductor-dcgsa/tags`: https://quay.io/repository/biocontainers/bioconductor-dcgsa?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dcgsa";
        var versions = ["1.38.0","1.34.0","1.30.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dcgsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dcgsa/README.html