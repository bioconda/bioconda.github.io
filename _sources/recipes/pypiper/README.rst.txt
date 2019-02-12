:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pypiper'
.. highlight: bash

pypiper
=======

.. conda:recipe:: pypiper
   :replaces_section_title:

   Pypiper is a lightweight python toolkit that helps you write slick pipelines in python.

   :homepage: http://pypiper.readthedocs.io/en/latest/
   :developer docs: https://github.com/epigen/pypiper
   :license: BSD / BSD-2-Clause
   :recipe: /`pypiper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypiper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypiper/meta.yaml>`_

   


.. conda:package:: pypiper

   |downloads_pypiper| |docker_pypiper|

   :versions: 0.8-0, 0.7.2-2, 0.7.2-0, 0.6-0
   
   :depends python: <3
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pypiper

   and update with::

      conda update pypiper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pypiper:<tag>

   (see `pypiper/tags`_ for valid values for ``<tag>``)


.. |downloads_pypiper| image:: https://img.shields.io/conda/dn/bioconda/pypiper.svg?style=flat
   :alt:   (downloads)
.. |docker_pypiper| image:: https://quay.io/repository/biocontainers/pypiper/status
   :target: https://quay.io/repository/biocontainers/pypiper
.. _`pypiper/tags`: https://quay.io/repository/biocontainers/pypiper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pypiper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pypiper/README.html