:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-annotationhub'
.. highlight: bash

bioconductor-annotationhub
==========================

.. conda:recipe:: bioconductor-annotationhub
   :replaces_section_title:
   :noindex:

   Client to access AnnotationHub resources

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/AnnotationHub.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-annotationhub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationhub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationhub/meta.yaml>`_
   :links: biotools: :biotools:`annotationhub`, doi: :doi:`10.1038/nmeth.3252`

   This package provides a client for the Bioconductor AnnotationHub web resource. The AnnotationHub web resource provides a central location where genomic files \(e.g.\, VCF\, bed\, wig\) and other resources from standard locations \(e.g.\, UCSC\, Ensembl\) can be discovered. The resource includes metadata about each resource\, e.g.\, a textual description\, tags\, and date of modification. The client creates and manages a local cache of files retrieved by the user\, helping with quick and reproducible access.


.. conda:package:: bioconductor-annotationhub

   |downloads_bioconductor-annotationhub| |docker_bioconductor-annotationhub|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.0-0</code>,  <code>3.14.0-0</code>,  <code>3.10.0-0</code>,  <code>3.8.0-0</code>,  <code>3.6.0-0</code>,  <code>3.2.0-0</code>,  <code>3.0.0-0</code>,  <code>2.22.0-1</code>,  <code>2.22.0-0</code>,  </span></summary>
      

      ``4.0.0-0``,  ``3.14.0-0``,  ``3.10.0-0``,  ``3.8.0-0``,  ``3.6.0-0``,  ``3.2.0-0``,  ``3.0.0-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-1``,  ``2.14.5-0``,  ``2.14.2-0``,  ``2.12.1-0``,  ``2.10.1-0``,  ``2.10.0-0``,  ``2.8.2-0``,  ``2.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-biocbaseutils: ``>=1.12.0,<1.13.0``
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocversion: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-biocmanager: 
   :depends on r-curl: 
   :depends on r-dplyr: 
   :depends on r-httr2: 
   :depends on r-rappdirs: 
   :depends on r-rsqlite: 
   :depends on r-yaml: 

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

    pixi global install bioconductor-annotationhub

to add into an existing workspace instead, run::

    pixi add bioconductor-annotationhub

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-annotationhub

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-annotationhub

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-annotationhub:<tag>

(see `bioconductor-annotationhub/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-annotationhub| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-annotationhub.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-annotationhub
   :alt:   (downloads)
.. |docker_bioconductor-annotationhub| image:: https://quay.io/repository/biocontainers/bioconductor-annotationhub/status
   :target: https://quay.io/repository/biocontainers/bioconductor-annotationhub
.. _`bioconductor-annotationhub/tags`: https://quay.io/repository/biocontainers/bioconductor-annotationhub?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-annotationhub";
        var versions = ["4.0.0","3.14.0","3.10.0","3.8.0","3.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-annotationhub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-annotationhub/README.html