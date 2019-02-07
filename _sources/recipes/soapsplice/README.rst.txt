.. title:: Package Recipe 'soapsplice'
.. highlight: bash


soapsplice
==========

.. conda:recipe:: soapsplice
   :replaces_section_title:

   We have developed a tool SOAPsplice for genome\-wide ab initio detection of splice junction sites from RNA\-Seq\, a method using new generation sequencing technologies to sequence the messenger RNA.

   :homepage: http://soap.genomics.org.cn/soapsplice.html
   :license: freely available
   :recipe: /`soapsplice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapsplice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soapsplice/meta.yaml>`_
   :links: biotools: :biotools:`SOAPsplice`, doi: :doi:`10.3389/fgene.2011.00046`

   


.. conda:package:: soapsplice

   |downloads_soapsplice| |docker_soapsplice|

   :versions: 1.10

   :depends: :conda:package:`zlib`  

   :required~by: |required_by_soapsplice|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install soapsplice

   and update with::

      conda update soapsplice

   or use the docker container::

      docker pull quay.io/repository/biocontainers/soapsplice


.. |required_by_soapsplice| conda:required_by:: soapsplice
.. |downloads_soapsplice| image:: https://img.shields.io/conda/dn/bioconda/soapsplice.svg?style=flat
   :alt:   (downloads)
.. |docker_soapsplice| image:: https://quay.io/repository/biocontainers/soapsplice/status
   :target: https://quay.io/repository/biocontainers/soapsplice







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/soapsplice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/soapsplice/README.html

