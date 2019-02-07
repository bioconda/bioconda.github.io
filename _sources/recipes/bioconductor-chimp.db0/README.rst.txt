.. title:: Package Recipe 'bioconductor-chimp.db0'
.. highlight: bash


bioconductor-chimp.db0
======================

.. conda:recipe:: bioconductor-chimp.db0
   :replaces_section_title:

   Base annotation databases for chimp\, intended ONLY to be used by AnnotationDbi to produce regular annotation packages.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/chimp.db0.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-chimp.db0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chimp.db0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chimp.db0/meta.yaml>`_

   


.. conda:package:: bioconductor-chimp.db0

   |downloads_bioconductor-chimp.db0| |docker_bioconductor-chimp.db0|

   :versions: 3.7.1

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-chimp.db0|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-chimp.db0

   and update with::

      conda update bioconductor-chimp.db0

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-chimp.db0


.. |required_by_bioconductor-chimp.db0| conda:required_by:: bioconductor-chimp.db0
.. |downloads_bioconductor-chimp.db0| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chimp.db0.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-chimp.db0| image:: https://quay.io/repository/biocontainers/bioconductor-chimp.db0/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chimp.db0







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chimp.db0/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chimp.db0/README.html

