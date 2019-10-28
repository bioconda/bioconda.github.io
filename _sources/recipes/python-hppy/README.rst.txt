:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-hppy'
.. highlight: bash

python-hppy
===========

.. conda:recipe:: python-hppy
   :replaces_section_title:

   An intuitive HyPhy interface for Python

   :homepage: https://github.com/veg/hppy
   :license: GPL-3
   :recipe: /`python-hppy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-hppy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-hppy/meta.yaml>`_

   


.. conda:package:: python-hppy

   |downloads_python-hppy| |docker_python-hppy|

   :versions: 0.9.8-1, 0.9.8-0, 0.9.6-0
   
   :depends libgcc-ng: >=7.3.0
   :depends python: >=2.7,<2.8.0a0
   :depends python-fakemp: 
   :depends python-hyphy-python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install python-hppy

   and update with::

      conda update python-hppy

   or use the docker container::

      docker pull quay.io/biocontainers/python-hppy:<tag>

   (see `python-hppy/tags`_ for valid values for ``<tag>``)


.. |downloads_python-hppy| image:: https://img.shields.io/conda/dn/bioconda/python-hppy.svg?style=flat
   :target: https://anaconda.org/bioconda/python-hppy
   :alt:   (downloads)
.. |docker_python-hppy| image:: https://quay.io/repository/biocontainers/python-hppy/status
   :target: https://quay.io/repository/biocontainers/python-hppy
.. _`python-hppy/tags`: https://quay.io/repository/biocontainers/python-hppy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-hppy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-hppy/README.html