:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qorts'
.. highlight: bash

qorts
=====

.. conda:recipe:: qorts
   :replaces_section_title:
   :noindex:

   QoRTs toolkit for analysis\, quality control\, and data management of RNA\-Seq
   datasets.


   :homepage: http://hartleys.github.io/QoRTs/
   :license: Public Domain
   :recipe: /`qorts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qorts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qorts/meta.yaml>`_

   


.. conda:package:: qorts

   |downloads_qorts| |docker_qorts|

   :versions:
      
      

      ``1.3.6-1``,  ``1.3.6-0``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.1.8-0``

      

   
   :depends openjdk: 
   :depends python: 
   :depends r-qorts: ``1.3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install qorts

   and update with::

      conda update qorts

   or use the docker container::

      docker pull quay.io/biocontainers/qorts:<tag>

   (see `qorts/tags`_ for valid values for ``<tag>``)


.. |downloads_qorts| image:: https://img.shields.io/conda/dn/bioconda/qorts.svg?style=flat
   :target: https://anaconda.org/bioconda/qorts
   :alt:   (downloads)
.. |docker_qorts| image:: https://quay.io/repository/biocontainers/qorts/status
   :target: https://quay.io/repository/biocontainers/qorts
.. _`qorts/tags`: https://quay.io/repository/biocontainers/qorts?tab=tags






Notes
-----
Based on the Picard equivalent\, found in the BioConda recipies repo.
Simplifies the call to the QoRTs JAVA utility so that you can just go \:\-
  qorts \[Java Options\] QC \[QoRTs options\] input.bam annotation.gtf outputDir
which is equivalent to \:\-
  java \[Java Options\] \-jar \/path\/to\/jar\/QoRTs.jar QC \[QoRTs options\] input.bam annotation.gtf outputDir


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qorts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qorts/README.html