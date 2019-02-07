.. title:: Package Recipe 'bioconductor-lrbasedbi'
.. highlight: bash


bioconductor-lrbasedbi
======================

.. conda:recipe:: bioconductor-lrbasedbi
   :replaces_section_title:

   Interface to construct LRBase package \(LRBase.XXX.eg.db\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/LRBaseDbi.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-lrbasedbi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lrbasedbi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lrbasedbi/meta.yaml>`_

   


.. conda:package:: bioconductor-lrbasedbi

   |downloads_bioconductor-lrbasedbi| |docker_bioconductor-lrbasedbi|

   :versions: 1.0.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dbi`  :conda:package:`r-rsqlite`  

   :required~by: |required_by_bioconductor-lrbasedbi|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-lrbasedbi

   and update with::

      conda update bioconductor-lrbasedbi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-lrbasedbi


.. |required_by_bioconductor-lrbasedbi| conda:required_by:: bioconductor-lrbasedbi
.. |downloads_bioconductor-lrbasedbi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lrbasedbi.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-lrbasedbi| image:: https://quay.io/repository/biocontainers/bioconductor-lrbasedbi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lrbasedbi







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lrbasedbi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lrbasedbi/README.html

