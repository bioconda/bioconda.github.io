:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ncbi-genome-download'
.. highlight: bash

ncbi-genome-download
====================

.. conda:recipe:: ncbi-genome-download
   :replaces_section_title:
   :noindex:

   Download genome files from the NCBI FTP server.

   :homepage: https://github.com/kblin/ncbi-genome-download/
   :license: Apache / Apache Software License
   :recipe: /`ncbi-genome-download <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-genome-download>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ncbi-genome-download/meta.yaml>`_

   


.. conda:package:: ncbi-genome-download

   |downloads_ncbi-genome-download| |docker_ncbi-genome-download|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.3.3-0</code>,  <code>0.3.2-0</code>,  <code>0.3.1-1</code>,  <code>0.3.1-0</code>,  <code>0.3.0-1</code>,  <code>0.3.0-0</code>,  <code>0.2.12-0</code>,  <code>0.2.11-0</code>,  <code>0.2.10-0</code>,  </span></summary>
      

      ``0.3.3-0``,  ``0.3.2-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.12-0``,  ``0.2.11-0``,  ``0.2.10-0``,  ``0.2.9-0``,  ``0.2.8-1``,  ``0.2.8-0``,  ``0.2.7-0``,  ``0.2.6-1``,  ``0.2.6-0``,  ``0.2.5-1``,  ``0.2.5-0``,  ``0.2.4-0``,  ``0.2.2-0``,  ``0.2.0-0``,  ``0.1.8-0``

      
      .. raw:: html

         </details>
      

   
   :depends on appdirs: 
   :depends on python: 
   :depends on requests: ``>=2.4.3``
   :depends on tqdm: 

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

    pixi global install ncbi-genome-download

to add into an existing workspace instead, run::

    pixi add ncbi-genome-download

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ncbi-genome-download

Alternatively, to install into a new environment, run::

    conda create -n envname ncbi-genome-download

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ncbi-genome-download:<tag>

(see `ncbi-genome-download/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ncbi-genome-download| image:: https://img.shields.io/conda/dn/bioconda/ncbi-genome-download.svg?style=flat
   :target: https://anaconda.org/bioconda/ncbi-genome-download
   :alt:   (downloads)
.. |docker_ncbi-genome-download| image:: https://quay.io/repository/biocontainers/ncbi-genome-download/status
   :target: https://quay.io/repository/biocontainers/ncbi-genome-download
.. _`ncbi-genome-download/tags`: https://quay.io/repository/biocontainers/ncbi-genome-download?tab=tags


.. raw:: html

    <script>
        var package = "ncbi-genome-download";
        var versions = ["0.3.3","0.3.2","0.3.1","0.3.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ncbi-genome-download/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ncbi-genome-download/README.html