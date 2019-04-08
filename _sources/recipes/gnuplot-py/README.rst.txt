:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gnuplot-py'
.. highlight: bash

gnuplot-py
==========

.. conda:recipe:: gnuplot-py
   :replaces_section_title:

   A Python interface to the gnuplot plotting program.

   :homepage: http://gnuplot-py.sourceforge.net
   :license: LGPL / LGPL
   :recipe: /`gnuplot-py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnuplot-py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnuplot-py/meta.yaml>`_

   


.. conda:package:: gnuplot-py

   |downloads_gnuplot-py| |docker_gnuplot-py|

   :versions: 1.8-1, 1.8-0
   
   :depends gnuplot: 
   :depends numpy: 
   :depends python: >=2.7,<2.8.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gnuplot-py

   and update with::

      conda update gnuplot-py

   or use the docker container::

      docker pull quay.io/biocontainers/gnuplot-py:<tag>

   (see `gnuplot-py/tags`_ for valid values for ``<tag>``)


.. |downloads_gnuplot-py| image:: https://img.shields.io/conda/dn/bioconda/gnuplot-py.svg?style=flat
   :alt:   (downloads)
.. |docker_gnuplot-py| image:: https://quay.io/repository/biocontainers/gnuplot-py/status
   :target: https://quay.io/repository/biocontainers/gnuplot-py
.. _`gnuplot-py/tags`: https://quay.io/repository/biocontainers/gnuplot-py?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gnuplot-py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gnuplot-py/README.html