.. title:: Package Recipe 'ebfilter'
.. highlight: bash


ebfilter
========

.. conda:recipe:: ebfilter
   :replaces_section_title:

   EBFilter \(Empirical Bayesian Mutation Filtering\)

   :homepage: https://github.com/Genomon-Project/EBFilter
   :license: GPL / GNU General Public License v3 (GPLv3)
   :recipe: /`ebfilter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ebfilter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ebfilter/meta.yaml>`_

   


.. conda:package:: ebfilter

   |downloads_ebfilter| |docker_ebfilter|

   :versions: 0.2.1

   :depends: :conda:package:`numpy`  :conda:package:`pysam`  :conda:package:`python` <3 :conda:package:`pyvcf`  :conda:package:`scipy`  

   :required~by: |required_by_ebfilter|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ebfilter

   and update with::

      conda update ebfilter

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ebfilter


.. |required_by_ebfilter| conda:required_by:: ebfilter
.. |downloads_ebfilter| image:: https://img.shields.io/conda/dn/bioconda/ebfilter.svg?style=flat
   :alt:   (downloads)
.. |docker_ebfilter| image:: https://quay.io/repository/biocontainers/ebfilter/status
   :target: https://quay.io/repository/biocontainers/ebfilter







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ebfilter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ebfilter/README.html

