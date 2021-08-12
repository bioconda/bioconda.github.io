:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'duet'
.. highlight: bash

duet
====

.. conda:recipe:: duet
   :replaces_section_title:
   :noindex:

   SNP\-Assisted Phased SV Detection from Low\-depth Long\-reads

   :homepage: https://github.com/yekaizhou/duet
   :license: BSD / BSD-3-Clause
   :recipe: /`duet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/duet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/duet/meta.yaml>`_

   


.. conda:package:: duet

   |downloads_duet| |docker_duet|

   :versions:
      
      

      ``0.3-0``,  ``0.2-0``

      

   
   :depends bcftools: ``1.8.*``
   :depends clair3: ``0.1.5.*``
   :depends python: ``>=3.6``
   :depends svim: ``1.4.2.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install duet

   and update with::

      conda update duet

   or use the docker container::

      docker pull quay.io/biocontainers/duet:<tag>

   (see `duet/tags`_ for valid values for ``<tag>``)


.. |downloads_duet| image:: https://img.shields.io/conda/dn/bioconda/duet.svg?style=flat
   :target: https://anaconda.org/bioconda/duet
   :alt:   (downloads)
.. |docker_duet| image:: https://quay.io/repository/biocontainers/duet/status
   :target: https://quay.io/repository/biocontainers/duet
.. _`duet/tags`: https://quay.io/repository/biocontainers/duet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/duet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/duet/README.html