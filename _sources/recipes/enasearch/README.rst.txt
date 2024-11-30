:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'enasearch'
.. highlight: bash

enasearch
=========

.. conda:recipe:: enasearch
   :replaces_section_title:
   :noindex:

   A Python library for interacting with ENA\'s API

   :homepage: http://bebatut.fr/enasearch/
   :license: MIT / MIT License
   :recipe: /`enasearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enasearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enasearch/meta.yaml>`_

   


.. conda:package:: enasearch

   |downloads_enasearch| |docker_enasearch|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.2.2-2</code>,  <code>0.2.2-1</code>,  <code>0.2.2-0</code>,  <code>0.1.1-1</code>,  <code>0.1.1-0</code>,  <code>0.0.6-1</code>,  <code>0.0.6-0</code>,  <code>0.0.5-1</code>,  <code>0.0.5-0</code>,  </span></summary>
      

      ``0.2.2-2``,  ``0.2.2-1``,  ``0.2.2-0``,  ``0.1.1-1``,  ``0.1.1-0``,  ``0.0.6-1``,  ``0.0.6-0``,  ``0.0.5-1``,  ``0.0.5-0``,  ``0.0.4-1``,  ``0.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends click: 
   :depends dicttoxml: 
   :depends flake8: 
   :depends python: ``<3``
   :depends requests: 
   :depends xmltodict: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install enasearch

   and update with::

      mamba update enasearch

  To create a new environment, run::

      mamba create --name myenvname enasearch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/enasearch:<tag>

   (see `enasearch/tags`_ for valid values for ``<tag>``)


.. |downloads_enasearch| image:: https://img.shields.io/conda/dn/bioconda/enasearch.svg?style=flat
   :target: https://anaconda.org/bioconda/enasearch
   :alt:   (downloads)
.. |docker_enasearch| image:: https://quay.io/repository/biocontainers/enasearch/status
   :target: https://quay.io/repository/biocontainers/enasearch
.. _`enasearch/tags`: https://quay.io/repository/biocontainers/enasearch?tab=tags


.. raw:: html

    <script>
        var package = "enasearch";
        var versions = ["0.2.2","0.2.2","0.2.2","0.1.1","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/enasearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/enasearch/README.html