:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cazy_webscraper'
.. highlight: bash

cazy_webscraper
===============

.. conda:recipe:: cazy_webscraper
   :replaces_section_title:
   :noindex:

   A tool to automate retrieving data from CAZy\, build a local CAZyme SQL database\, and throughly interrogating the data. Also\, automate retrieving protein data\, sequences\, EC numbers and structure files for specific datasets in the CAZyme database from UniProt\, GenBank and PDB.

   :homepage: https://hobnobmancer.github.io/cazy_webscraper/
   :developer docs: https://github.com/HobnobMancer/cazy_webscraper
   :license: MIT / MIT
   :recipe: /`cazy_webscraper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cazy_webscraper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cazy_webscraper/meta.yaml>`_
   :links: doi: :doi:`10.1101/2022.12.02.518825`

   


.. conda:package:: cazy_webscraper

   |downloads_cazy_webscraper| |docker_cazy_webscraper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.3.0.2-0</code>,  <code>2.3.0-0</code>,  <code>2.2.8-0</code>,  <code>2.2.7-0</code>,  <code>2.2.6-0</code>,  <code>2.2.2-0</code>,  <code>2.2.1-0</code>,  <code>2.2.0-0</code>,  <code>2.1.3.1-0</code>,  </span></summary>
      

      ``2.3.0.2-0``,  ``2.3.0-0``,  ``2.2.8-0``,  ``2.2.7-0``,  ``2.2.6-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.3.1-0``,  ``1.0.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends beautifulsoup4: 
   :depends biopython: 
   :depends bioservices: ``>=1.10.0``
   :depends html5lib: 
   :depends lxml: 
   :depends mechanicalsoup: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.8``
   :depends pyyaml: 
   :depends requests: 
   :depends saintbioutils: ``>=0.0.25``
   :depends sqlalchemy: ``1.4.20``
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install cazy_webscraper

   and update with::

      mamba update cazy_webscraper

  To create a new environment, run::

      mamba create --name myenvname cazy_webscraper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cazy_webscraper:<tag>

   (see `cazy_webscraper/tags`_ for valid values for ``<tag>``)


.. |downloads_cazy_webscraper| image:: https://img.shields.io/conda/dn/bioconda/cazy_webscraper.svg?style=flat
   :target: https://anaconda.org/bioconda/cazy_webscraper
   :alt:   (downloads)
.. |docker_cazy_webscraper| image:: https://quay.io/repository/biocontainers/cazy_webscraper/status
   :target: https://quay.io/repository/biocontainers/cazy_webscraper
.. _`cazy_webscraper/tags`: https://quay.io/repository/biocontainers/cazy_webscraper?tab=tags


.. raw:: html

    <script>
        var package = "cazy_webscraper";
        var versions = ["2.3.0.2","2.3.0","2.2.8","2.2.7","2.2.6"];
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