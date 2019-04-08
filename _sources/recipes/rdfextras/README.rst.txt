:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rdfextras'
.. highlight: bash

rdfextras
=========

.. conda:recipe:: rdfextras
   :replaces_section_title:

   RDFExtras provide tools\, extra stores and such for RDFLib.

   :homepage: http://github.com/RDFLib/rdfextras
   :license: BSD / BSD License
   :recipe: /`rdfextras <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdfextras>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdfextras/meta.yaml>`_

   


.. conda:package:: rdfextras

   |downloads_rdfextras| |docker_rdfextras|

   :versions: 0.4-3, 0.4-2, 0.4-0
   
   :depends isodate: 
   :depends pyparsing: <=1.5.7
   :depends python: >=2.7,<2.8.0a0
   :depends rdflib: >=3.2.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rdfextras

   and update with::

      conda update rdfextras

   or use the docker container::

      docker pull quay.io/biocontainers/rdfextras:<tag>

   (see `rdfextras/tags`_ for valid values for ``<tag>``)


.. |downloads_rdfextras| image:: https://img.shields.io/conda/dn/bioconda/rdfextras.svg?style=flat
   :alt:   (downloads)
.. |docker_rdfextras| image:: https://quay.io/repository/biocontainers/rdfextras/status
   :target: https://quay.io/repository/biocontainers/rdfextras
.. _`rdfextras/tags`: https://quay.io/repository/biocontainers/rdfextras?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rdfextras/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rdfextras/README.html