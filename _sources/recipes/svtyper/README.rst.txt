:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svtyper'
.. highlight: bash

svtyper
=======

.. conda:recipe:: svtyper
   :replaces_section_title:

   Bayesian genotyper for structural variants

   :homepage: https://github.com/hall-lab/svtyper
   :license: MIT
   :recipe: /`svtyper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svtyper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svtyper/meta.yaml>`_

   


.. conda:package:: svtyper

   |downloads_svtyper| |docker_svtyper|

   :versions: 0.7.0-0, 0.6.1-1, 0.6.1-0, 0.1.4-0, 0.1.1-0, 0.0.4-0, 0.0.2-4, 0.0.2-3
   
   :depends cytoolz: >=0.8.2
   
   :depends numpy: 
   
   :depends pysam: >=0.15.0
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends scipy: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install svtyper

   and update with::

      conda update svtyper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/svtyper:<tag>

   (see `svtyper/tags`_ for valid values for ``<tag>``)


.. |downloads_svtyper| image:: https://img.shields.io/conda/dn/bioconda/svtyper.svg?style=flat
   :alt:   (downloads)
.. |docker_svtyper| image:: https://quay.io/repository/biocontainers/svtyper/status
   :target: https://quay.io/repository/biocontainers/svtyper
.. _`svtyper/tags`: https://quay.io/repository/biocontainers/svtyper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svtyper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svtyper/README.html