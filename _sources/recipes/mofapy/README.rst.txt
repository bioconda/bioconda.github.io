.. title:: Package Recipe 'mofapy'
.. highlight: bash


mofapy
======

.. conda:recipe:: mofapy
   :replaces_section_title:

   Multi\-Omics Factor Analysis

   :homepage: https://github.com/PMBio/MOFA
   :license: MIT / MIT
   :recipe: /`mofapy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mofapy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mofapy/meta.yaml>`_

   


.. conda:package:: mofapy

   |downloads_mofapy| |docker_mofapy|

   :versions: 1.1.1

   :depends: :conda:package:`argparse`  :conda:package:`h5py`  :conda:package:`numpy` 1.11.* :conda:package:`pandas`  :conda:package:`python`  :conda:package:`scikit-learn`  :conda:package:`scipy`  

   :required~by: |required_by_mofapy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mofapy

   and update with::

      conda update mofapy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mofapy


.. |required_by_mofapy| conda:required_by:: mofapy
.. |downloads_mofapy| image:: https://img.shields.io/conda/dn/bioconda/mofapy.svg?style=flat
   :alt:   (downloads)
.. |docker_mofapy| image:: https://quay.io/repository/biocontainers/mofapy/status
   :target: https://quay.io/repository/biocontainers/mofapy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mofapy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mofapy/README.html

