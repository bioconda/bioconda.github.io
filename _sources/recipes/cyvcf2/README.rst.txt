.. title:: Package Recipe 'cyvcf2'
.. highlight: bash


cyvcf2
======

.. conda:recipe:: cyvcf2
   :replaces_section_title:

   A cython wrapper around htslib built for fast parsing of Variant Call Format \(VCF\) files

   :homepage: https://github.com/brentp/cyvcf2
   :license: MIT
   :recipe: /`cyvcf2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cyvcf2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cyvcf2/meta.yaml>`_

   


.. conda:package:: cyvcf2

   |downloads_cyvcf2| |docker_cyvcf2|

   :versions: 0.10.0, 0.8.4, 0.8.0, 0.7.2, 0.6.6a, 0.6.5, 0.5.5, 0.5.3, 0.5.1, 0.5.0, 0.4.2, 0.4.1, 0.4.0, 0.3.2, 0.3.0, 0.2.8, 0.2.6, 0.2.5, 0.2.4, 0.2.3, 0.2.2, 0.2.0

   :depends: :conda:package:`click`  :conda:package:`coloredlogs`  :conda:package:`libcurl` >=7.61.0,<8.0a0 :conda:package:`numpy`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_cyvcf2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cyvcf2

   and update with::

      conda update cyvcf2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cyvcf2


.. |required_by_cyvcf2| conda:required_by:: cyvcf2
.. |downloads_cyvcf2| image:: https://img.shields.io/conda/dn/bioconda/cyvcf2.svg?style=flat
   :alt:   (downloads)
.. |docker_cyvcf2| image:: https://quay.io/repository/biocontainers/cyvcf2/status
   :target: https://quay.io/repository/biocontainers/cyvcf2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cyvcf2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cyvcf2/README.html

