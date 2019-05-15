:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'poppunk'
.. highlight: bash

poppunk
=======

.. conda:recipe:: poppunk
   :replaces_section_title:

   PopPUNK \(POPulation Partitioning Using Nucleotide Kmers\)

   :homepage: https://github.com/johnlees/PopPUNK
   :license: APACHE / Apache-2.0
   :recipe: /`poppunk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poppunk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poppunk/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.241455.118`

   


.. conda:package:: poppunk

   |downloads_poppunk| |docker_poppunk|

   :versions: 1.1.6-0, 1.1.5-0, 1.1.4-0, 1.1.3-0, 1.1.2-0
   
   :depends dendropy: 
   :depends hdbscan: 
   :depends mash: >=2.0
   :depends matplotlib: 
   :depends mkl: 
   :depends networkx: >=2.1
   :depends numba: 
   :depends numpy: 
   :depends pandas: 
   :depends python: >=3
   :depends rapidnj: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends sharedmem: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install poppunk

   and update with::

      conda update poppunk

   or use the docker container::

      docker pull quay.io/biocontainers/poppunk:<tag>

   (see `poppunk/tags`_ for valid values for ``<tag>``)


.. |downloads_poppunk| image:: https://img.shields.io/conda/dn/bioconda/poppunk.svg?style=flat
   :target: https://anaconda.org/bioconda/poppunk
   :alt:   (downloads)
.. |docker_poppunk| image:: https://quay.io/repository/biocontainers/poppunk/status
   :target: https://quay.io/repository/biocontainers/poppunk
.. _`poppunk/tags`: https://quay.io/repository/biocontainers/poppunk?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/poppunk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/poppunk/README.html