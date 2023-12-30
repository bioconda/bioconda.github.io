:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-uniprot.ws'
.. highlight: bash

bioconductor-uniprot.ws
=======================

.. conda:recipe:: bioconductor-uniprot.ws
   :replaces_section_title:
   :noindex:

   R Interface to UniProt Web Services

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/UniProt.ws.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-uniprot.ws <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-uniprot.ws>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-uniprot.ws/meta.yaml>`_
   :links: biotools: :biotools:`uniprot.ws`, doi: :doi:`10.1038/nmeth.3252`

   The Universal Protein Resource \(UniProt\) is a comprehensive resource for protein sequence and annotation data. This package provides a collection of functions for retrieving\, processing\, and re\-packaging UniProt web services. The package makes use of UniProt\'s modernized REST API and allows mapping of identifiers accross different databases.


.. conda:package:: bioconductor-uniprot.ws

   |downloads_bioconductor-uniprot.ws| |docker_bioconductor-uniprot.ws|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.42.0-0</code>,  <code>2.40.1-0</code>,  <code>2.38.0-0</code>,  <code>2.34.0-0</code>,  <code>2.32.0-0</code>,  <code>2.30.0-1</code>,  <code>2.30.0-0</code>,  <code>2.29.0-0</code>,  <code>2.28.0-0</code>,  </span></summary>
      

      ``2.42.0-0``,  ``2.40.1-0``,  ``2.38.0-0``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-1``,  ``2.30.0-0``,  ``2.29.0-0``,  ``2.28.0-0``,  ``2.26.0-0``,  ``2.24.1-0``,  ``2.22.0-0``,  ``2.20.4-0``,  ``2.18.0-0``,  ``2.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-biocbaseutils: ``>=1.4.0,<1.5.0``
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-httpcache: 
   :depends r-httr: 
   :depends r-jsonlite: 
   :depends r-progress: 
   :depends r-rjsoncons: 
   :depends r-rsqlite: 
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

      mamba install bioconductor-uniprot.ws

   and update with::

      mamba update bioconductor-uniprot.ws

  To create a new environment, run::

      mamba create --name myenvname bioconductor-uniprot.ws

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-uniprot.ws:<tag>

   (see `bioconductor-uniprot.ws/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-uniprot.ws| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-uniprot.ws.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-uniprot.ws
   :alt:   (downloads)
.. |docker_bioconductor-uniprot.ws| image:: https://quay.io/repository/biocontainers/bioconductor-uniprot.ws/status
   :target: https://quay.io/repository/biocontainers/bioconductor-uniprot.ws
.. _`bioconductor-uniprot.ws/tags`: https://quay.io/repository/biocontainers/bioconductor-uniprot.ws?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-uniprot.ws";
        var versions = ["2.42.0","2.40.1","2.38.0","2.34.0","2.32.0"];
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