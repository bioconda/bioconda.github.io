:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-liebermanaidenhic2009'
.. highlight: bash

bioconductor-liebermanaidenhic2009
==================================

.. conda:recipe:: bioconductor-liebermanaidenhic2009
   :replaces_section_title:
   :noindex:

   Selected data from the HiC paper of E. Lieberman\-Aiden et al. in Science \(2009\)

   :homepage: https://bioconductor.org/packages/3.20/data/experiment/html/LiebermanAidenHiC2009.html
   :license: LGPL
   :recipe: /`bioconductor-liebermanaidenhic2009 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-liebermanaidenhic2009>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-liebermanaidenhic2009/meta.yaml>`_

   This package provides data that were presented in the article \"Comprehensive mapping of long\-range interactions reveals folding principles of the human genome\"\, Science 2009 Oct 9\;326\(5950\)\:289\-93. PMID\: 19815776


.. conda:package:: bioconductor-liebermanaidenhic2009

   |downloads_bioconductor-liebermanaidenhic2009| |docker_bioconductor-liebermanaidenhic2009|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.48.0-0</code>,  <code>0.44.0-0</code>,  <code>0.40.0-0</code>,  <code>0.38.0-0</code>,  <code>0.35.0-0</code>,  <code>0.32.0-1</code>,  <code>0.32.0-0</code>,  <code>0.30.0-0</code>,  <code>0.28.0-1</code>,  </span></summary>
      

      ``0.48.0-0``,  ``0.44.0-0``,  ``0.40.0-0``,  ``0.38.0-0``,  ``0.35.0-0``,  ``0.32.0-1``,  ``0.32.0-0``,  ``0.30.0-0``,  ``0.28.0-1``,  ``0.28.0-0``,  ``0.26.0-0``,  ``0.24.0-0``,  ``0.22.0-1``,  ``0.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-kernsmooth: 

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

    pixi global install bioconductor-liebermanaidenhic2009

to add into an existing workspace instead, run::

    pixi add bioconductor-liebermanaidenhic2009

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-liebermanaidenhic2009

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-liebermanaidenhic2009

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-liebermanaidenhic2009:<tag>

(see `bioconductor-liebermanaidenhic2009/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-liebermanaidenhic2009| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-liebermanaidenhic2009.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-liebermanaidenhic2009
   :alt:   (downloads)
.. |docker_bioconductor-liebermanaidenhic2009| image:: https://quay.io/repository/biocontainers/bioconductor-liebermanaidenhic2009/status
   :target: https://quay.io/repository/biocontainers/bioconductor-liebermanaidenhic2009
.. _`bioconductor-liebermanaidenhic2009/tags`: https://quay.io/repository/biocontainers/bioconductor-liebermanaidenhic2009?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-liebermanaidenhic2009";
        var versions = ["0.48.0","0.44.0","0.40.0","0.38.0","0.35.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-liebermanaidenhic2009/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-liebermanaidenhic2009/README.html