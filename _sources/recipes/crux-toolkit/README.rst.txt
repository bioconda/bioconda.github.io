:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crux-toolkit'
.. highlight: bash

crux-toolkit
============

.. conda:recipe:: crux-toolkit
   :replaces_section_title:
   :noindex:

   A cross\-platform suite of analysis tools for interpreting protein mass spectrometry data

   :homepage: http://crux.ms
   :developer docs: https://github.com/crux-toolkit/crux-toolkit
   :license: Apache / Apache-2.0
   :recipe: /`crux-toolkit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crux-toolkit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crux-toolkit/meta.yaml>`_

   


.. conda:package:: crux-toolkit

   |downloads_crux-toolkit| |docker_crux-toolkit|

   :versions:
      
      

      ``3.2-2``,  ``3.2-1``,  ``3.2-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install crux-toolkit

   and update with::

      conda update crux-toolkit

   or use the docker container::

      docker pull quay.io/biocontainers/crux-toolkit:<tag>

   (see `crux-toolkit/tags`_ for valid values for ``<tag>``)


.. |downloads_crux-toolkit| image:: https://img.shields.io/conda/dn/bioconda/crux-toolkit.svg?style=flat
   :target: https://anaconda.org/bioconda/crux-toolkit
   :alt:   (downloads)
.. |docker_crux-toolkit| image:: https://quay.io/repository/biocontainers/crux-toolkit/status
   :target: https://quay.io/repository/biocontainers/crux-toolkit
.. _`crux-toolkit/tags`: https://quay.io/repository/biocontainers/crux-toolkit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crux-toolkit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crux-toolkit/README.html