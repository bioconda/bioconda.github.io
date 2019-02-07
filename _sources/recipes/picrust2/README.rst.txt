.. title:: Package Recipe 'picrust2'
.. highlight: bash


picrust2
========

.. conda:recipe:: picrust2
   :replaces_section_title:

   PICRUSt\: Phylogenetic Investigation of Communities by Reconstruction of Unobserved States

   :homepage: https://github.com/picrust/picrust2
   :license: GNU General Public License v3.0
   :recipe: /`picrust2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/picrust2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/picrust2/meta.yaml>`_

   


.. conda:package:: picrust2

   |downloads_picrust2| |docker_picrust2|

   :versions: 2.1.0_b, 2.0.3_b

   :depends: :conda:package:`biom-format` 2.1.7.* :conda:package:`epa-ng` 0.3.4.* :conda:package:`gappa` 0.1.0.* :conda:package:`glpk` 4.65.* :conda:package:`h5py` 2.7.0.* :conda:package:`hmmer` 3.2.1.* :conda:package:`joblib` 0.13.1.* :conda:package:`numpy` 1.12.1.* :conda:package:`pandas` 0.22.0.* :conda:package:`pytest`  :conda:package:`pytest-cov`  :conda:package:`python` >=3.5,<3.7 :conda:package:`r-base` 3.4.1.* :conda:package:`r-castor` 1.3.4.* :conda:package:`scipy` 0.19.1.* :conda:package:`wget`  

   :required~by: |required_by_picrust2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install picrust2

   and update with::

      conda update picrust2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/picrust2


.. |required_by_picrust2| conda:required_by:: picrust2
.. |downloads_picrust2| image:: https://img.shields.io/conda/dn/bioconda/picrust2.svg?style=flat
   :alt:   (downloads)
.. |docker_picrust2| image:: https://quay.io/repository/biocontainers/picrust2/status
   :target: https://quay.io/repository/biocontainers/picrust2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/picrust2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/picrust2/README.html

