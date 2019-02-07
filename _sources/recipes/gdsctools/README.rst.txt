.. title:: Package Recipe 'gdsctools'
.. highlight: bash


gdsctools
=========

.. conda:recipe:: gdsctools
   :replaces_section_title:

   Set of tools and pipelines to analyse GDSC data \(cancerrxgene.org\)

   :homepage: ['http://pypi.python.org/pypi/gdsctools']
   :license: BSD / BSD 3-clause
   :recipe: /`gdsctools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gdsctools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gdsctools/meta.yaml>`_

   


.. conda:package:: gdsctools

   |downloads_gdsctools| |docker_gdsctools|

   :versions: 0.20.1, 0.19.0

   :depends: :conda:package:`biokit` ==0.4.1 :conda:package:`colorlog`  :conda:package:`colormap` ==1.0.1 :conda:package:`easydev` >=0.9.34 :conda:package:`jinja2`  :conda:package:`matplotlib` >=1.4.3 :conda:package:`numexpr`  :conda:package:`numpy`  :conda:package:`pandas` ==0.20.1 :conda:package:`python` 3.5* :conda:package:`reports` >=0.3.1 :conda:package:`reports` >=0.3.1 :conda:package:`scikit-learn` ==0.18.2 :conda:package:`scipy` ==0.19.1 :conda:package:`statsmodels` ==0.8.0 :conda:package:`xlrd`  

   :required~by: |required_by_gdsctools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gdsctools

   and update with::

      conda update gdsctools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/gdsctools


.. |required_by_gdsctools| conda:required_by:: gdsctools
.. |downloads_gdsctools| image:: https://img.shields.io/conda/dn/bioconda/gdsctools.svg?style=flat
   :alt:   (downloads)
.. |docker_gdsctools| image:: https://quay.io/repository/biocontainers/gdsctools/status
   :target: https://quay.io/repository/biocontainers/gdsctools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gdsctools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gdsctools/README.html

