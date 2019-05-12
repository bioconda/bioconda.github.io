:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wgs2ncbi'
.. highlight: bash

wgs2ncbi
========

.. conda:recipe:: wgs2ncbi
   :replaces_section_title:

   Toolkit for preparing genomes for submission to NCBI

   :homepage: https://github.com/naturalis/wgs2ncbi
   :license: BSD-3-Clause
   :recipe: /`wgs2ncbi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgs2ncbi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wgs2ncbi/meta.yaml>`_

   


.. conda:package:: wgs2ncbi

   |downloads_wgs2ncbi| |docker_wgs2ncbi|

   :versions: 1.0.3-0, 1.0.1-0
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends perl-uri: 
   :depends tbl2asn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install wgs2ncbi

   and update with::

      conda update wgs2ncbi

   or use the docker container::

      docker pull quay.io/biocontainers/wgs2ncbi:<tag>

   (see `wgs2ncbi/tags`_ for valid values for ``<tag>``)


.. |downloads_wgs2ncbi| image:: https://img.shields.io/conda/dn/bioconda/wgs2ncbi.svg?style=flat
   :alt:   (downloads)
.. |docker_wgs2ncbi| image:: https://quay.io/repository/biocontainers/wgs2ncbi/status
   :target: https://quay.io/repository/biocontainers/wgs2ncbi
.. _`wgs2ncbi/tags`: https://quay.io/repository/biocontainers/wgs2ncbi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wgs2ncbi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wgs2ncbi/README.html