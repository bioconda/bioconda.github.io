:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'translatorx'
.. highlight: bash

translatorx
===========

.. conda:recipe:: translatorx
   :replaces_section_title:

   Multiple alignment of nucleotide sequences guided by amino acid information

   :homepage: http://pc16141.mncn.csic.es/
   :license: None
   :recipe: /`translatorx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/translatorx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/translatorx/meta.yaml>`_
   :links: biotools: :biotools:`translatorx`

   


.. conda:package:: translatorx

   |downloads_translatorx| |docker_translatorx|

   :versions: 1.1-1, 1.1-0
   
   :depends muscle: 
   
   :depends perl: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install translatorx

   and update with::

      conda update translatorx

   or use the docker container::

      docker pull quay.io/biocontainers/translatorx:<tag>

   (see `translatorx/tags`_ for valid values for ``<tag>``)


.. |downloads_translatorx| image:: https://img.shields.io/conda/dn/bioconda/translatorx.svg?style=flat
   :alt:   (downloads)
.. |docker_translatorx| image:: https://quay.io/repository/biocontainers/translatorx/status
   :target: https://quay.io/repository/biocontainers/translatorx
.. _`translatorx/tags`: https://quay.io/repository/biocontainers/translatorx?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/translatorx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/translatorx/README.html