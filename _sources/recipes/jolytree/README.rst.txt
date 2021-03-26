:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jolytree'
.. highlight: bash

jolytree
========

.. conda:recipe:: jolytree
   :replaces_section_title:
   :noindex:

   Fast alignment\-free phylogenetic reconstruction from genome sequences

   :homepage: https://research.pasteur.fr/fr/software/jolytree/
   :license: GPL / GPLv3
   :recipe: /`jolytree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jolytree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jolytree/meta.yaml>`_

   


.. conda:package:: jolytree

   |downloads_jolytree| |docker_jolytree|

   :versions:
      
      

      ``1.1b-1``,  ``1.1b-0``

      

   
   :depends fastme: ``>=2.1.5``
   :depends gawk: ``>=4.1.3``
   :depends mash: ``>=1.0.2``
   :depends req: ``>=v1.3.190304ac``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install jolytree

   and update with::

      conda update jolytree

   or use the docker container::

      docker pull quay.io/biocontainers/jolytree:<tag>

   (see `jolytree/tags`_ for valid values for ``<tag>``)


.. |downloads_jolytree| image:: https://img.shields.io/conda/dn/bioconda/jolytree.svg?style=flat
   :target: https://anaconda.org/bioconda/jolytree
   :alt:   (downloads)
.. |docker_jolytree| image:: https://quay.io/repository/biocontainers/jolytree/status
   :target: https://quay.io/repository/biocontainers/jolytree
.. _`jolytree/tags`: https://quay.io/repository/biocontainers/jolytree?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jolytree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jolytree/README.html