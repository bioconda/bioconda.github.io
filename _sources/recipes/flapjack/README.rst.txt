:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flapjack'
.. highlight: bash

flapjack
========

.. conda:recipe:: flapjack
   :replaces_section_title:
   :noindex:

   Flapjack provides interactive visualizations of high\-throughput genotyping data.

   :homepage: https://ics.hutton.ac.uk/flapjack
   :license: BSD-2-Clause
   :recipe: /`flapjack <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flapjack>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flapjack/meta.yaml>`_

   


.. conda:package:: flapjack

   |downloads_flapjack| |docker_flapjack|

   :versions:
      
      

      ``1.18.06.29-1``,  ``1.18.06.29-0``,  ``1.18.06.13-2``,  ``1.18.06.13-1``,  ``1.16.10.31-1``,  ``1.16.10.31-0``

      

   
   :depends openjdk: ``>=8,<9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install flapjack

   and update with::

      conda update flapjack

   or use the docker container::

      docker pull quay.io/biocontainers/flapjack:<tag>

   (see `flapjack/tags`_ for valid values for ``<tag>``)


.. |downloads_flapjack| image:: https://img.shields.io/conda/dn/bioconda/flapjack.svg?style=flat
   :target: https://anaconda.org/bioconda/flapjack
   :alt:   (downloads)
.. |docker_flapjack| image:: https://quay.io/repository/biocontainers/flapjack/status
   :target: https://quay.io/repository/biocontainers/flapjack
.. _`flapjack/tags`: https://quay.io/repository/biocontainers/flapjack?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flapjack/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flapjack/README.html