.. title:: Package Recipe 'strainest'
.. highlight: bash


strainest
=========

.. conda:recipe:: strainest
   :replaces_section_title:

   Abundance estimation of strains

   :homepage: https://github.com/compmetagen/strainest
   :license: GPL / GPL-3.0
   :recipe: /`strainest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainest/meta.yaml>`_

   


.. conda:package:: strainest

   |downloads_strainest| |docker_strainest|

   :versions: 1.2.4, 1.2.2

   :depends: :conda:package:`biopython` >=1.50 :conda:package:`click` >=5.1 :conda:package:`matplotlib` >=1.3.0 :conda:package:`numpy` >=1.7.0 :conda:package:`pandas`  :conda:package:`pysam` >=0.9 :conda:package:`python` 2.7* :conda:package:`scikit-learn` >=0.16.1 :conda:package:`scipy`  

   :required~by: |required_by_strainest|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install strainest

   and update with::

      conda update strainest

   or use the docker container::

      docker pull quay.io/repository/biocontainers/strainest


.. |required_by_strainest| conda:required_by:: strainest
.. |downloads_strainest| image:: https://img.shields.io/conda/dn/bioconda/strainest.svg?style=flat
   :alt:   (downloads)
.. |docker_strainest| image:: https://quay.io/repository/biocontainers/strainest/status
   :target: https://quay.io/repository/biocontainers/strainest







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strainest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strainest/README.html

