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

   :versions: 3.0

   :depends: :conda:package:`bedtools`  :conda:package:`perl` >=5.26.2,<5.26.3.0a0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-depmixs4`  :conda:package:`r-hiddenmarkov`  :conda:package:`samtools`  

   :required~by: |required_by_hiddendomains|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hiddendomains

   and update with::

      conda update hiddendomains

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hiddendomains


.. |required_by_hiddendomains| conda:required_by:: hiddendomains
.. |downloads_hiddendomains| image:: https://img.shields.io/conda/dn/bioconda/hiddendomains.svg?style=flat
   :alt:   (downloads)
.. |docker_hiddendomains| image:: https://quay.io/repository/biocontainers/hiddendomains/status
   :target: https://quay.io/repository/biocontainers/hiddendomains







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hiddendomains/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hiddendomains/README.html

