:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pynast'
.. highlight: bash

pynast
======

.. conda:recipe:: pynast/1.2.2
   :replaces_section_title:

   The Python Nearest Alignment Space Termination tool

   :homepage: http://qiime.org/pynast
   :license: BSD License
   :recipe: /`pynast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pynast>`_/`1.2.2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pynast/1.2.2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pynast/1.2.2/meta.yaml>`_

   


.. conda:package:: pynast

   |downloads_pynast| |docker_pynast|

   :versions: 1.2.2-1, 1.2.2-0
   
   :depends cogent: >=1.5.3
   :depends numpy: >=1.5.1
   :depends python: >=2.7,<2.8.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pynast

   and update with::

      conda update pynast

   or use the docker container::

      docker pull quay.io/biocontainers/pynast:<tag>

   (see `pynast/tags`_ for valid values for ``<tag>``)


.. |downloads_pynast| image:: https://img.shields.io/conda/dn/bioconda/pynast.svg?style=flat
   :target: https://anaconda.org/bioconda/pynast
   :alt:   (downloads)
.. |docker_pynast| image:: https://quay.io/repository/biocontainers/pynast/status
   :target: https://quay.io/repository/biocontainers/pynast
.. _`pynast/tags`: https://quay.io/repository/biocontainers/pynast?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pynast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pynast/README.html