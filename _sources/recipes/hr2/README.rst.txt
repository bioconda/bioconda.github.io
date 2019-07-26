:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hr2'
.. highlight: bash

hr2
===

.. conda:recipe:: hr2
   :replaces_section_title:

   HR2 is a program to calculate elemental compositions for a given mass. This program and its documentation are Copyright \(c\) 1992\-2005 by Joerg Hau

   :homepage: http://fiehnlab.ucdavis.edu
   :license: GPL
   :recipe: /`hr2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hr2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hr2/meta.yaml>`_

   


.. conda:package:: hr2

   |downloads_hr2| |docker_hr2|

   :versions: 1.04-0
   
   :depends libcxx: >=4.0.1
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hr2

   and update with::

      conda update hr2

   or use the docker container::

      docker pull quay.io/biocontainers/hr2:<tag>

   (see `hr2/tags`_ for valid values for ``<tag>``)


.. |downloads_hr2| image:: https://img.shields.io/conda/dn/bioconda/hr2.svg?style=flat
   :target: https://anaconda.org/bioconda/hr2
   :alt:   (downloads)
.. |docker_hr2| image:: https://quay.io/repository/biocontainers/hr2/status
   :target: https://quay.io/repository/biocontainers/hr2
.. _`hr2/tags`: https://quay.io/repository/biocontainers/hr2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hr2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hr2/README.html