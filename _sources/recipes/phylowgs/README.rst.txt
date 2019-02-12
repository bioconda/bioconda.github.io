.. title:: Package Recipe 'phylowgs'
.. highlight: bash


phylowgs
========

.. conda:recipe:: phylowgs
   :replaces_section_title:

   Application for inferring subclonal composition and evolution from whole\-genome sequencing data

   :homepage: https://github.com/morrislab/phylowgs
   :license: GPLv3
   :recipe: /`phylowgs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylowgs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylowgs/meta.yaml>`_

   


.. conda:package:: phylowgs

   |downloads_phylowgs| |docker_phylowgs|

   :versions: 20180317, 20150714

   :depends: :conda:package:`ete2`  :conda:package:`gsl` 1.16* :conda:package:`libgcc`  :conda:package:`numpy`  :conda:package:`python` 2.7* :conda:package:`pyvcf`  :conda:package:`scipy`  

   :required~by: |required_by_phylowgs|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phylowgs

   and update with::

      conda update phylowgs

   or use the docker container::

      docker pull quay.io/repository/biocontainers/phylowgs


.. |required_by_phylowgs| conda:required_by:: phylowgs
.. |downloads_phylowgs| image:: https://img.shields.io/conda/dn/bioconda/phylowgs.svg?style=flat
   :alt:   (downloads)
.. |docker_phylowgs| image:: https://quay.io/repository/biocontainers/phylowgs/status
   :target: https://quay.io/repository/biocontainers/phylowgs







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylowgs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylowgs/README.html

