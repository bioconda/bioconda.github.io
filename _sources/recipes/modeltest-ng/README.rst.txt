:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'modeltest-ng'
.. highlight: bash

modeltest-ng
============

.. conda:recipe:: modeltest-ng
   :replaces_section_title:
   :noindex:

   ModelTest\-NG is a tool for selecting the best\-fit model of evolution for DNA and protein alignments. ModelTest\-NG supersedes jModelTest and ProtTest in one single tool\, with graphical and command console interfaces.

   :homepage: https://github.com/ddarriba/modeltest
   :license: GPL / GPL-3.0
   :recipe: /`modeltest-ng <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/modeltest-ng>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/modeltest-ng/meta.yaml>`_

   


.. conda:package:: modeltest-ng

   |downloads_modeltest-ng| |docker_modeltest-ng|

   :versions:
      
      

      ``0.1.6-1``,  ``0.1.6-0``,  ``0.1.5-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends openmpi: ``>=4.1.0,<5.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install modeltest-ng

   and update with::

      conda update modeltest-ng

   or use the docker container::

      docker pull quay.io/biocontainers/modeltest-ng:<tag>

   (see `modeltest-ng/tags`_ for valid values for ``<tag>``)


.. |downloads_modeltest-ng| image:: https://img.shields.io/conda/dn/bioconda/modeltest-ng.svg?style=flat
   :target: https://anaconda.org/bioconda/modeltest-ng
   :alt:   (downloads)
.. |docker_modeltest-ng| image:: https://quay.io/repository/biocontainers/modeltest-ng/status
   :target: https://quay.io/repository/biocontainers/modeltest-ng
.. _`modeltest-ng/tags`: https://quay.io/repository/biocontainers/modeltest-ng?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/modeltest-ng/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/modeltest-ng/README.html