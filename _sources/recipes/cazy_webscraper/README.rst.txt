:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cazy_webscraper'
.. highlight: bash

cazy_webscraper
===============

.. conda:recipe:: cazy_webscraper
   :replaces_section_title:
   :noindex:

   A tool to automate retrieving data from CAZy\, build a local CAZyme SQL database\, and throughly interrogating the data. Also\, automate retrieving protein data\, sequences\, EC numbers and structure files for specific datasets in the CAZyme database from UniProt\, GenBank and PDB.

   :homepage: https://github.com/HobnobMancer/cazy_webscraper
   :documentation: https://hobnobmancer.github.io/cazy_webscraper
   
   :license: MIT / MIT
   :recipe: /`cazy_webscraper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cazy_webscraper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cazy_webscraper/meta.yaml>`_
   :links: doi: :doi:`10.1101/2022.12.02.518825`

   


.. conda:package:: cazy_webscraper

   |downloads_cazy_webscraper| |docker_cazy_webscraper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.0.4-0</code>,  <code>2.3.0.3-0</code>,  <code>2.3.0.2-0</code>,  <code>2.3.0-0</code>,  <code>2.2.8-0</code>,  <code>2.2.7-0</code>,  <code>2.2.6-0</code>,  <code>2.2.2-0</code>,  <code>2.2.1-0</code>,  </span></summary>
      

      ``2.3.0.4-0``,  ``2.3.0.3-0``,  ``2.3.0.2-0``,  ``2.3.0-0``,  ``2.2.8-0``,  ``2.2.7-0``,  ``2.2.6-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.3.1-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends on beautifulsoup4: 
   :depends on biopython: 
   :depends on bioservices: ``>=1.10.0``
   :depends on html5lib: 
   :depends on lxml: 
   :depends on mechanicalsoup: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.8``
   :depends on pyyaml: 
   :depends on requests: 
   :depends on saintbioutils: ``>=0.0.25``
   :depends on sqlalchemy: ``1.4.20``
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

    pixi global install cazy_webscraper

to add into an existing workspace instead, run::

    pixi add cazy_webscraper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cazy_webscraper

Alternatively, to install into a new environment, run::

    conda create -n envname cazy_webscraper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cazy_webscraper:<tag>

(see `cazy_webscraper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cazy_webscraper| image:: https://img.shields.io/conda/dn/bioconda/cazy_webscraper.svg?style=flat
   :target: https://anaconda.org/bioconda/cazy_webscraper
   :alt:   (downloads)
.. |docker_cazy_webscraper| image:: https://quay.io/repository/biocontainers/cazy_webscraper/status
   :target: https://quay.io/repository/biocontainers/cazy_webscraper
.. _`cazy_webscraper/tags`: https://quay.io/repository/biocontainers/cazy_webscraper?tab=tags


.. raw:: html

    <script>
        var package = "cazy_webscraper";
        var versions = ["2.3.0.4","2.3.0.3","2.3.0.2","2.3.0","2.2.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cazy_webscraper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cazy_webscraper/README.html