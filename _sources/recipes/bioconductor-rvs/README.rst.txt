:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rvs'
.. highlight: bash

bioconductor-rvs
================

.. conda:recipe:: bioconductor-rvs
   :replaces_section_title:
   :noindex:

   Computes estimates of the probability of related individuals sharing a rare variant

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RVS.html
   :license: GPL-2
   :recipe: /`bioconductor-rvs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rvs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rvs/meta.yaml>`_

   Rare Variant Sharing \(RVS\) implements tests of association and linkage between rare genetic variant genotypes and a dichotomous phenotype\, e.g. a disease status\, in family samples. The tests are based on probabilities of rare variant sharing by relatives under the null hypothesis of absence of linkage and association between the rare variants and the phenotype and apply to single variants or multiple variants in a region \(e.g. gene\-based test\).


.. conda:package:: bioconductor-rvs

   |downloads_bioconductor-rvs| |docker_bioconductor-rvs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-snpstats: ``>=1.60.0,<1.61.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-genlib: 
   :depends on r-grain: 
   :depends on r-kinship2: 
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

    pixi global install bioconductor-rvs

to add into an existing workspace instead, run::

    pixi add bioconductor-rvs

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rvs

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rvs

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rvs:<tag>

(see `bioconductor-rvs/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rvs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rvs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rvs
   :alt:   (downloads)
.. |docker_bioconductor-rvs| image:: https://quay.io/repository/biocontainers/bioconductor-rvs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rvs
.. _`bioconductor-rvs/tags`: https://quay.io/repository/biocontainers/bioconductor-rvs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rvs";
        var versions = ["1.32.0","1.28.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rvs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rvs/README.html