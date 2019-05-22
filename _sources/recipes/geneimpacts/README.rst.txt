:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'geneimpacts'
.. highlight: bash

geneimpacts
===========

.. conda:recipe:: geneimpacts
   :replaces_section_title:

   prioritize effects of variant annotations from VEP\, SnpEff\, et al.

   :homepage: https://github.com/brentp/geneimpacts
   :license: MIT
   :recipe: /`geneimpacts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geneimpacts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/geneimpacts/meta.yaml>`_

   


.. conda:package:: geneimpacts

   |downloads_geneimpacts| |docker_geneimpacts|

   :versions: 0.3.7-0, 0.3.6-4, 0.3.6-3, 0.3.6-2, 0.3.6-0, 0.3.5-0, 0.3.4-0, 0.3.3-0, 0.3.1-0, 0.3.0a0-0, 0.2.0-1, 0.1.4-1, 0.1.4-0, 0.1.3-0, 0.1.2-0, 0.1.1-0, 0.1.0-0, 0.0.9-0, 0.0.8-0, 0.0.7-0, 0.0.5-0, 0.0.4-0
   
   :depends python: >=2.7,<2.8.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install geneimpacts

   and update with::

      conda update geneimpacts

   or use the docker container::

      docker pull quay.io/biocontainers/geneimpacts:<tag>

   (see `geneimpacts/tags`_ for valid values for ``<tag>``)


.. |downloads_geneimpacts| image:: https://img.shields.io/conda/dn/bioconda/geneimpacts.svg?style=flat
   :target: https://anaconda.org/bioconda/geneimpacts
   :alt:   (downloads)
.. |docker_geneimpacts| image:: https://quay.io/repository/biocontainers/geneimpacts/status
   :target: https://quay.io/repository/biocontainers/geneimpacts
.. _`geneimpacts/tags`: https://quay.io/repository/biocontainers/geneimpacts?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/geneimpacts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/geneimpacts/README.html