:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastaptamer'
.. highlight: bash

fastaptamer
===========

.. conda:recipe:: fastaptamer
   :replaces_section_title:

   A Bioinformatic Toolkit for High\-Throughput Sequence Analysis of Combinatorial Selections

   :homepage: http://burkelab.missouri.edu/fastaptamer.html
   :license: GNU General Public License v3.0
   :recipe: /`fastaptamer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastaptamer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastaptamer/meta.yaml>`_

   


.. conda:package:: fastaptamer

   |downloads_fastaptamer| |docker_fastaptamer|

   :versions: 1.0.14-0
   
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastaptamer

   and update with::

      conda update fastaptamer

   or use the docker container::

      docker pull quay.io/biocontainers/fastaptamer:<tag>

   (see `fastaptamer/tags`_ for valid values for ``<tag>``)


.. |downloads_fastaptamer| image:: https://img.shields.io/conda/dn/bioconda/fastaptamer.svg?style=flat
   :target: https://anaconda.org/bioconda/fastaptamer
   :alt:   (downloads)
.. |docker_fastaptamer| image:: https://quay.io/repository/biocontainers/fastaptamer/status
   :target: https://quay.io/repository/biocontainers/fastaptamer
.. _`fastaptamer/tags`: https://quay.io/repository/biocontainers/fastaptamer?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastaptamer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastaptamer/README.html