.. title:: Package Recipe 'afplot'
.. highlight: bash


afplot
======

.. conda:recipe:: afplot
   :replaces_section_title:

   Plot allele frequencies in VCF files

   :homepage: https://github.com/sndrtj/afplot
   :license: MIT / MIT
   :recipe: /`afplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/afplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/afplot/meta.yaml>`_

   


.. conda:package:: afplot

   |downloads_afplot| |docker_afplot|

   :versions: 0.2.1

   :depends: :conda:package:`click`  :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`progressbar2`  :conda:package:`pysam`  :conda:package:`python` 3.5* :conda:package:`pyvcf`  :conda:package:`seaborn`  

   :required~by: |required_by_afplot|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install afplot

   and update with::

      conda update afplot

   or use the docker container::

      docker pull quay.io/repository/biocontainers/afplot


.. |required_by_afplot| conda:required_by:: afplot
.. |downloads_afplot| image:: https://img.shields.io/conda/dn/bioconda/afplot.svg?style=flat
   :alt:   (downloads)
.. |docker_afplot| image:: https://quay.io/repository/biocontainers/afplot/status
   :target: https://quay.io/repository/biocontainers/afplot







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/afplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/afplot/README.html

