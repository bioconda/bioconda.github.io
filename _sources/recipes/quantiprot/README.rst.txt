:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quantiprot'
.. highlight: bash

quantiprot
==========

.. conda:recipe:: quantiprot
   :replaces_section_title:

   Quantiprot is a Python package for quantitative analysis of protein sequences

   :homepage: https://git.e-science.pl/wdyrka/quantiprot
   :license: MIT / MIT
   :recipe: /`quantiprot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quantiprot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quantiprot/meta.yaml>`_

   


.. conda:package:: quantiprot

   |downloads_quantiprot| |docker_quantiprot|

   :versions: 0.2.4-0
   
   :depends numpy: >=1.11.0
   :depends python: 
   :depends requests: >=2.10.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install quantiprot

   and update with::

      conda update quantiprot

   or use the docker container::

      docker pull quay.io/biocontainers/quantiprot:<tag>

   (see `quantiprot/tags`_ for valid values for ``<tag>``)


.. |downloads_quantiprot| image:: https://img.shields.io/conda/dn/bioconda/quantiprot.svg?style=flat
   :target: https://anaconda.org/bioconda/quantiprot
   :alt:   (downloads)
.. |docker_quantiprot| image:: https://quay.io/repository/biocontainers/quantiprot/status
   :target: https://quay.io/repository/biocontainers/quantiprot
.. _`quantiprot/tags`: https://quay.io/repository/biocontainers/quantiprot?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quantiprot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quantiprot/README.html