:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngmaster'
.. highlight: bash

ngmaster
========

.. conda:recipe:: ngmaster
   :replaces_section_title:
   :noindex:

   In silico multi\-antigen sequence typing for Neisseria gonorrhoeae \(NG\-MAST\)

   :homepage: https://github.com/MDU-PHL/ngmaster
   :documentation: https://github.com/MDU-PHL/ngmaster/blob/master/README.md
   
   :license: GPL3 / GNU General Public License v3.0 only
   :recipe: /`ngmaster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngmaster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngmaster/meta.yaml>`_

   


.. conda:package:: ngmaster

   |downloads_ngmaster| |docker_ngmaster|

   :versions:
      
      

      ``0.5.8-0``

      

   
   :depends biopython: 
   :depends bs4: 
   :depends ispcr: 
   :depends python: ``>=3.6``
   :depends requests: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ngmaster

   and update with::

      conda update ngmaster

   or use the docker container::

      docker pull quay.io/biocontainers/ngmaster:<tag>

   (see `ngmaster/tags`_ for valid values for ``<tag>``)


.. |downloads_ngmaster| image:: https://img.shields.io/conda/dn/bioconda/ngmaster.svg?style=flat
   :target: https://anaconda.org/bioconda/ngmaster
   :alt:   (downloads)
.. |docker_ngmaster| image:: https://quay.io/repository/biocontainers/ngmaster/status
   :target: https://quay.io/repository/biocontainers/ngmaster
.. _`ngmaster/tags`: https://quay.io/repository/biocontainers/ngmaster?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngmaster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngmaster/README.html