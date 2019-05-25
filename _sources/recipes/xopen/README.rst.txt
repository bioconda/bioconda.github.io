:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xopen'
.. highlight: bash

xopen
=====

.. conda:recipe:: xopen
   :replaces_section_title:

   Open compressed files transparently in Python

   :homepage: https://github.com/marcelm/xopen
   :license: MIT
   :recipe: /`xopen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xopen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xopen/meta.yaml>`_

   


.. conda:package:: xopen

   |downloads_xopen| |docker_xopen|

   :versions: 0.6.0-0, 0.5.1-0, 0.5.0-0, 0.4.1-0, 0.3.5-0, 0.3.2-1, 0.3.2-0, 0.1.1-0, 0.1.0-0
   
   :depends bz2file: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install xopen

   and update with::

      conda update xopen

   or use the docker container::

      docker pull quay.io/biocontainers/xopen:<tag>

   (see `xopen/tags`_ for valid values for ``<tag>``)


.. |downloads_xopen| image:: https://img.shields.io/conda/dn/bioconda/xopen.svg?style=flat
   :target: https://anaconda.org/bioconda/xopen
   :alt:   (downloads)
.. |docker_xopen| image:: https://quay.io/repository/biocontainers/xopen/status
   :target: https://quay.io/repository/biocontainers/xopen
.. _`xopen/tags`: https://quay.io/repository/biocontainers/xopen?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xopen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xopen/README.html