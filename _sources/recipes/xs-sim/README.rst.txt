:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xs-sim'
.. highlight: bash

xs-sim
======

.. conda:recipe:: xs-sim
   :replaces_section_title:
   :noindex:

   Simulates NGS reads

   :homepage: https://github.com/pratas/xs
   :license: GPL-2.0
   :recipe: /`xs-sim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xs-sim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xs-sim/meta.yaml>`_

   XS is a skilled FASTQ read simulation tool\, flexible\, portable
   \(does not need a reference sequence\) and tunable in terms of
   sequence complexity



.. conda:package:: xs-sim

   |downloads_xs-sim| |docker_xs-sim|

   :versions:
      
      

      ``1.0.0-1``,  ``1.0.0-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install xs-sim

   and update with::

      conda update xs-sim

   or use the docker container::

      docker pull quay.io/biocontainers/xs-sim:<tag>

   (see `xs-sim/tags`_ for valid values for ``<tag>``)


.. |downloads_xs-sim| image:: https://img.shields.io/conda/dn/bioconda/xs-sim.svg?style=flat
   :target: https://anaconda.org/bioconda/xs-sim
   :alt:   (downloads)
.. |docker_xs-sim| image:: https://quay.io/repository/biocontainers/xs-sim/status
   :target: https://quay.io/repository/biocontainers/xs-sim
.. _`xs-sim/tags`: https://quay.io/repository/biocontainers/xs-sim?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xs-sim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xs-sim/README.html