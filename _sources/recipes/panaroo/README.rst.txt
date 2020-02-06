:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panaroo'
.. highlight: bash

panaroo
=======

.. conda:recipe:: panaroo
   :replaces_section_title:

   panaroo \- an updated pipeline for pan\-genome investigation

   :homepage: https://gtonkinhill.github.io/panaroo
   :license: MIT
   :recipe: /`panaroo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panaroo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panaroo/meta.yaml>`_

   


.. conda:package:: panaroo

   |downloads_panaroo| |docker_panaroo|

   :versions: 1.1.0-0, 1.0.0-0
   
   :depends biopython: 
   :depends cd-hit: 
   :depends dendropy: 
   :depends gffutils: 
   :depends joblib: 
   :depends mafft: 
   :depends matplotlib: 
   :depends mkl: 
   :depends networkx: 
   :depends numba: 
   :depends numpy: 
   :depends plotly: 
   :depends python: >=3
   :depends python-edlib: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install panaroo

   and update with::

      conda update panaroo

   or use the docker container::

      docker pull quay.io/biocontainers/panaroo:<tag>

   (see `panaroo/tags`_ for valid values for ``<tag>``)


.. |downloads_panaroo| image:: https://img.shields.io/conda/dn/bioconda/panaroo.svg?style=flat
   :target: https://anaconda.org/bioconda/panaroo
   :alt:   (downloads)
.. |docker_panaroo| image:: https://quay.io/repository/biocontainers/panaroo/status
   :target: https://quay.io/repository/biocontainers/panaroo
.. _`panaroo/tags`: https://quay.io/repository/biocontainers/panaroo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panaroo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panaroo/README.html