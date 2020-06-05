:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'barriers'
.. highlight: bash

barriers
========

.. conda:recipe:: barriers
   :replaces_section_title:
   :noindex:

   Compute local minima and energy barriers of a landscape.

   :homepage: https://www.tbi.univie.ac.at/RNA/Barriers/
   :license: GPL
   :recipe: /`barriers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barriers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/barriers/meta.yaml>`_

   


.. conda:package:: barriers

   |downloads_barriers| |docker_barriers|

   :versions:
      
      

      ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.0-1``,  ``1.7.0-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends viennarna: ``>=2.4.14,<2.5.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install barriers

   and update with::

      conda update barriers

   or use the docker container::

      docker pull quay.io/biocontainers/barriers:<tag>

   (see `barriers/tags`_ for valid values for ``<tag>``)


.. |downloads_barriers| image:: https://img.shields.io/conda/dn/bioconda/barriers.svg?style=flat
   :target: https://anaconda.org/bioconda/barriers
   :alt:   (downloads)
.. |docker_barriers| image:: https://quay.io/repository/biocontainers/barriers/status
   :target: https://quay.io/repository/biocontainers/barriers
.. _`barriers/tags`: https://quay.io/repository/biocontainers/barriers?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/barriers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/barriers/README.html