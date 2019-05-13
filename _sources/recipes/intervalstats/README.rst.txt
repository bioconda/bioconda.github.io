:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'intervalstats'
.. highlight: bash

intervalstats
=============

.. conda:recipe:: intervalstats
   :replaces_section_title:

   Tool for assessing similarity between sets of intervals

   :homepage: http://sonorus.princeton.edu/IntervalStats/
   :license: unknown
   :recipe: /`intervalstats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/intervalstats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/intervalstats/meta.yaml>`_

   


.. conda:package:: intervalstats

   |downloads_intervalstats| |docker_intervalstats|

   :versions: 1.01-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install intervalstats

   and update with::

      conda update intervalstats

   or use the docker container::

      docker pull quay.io/biocontainers/intervalstats:<tag>

   (see `intervalstats/tags`_ for valid values for ``<tag>``)


.. |downloads_intervalstats| image:: https://img.shields.io/conda/dn/bioconda/intervalstats.svg?style=flat
   :target: https://anaconda.org/bioconda/intervalstats
   :alt:   (downloads)
.. |docker_intervalstats| image:: https://quay.io/repository/biocontainers/intervalstats/status
   :target: https://quay.io/repository/biocontainers/intervalstats
.. _`intervalstats/tags`: https://quay.io/repository/biocontainers/intervalstats?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/intervalstats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/intervalstats/README.html