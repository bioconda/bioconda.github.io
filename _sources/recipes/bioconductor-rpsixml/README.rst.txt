.. title:: Package Recipe 'bioconductor-rpsixml'
.. highlight: bash


bioconductor-rpsixml
====================

.. conda:recipe:: bioconductor-rpsixml
   :replaces_section_title:

   Queries\, data structure and interface to visualization of interaction datasets. This package inplements the PSI\-MI 2.5 standard and supports up to now 8 databases. Further databases supporting PSI\-MI 2.5 standard will be added continuously.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/RpsiXML.html
   :license: LGPL-3
   :recipe: /`bioconductor-rpsixml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rpsixml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rpsixml/meta.yaml>`_
   :links: biotools: :biotools:`rpsixml`, doi: :doi:`10.1007/978-1-60761-987-1_9`

   


.. conda:package:: bioconductor-rpsixml

   |downloads_bioconductor-rpsixml| |docker_bioconductor-rpsixml|

   :versions: 2.24.0, 2.22.0, 2.20.0

   :depends: :conda:package:`bioconductor-annotate` >=1.60.0,<1.61.0 :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`bioconductor-hypergraph` >=1.54.0,<1.55.0 :conda:package:`bioconductor-rbgl` >=1.58.0,<1.59.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-xml` >=2.4.0 

   :required~by: |required_by_bioconductor-rpsixml|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rpsixml

   and update with::

      conda update bioconductor-rpsixml

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-rpsixml


.. |required_by_bioconductor-rpsixml| conda:required_by:: bioconductor-rpsixml
.. |downloads_bioconductor-rpsixml| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rpsixml.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-rpsixml| image:: https://quay.io/repository/biocontainers/bioconductor-rpsixml/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rpsixml







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rpsixml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rpsixml/README.html

