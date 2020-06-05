:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'platon'
.. highlight: bash

platon
======

.. conda:recipe:: platon
   :replaces_section_title:
   :noindex:

   Plasmid contig classification and characterization for short read draft assemblies.

   :homepage: https://github.com/oschwengers/platon
   :license: GPL / GPLv3
   :recipe: /`platon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/platon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/platon/meta.yaml>`_
   :links: biotools: :biotools:`platon`

   


.. conda:package:: platon

   |downloads_platon| |docker_platon|

   :versions:
      
      

      ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends biopython: ``>=1.71``
   :depends blast: ``>=2.7.1``
   :depends diamond: ``0.9.32.*``
   :depends hmmer: ``>=3.2.1``
   :depends infernal: ``>=1.1.2``
   :depends mummer4: ``>=4.0.0beta2``
   :depends prodigal: ``>=2.6.1``
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install platon

   and update with::

      conda update platon

   or use the docker container::

      docker pull quay.io/biocontainers/platon:<tag>

   (see `platon/tags`_ for valid values for ``<tag>``)


.. |downloads_platon| image:: https://img.shields.io/conda/dn/bioconda/platon.svg?style=flat
   :target: https://anaconda.org/bioconda/platon
   :alt:   (downloads)
.. |docker_platon| image:: https://quay.io/repository/biocontainers/platon/status
   :target: https://quay.io/repository/biocontainers/platon
.. _`platon/tags`: https://quay.io/repository/biocontainers/platon?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/platon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/platon/README.html