.. title:: Package Recipe 'qiime'
.. highlight: bash


qiime
=====

.. conda:recipe:: qiime/1.9.1
   :replaces_section_title:

   Quantitative Insights Into Microbial Ecology

   :homepage: http://www.qiime.org
   :license: GNU General Public License v2 (GPLv2)
   :recipe: /`qiime <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qiime>`_/`1.9.1 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qiime/1.9.1>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qiime/1.9.1/meta.yaml>`_
   :links: biotools: :biotools:`qiime`, doi: :doi:`10.1038/nmeth.f.303`

   


.. conda:package:: qiime

   |downloads_qiime| |docker_qiime|

   :versions: 1.9.1, 1.8.0

   :depends: :conda:package:`biom-format` >=2.1.4,<2.2.0 :conda:package:`burrito` >=0.9.1,<1.0.0 :conda:package:`burrito-fillings` >=0.1.1,<0.2.0 :conda:package:`cogent` ==1.5.3 :conda:package:`emperor` >=0.9.51,<1.0.0 :conda:package:`gdata`  :conda:package:`matplotlib` >=1.1.0,!=1.4.2,<1.5.0 :conda:package:`mock`  :conda:package:`natsort` <4.0.0 :conda:package:`nose`  :conda:package:`numpy` 1.10* :conda:package:`pandas` >=0.13.1 :conda:package:`pynast` ==1.2.2 :conda:package:`python` 2.7* :conda:package:`qcli` >=0.1.1,<0.2.0 :conda:package:`qiime-default-reference` >=0.1.2,<0.2.0 :conda:package:`scikit-bio` >=0.2.3,<0.3.0 :conda:package:`scipy` >=0.14.0 

   :required~by: |required_by_qiime|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install qiime

   and update with::

      conda update qiime

   or use the docker container::

      docker pull quay.io/repository/biocontainers/qiime


.. |required_by_qiime| conda:required_by:: qiime
.. |downloads_qiime| image:: https://img.shields.io/conda/dn/bioconda/qiime.svg?style=flat
   :alt:   (downloads)
.. |docker_qiime| image:: https://quay.io/repository/biocontainers/qiime/status
   :target: https://quay.io/repository/biocontainers/qiime







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qiime/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qiime/README.html

