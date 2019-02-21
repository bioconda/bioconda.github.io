:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnacode'
.. highlight: bash

rnacode
=======

.. conda:recipe:: rnacode/0.3
   :replaces_section_title:

   RNAcode \- Analyze the protein coding potential in multiple sequence alignments RNAcode relies on evolutionary signatures including synonymous\/conservative mutations and conservation of the reading frame. It does not use any species specific sequence characteristics whatsoever and does not use any machine learning techniques.

   :homepage: http://wash.github.io/rnacode/
   :license: 
   :recipe: /`rnacode <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnacode>`_/`0.3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnacode/0.3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnacode/0.3/meta.yaml>`_

   


.. conda:package:: rnacode

   |downloads_rnacode| |docker_rnacode|

   :versions: 0.3-1, 0.3-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rnacode

   and update with::

      conda update rnacode

   or use the docker container::

      docker pull quay.io/biocontainers/rnacode:<tag>

   (see `rnacode/tags`_ for valid values for ``<tag>``)


.. |downloads_rnacode| image:: https://img.shields.io/conda/dn/bioconda/rnacode.svg?style=flat
   :alt:   (downloads)
.. |docker_rnacode| image:: https://quay.io/repository/biocontainers/rnacode/status
   :target: https://quay.io/repository/biocontainers/rnacode
.. _`rnacode/tags`: https://quay.io/repository/biocontainers/rnacode?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnacode/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnacode/README.html