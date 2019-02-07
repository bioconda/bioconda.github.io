.. title:: Package Recipe 'msproteomicstools'
.. highlight: bash


msproteomicstools
=================

.. conda:recipe:: msproteomicstools
   :replaces_section_title:

   Tools for MS\-based proteomics

   :homepage: https://code.google.com/p/msproteomicstools
   :license: BSD / BSD License
   :recipe: /`msproteomicstools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msproteomicstools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msproteomicstools/meta.yaml>`_

   


.. conda:package:: msproteomicstools

   |downloads_msproteomicstools| |docker_msproteomicstools|

   :versions: 0.5.0

   :depends: :conda:package:`biopython`  :conda:package:`configobj`  :conda:package:`lxml`  :conda:package:`numpy`  :conda:package:`pymzml` ==0.7.5 :conda:package:`pyteomics` >=2.4.0 :conda:package:`python` 2.7* :conda:package:`python-cluster` ==1.3.3 :conda:package:`scikits-datasmooth`  :conda:package:`scipy`  :conda:package:`xlsxwriter` >=0.5.3 :conda:package:`xlwt`  

   :required~by: |required_by_msproteomicstools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install msproteomicstools

   and update with::

      conda update msproteomicstools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/msproteomicstools


.. |required_by_msproteomicstools| conda:required_by:: msproteomicstools
.. |downloads_msproteomicstools| image:: https://img.shields.io/conda/dn/bioconda/msproteomicstools.svg?style=flat
   :alt:   (downloads)
.. |docker_msproteomicstools| image:: https://quay.io/repository/biocontainers/msproteomicstools/status
   :target: https://quay.io/repository/biocontainers/msproteomicstools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msproteomicstools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msproteomicstools/README.html

