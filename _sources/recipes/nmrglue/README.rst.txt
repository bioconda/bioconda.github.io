:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nmrglue'
.. highlight: bash

nmrglue
=======

.. conda:recipe:: nmrglue
   :replaces_section_title:

   A module for working with NMR data in Python

   :homepage: http://www.nmrglue.com
   :license: BSD / BSD License
   :recipe: /`nmrglue <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nmrglue>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nmrglue/meta.yaml>`_

   


.. conda:package:: nmrglue

   |downloads_nmrglue| |docker_nmrglue|

   :versions: 0.6-0, 0.5-1, 0.5-0
   
   :depends libgcc-ng: >=4.9
   
   :depends numpy: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends scipy: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nmrglue

   and update with::

      conda update nmrglue

   or use the docker container::

      docker pull quay.io/repository/biocontainers/nmrglue:<tag>

   (see `nmrglue/tags`_ for valid values for ``<tag>``)


.. |downloads_nmrglue| image:: https://img.shields.io/conda/dn/bioconda/nmrglue.svg?style=flat
   :alt:   (downloads)
.. |docker_nmrglue| image:: https://quay.io/repository/biocontainers/nmrglue/status
   :target: https://quay.io/repository/biocontainers/nmrglue
.. _`nmrglue/tags`: https://quay.io/repository/biocontainers/nmrglue?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nmrglue/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nmrglue/README.html