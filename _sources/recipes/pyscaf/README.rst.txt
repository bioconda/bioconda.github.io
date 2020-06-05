:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyscaf'
.. highlight: bash

pyscaf
======

.. conda:recipe:: pyscaf
   :replaces_section_title:
   :noindex:

   Genome assembly scaffolding using information from paired\-end\/mate\-pair libraries\, long reads\, and synteny to closely related species.

   :homepage: https://github.com/lpryszcz/pyScaf
   :license: GPL3 / GPLv3
   :recipe: /`pyscaf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyscaf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyscaf/meta.yaml>`_

   


.. conda:package:: pyscaf

   |downloads_pyscaf| |docker_pyscaf|

   :versions:
      
      

      ``0.12a4-3``,  ``0.12a4-2``,  ``0.12a4-0``

      

   
   :depends fastaindex: 
   :depends python: ``<3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyscaf

   and update with::

      conda update pyscaf

   or use the docker container::

      docker pull quay.io/biocontainers/pyscaf:<tag>

   (see `pyscaf/tags`_ for valid values for ``<tag>``)


.. |downloads_pyscaf| image:: https://img.shields.io/conda/dn/bioconda/pyscaf.svg?style=flat
   :target: https://anaconda.org/bioconda/pyscaf
   :alt:   (downloads)
.. |docker_pyscaf| image:: https://quay.io/repository/biocontainers/pyscaf/status
   :target: https://quay.io/repository/biocontainers/pyscaf
.. _`pyscaf/tags`: https://quay.io/repository/biocontainers/pyscaf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyscaf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyscaf/README.html