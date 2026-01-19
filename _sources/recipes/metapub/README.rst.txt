:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metapub'
.. highlight: bash

metapub
=======

.. conda:recipe:: metapub
   :replaces_section_title:
   :noindex:

   Pubmed \/ NCBI \/ eutils interaction library\, handling the metadata of pubmed papers.

   :homepage: https://metapub.org
   :license: Apache-2.0
   :recipe: /`metapub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metapub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metapub/meta.yaml>`_

   


.. conda:package:: metapub

   |downloads_metapub| |docker_metapub|

   :versions:
      
      

      ``0.6.4-1``,  ``0.6.4-0``

      

   
   :depends coloredlogs: 
   :depends cssselect: 
   :depends docopt: 
   :depends eutils: 
   :depends habanero: 
   :depends lxml: 
   :depends lxml-html-clean: 
   :depends python: ``>=3.8``
   :depends python-levenshtein: 
   :depends pyyaml: 
   :depends requests: 
   :depends setuptools: 
   :depends six: 
   :depends tabulate: 
   :depends unidecode: 
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

      mamba install metapub

   and update with::

      mamba update metapub

  To create a new environment, run::

      mamba create --name myenvname metapub

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/metapub:<tag>

   (see `metapub/tags`_ for valid values for ``<tag>``)


.. |downloads_metapub| image:: https://img.shields.io/conda/dn/bioconda/metapub.svg?style=flat
   :target: https://anaconda.org/bioconda/metapub
   :alt:   (downloads)
.. |docker_metapub| image:: https://quay.io/repository/biocontainers/metapub/status
   :target: https://quay.io/repository/biocontainers/metapub
.. _`metapub/tags`: https://quay.io/repository/biocontainers/metapub?tab=tags


.. raw:: html

    <script>
        var package = "metapub";
        var versions = ["0.6.4","0.6.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metapub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metapub/README.html