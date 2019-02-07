.. title:: Package Recipe 'r-ggbiplot'
.. highlight: bash


r-ggbiplot
==========

.. conda:recipe:: r-ggbiplot
   :replaces_section_title:

   A biplot based on ggplot2

   :homepage: http://github.com/vqv/ggbiplot
   :license: GPL-2
   :recipe: /`r-ggbiplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ggbiplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ggbiplot/meta.yaml>`_

   


.. conda:package:: r-ggbiplot

   |downloads_r-ggbiplot| |docker_r-ggbiplot|

   :versions: 0.55

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`r-base` >=3.4.1,<3.4.2.0a0 :conda:package:`r-devtools`  :conda:package:`r-ggplot2`  :conda:package:`r-gridbase`  :conda:package:`r-plyr`  :conda:package:`r-scales`  

   :required~by: |required_by_r-ggbiplot|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-ggbiplot

   and update with::

      conda update r-ggbiplot

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-ggbiplot


.. |required_by_r-ggbiplot| conda:required_by:: r-ggbiplot
.. |downloads_r-ggbiplot| image:: https://img.shields.io/conda/dn/bioconda/r-ggbiplot.svg?style=flat
   :alt:   (downloads)
.. |docker_r-ggbiplot| image:: https://quay.io/repository/biocontainers/r-ggbiplot/status
   :target: https://quay.io/repository/biocontainers/r-ggbiplot







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ggbiplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ggbiplot/README.html

