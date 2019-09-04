:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hiddendomains'
.. highlight: bash

hiddendomains
=============

.. conda:recipe:: hiddendomains
   :replaces_section_title:

   hiddenDomains is a suite of programs used to identify significant enrichment of ChIP\-seq reads that span large domains.

   :homepage: http://hiddendomains.sourceforge.net/
   :license: GPL / GNU GPL
   :recipe: /`hiddendomains <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hiddendomains>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hiddendomains/meta.yaml>`_

   


.. conda:package:: hiddendomains

   |downloads_hiddendomains| |docker_hiddendomains|

   :versions: 3.1-0, 3.0-0
   
   :depends bedtools: 
   :depends perl: >=5.26.2,<5.26.3.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-depmixs4: 
   :depends r-hiddenmarkov: 
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hiddendomains

   and update with::

      conda update hiddendomains

   or use the docker container::

      docker pull quay.io/biocontainers/hiddendomains:<tag>

   (see `hiddendomains/tags`_ for valid values for ``<tag>``)


.. |downloads_hiddendomains| image:: https://img.shields.io/conda/dn/bioconda/hiddendomains.svg?style=flat
   :target: https://anaconda.org/bioconda/hiddendomains
   :alt:   (downloads)
.. |docker_hiddendomains| image:: https://quay.io/repository/biocontainers/hiddendomains/status
   :target: https://quay.io/repository/biocontainers/hiddendomains
.. _`hiddendomains/tags`: https://quay.io/repository/biocontainers/hiddendomains?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hiddendomains/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hiddendomains/README.html