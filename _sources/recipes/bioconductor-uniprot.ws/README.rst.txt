:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-uniprot.ws'
.. highlight: bash

bioconductor-uniprot.ws
=======================

.. conda:recipe:: bioconductor-uniprot.ws
   :replaces_section_title:
   :noindex:

   R Interface to UniProt Web Services

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/UniProt.ws.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-uniprot.ws <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-uniprot.ws>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-uniprot.ws/meta.yaml>`_
   :links: biotools: :biotools:`uniprot.ws`, doi: :doi:`10.1038/nmeth.3252`

   The Universal Protein Resource \(UniProt\) is a comprehensive resource for protein sequence and annotation data. This package provides a collection of functions for retrieving\, processing\, and re\-packaging UniProt web services. The package makes use of UniProt\'s modernized REST API and allows mapping of identifiers accross different databases.


.. conda:package:: bioconductor-uniprot.ws

   |downloads_bioconductor-uniprot.ws| |docker_bioconductor-uniprot.ws|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.50.0-0</code>,  <code>2.46.0-0</code>,  <code>2.42.0-0</code>,  <code>2.40.1-0</code>,  <code>2.38.0-0</code>,  <code>2.34.0-0</code>,  <code>2.32.0-0</code>,  <code>2.30.0-1</code>,  <code>2.30.0-0</code>,  </span></summary>
      

      ``2.50.0-0``,  ``2.46.0-0``,  ``2.42.0-0``,  ``2.40.1-0``,  ``2.38.0-0``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-1``,  ``2.30.0-0``,  ``2.29.0-0``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.1-0``,  ``2.22.0-0``,  ``2.20.4-0``,  ``2.18.0-0``,  ``2.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-biocbaseutils: ``>=1.12.0,<1.13.0``
   :depends on bioconductor-biocfilecache: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-httr2: 
   :depends on r-jsonlite: 
   :depends on r-progress: 
   :depends on r-rjsoncons: 
   :depends on r-rlang: 

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

    pixi global install bioconductor-uniprot.ws

to add into an existing workspace instead, run::

    pixi add bioconductor-uniprot.ws

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-uniprot.ws

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-uniprot.ws

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-uniprot.ws:<tag>

(see `bioconductor-uniprot.ws/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-uniprot.ws| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-uniprot.ws.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-uniprot.ws
   :alt:   (downloads)
.. |docker_bioconductor-uniprot.ws| image:: https://quay.io/repository/biocontainers/bioconductor-uniprot.ws/status
   :target: https://quay.io/repository/biocontainers/bioconductor-uniprot.ws
.. _`bioconductor-uniprot.ws/tags`: https://quay.io/repository/biocontainers/bioconductor-uniprot.ws?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-uniprot.ws";
        var versions = ["2.50.0","2.46.0","2.42.0","2.40.1","2.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-uniprot.ws/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-uniprot.ws/README.html