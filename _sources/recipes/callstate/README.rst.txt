:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'callstate'
.. highlight: bash

callstate
=========

.. conda:recipe:: callstate
   :replaces_section_title:
   :noindex:

   A replacement for GATK3 CallableLoci

   :homepage: https://github.com/LuobinY/Callstate
   :license: MIT
   :recipe: /`callstate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/callstate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/callstate/meta.yaml>`_

   


.. conda:package:: callstate

   |downloads_callstate| |docker_callstate|

   :versions:
      
      

      ``0.0.2-0``

      

   
   :depends htslib: ``>=1.10.2,<1.11.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends pcre: ``>=8.43,<9.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install callstate

   and update with::

      conda update callstate

   or use the docker container::

      docker pull quay.io/biocontainers/callstate:<tag>

   (see `callstate/tags`_ for valid values for ``<tag>``)


.. |downloads_callstate| image:: https://img.shields.io/conda/dn/bioconda/callstate.svg?style=flat
   :target: https://anaconda.org/bioconda/callstate
   :alt:   (downloads)
.. |docker_callstate| image:: https://quay.io/repository/biocontainers/callstate/status
   :target: https://quay.io/repository/biocontainers/callstate
.. _`callstate/tags`: https://quay.io/repository/biocontainers/callstate?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/callstate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/callstate/README.html