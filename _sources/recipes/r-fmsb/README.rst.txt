:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-fmsb'
.. highlight: bash

r-fmsb
======

.. conda:recipe:: r-fmsb
   :replaces_section_title:

   Several utility functions for the book entitled  \"Practices of Medical and Health Data Analysis using R\" \(Pearson Education Japan\, 2007\) with Japanese demographic data and some demographic analysis related functions.

   :homepage: http://minato.sip21c.org/msb/
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-fmsb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-fmsb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-fmsb/meta.yaml>`_

   


.. conda:package:: r-fmsb

   |downloads_r-fmsb| |docker_r-fmsb|

   :versions: 0.6.3-3, 0.6.3-2, 0.6.3-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-fmsb

   and update with::

      conda update r-fmsb

   or use the docker container::

      docker pull quay.io/biocontainers/r-fmsb:<tag>

   (see `r-fmsb/tags`_ for valid values for ``<tag>``)


.. |downloads_r-fmsb| image:: https://img.shields.io/conda/dn/bioconda/r-fmsb.svg?style=flat
   :alt:   (downloads)
.. |docker_r-fmsb| image:: https://quay.io/repository/biocontainers/r-fmsb/status
   :target: https://quay.io/repository/biocontainers/r-fmsb
.. _`r-fmsb/tags`: https://quay.io/repository/biocontainers/r-fmsb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-fmsb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-fmsb/README.html