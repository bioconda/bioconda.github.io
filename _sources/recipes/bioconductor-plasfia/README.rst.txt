:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-plasfia'
.. highlight: bash

bioconductor-plasfia
====================

.. conda:recipe:: bioconductor-plasfia
   :replaces_section_title:
   :noindex:

   FIA\-HRMS plasma dataset

   :homepage: https://bioconductor.org/packages/3.12/data/experiment/html/plasFIA.html
   :license: LGPL
   :recipe: /`bioconductor-plasfia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plasfia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-plasfia/meta.yaml>`_

   Positive Ionization FIA\-HRMS data of human plasma spiked with a pool of 40 compounds acquired in FIA\-HRMS mode on an orbitrap fusion. plasFIA also include the result of the processing by the proFIA package with adapted parameters for an Orbitrap Fusion.


.. conda:package:: bioconductor-plasfia

   |downloads_bioconductor-plasfia| |docker_bioconductor-plasfia|

   :versions:
      
      

      ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``

      

   
   :depends bioconductor-profia: ``>=1.15.0,<1.16.0``
   :depends curl: ``>=7.75.0,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-plasfia

   and update with::

      conda update bioconductor-plasfia

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-plasfia:<tag>

   (see `bioconductor-plasfia/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-plasfia| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-plasfia.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-plasfia
   :alt:   (downloads)
.. |docker_bioconductor-plasfia| image:: https://quay.io/repository/biocontainers/bioconductor-plasfia/status
   :target: https://quay.io/repository/biocontainers/bioconductor-plasfia
.. _`bioconductor-plasfia/tags`: https://quay.io/repository/biocontainers/bioconductor-plasfia?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-plasfia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-plasfia/README.html