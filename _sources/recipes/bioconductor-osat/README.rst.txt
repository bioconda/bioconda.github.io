:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-osat'
.. highlight: bash

bioconductor-osat
=================

.. conda:recipe:: bioconductor-osat
   :replaces_section_title:
   :noindex:

   OSAT\: Optimal Sample Assignment Tool

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/OSAT.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-osat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-osat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-osat/meta.yaml>`_
   :links: biotools: :biotools:`osat`, doi: :doi:`10.1186/1471-2164-13-689`

   A sizable genomics study such as microarray often involves the use of multiple batches \(groups\) of experiment due to practical complication. To minimize batch effects\, a careful experiment design should ensure the even distribution of biological groups and confounding factors across batches. OSAT \(Optimal Sample Assignment Tool\) is developed to facilitate the allocation of collected samples to different batches. With minimum steps\, it produces setup that optimizes the even distribution of samples in groups of biological interest into different batches\, reducing the confounding or correlation between batches and the biological variables of interest. It can also optimize the even distribution of confounding factors across batches. Our tool can handle challenging instances where incomplete and unbalanced sample collections are involved as well as ideal balanced RCBD. OSAT provides a number of predefined layout for some of the most commonly used genomics platform. Related paper can be find at http\:\/\/www.biomedcentral.com\/1471\-2164\/13\/689 .


.. conda:package:: bioconductor-osat

   |downloads_bioconductor-osat| |docker_bioconductor-osat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.58.0-0</code>,  <code>1.54.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  </span></summary>
      

      ``1.58.0-0``,  ``1.54.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-osat

to add into an existing workspace instead, run::

    pixi add bioconductor-osat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-osat

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-osat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-osat:<tag>

(see `bioconductor-osat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-osat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-osat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-osat
   :alt:   (downloads)
.. |docker_bioconductor-osat| image:: https://quay.io/repository/biocontainers/bioconductor-osat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-osat
.. _`bioconductor-osat/tags`: https://quay.io/repository/biocontainers/bioconductor-osat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-osat";
        var versions = ["1.58.0","1.54.0","1.50.0","1.48.0","1.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-osat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-osat/README.html