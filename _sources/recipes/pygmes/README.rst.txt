:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pygmes'
.. highlight: bash

pygmes
======

.. conda:recipe:: pygmes
   :replaces_section_title:
   :noindex:

   Run GeneMark\-ES using pretrained models

   :homepage: https://github.com/openpaul/pygmes
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`pygmes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygmes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pygmes/meta.yaml>`_

   


.. conda:package:: pygmes

   |downloads_pygmes| |docker_pygmes|

   :versions:
      
      

      ``0.1.4-0``,  ``0.1.3.4-0``

      

   
   :depends diamond: ``>=0.8``
   :depends ete3: 
   :depends prodigal: ``>=2``
   :depends pyfaidx: ``>=0.5.8``
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pygmes

   and update with::

      conda update pygmes

   or use the docker container::

      docker pull quay.io/biocontainers/pygmes:<tag>

   (see `pygmes/tags`_ for valid values for ``<tag>``)


.. |downloads_pygmes| image:: https://img.shields.io/conda/dn/bioconda/pygmes.svg?style=flat
   :target: https://anaconda.org/bioconda/pygmes
   :alt:   (downloads)
.. |docker_pygmes| image:: https://quay.io/repository/biocontainers/pygmes/status
   :target: https://quay.io/repository/biocontainers/pygmes
.. _`pygmes/tags`: https://quay.io/repository/biocontainers/pygmes?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pygmes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pygmes/README.html