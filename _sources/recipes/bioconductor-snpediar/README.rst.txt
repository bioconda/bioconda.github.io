:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snpediar'
.. highlight: bash

bioconductor-snpediar
=====================

.. conda:recipe:: bioconductor-snpediar
   :replaces_section_title:
   :noindex:

   Query data from SNPedia

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SNPediaR.html
   :license: GPL-2
   :recipe: /`bioconductor-snpediar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snpediar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snpediar/meta.yaml>`_
   :links: biotools: :biotools:`snpediar`, doi: :doi:`10.1007/978-1-4419-9863-7_1039`

   SNPediaR provides some tools for downloading and parsing data from the SNPedia web site \<http\:\/\/www.snpedia.com\>. The implemented functions allow users to import the wiki text available in SNPedia pages and to extract the most relevant information out of them. If some information in the downloaded pages is not automatically processed by the library functions\, users can easily implement their own parsers to access it in an efficient way.


.. conda:package:: bioconductor-snpediar

   |downloads_bioconductor-snpediar| |docker_bioconductor-snpediar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-jsonlite: 
   :depends on r-rcurl: 

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

    pixi global install bioconductor-snpediar

to add into an existing workspace instead, run::

    pixi add bioconductor-snpediar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-snpediar

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-snpediar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-snpediar:<tag>

(see `bioconductor-snpediar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-snpediar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snpediar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-snpediar
   :alt:   (downloads)
.. |docker_bioconductor-snpediar| image:: https://quay.io/repository/biocontainers/bioconductor-snpediar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snpediar
.. _`bioconductor-snpediar/tags`: https://quay.io/repository/biocontainers/bioconductor-snpediar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-snpediar";
        var versions = ["1.36.0","1.32.0","1.28.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snpediar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snpediar/README.html