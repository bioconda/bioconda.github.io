:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sat-bsa'
.. highlight: bash

sat-bsa
=======

.. conda:recipe:: sat-bsa
   :replaces_section_title:
   :noindex:

   Sat\-BSA is a package used for applying local de novo assembly and identifying the structural variants in the assembled region

   :homepage: https://github.com/SegawaTenta/Sat-BSA
   :license: GPL / GPL-3.0-or-later
   :recipe: /`sat-bsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sat-bsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sat-bsa/meta.yaml>`_
   :links: biotools: :biotools:`sta-bsa`

   


.. conda:package:: sat-bsa

   |downloads_sat-bsa| |docker_sat-bsa|

   :versions:
      
      

      ``1.12-1``,  ``1.12-0``,  ``1.10-0``

      

   
   :depends minimap2: ``2.17.*``
   :depends openjdk: 
   :depends perl: 
   :depends python: 
   :depends r-base: 
   :depends samtools: ``1.9.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sat-bsa

   and update with::

      conda update sat-bsa

   or use the docker container::

      docker pull quay.io/biocontainers/sat-bsa:<tag>

   (see `sat-bsa/tags`_ for valid values for ``<tag>``)


.. |downloads_sat-bsa| image:: https://img.shields.io/conda/dn/bioconda/sat-bsa.svg?style=flat
   :target: https://anaconda.org/bioconda/sat-bsa
   :alt:   (downloads)
.. |docker_sat-bsa| image:: https://quay.io/repository/biocontainers/sat-bsa/status
   :target: https://quay.io/repository/biocontainers/sat-bsa
.. _`sat-bsa/tags`: https://quay.io/repository/biocontainers/sat-bsa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sat-bsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sat-bsa/README.html