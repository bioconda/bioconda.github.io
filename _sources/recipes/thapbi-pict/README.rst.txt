:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'thapbi-pict'
.. highlight: bash

thapbi-pict
===========

.. conda:recipe:: thapbi-pict
   :replaces_section_title:

   THAPBI Phytophthora ITS1 Classifier Tool \(PICT\).

   :homepage: https://github.com/peterjc/thapbi-pict
   :license: MIT / MIT
   :recipe: /`thapbi-pict <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/thapbi-pict>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/thapbi-pict/meta.yaml>`_

   


.. conda:package:: thapbi-pict

   |downloads_thapbi-pict| |docker_thapbi-pict|

   :versions: 0.1.12-0, 0.1.10-0, 0.1.6-0
   
   :depends biopython: >=1.73
   :depends blast: 
   :depends cutadapt: 
   :depends flash: 
   :depends hmmer: 
   :depends python: >=3.5
   :depends sqlalchemy: 
   :depends swarm: 
   :depends trimmomatic: 
   :depends xlsxwriter: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install thapbi-pict

   and update with::

      conda update thapbi-pict

   or use the docker container::

      docker pull quay.io/biocontainers/thapbi-pict:<tag>

   (see `thapbi-pict/tags`_ for valid values for ``<tag>``)


.. |downloads_thapbi-pict| image:: https://img.shields.io/conda/dn/bioconda/thapbi-pict.svg?style=flat
   :alt:   (downloads)
.. |docker_thapbi-pict| image:: https://quay.io/repository/biocontainers/thapbi-pict/status
   :target: https://quay.io/repository/biocontainers/thapbi-pict
.. _`thapbi-pict/tags`: https://quay.io/repository/biocontainers/thapbi-pict?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/thapbi-pict/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/thapbi-pict/README.html