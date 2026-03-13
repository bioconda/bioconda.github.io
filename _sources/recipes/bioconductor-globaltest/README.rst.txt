:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-globaltest'
.. highlight: bash

bioconductor-globaltest
=======================

.. conda:recipe:: bioconductor-globaltest
   :replaces_section_title:
   :noindex:

   Testing Groups of Covariates\/Features for Association with a Response Variable\, with Applications to Gene Set Testing

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/globaltest.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-globaltest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-globaltest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-globaltest/meta.yaml>`_
   :links: biotools: :biotools:`globaltest`

   The global test tests groups of covariates \(or features\) for association with a response variable. This package implements the test with diagnostic plots and multiple testing utilities\, along with several functions to facilitate the use of this test for gene set testing of GO and KEGG terms.


.. conda:package:: bioconductor-globaltest

   |downloads_bioconductor-globaltest| |docker_bioconductor-globaltest|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.64.0-0</code>,  <code>5.60.0-0</code>,  <code>5.56.0-0</code>,  <code>5.54.0-0</code>,  <code>5.52.0-0</code>,  <code>5.48.0-0</code>,  <code>5.46.0-0</code>,  <code>5.44.0-1</code>,  <code>5.44.0-0</code>,  </span></summary>
      

      ``5.64.0-0``,  ``5.60.0-0``,  ``5.56.0-0``,  ``5.54.0-0``,  ``5.52.0-0``,  ``5.48.0-0``,  ``5.46.0-0``,  ``5.44.0-1``,  ``5.44.0-0``,  ``5.42.0-0``,  ``5.40.0-0``,  ``5.38.0-1``,  ``5.36.0-1``,  ``5.36.0-0``,  ``5.34.1-0``,  ``5.32.0-0``,  ``5.30.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotate: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
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

    pixi global install bioconductor-globaltest

to add into an existing workspace instead, run::

    pixi add bioconductor-globaltest

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-globaltest

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-globaltest

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-globaltest:<tag>

(see `bioconductor-globaltest/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-globaltest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-globaltest.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-globaltest
   :alt:   (downloads)
.. |docker_bioconductor-globaltest| image:: https://quay.io/repository/biocontainers/bioconductor-globaltest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-globaltest
.. _`bioconductor-globaltest/tags`: https://quay.io/repository/biocontainers/bioconductor-globaltest?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-globaltest";
        var versions = ["5.64.0","5.60.0","5.56.0","5.54.0","5.52.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-globaltest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-globaltest/README.html