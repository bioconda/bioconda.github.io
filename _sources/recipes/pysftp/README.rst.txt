:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pysftp'
.. highlight: bash

pysftp
======

.. conda:recipe:: pysftp
   :replaces_section_title:

   A friendly face on SFTP

   :homepage: https://bitbucket.org/dundeemt/pysftp
   :license: BSD License
   :recipe: /`pysftp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysftp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysftp/meta.yaml>`_

   


.. conda:package:: pysftp

   |downloads_pysftp| |docker_pysftp|

   :versions: 0.2.9-0, 0.2.8-0
   
   :depends paramiko: >=1.7.7
   :depends python: 2.7*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pysftp

   and update with::

      conda update pysftp

   or use the docker container::

      docker pull quay.io/biocontainers/pysftp:<tag>

   (see `pysftp/tags`_ for valid values for ``<tag>``)


.. |downloads_pysftp| image:: https://img.shields.io/conda/dn/bioconda/pysftp.svg?style=flat
   :alt:   (downloads)
.. |docker_pysftp| image:: https://quay.io/repository/biocontainers/pysftp/status
   :target: https://quay.io/repository/biocontainers/pysftp
.. _`pysftp/tags`: https://quay.io/repository/biocontainers/pysftp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pysftp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pysftp/README.html