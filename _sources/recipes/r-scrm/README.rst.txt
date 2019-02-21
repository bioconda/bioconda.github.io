:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-scrm'
.. highlight: bash

r-scrm
======

.. conda:recipe:: r-scrm
   :replaces_section_title:

   A coalescent simulator that allows the rapid simulation of biological sequences under neutral models of evolution. Different to other coalescent based simulations\, it has an optional approximation parameter that allows for high accuracy while maintaining a linear run time cost for long sequences. It is optimized for simulating massive data sets as produced by Next\- Generation Sequencing technologies for up to several thousand sequences.

   :homepage: https://github.com/scrm/scrm-r
   :license: GPL3 / GPL (>= 3)
   :recipe: /`r-scrm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scrm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-scrm/meta.yaml>`_

   


.. conda:package:: r-scrm

   |downloads_r-scrm| |docker_r-scrm|

   :versions: 1.7.2_4-1, 1.7.2_4-0, 1.7.2_0-0, 1.6.0_2-0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-rcpp: >=0.11.2
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-scrm

   and update with::

      conda update r-scrm

   or use the docker container::

      docker pull quay.io/biocontainers/r-scrm:<tag>

   (see `r-scrm/tags`_ for valid values for ``<tag>``)


.. |downloads_r-scrm| image:: https://img.shields.io/conda/dn/bioconda/r-scrm.svg?style=flat
   :alt:   (downloads)
.. |docker_r-scrm| image:: https://quay.io/repository/biocontainers/r-scrm/status
   :target: https://quay.io/repository/biocontainers/r-scrm
.. _`r-scrm/tags`: https://quay.io/repository/biocontainers/r-scrm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-scrm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-scrm/README.html