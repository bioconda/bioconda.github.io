.. title:: Package Recipe 'bioconductor-experimenthub'
.. highlight: bash


bioconductor-experimenthub
==========================

.. conda:recipe:: bioconductor-experimenthub
   :replaces_section_title:

   This package provides a client for the Bioconductor ExperimentHub web resource. ExperimentHub provides a central location where curated data from experiments\, publications or training courses can be accessed. Each resource has associated metadata\, tags and date of modification. The client creates and manages a local cache of files retrieved enabling quick and reproducible access.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ExperimentHub.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-experimenthub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-experimenthub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-experimenthub/meta.yaml>`_

   


.. conda:package:: bioconductor-experimenthub

   |downloads_bioconductor-experimenthub| |docker_bioconductor-experimenthub|

   :versions: 1.8.0, 1.6.1, 1.4.0

   :depends: :conda:package:`bioconductor-annotationhub` >=2.14.0,<2.15.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-biocmanager`  :conda:package:`r-curl`  

   :required~by: |required_by_bioconductor-experimenthub|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-experimenthub

   and update with::

      conda update bioconductor-experimenthub

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-experimenthub


.. |required_by_bioconductor-experimenthub| conda:required_by:: bioconductor-experimenthub
.. |downloads_bioconductor-experimenthub| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-experimenthub.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-experimenthub| image:: https://quay.io/repository/biocontainers/bioconductor-experimenthub/status
   :target: https://quay.io/repository/biocontainers/bioconductor-experimenthub







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-experimenthub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-experimenthub/README.html

