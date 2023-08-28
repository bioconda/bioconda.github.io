:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'atlas-data-import'
.. highlight: bash

atlas-data-import
=================

.. conda:recipe:: atlas-data-import
   :replaces_section_title:
   :noindex:

   Scripts for extracting expression\- and metadata from Single Cell Expression Atlas in a programmatic way.

   :homepage: https://github.com/ebi-gene-expression-group/atlas-data-import
   :license: MIT
   :recipe: /`atlas-data-import <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atlas-data-import>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atlas-data-import/meta.yaml>`_

   


.. conda:package:: atlas-data-import

   |downloads_atlas-data-import| |docker_atlas-data-import|

   :versions:
      
      

      ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.11-1``,  ``0.0.11-0``,  ``0.0.10-0``,  ``0.0.9-0``,  ``0.0.7-0``,  ``0.0.6-0``

      

   
   :depends r-base: 
   :depends r-optparse: 
   :depends r-r.utils: 
   :depends r-rcurl: 
   :depends r-workflowscriptscommon: 
   :depends r-yaml: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install atlas-data-import

   and update with::

      mamba update atlas-data-import

  To create a new environment, run::

      mamba create --name myenvname atlas-data-import

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/atlas-data-import:<tag>

   (see `atlas-data-import/tags`_ for valid values for ``<tag>``)


.. |downloads_atlas-data-import| image:: https://img.shields.io/conda/dn/bioconda/atlas-data-import.svg?style=flat
   :target: https://anaconda.org/bioconda/atlas-data-import
   :alt:   (downloads)
.. |docker_atlas-data-import| image:: https://quay.io/repository/biocontainers/atlas-data-import/status
   :target: https://quay.io/repository/biocontainers/atlas-data-import
.. _`atlas-data-import/tags`: https://quay.io/repository/biocontainers/atlas-data-import?tab=tags


.. raw:: html

    <script>
        var package = "atlas-data-import";
        var versions = ["0.1.1","0.1.0","0.0.11","0.0.11","0.0.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atlas-data-import/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atlas-data-import/README.html