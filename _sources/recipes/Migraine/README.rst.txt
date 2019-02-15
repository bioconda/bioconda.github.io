:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'migraine'
.. highlight: bash

migraine
========

.. conda:recipe:: Migraine
   :replaces_section_title:

   Implements coalescent algorithms for maximum likelihood analysis of population genetic data. The data currently  handled are allelic counts but sequences will be handled in the forthcoming version.

   :homepage: http://kimura.univ-montp2.fr/~rousset/Migraine.htm
   :license: CeCILL
   :recipe: /`Migraine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/Migraine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/Migraine/meta.yaml>`_
   :links: biotools: :biotools:`Migraine`, doi: :doi:`10.1093/molbev/msu212`

   


.. conda:package:: migraine

   |downloads_migraine| |docker_migraine|

   :versions: 0.5.4-0, 0.5.2-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install migraine

   and update with::

      conda update migraine

   or use the docker container::

      docker pull quay.io/repository/biocontainers/migraine:<tag>

   (see `migraine/tags`_ for valid values for ``<tag>``)


.. |downloads_migraine| image:: https://img.shields.io/conda/dn/bioconda/migraine.svg?style=flat
   :alt:   (downloads)
.. |docker_migraine| image:: https://quay.io/repository/biocontainers/migraine/status
   :target: https://quay.io/repository/biocontainers/migraine
.. _`migraine/tags`: https://quay.io/repository/biocontainers/migraine?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/migraine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/migraine/README.html