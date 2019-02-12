.. title:: Package Recipe 'unifrac'
.. highlight: bash


unifrac
=======

.. conda:recipe:: unifrac
   :replaces_section_title:

   High performance UniFrac

   :homepage: https://github.com/biocore/unifrac
   :license: BSD / BSD-3-Clause
   :recipe: /`unifrac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unifrac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unifrac/meta.yaml>`_

   


.. conda:package:: unifrac

   |downloads_unifrac| |docker_unifrac|

   :versions: 0.9.3

   :depends: :conda:package:`biom-format`  :conda:package:`h5py`  :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`numpy` >=1.9.3,<2.0a0 :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`scikit-bio`  

   :required~by: |required_by_unifrac|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install unifrac

   and update with::

      conda update unifrac

   or use the docker container::

      docker pull quay.io/repository/biocontainers/unifrac


.. |required_by_unifrac| conda:required_by:: unifrac
.. |downloads_unifrac| image:: https://img.shields.io/conda/dn/bioconda/unifrac.svg?style=flat
   :alt:   (downloads)
.. |docker_unifrac| image:: https://quay.io/repository/biocontainers/unifrac/status
   :target: https://quay.io/repository/biocontainers/unifrac







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unifrac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unifrac/README.html

