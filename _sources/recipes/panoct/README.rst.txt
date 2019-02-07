.. title:: Package Recipe 'panoct'
.. highlight: bash


panoct
======

.. conda:recipe:: panoct
   :replaces_section_title:

   PanOCT\, Pan\-genome Ortholog Clustering Tool\, is a program for pan\-genomic analysis of closely related prokaryotic species or strains

   :homepage: https://panoct.sourceforge.io/
   :license: GPL-3.0
   :recipe: /`panoct <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panoct>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panoct/meta.yaml>`_

   


.. conda:package:: panoct

   |downloads_panoct| |docker_panoct|

   :versions: 3.23

   :depends: :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_panoct|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install panoct

   and update with::

      conda update panoct

   or use the docker container::

      docker pull quay.io/repository/biocontainers/panoct


.. |required_by_panoct| conda:required_by:: panoct
.. |downloads_panoct| image:: https://img.shields.io/conda/dn/bioconda/panoct.svg?style=flat
   :alt:   (downloads)
.. |docker_panoct| image:: https://quay.io/repository/biocontainers/panoct/status
   :target: https://quay.io/repository/biocontainers/panoct







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panoct/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panoct/README.html

