:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxoniumtools'
.. highlight: bash

taxoniumtools
=============

.. conda:recipe:: taxoniumtools
   :replaces_section_title:
   :noindex:

   Taxonium is a tool for exploring trees\, including those with millions of nodes. This tool generates files compatible with viewing in Taxonium from inputs like Newick and UShER files.

   :homepage: https://github.com/theosanderson/taxonium
   :license: GPL-3.0-only
   :recipe: /`taxoniumtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxoniumtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxoniumtools/meta.yaml>`_

   


.. conda:package:: taxoniumtools

   |downloads_taxoniumtools| |docker_taxoniumtools|

   :versions:
      
      

      ``2.1.17-0``

      

   
   :depends alive-progress: 
   :depends biopython: ``<=1.81``
   :depends docker-py: 
   :depends google-api-python-client: 
   :depends orjson: 
   :depends pandas: 
   :depends protobuf: ``<4``
   :depends psutil: 
   :depends python: ``>=3.8``
   :depends treeswift: 
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

      mamba install taxoniumtools

   and update with::

      mamba update taxoniumtools

  To create a new environment, run::

      mamba create --name myenvname taxoniumtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/taxoniumtools:<tag>

   (see `taxoniumtools/tags`_ for valid values for ``<tag>``)


.. |downloads_taxoniumtools| image:: https://img.shields.io/conda/dn/bioconda/taxoniumtools.svg?style=flat
   :target: https://anaconda.org/bioconda/taxoniumtools
   :alt:   (downloads)
.. |docker_taxoniumtools| image:: https://quay.io/repository/biocontainers/taxoniumtools/status
   :target: https://quay.io/repository/biocontainers/taxoniumtools
.. _`taxoniumtools/tags`: https://quay.io/repository/biocontainers/taxoniumtools?tab=tags


.. raw:: html

    <script>
        var package = "taxoniumtools";
        var versions = ["2.1.17"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxoniumtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxoniumtools/README.html