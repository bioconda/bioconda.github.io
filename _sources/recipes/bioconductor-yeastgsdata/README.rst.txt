.. title:: Package Recipe 'bioconductor-yeastgsdata'
.. highlight: bash


bioconductor-yeastgsdata
========================

.. conda:recipe:: bioconductor-yeastgsdata
   :replaces_section_title:

   A collection of so\-called gold \(and other\) standard data sets

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/yeastGSData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-yeastgsdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yeastgsdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yeastgsdata/meta.yaml>`_

   


.. conda:package:: bioconductor-yeastgsdata

   |downloads_bioconductor-yeastgsdata| |docker_bioconductor-yeastgsdata|

   :versions: 0.20.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-yeastgsdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-yeastgsdata

   and update with::

      conda update bioconductor-yeastgsdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-yeastgsdata


.. |required_by_bioconductor-yeastgsdata| conda:required_by:: bioconductor-yeastgsdata
.. |downloads_bioconductor-yeastgsdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-yeastgsdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-yeastgsdata| image:: https://quay.io/repository/biocontainers/bioconductor-yeastgsdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-yeastgsdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-yeastgsdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-yeastgsdata/README.html

