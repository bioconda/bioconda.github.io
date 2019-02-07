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

   


.. conda:package:: poppunk

   |downloads_poppunk| |docker_poppunk|

   :versions: 1.1.3, 1.1.2

   :depends: :conda:package:`dendropy`  :conda:package:`hdbscan`  :conda:package:`mash` >=2.0 :conda:package:`matplotlib`  :conda:package:`mkl`  :conda:package:`networkx` >=2.1 :conda:package:`numba`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`rapidnj`  :conda:package:`scikit-learn`  :conda:package:`scipy`  :conda:package:`sharedmem`  :conda:package:`statsmodels`  

   :required~by: |required_by_poppunk|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install poppunk

   and update with::

      conda update poppunk

   or use the docker container::

      docker pull quay.io/repository/biocontainers/poppunk


.. |required_by_poppunk| conda:required_by:: poppunk
.. |downloads_poppunk| image:: https://img.shields.io/conda/dn/bioconda/poppunk.svg?style=flat
   :alt:   (downloads)
.. |docker_poppunk| image:: https://quay.io/repository/biocontainers/poppunk/status
   :target: https://quay.io/repository/biocontainers/poppunk







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/poppunk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/poppunk/README.html

