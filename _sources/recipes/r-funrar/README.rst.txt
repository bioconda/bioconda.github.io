.. title:: Package Recipe 'r-funrar'
.. highlight: bash


r-funrar
========

.. conda:recipe:: r-funrar
   :replaces_section_title:

   Computes functional rarity indices as proposed by Violle et al. \(2017\) \<doi\:10.1016\/j.tree.2017.02.002\>. Various indices can be computed using both regional and local information. Functional Rarity combines both the functional aspect of rarity as well as the extent aspect of rarity. \'funrar\' is presented in Grenié et al. \(2017\) \<doi\:10.1111\/ddi.12629\>.

   :homepage: https://github.com/Rekyt/funrar
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-funrar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-funrar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-funrar/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.tree.2017.02.002`, doi: :doi:`10.1111/ddi.12629`

   


.. conda:package:: r-funrar

   |downloads_r-funrar| |docker_r-funrar|

   :versions: 1.2.2

   :depends: :conda:package:`r-base` 3.4.1* :conda:package:`r-cluster`  :conda:package:`r-dplyr` >=0.4.3 

   :required~by: |required_by_r-funrar|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-funrar

   and update with::

      conda update r-funrar

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-funrar


.. |required_by_r-funrar| conda:required_by:: r-funrar
.. |downloads_r-funrar| image:: https://img.shields.io/conda/dn/bioconda/r-funrar.svg?style=flat
   :alt:   (downloads)
.. |docker_r-funrar| image:: https://quay.io/repository/biocontainers/r-funrar/status
   :target: https://quay.io/repository/biocontainers/r-funrar







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-funrar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-funrar/README.html

