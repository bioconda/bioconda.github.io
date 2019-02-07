.. title:: Package Recipe 'bioconductor-gsvadata'
.. highlight: bash


bioconductor-gsvadata
=====================

.. conda:recipe:: bioconductor-gsvadata
   :replaces_section_title:

   This package stores the data employed in the vignette of the GSVA package. These data belong to the following publications\: Armstrong et al. Nat Genet 30\:41\-47\, 2002\; Cahoy et al. J Neurosci 28\:264\-278\, 2008\; Carrel and Willard\, Nature\, 434\:400\-404\, 2005\; Huang et al. PNAS\, 104\:9758\-9763\, 2007\; Pickrell et al. Nature\, 464\:768\-722\, 2010\; Skaletsky et al. Nature\, 423\:825\-837\; Verhaak et al. Cancer Cell 17\:98\-110\, 2010

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/GSVAdata.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gsvadata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsvadata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsvadata/meta.yaml>`_

   


.. conda:package:: bioconductor-gsvadata

   |downloads_bioconductor-gsvadata| |docker_bioconductor-gsvadata|

   :versions: 1.18.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-gseabase` >=1.44.0,<1.45.0 :conda:package:`bioconductor-hgu95a.db` >=3.2.0,<3.3.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-gsvadata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gsvadata

   and update with::

      conda update bioconductor-gsvadata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-gsvadata


.. |required_by_bioconductor-gsvadata| conda:required_by:: bioconductor-gsvadata
.. |downloads_bioconductor-gsvadata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gsvadata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-gsvadata| image:: https://quay.io/repository/biocontainers/bioconductor-gsvadata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gsvadata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gsvadata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gsvadata/README.html

