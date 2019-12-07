:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genie'
.. highlight: bash

genie
=====

.. conda:recipe:: genie
   :replaces_section_title:

   A toolkit for working with Next Generation Sequencing \(NGS\) data

   :homepage: https://github.com/sakkayaphab/genie
   :license: MIT / MIT
   :recipe: /`genie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genie/meta.yaml>`_

   Genie is a collection of tools for a wide\-range of genomics analysis tasks.
   Genie provides a fast\, lightweight\, and flexible toolkit for reading\, writing\,
   and manipulating data.


.. conda:package:: genie

   |downloads_genie| |docker_genie|

   :versions: 0.6.0-0, 0.5.0-1, 0.5.0-0, 0.4.2-1, 0.4.2-0, 0.4.1-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genie

   and update with::

      conda update genie

   or use the docker container::

      docker pull quay.io/biocontainers/genie:<tag>

   (see `genie/tags`_ for valid values for ``<tag>``)


.. |downloads_genie| image:: https://img.shields.io/conda/dn/bioconda/genie.svg?style=flat
   :target: https://anaconda.org/bioconda/genie
   :alt:   (downloads)
.. |docker_genie| image:: https://quay.io/repository/biocontainers/genie/status
   :target: https://quay.io/repository/biocontainers/genie
.. _`genie/tags`: https://quay.io/repository/biocontainers/genie?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genie/README.html