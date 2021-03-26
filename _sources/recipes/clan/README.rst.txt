:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clan'
.. highlight: bash

clan
====

.. conda:recipe:: clan
   :replaces_section_title:
   :noindex:

   CLAN \- the CrossLinked reads ANalysis tool

   :homepage: https://sourceforge.net/projects/clan-mapping/
   :license: Creative Commons BY-NC-ND 4.0 license
   :recipe: /`clan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clan/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.isci.2019.05.038`

   


.. conda:package:: clan

   |downloads_clan| |docker_clan|

   :versions:
      
      

      ``0.05-1``,  ``0.05-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clan

   and update with::

      conda update clan

   or use the docker container::

      docker pull quay.io/biocontainers/clan:<tag>

   (see `clan/tags`_ for valid values for ``<tag>``)


.. |downloads_clan| image:: https://img.shields.io/conda/dn/bioconda/clan.svg?style=flat
   :target: https://anaconda.org/bioconda/clan
   :alt:   (downloads)
.. |docker_clan| image:: https://quay.io/repository/biocontainers/clan/status
   :target: https://quay.io/repository/biocontainers/clan
.. _`clan/tags`: https://quay.io/repository/biocontainers/clan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clan/README.html