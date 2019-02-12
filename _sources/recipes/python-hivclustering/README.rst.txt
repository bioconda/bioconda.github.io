:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-hivclustering'
.. highlight: bash

python-hivclustering
====================

.. conda:recipe:: python-hivclustering
   :replaces_section_title:

   A Python 3 library that makes inferences on HIV\-1 transmission networks.

   :homepage: https://github.com/veg/hivclustering
   :license: MIT
   :recipe: /`python-hivclustering <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-hivclustering>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-hivclustering/meta.yaml>`_

   


.. conda:package:: python-hivclustering

   |downloads_python-hivclustering| |docker_python-hivclustering|

   :versions: 1.3.2-0, 1.3.1-1, 1.3.1-0, 1.3.0-0, 1.2.3-0
   
   :depends python: >=3.5,<3.6.0a0
   
   :depends python-bioext: >=0.18.0
   
   :depends python-hppy: >=0.9.6
   
   :depends python-hyphy-python: >=0.1.6
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install python-hivclustering

   and update with::

      conda update python-hivclustering

   or use the docker container::

      docker pull quay.io/repository/biocontainers/python-hivclustering:<tag>

   (see `python-hivclustering/tags`_ for valid values for ``<tag>``)


.. |downloads_python-hivclustering| image:: https://img.shields.io/conda/dn/bioconda/python-hivclustering.svg?style=flat
   :alt:   (downloads)
.. |docker_python-hivclustering| image:: https://quay.io/repository/biocontainers/python-hivclustering/status
   :target: https://quay.io/repository/biocontainers/python-hivclustering
.. _`python-hivclustering/tags`: https://quay.io/repository/biocontainers/python-hivclustering?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-hivclustering/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-hivclustering/README.html