:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'p7zip'
.. highlight: bash

p7zip
=====

.. conda:recipe:: p7zip
   :replaces_section_title:

   p7zip is a quick port of 7z.exe and 7za.exe \(command line version of 7zip\, see www.7\-zip.org \) for Unix.

   :homepage: http://sourceforge.net/projects/p7zip/
   :license: LGPLv2
   :recipe: /`p7zip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/p7zip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/p7zip/meta.yaml>`_

   


.. conda:package:: p7zip

   |downloads_p7zip| |docker_p7zip|

   :versions: 15.09-4, 15.09-3, 15.09-2, 15.09-0
   
   :depends libstdcxx-ng: >=4.9
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install p7zip

   and update with::

      conda update p7zip

   or use the docker container::

      docker pull quay.io/repository/biocontainers/p7zip:<tag>

   (see `p7zip/tags`_ for valid values for ``<tag>``)


.. |downloads_p7zip| image:: https://img.shields.io/conda/dn/bioconda/p7zip.svg?style=flat
   :alt:   (downloads)
.. |docker_p7zip| image:: https://quay.io/repository/biocontainers/p7zip/status
   :target: https://quay.io/repository/biocontainers/p7zip
.. _`p7zip/tags`: https://quay.io/repository/biocontainers/p7zip?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/p7zip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/p7zip/README.html