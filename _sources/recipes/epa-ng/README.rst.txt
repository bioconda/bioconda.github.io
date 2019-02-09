.. title:: Package Recipe 'epa-ng'
.. highlight: bash


epa-ng
======

.. conda:recipe:: epa-ng
   :replaces_section_title:

   Massively parallel phylogenetic placement of genetic sequences

   :homepage: https://github.com/Pbdas/epa-ng
   :license: GNU Affero General Public License v3.0
   :recipe: /`epa-ng <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epa-ng>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/epa-ng/meta.yaml>`_
   :links: doi: :doi:`10.1093/sysbio/syy054`

   


.. conda:package:: epa-ng

   |downloads_epa-ng| |docker_epa-ng|

   :versions: 0.3.4, 0.3.3

   :depends: :conda:package:`libcxx` >=4.0.1 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_epa-ng|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install epa-ng

   and update with::

      conda update epa-ng

   or use the docker container::

      docker pull quay.io/repository/biocontainers/epa-ng


.. |required_by_epa-ng| conda:required_by:: epa-ng
.. |downloads_epa-ng| image:: https://img.shields.io/conda/dn/bioconda/epa-ng.svg?style=flat
   :alt:   (downloads)
.. |docker_epa-ng| image:: https://quay.io/repository/biocontainers/epa-ng/status
   :target: https://quay.io/repository/biocontainers/epa-ng







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/epa-ng/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/epa-ng/README.html

