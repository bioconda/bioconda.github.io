.. title:: Package Recipe 'scrappie'
.. highlight: bash


scrappie
========

.. conda:recipe:: scrappie
   :replaces_section_title:

   Scrappie is a technology demonstrator for the Oxford Nanopore Research Algorithms group

   :homepage: https://github.com/nanoporetech/scrappie
   :license: OTHER / Mozilla Public License 2.0 (MPL 2.0)
   :recipe: /`scrappie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scrappie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scrappie/meta.yaml>`_

   


.. conda:package:: scrappie

   |downloads_scrappie| |docker_scrappie|

   :versions: 1.3.2

   :depends: :conda:package:`blas`  :conda:package:`cffi` >=1.0.0 :conda:package:`cunit`  :conda:package:`hdf5` 1.8.17* :conda:package:`libgcc`  :conda:package:`numpy` 1.12* :conda:package:`python` 3.5* :conda:package:`zlib` 1.2.11* 

   :required~by: |required_by_scrappie|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scrappie

   and update with::

      conda update scrappie

   or use the docker container::

      docker pull quay.io/repository/biocontainers/scrappie


.. |required_by_scrappie| conda:required_by:: scrappie
.. |downloads_scrappie| image:: https://img.shields.io/conda/dn/bioconda/scrappie.svg?style=flat
   :alt:   (downloads)
.. |docker_scrappie| image:: https://quay.io/repository/biocontainers/scrappie/status
   :target: https://quay.io/repository/biocontainers/scrappie







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scrappie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scrappie/README.html

