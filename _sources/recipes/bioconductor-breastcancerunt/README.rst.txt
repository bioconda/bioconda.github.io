.. title:: Package Recipe 'bioconductor-breastcancerunt'
.. highlight: bash


bioconductor-breastcancerunt
============================

.. conda:recipe:: bioconductor-breastcancerunt
   :replaces_section_title:

   Gene expression data from a breast cancer study published by Sotiriou et al. in 2007\, provided as an eSet.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/breastCancerUNT.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-breastcancerunt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breastcancerunt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-breastcancerunt/meta.yaml>`_

   


.. conda:package:: bioconductor-breastcancerunt

   |downloads_bioconductor-breastcancerunt| |docker_bioconductor-breastcancerunt|

   :versions: 1.20.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-breastcancerunt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-breastcancerunt

   and update with::

      conda update bioconductor-breastcancerunt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-breastcancerunt


.. |required_by_bioconductor-breastcancerunt| conda:required_by:: bioconductor-breastcancerunt
.. |downloads_bioconductor-breastcancerunt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-breastcancerunt.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-breastcancerunt| image:: https://quay.io/repository/biocontainers/bioconductor-breastcancerunt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-breastcancerunt







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-breastcancerunt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-breastcancerunt/README.html

