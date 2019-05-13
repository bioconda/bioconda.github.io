:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'knot'
.. highlight: bash

knot
====

.. conda:recipe:: knot
   :replaces_section_title:

   Detection of knots in protein folds.

   :homepage: http://mathbio.nimr.mrc.ac.uk/wiki/Software#KNOT
   :license: GPL
   :recipe: /`knot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/knot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/knot/meta.yaml>`_

   


.. conda:package:: knot

   |downloads_knot| |docker_knot|

   :versions: 1.0.0-1
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install knot

   and update with::

      conda update knot

   or use the docker container::

      docker pull quay.io/biocontainers/knot:<tag>

   (see `knot/tags`_ for valid values for ``<tag>``)


.. |downloads_knot| image:: https://img.shields.io/conda/dn/bioconda/knot.svg?style=flat
   :target: https://anaconda.org/bioconda/knot
   :alt:   (downloads)
.. |docker_knot| image:: https://quay.io/repository/biocontainers/knot/status
   :target: https://quay.io/repository/biocontainers/knot
.. _`knot/tags`: https://quay.io/repository/biocontainers/knot?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/knot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/knot/README.html