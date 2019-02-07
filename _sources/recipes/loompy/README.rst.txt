.. title:: Package Recipe 'loompy'
.. highlight: bash


loompy
======

.. conda:recipe:: loompy
   :replaces_section_title:

   Work with .loom files for single\-cell RNA\-seq data

   :homepage: https://github.com/linnarsson-lab/loompy
   :license: BSD / BSD-2-Clause
   :recipe: /`loompy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/loompy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/loompy/meta.yaml>`_

   


.. conda:package:: loompy

   |downloads_loompy| |docker_loompy|

   :versions: 2.0.16, 2.0.10, 2.0.9, 1.1.0, 1.0.2

   :depends: :conda:package:`h5py`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python` >=3.6 :conda:package:`scipy`  :conda:package:`typing`  

   :required~by: |required_by_loompy|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install loompy

   and update with::

      conda update loompy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/loompy


.. |required_by_loompy| conda:required_by:: loompy
.. |downloads_loompy| image:: https://img.shields.io/conda/dn/bioconda/loompy.svg?style=flat
   :alt:   (downloads)
.. |docker_loompy| image:: https://quay.io/repository/biocontainers/loompy/status
   :target: https://quay.io/repository/biocontainers/loompy







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/loompy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/loompy/README.html

