.. title:: Package Recipe 'poretools'
.. highlight: bash


poretools
=========

.. conda:recipe:: poretools
   :replaces_section_title:

   poretools\: a toolkit for working with nanopore sequencing data from Oxford Nanopore

   :homepage: http://poretools.readthedocs.org/en/latest/
   :license: MIT
   :recipe: /`poretools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poretools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/poretools/meta.yaml>`_

   


.. conda:package:: poretools

   |downloads_poretools| |docker_poretools|

   :versions: 0.6.1a1, 0.6.1a0, 0.6.0, 0.5.1, 0.5.0

   :depends: :conda:package:`h5py` >=2.2.0 :conda:package:`hdf5` >=1.8.7 :conda:package:`matplotlib`  :conda:package:`pandas`  :conda:package:`python` 2.7* :conda:package:`seaborn`  

   :required~by: |required_by_poretools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install poretools

   and update with::

      conda update poretools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/poretools


.. |required_by_poretools| conda:required_by:: poretools
.. |downloads_poretools| image:: https://img.shields.io/conda/dn/bioconda/poretools.svg?style=flat
   :alt:   (downloads)
.. |docker_poretools| image:: https://quay.io/repository/biocontainers/poretools/status
   :target: https://quay.io/repository/biocontainers/poretools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/poretools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/poretools/README.html

