:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylodm'
.. highlight: bash

phylodm
=======

.. conda:recipe:: phylodm
   :replaces_section_title:
   :noindex:

   Efficient calculation of phylogenetic distance matrices.

   :homepage: https://github.com/aaronmussig/PhyloDM
   :license: GPL / GPL-3
   :recipe: /`phylodm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylodm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylodm/meta.yaml>`_

   


.. conda:package:: phylodm

   |downloads_phylodm| |docker_phylodm|

   :versions:
      
      

      ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends dendropy: 
   :depends h5py: 
   :depends libcxx: ``>=9.0.1``
   :depends numpy: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phylodm

   and update with::

      conda update phylodm

   or use the docker container::

      docker pull quay.io/biocontainers/phylodm:<tag>

   (see `phylodm/tags`_ for valid values for ``<tag>``)


.. |downloads_phylodm| image:: https://img.shields.io/conda/dn/bioconda/phylodm.svg?style=flat
   :target: https://anaconda.org/bioconda/phylodm
   :alt:   (downloads)
.. |docker_phylodm| image:: https://quay.io/repository/biocontainers/phylodm/status
   :target: https://quay.io/repository/biocontainers/phylodm
.. _`phylodm/tags`: https://quay.io/repository/biocontainers/phylodm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylodm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylodm/README.html