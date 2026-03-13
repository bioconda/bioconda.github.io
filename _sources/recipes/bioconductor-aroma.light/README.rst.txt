:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-aroma.light'
.. highlight: bash

bioconductor-aroma.light
========================

.. conda:recipe:: bioconductor-aroma.light
   :replaces_section_title:
   :noindex:

   Light\-Weight Methods for Normalization and Visualization of Microarray Data using Only Basic R Data Types

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/aroma.light.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-aroma.light <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aroma.light>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aroma.light/meta.yaml>`_
   :links: biotools: :biotools:`aroma.light`

   Methods for microarray analysis that take basic data types such as matrices and lists of vectors.  These methods can be used standalone\, be utilized in other packages\, or be wrapped up in higher\-level classes.


.. conda:package:: bioconductor-aroma.light

   |downloads_bioconductor-aroma.light| |docker_bioconductor-aroma.light|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.40.0-0</code>,  <code>3.36.0-0</code>,  <code>3.32.0-0</code>,  <code>3.30.0-0</code>,  <code>3.28.0-0</code>,  <code>3.24.0-0</code>,  <code>3.22.0-0</code>,  <code>3.20.0-1</code>,  <code>3.20.0-0</code>,  </span></summary>
      

      ``3.40.0-0``,  ``3.36.0-0``,  ``3.32.0-0``,  ``3.30.0-0``,  ``3.28.0-0``,  ``3.24.0-0``,  ``3.22.0-0``,  ``3.20.0-1``,  ``3.20.0-0``,  ``3.18.0-0``,  ``3.16.0-0``,  ``3.14.0-1``,  ``3.14.0-0``,  ``3.12.0-1``,  ``3.12.0-0``,  ``3.10.0-0``,  ``3.8.0-0``,  ``3.6.0-0``,  ``3.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrixstats: ``>=0.55.0``
   :depends on r-r.methodss3: ``>=1.7.1``
   :depends on r-r.oo: ``>=1.23.0``
   :depends on r-r.utils: ``>=2.9.0``

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

    pixi global install bioconductor-aroma.light

to add into an existing workspace instead, run::

    pixi add bioconductor-aroma.light

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-aroma.light

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-aroma.light

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-aroma.light:<tag>

(see `bioconductor-aroma.light/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-aroma.light| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-aroma.light.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-aroma.light
   :alt:   (downloads)
.. |docker_bioconductor-aroma.light| image:: https://quay.io/repository/biocontainers/bioconductor-aroma.light/status
   :target: https://quay.io/repository/biocontainers/bioconductor-aroma.light
.. _`bioconductor-aroma.light/tags`: https://quay.io/repository/biocontainers/bioconductor-aroma.light?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-aroma.light";
        var versions = ["3.40.0","3.36.0","3.32.0","3.30.0","3.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-aroma.light/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-aroma.light/README.html