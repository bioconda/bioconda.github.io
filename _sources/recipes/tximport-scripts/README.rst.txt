:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tximport-scripts'
.. highlight: bash

tximport-scripts
================

.. conda:recipe:: tximport-scripts
   :replaces_section_title:
   :noindex:

   A set of wrappers for individual components of the tximport package. Functions R packages are hard to call when building workflows outside of R\, so this package adds a set of simple wrappers with robust argument parsing. Intermediate steps are currently mainly serialized R objects\, but the ultimate objective is to have language\-agnostic intermediate formats allowing composite workflows using a variety of software packages.

   :homepage: https://github.com/ebi-gene-expression-group/tximport-scripts
   :license: GPL / GPL-3
   :recipe: /`tximport-scripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tximport-scripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tximport-scripts/meta.yaml>`_

   


.. conda:package:: tximport-scripts

   |downloads_tximport-scripts| |docker_tximport-scripts|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends bioconductor-dropletutils: 
   :depends bioconductor-tximport: ``1.10.*``
   :depends r-optparse: 
   :depends r-workflowscriptscommon: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tximport-scripts

   and update with::

      conda update tximport-scripts

   or use the docker container::

      docker pull quay.io/biocontainers/tximport-scripts:<tag>

   (see `tximport-scripts/tags`_ for valid values for ``<tag>``)


.. |downloads_tximport-scripts| image:: https://img.shields.io/conda/dn/bioconda/tximport-scripts.svg?style=flat
   :target: https://anaconda.org/bioconda/tximport-scripts
   :alt:   (downloads)
.. |docker_tximport-scripts| image:: https://quay.io/repository/biocontainers/tximport-scripts/status
   :target: https://quay.io/repository/biocontainers/tximport-scripts
.. _`tximport-scripts/tags`: https://quay.io/repository/biocontainers/tximport-scripts?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tximport-scripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tximport-scripts/README.html