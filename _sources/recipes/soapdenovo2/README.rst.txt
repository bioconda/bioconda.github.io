.. title:: Package Recipe 'soapdenovo2'
.. highlight: bash


soapdenovo2
===========

.. conda:recipe:: soapdenovo2
   :replaces_section_title:

   SOAPdenovo is a novel short\-read assembly method that can build a de novo draft assembly for the human\-sized genomes.

   :homepage: http://soap.genomics.org.cn/soapdenovo.html
   :license: GPL
   :recipe: /`soapdenovo2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapdenovo2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapdenovo2/meta.yaml>`_

   


.. conda:package:: soapdenovo2

   |downloads_soapdenovo2| |docker_soapdenovo2|

   :versions: 2.40

   :depends: :conda:package:`libgcc`  :conda:package:`samtools` ==0.1.19 :conda:package:`zlib`  

   :required~by: |required_by_soapdenovo2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install soapdenovo2

   and update with::

      conda update soapdenovo2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/soapdenovo2


.. |required_by_soapdenovo2| conda:required_by:: soapdenovo2
.. |downloads_soapdenovo2| image:: https://img.shields.io/conda/dn/bioconda/soapdenovo2.svg?style=flat
   :alt:   (downloads)
.. |docker_soapdenovo2| image:: https://quay.io/repository/biocontainers/soapdenovo2/status
   :target: https://quay.io/repository/biocontainers/soapdenovo2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/soapdenovo2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/soapdenovo2/README.html

