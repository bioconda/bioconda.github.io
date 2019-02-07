.. title:: Package Recipe 'xatlas'
.. highlight: bash


xatlas
======

.. conda:recipe:: xatlas
   :replaces_section_title:

   xAtlas is a fast and retrainable small variant caller that has been developed at the Baylor College of Medicine Human Genome Sequencing Center.

   :homepage: https://github.com/jfarek/xatlas
   :license: BSD-3-Clause
   :recipe: /`xatlas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xatlas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xatlas/meta.yaml>`_
   :links: doi: :doi:`10.1101/295071`

   


.. conda:package:: xatlas

   |downloads_xatlas| |docker_xatlas|

   :versions: 0.2.1, 0.1

   :depends: :conda:package:`htslib` >=1.9,<1.10.0a0 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`pthread-stubs`  

   :required~by: |required_by_xatlas|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install xatlas

   and update with::

      conda update xatlas

   or use the docker container::

      docker pull quay.io/repository/biocontainers/xatlas


.. |required_by_xatlas| conda:required_by:: xatlas
.. |downloads_xatlas| image:: https://img.shields.io/conda/dn/bioconda/xatlas.svg?style=flat
   :alt:   (downloads)
.. |docker_xatlas| image:: https://quay.io/repository/biocontainers/xatlas/status
   :target: https://quay.io/repository/biocontainers/xatlas







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xatlas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xatlas/README.html

