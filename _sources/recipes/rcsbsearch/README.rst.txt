:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rcsbsearch'
.. highlight: bash

rcsbsearch
==========

.. conda:recipe:: rcsbsearch
   :replaces_section_title:
   :noindex:

   Access the RCSB Search API

   :homepage: https://github.com/sbliven/rcsbsearch
   :documentation: https://rcsbsearch.readthedocs.io/en/latest/
   
   :license: BSD / BSD
   :recipe: /`rcsbsearch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rcsbsearch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rcsbsearch/meta.yaml>`_

   


.. conda:package:: rcsbsearch

   |downloads_rcsbsearch| |docker_rcsbsearch|

   :versions:
      
      

      ``0.2.3-0``

      

   
   :depends jsonschema: 
   :depends python: ``>=3.7``
   :depends requests: 
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

      mamba install rcsbsearch

   and update with::

      mamba update rcsbsearch

  To create a new environment, run::

      mamba create --name myenvname rcsbsearch

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rcsbsearch:<tag>

   (see `rcsbsearch/tags`_ for valid values for ``<tag>``)


.. |downloads_rcsbsearch| image:: https://img.shields.io/conda/dn/bioconda/rcsbsearch.svg?style=flat
   :target: https://anaconda.org/bioconda/rcsbsearch
   :alt:   (downloads)
.. |docker_rcsbsearch| image:: https://quay.io/repository/biocontainers/rcsbsearch/status
   :target: https://quay.io/repository/biocontainers/rcsbsearch
.. _`rcsbsearch/tags`: https://quay.io/repository/biocontainers/rcsbsearch?tab=tags


.. raw:: html

    <script>
        var package = "rcsbsearch";
        var versions = ["0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rcsbsearch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rcsbsearch/README.html