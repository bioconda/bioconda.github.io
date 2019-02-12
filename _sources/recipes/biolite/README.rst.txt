:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'biolite'
.. highlight: bash

biolite
=======

.. conda:recipe:: biolite
   :replaces_section_title:

   A lightweight bioinformatics framework with automated tracking of diagnostics and provenance.

   :homepage: https://bitbucket.org/caseywdunn/biolite
   :license: GPLv3
   :recipe: /`biolite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biolite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/biolite/meta.yaml>`_

   


.. conda:package:: biolite

   |downloads_biolite| |docker_biolite|

   :versions: 1.2.0-0, 1.1.0-2, 1.1.0-0
   
   :depends biolite-tools: 0.4.0
   
   :depends biopython: 1.68
   
   :depends dendropy: 4.2.0
   
   :depends docutils: 0.13.1
   
   :depends ete3: 3.0.0b35
   
   :depends lxml: 3.7.2
   
   :depends matplotlib: 2.0.0
   
   :depends networkx: 1.11
   
   :depends numpy: 1.11.3
   
   :depends pandas: 0.19.2
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends python-wget: 3.2
   
   :depends setuptools: 
   
   :depends sra-tools: 2.8.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install biolite

   and update with::

      conda update biolite

   or use the docker container::

      docker pull quay.io/repository/biocontainers/biolite:<tag>

   (see `biolite/tags`_ for valid values for ``<tag>``)


.. |downloads_biolite| image:: https://img.shields.io/conda/dn/bioconda/biolite.svg?style=flat
   :alt:   (downloads)
.. |docker_biolite| image:: https://quay.io/repository/biocontainers/biolite/status
   :target: https://quay.io/repository/biocontainers/biolite
.. _`biolite/tags`: https://quay.io/repository/biocontainers/biolite?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/biolite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/biolite/README.html