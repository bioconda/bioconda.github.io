:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'besst'
.. highlight: bash

besst
=====

.. conda:recipe:: besst
   :replaces_section_title:

   Scaffolder for genomic assemblies.

   :homepage: https://github.com/ksahlin/BESST
   :license: GPL / GPL-3.0
   :recipe: /`besst <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/besst>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/besst/meta.yaml>`_
   :links: biotools: :biotools:`besst`, doi: :doi:`10.1186/1471-2105-15-281`

   


.. conda:package:: besst

   |downloads_besst| |docker_besst|

   :versions: 2.2.8-2, 2.2.8-0, 2.2.7-0, 2.2.3-0
   
   :depends mathstats: >=0.2.6
   :depends networkx: >=1.9
   :depends pysam: >=0.7
   :depends python: 
   :depends scipy: >=0.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install besst

   and update with::

      conda update besst

   or use the docker container::

      docker pull quay.io/biocontainers/besst:<tag>

   (see `besst/tags`_ for valid values for ``<tag>``)


.. |downloads_besst| image:: https://img.shields.io/conda/dn/bioconda/besst.svg?style=flat
   :alt:   (downloads)
.. |docker_besst| image:: https://quay.io/repository/biocontainers/besst/status
   :target: https://quay.io/repository/biocontainers/besst
.. _`besst/tags`: https://quay.io/repository/biocontainers/besst?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/besst/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/besst/README.html