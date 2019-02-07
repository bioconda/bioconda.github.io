.. title:: Package Recipe 'icount'
.. highlight: bash


icount
======

.. conda:recipe:: icount
   :replaces_section_title:

   Computational pipeline for analysis of iCLIP data

   :homepage: https://github.com/tomazc/iCount
   :license: MIT / MIT
   :recipe: /`icount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/icount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/icount/meta.yaml>`_

   iCount is a Python module and associated command\-line interface \(CLI\)\, which provides all the commands needed to process iCLIP data on protein\-RNA interactions.


.. conda:package:: icount

   |downloads_icount| |docker_icount|

   :versions: 2.0.0

   :depends: :conda:package:`bedtools` >=2.26.0 :conda:package:`cutadapt` >=1.10 :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`numpydoc`  :conda:package:`pandas`  :conda:package:`pybedtools`  :conda:package:`pysam`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`sphinx` >=1.4 :conda:package:`star`  

   :required~by: |required_by_icount|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install icount

   and update with::

      conda update icount

   or use the docker container::

      docker pull quay.io/repository/biocontainers/icount


.. |required_by_icount| conda:required_by:: icount
.. |downloads_icount| image:: https://img.shields.io/conda/dn/bioconda/icount.svg?style=flat
   :alt:   (downloads)
.. |docker_icount| image:: https://quay.io/repository/biocontainers/icount/status
   :target: https://quay.io/repository/biocontainers/icount







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/icount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/icount/README.html

