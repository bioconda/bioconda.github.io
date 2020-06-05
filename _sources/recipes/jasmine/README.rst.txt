:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jasmine'
.. highlight: bash

jasmine
=======

.. conda:recipe:: jasmine
   :replaces_section_title:
   :noindex:

   Jasmine\: a Java pipeline for isomiR characterization in miRNA\-Seq Data

   :homepage: https://bitbucket.org/bipous/jasmine/src/master
   :license: GPL >=3
   :recipe: /`jasmine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jasmine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jasmine/meta.yaml>`_

   


.. conda:package:: jasmine

   |downloads_jasmine| |docker_jasmine|

   :versions:
      
      

      ``1.1-0``

      

   
   :depends openjdk: ``>=8``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install jasmine

   and update with::

      conda update jasmine

   or use the docker container::

      docker pull quay.io/biocontainers/jasmine:<tag>

   (see `jasmine/tags`_ for valid values for ``<tag>``)


.. |downloads_jasmine| image:: https://img.shields.io/conda/dn/bioconda/jasmine.svg?style=flat
   :target: https://anaconda.org/bioconda/jasmine
   :alt:   (downloads)
.. |docker_jasmine| image:: https://quay.io/repository/biocontainers/jasmine/status
   :target: https://quay.io/repository/biocontainers/jasmine
.. _`jasmine/tags`: https://quay.io/repository/biocontainers/jasmine?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jasmine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jasmine/README.html