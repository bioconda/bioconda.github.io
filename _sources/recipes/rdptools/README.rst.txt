:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rdptools'
.. highlight: bash

rdptools
========

.. conda:recipe:: rdptools
   :replaces_section_title:
   :noindex:

   Metaproject for RDP Tools

   :homepage: http://rdp.cme.msu.edu/misc/resources.jsp
   :license: `CC / Creative Commons Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0) <https://creativecommons.org/licenses/by-sa/3.0/legalcode>`_
   :recipe: /`rdptools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdptools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rdptools/meta.yaml>`_

   


.. conda:package:: rdptools

   |downloads_rdptools| |docker_rdptools|

   :versions:
      
      

      ``2.0.3-0``,  ``2.0.2-1``,  ``2.0.2-0``

      

   
   :depends openjdk: ``8.0.*``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rdptools

   and update with::

      conda update rdptools

   or use the docker container::

      docker pull quay.io/biocontainers/rdptools:<tag>

   (see `rdptools/tags`_ for valid values for ``<tag>``)


.. |downloads_rdptools| image:: https://img.shields.io/conda/dn/bioconda/rdptools.svg?style=flat
   :target: https://anaconda.org/bioconda/rdptools
   :alt:   (downloads)
.. |docker_rdptools| image:: https://quay.io/repository/biocontainers/rdptools/status
   :target: https://quay.io/repository/biocontainers/rdptools
.. _`rdptools/tags`: https://quay.io/repository/biocontainers/rdptools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rdptools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rdptools/README.html