:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rpsixml'
.. highlight: bash

bioconductor-rpsixml
====================

.. conda:recipe:: bioconductor-rpsixml
   :replaces_section_title:
   :noindex:

   R interface to PSI\-MI 2.5 files

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/RpsiXML.html
   :license: LGPL-3
   :recipe: /`bioconductor-rpsixml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rpsixml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rpsixml/meta.yaml>`_
   :links: biotools: :biotools:`rpsixml`, doi: :doi:`10.1007/978-1-60761-987-1_9`

   Queries\, data structure and interface to visualization of interaction datasets. This package inplements the PSI\-MI 2.5 standard and supports up to now 8 databases. Further databases supporting PSI\-MI 2.5 standard will be added continuously.


.. conda:package:: bioconductor-rpsixml

   |downloads_bioconductor-rpsixml| |docker_bioconductor-rpsixml|

   :versions:
      
      

      ``2.32.0-1``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.26.0-1``,  ``2.24.0-0``,  ``2.22.0-0``,  ``2.20.0-0``

      

   
   :depends bioconductor-annotate: ``>=1.68.0,<1.69.0``
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-biobase: ``>=2.50.0,<2.51.0``
   :depends bioconductor-graph: ``>=1.68.0,<1.69.0``
   :depends bioconductor-hypergraph: ``>=1.62.0,<1.63.0``
   :depends bioconductor-rbgl: ``>=1.66.0,<1.67.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-xml: ``>=2.4.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rpsixml

   and update with::

      conda update bioconductor-rpsixml

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rpsixml:<tag>

   (see `bioconductor-rpsixml/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rpsixml| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rpsixml.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rpsixml
   :alt:   (downloads)
.. |docker_bioconductor-rpsixml| image:: https://quay.io/repository/biocontainers/bioconductor-rpsixml/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rpsixml
.. _`bioconductor-rpsixml/tags`: https://quay.io/repository/biocontainers/bioconductor-rpsixml?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rpsixml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rpsixml/README.html