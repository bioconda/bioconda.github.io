:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dr-disco'
.. highlight: bash

dr-disco
========

.. conda:recipe:: dr-disco
   :replaces_section_title:

   Dr. Disco\: fusion gene and genomic breakpoint detection in random hexamer RNA\-seq data

   :homepage: https://github.com/yhoogstrate/dr-disco
   :license: GPL / GPL-3.0+
   :recipe: /`dr-disco <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dr-disco>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dr-disco/meta.yaml>`_

   


.. conda:package:: dr-disco

   |downloads_dr-disco| |docker_dr-disco|

   :versions: 0.16.3-0, 0.14.0-0, 0.11.0-0, 0.10.0-0, 0.9.0-0, 0.8.2-0, 0.8.0-0, 0.6.0-0, 0.3.4-0, 0.3.3-0, 0.2.0-0
   
   :depends click: 
   :depends fuma: 
   :depends htseq: 
   :depends pyfaidx: 
   :depends pysam: 
   :depends python: <3
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dr-disco

   and update with::

      conda update dr-disco

   or use the docker container::

      docker pull quay.io/biocontainers/dr-disco:<tag>

   (see `dr-disco/tags`_ for valid values for ``<tag>``)


.. |downloads_dr-disco| image:: https://img.shields.io/conda/dn/bioconda/dr-disco.svg?style=flat
   :alt:   (downloads)
.. |docker_dr-disco| image:: https://quay.io/repository/biocontainers/dr-disco/status
   :target: https://quay.io/repository/biocontainers/dr-disco
.. _`dr-disco/tags`: https://quay.io/repository/biocontainers/dr-disco?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dr-disco/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dr-disco/README.html