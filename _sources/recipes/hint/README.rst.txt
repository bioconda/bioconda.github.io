:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hint'
.. highlight: bash

hint
====

.. conda:recipe:: hint
   :replaces_section_title:

   HiNT is a computational method for detecting copy number variations and translocations from Hi\-C data

   :homepage: https://github.com/suwangbio/HiNT_py3
   :license: MIT
   :recipe: /`hint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hint/meta.yaml>`_

   


.. conda:package:: hint

   |downloads_hint| |docker_hint|

   :versions: 2.1.9-1, 2.1.9-0, 2.1.7-0, 2.0.1-0
   
   :depends argparse: >=1.1
   :depends bwa: >=0.7.16
   :depends cooler: 0.8.3
   :depends h5py: >=2.8.0
   :depends multiprocess: >=0.70.5
   :depends numpy: >=1.16.1
   :depends openjdk: >=8
   :depends pairix: >=0.3.6
   :depends pairtools: >=0.2.2
   :depends pandas: >=0.23.0
   :depends perl: >=5
   :depends pytabix: 
   :depends python: >=3.5
   :depends r: >=3.4
   :depends r-base: 
   :depends r-cairo: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-mgcv: 
   :depends r-strucchange: 
   :depends samtools: >=1.9
   :depends scikit-learn: >=0.19.1
   :depends scipy: >=1.0.1
   :depends tabix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hint

   and update with::

      conda update hint

   or use the docker container::

      docker pull quay.io/biocontainers/hint:<tag>

   (see `hint/tags`_ for valid values for ``<tag>``)


.. |downloads_hint| image:: https://img.shields.io/conda/dn/bioconda/hint.svg?style=flat
   :target: https://anaconda.org/bioconda/hint
   :alt:   (downloads)
.. |docker_hint| image:: https://quay.io/repository/biocontainers/hint/status
   :target: https://quay.io/repository/biocontainers/hint
.. _`hint/tags`: https://quay.io/repository/biocontainers/hint?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hint/README.html