:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cghcall'
.. highlight: bash

bioconductor-cghcall
====================

.. conda:recipe:: bioconductor-cghcall
   :replaces_section_title:
   :noindex:

   Calling aberrations for array CGH tumor profiles.

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CGHcall.html
   :license: GPL (http://www.gnu.org/copyleft/gpl.html)
   :recipe: /`bioconductor-cghcall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cghcall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cghcall/meta.yaml>`_
   :links: biotools: :biotools:`cghcall`, doi: :doi:`10.1093/bioinformatics/btm030`

   Calls aberrations for array CGH data using a six state mixture model as well as several biological concepts that are ignored by existing algorithms. Visualization of profiles is also provided.


.. conda:package:: bioconductor-cghcall

   |downloads_bioconductor-cghcall| |docker_bioconductor-cghcall|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.72.0-0</code>,  <code>2.68.0-0</code>,  <code>2.64.0-0</code>,  <code>2.62.0-0</code>,  <code>2.60.0-0</code>,  <code>2.56.0-0</code>,  <code>2.54.0-0</code>,  <code>2.52.0-1</code>,  <code>2.52.0-0</code>,  </span></summary>
      

      ``2.72.0-0``,  ``2.68.0-0``,  ``2.64.0-0``,  ``2.62.0-0``,  ``2.60.0-0``,  ``2.56.0-0``,  ``2.54.0-0``,  ``2.52.0-1``,  ``2.52.0-0``,  ``2.50.0-0``,  ``2.48.0-0``,  ``2.46.0-1``,  ``2.44.0-1``,  ``2.44.0-0``,  ``2.42.0-0``,  ``2.40.0-0``,  ``2.38.0-0``,  ``2.34.1-0``,  ``2.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-cghbase: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-dnacopy: ``>=1.84.0,<1.85.0``
   :depends on bioconductor-impute: ``>=1.84.0,<1.85.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-snowfall: 

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

    pixi global install bioconductor-cghcall

to add into an existing workspace instead, run::

    pixi add bioconductor-cghcall

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cghcall

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cghcall

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cghcall:<tag>

(see `bioconductor-cghcall/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cghcall| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cghcall.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cghcall
   :alt:   (downloads)
.. |docker_bioconductor-cghcall| image:: https://quay.io/repository/biocontainers/bioconductor-cghcall/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cghcall
.. _`bioconductor-cghcall/tags`: https://quay.io/repository/biocontainers/bioconductor-cghcall?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cghcall";
        var versions = ["2.72.0","2.68.0","2.64.0","2.62.0","2.60.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cghcall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cghcall/README.html