:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'krona'
.. highlight: bash

krona
=====

.. conda:recipe:: krona
   :replaces_section_title:

   Krona Tools is a set of scripts to create Krona charts from several Bioinformatics tools as well as from text and XML files.

   :homepage: https://github.com/marbl/Krona
   :license: BSD
   :recipe: /`krona <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krona>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krona/meta.yaml>`_
   :links: biotools: :biotools:`krona`

   


.. conda:package:: krona

   |downloads_krona| |docker_krona|

   :versions: 2.7-3, 2.7-2, 2.7-1, 2.7-0, 2.6.1-2, 2.6.1-1, 2.6-5, 2.6-4, 2.6-3, 2.6-2, 2.6-1, 2.6-0, 2.5-5, 2.5-4, 2.5-3, 2.5-2, 2.5-1, 2.5-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install krona

   and update with::

      conda update krona

   or use the docker container::

      docker pull quay.io/biocontainers/krona:<tag>

   (see `krona/tags`_ for valid values for ``<tag>``)


.. |downloads_krona| image:: https://img.shields.io/conda/dn/bioconda/krona.svg?style=flat
   :alt:   (downloads)
.. |docker_krona| image:: https://quay.io/repository/biocontainers/krona/status
   :target: https://quay.io/repository/biocontainers/krona
.. _`krona/tags`: https://quay.io/repository/biocontainers/krona?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/krona/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/krona/README.html