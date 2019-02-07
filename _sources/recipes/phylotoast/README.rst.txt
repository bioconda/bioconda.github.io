.. title:: Package Recipe 'phylotoast'
.. highlight: bash


phylotoast
==========

.. conda:recipe:: phylotoast
   :replaces_section_title:

   Tools for phylogenetic data analysis including visualization and cluster\-computing support. 

   :homepage: https://github.com/smdabdoub/phylotoast
   :license: MIT
   :recipe: /`phylotoast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylotoast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylotoast/meta.yaml>`_

   


.. conda:package:: phylotoast

   |downloads_phylotoast| |docker_phylotoast|

   :versions: 1.4.0rc2, 1.3.0

   :depends: :conda:package:`biom-format` >=2.1.5 :conda:package:`biopython` >=1.60 :conda:package:`h5py`  :conda:package:`matplotlib` <=1.5.3 :conda:package:`numpy`  :conda:package:`palettable`  :conda:package:`pandas`  :conda:package:`python` 2.7* :conda:package:`scikit-bio` <=0.4.2 :conda:package:`scikit-learn`  :conda:package:`scipy`  :conda:package:`statsmodels`  

   :required~by: |required_by_phylotoast|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phylotoast

   and update with::

      conda update phylotoast

   or use the docker container::

      docker pull quay.io/repository/biocontainers/phylotoast


.. |required_by_phylotoast| conda:required_by:: phylotoast
.. |downloads_phylotoast| image:: https://img.shields.io/conda/dn/bioconda/phylotoast.svg?style=flat
   :alt:   (downloads)
.. |docker_phylotoast| image:: https://quay.io/repository/biocontainers/phylotoast/status
   :target: https://quay.io/repository/biocontainers/phylotoast







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylotoast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylotoast/README.html

