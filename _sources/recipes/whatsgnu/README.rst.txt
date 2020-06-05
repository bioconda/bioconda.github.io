:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'whatsgnu'
.. highlight: bash

whatsgnu
========

.. conda:recipe:: whatsgnu
   :replaces_section_title:
   :noindex:

   WhatsGNU A Tool For Identifying Proteomic Novelty

   :homepage: https://github.com/ahmedmagds/WhatsGNU
   :license: GPL / GPLv3
   :recipe: /`whatsgnu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/whatsgnu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/whatsgnu/meta.yaml>`_

   


.. conda:package:: whatsgnu

   |downloads_whatsgnu| |docker_whatsgnu|

   :versions:
      
      

      ``1.2-0``,  ``1.1-0``,  ``1.0-0``

      

   
   :depends blast: ``>=2.9.0``
   :depends matplotlib-base: ``>=3.0.2``
   :depends numpy: ``>=1.15.3``
   :depends python: ``>=3.4``
   :depends scipy: ``>=1.2.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install whatsgnu

   and update with::

      conda update whatsgnu

   or use the docker container::

      docker pull quay.io/biocontainers/whatsgnu:<tag>

   (see `whatsgnu/tags`_ for valid values for ``<tag>``)


.. |downloads_whatsgnu| image:: https://img.shields.io/conda/dn/bioconda/whatsgnu.svg?style=flat
   :target: https://anaconda.org/bioconda/whatsgnu
   :alt:   (downloads)
.. |docker_whatsgnu| image:: https://quay.io/repository/biocontainers/whatsgnu/status
   :target: https://quay.io/repository/biocontainers/whatsgnu
.. _`whatsgnu/tags`: https://quay.io/repository/biocontainers/whatsgnu?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/whatsgnu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/whatsgnu/README.html