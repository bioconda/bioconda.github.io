.. title:: Package Recipe 'bioconductor-flowclust'
.. highlight: bash


bioconductor-flowclust
======================

.. conda:recipe:: bioconductor-flowclust
   :replaces_section_title:

   Robust model\-based clustering using a t\-mixture model with Box\-Cox transformation. Note\: users should have GSL installed. Windows users\: \'consult the README file available in the inst directory of the source distribution for necessary configuration instructions\'.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/flowClust.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-flowclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-flowclust/meta.yaml>`_

   


.. conda:package:: bioconductor-flowclust

   |downloads_bioconductor-flowclust| |docker_bioconductor-flowclust|

   :versions: 3.20.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-flowcore` >=1.48.0,<1.49.0 :conda:package:`bioconductor-flowviz` >=1.46.0,<1.47.0 :conda:package:`bioconductor-graph` >=1.60.0,<1.61.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-clue`  :conda:package:`r-corpcor`  :conda:package:`r-ellipse`  :conda:package:`r-mnormt`  

   :required~by: |required_by_bioconductor-flowclust|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-flowclust

   and update with::

      conda update bioconductor-flowclust

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-flowclust


.. |required_by_bioconductor-flowclust| conda:required_by:: bioconductor-flowclust
.. |downloads_bioconductor-flowclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-flowclust.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-flowclust| image:: https://quay.io/repository/biocontainers/bioconductor-flowclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-flowclust







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-flowclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-flowclust/README.html

