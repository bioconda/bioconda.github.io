:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igvtools'
.. highlight: bash

igvtools
========

.. conda:recipe:: igvtools
   :replaces_section_title:
   :noindex:

   command line tools for IGV

   :homepage: http://www.broadinstitute.org/igv/
   :license: MIT / MIT License
   :recipe: /`igvtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igvtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igvtools/meta.yaml>`_
   :links: biotools: :biotools:`IGVtools`

   


.. conda:package:: igvtools

   |downloads_igvtools| |docker_igvtools|

   :versions:
      
      

      ``2.5.3-1``,  ``2.5.3-0``,  ``2.3.93-0``,  ``2.3.75-1``,  ``2.3.48-1``,  ``2.3.16-0``

      

   
   :depends openjdk: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install igvtools

   and update with::

      conda update igvtools

   or use the docker container::

      docker pull quay.io/biocontainers/igvtools:<tag>

   (see `igvtools/tags`_ for valid values for ``<tag>``)


.. |downloads_igvtools| image:: https://img.shields.io/conda/dn/bioconda/igvtools.svg?style=flat
   :target: https://anaconda.org/bioconda/igvtools
   :alt:   (downloads)
.. |docker_igvtools| image:: https://quay.io/repository/biocontainers/igvtools/status
   :target: https://quay.io/repository/biocontainers/igvtools
.. _`igvtools/tags`: https://quay.io/repository/biocontainers/igvtools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igvtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igvtools/README.html