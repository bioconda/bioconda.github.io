:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hybridmtest'
.. highlight: bash

bioconductor-hybridmtest
========================

.. conda:recipe:: bioconductor-hybridmtest
   :replaces_section_title:
   :noindex:

   Hybrid Multiple Testing

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/HybridMTest.html
   :license: GPL Version 2 or later
   :recipe: /`bioconductor-hybridmtest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hybridmtest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hybridmtest/meta.yaml>`_
   :links: biotools: :biotools:`hybridmtest`, doi: :doi:`10.1038/nmeth.3252`

   Performs hybrid multiple testing that incorporates method selection and assumption evaluations into the analysis using empirical Bayes probability \(EBP\) estimates obtained by Grenander density estimation. For instance\, for 3\-group comparison analysis\, Hybrid Multiple testing considers EBPs as weighted EBPs between F\-test and H\-test with EBPs from Shapiro Wilk test of normality as weigth. Instead of just using EBPs from F\-test only or using H\-test only\, this methodology combines both types of EBPs through EBPs from Shapiro Wilk test of normality. This methodology uses then the law of total EBPs.


.. conda:package:: bioconductor-hybridmtest

   |downloads_bioconductor-hybridmtest| |docker_bioconductor-hybridmtest|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.54.0-0</code>,  <code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  </span></summary>
      

      ``1.54.0-0``,  ``1.50.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-fdrtool: 
   :depends on r-mass: 
   :depends on r-survival: 

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

    pixi global install bioconductor-hybridmtest

to add into an existing workspace instead, run::

    pixi add bioconductor-hybridmtest

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hybridmtest

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hybridmtest

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hybridmtest:<tag>

(see `bioconductor-hybridmtest/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hybridmtest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hybridmtest.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hybridmtest
   :alt:   (downloads)
.. |docker_bioconductor-hybridmtest| image:: https://quay.io/repository/biocontainers/bioconductor-hybridmtest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hybridmtest
.. _`bioconductor-hybridmtest/tags`: https://quay.io/repository/biocontainers/bioconductor-hybridmtest?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hybridmtest";
        var versions = ["1.54.0","1.50.0","1.46.0","1.44.0","1.42.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hybridmtest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hybridmtest/README.html