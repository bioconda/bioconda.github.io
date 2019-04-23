:orphan:  .. only available via index, not via toctree

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

   :versions: 0.9.3-0
   
   :depends biom-format: 
   :depends h5py: 
   :depends libcxx: >=4.0.1
   :depends numpy: >=1.9.3,<2.0a0
   :depends python: >=3.5,<3.6.0a0
   :depends scikit-bio: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install unifrac

   and update with::

      conda update unifrac

   or use the docker container::

      docker pull quay.io/biocontainers/unifrac:<tag>

   (see `unifrac/tags`_ for valid values for ``<tag>``)


.. |downloads_unifrac| image:: https://img.shields.io/conda/dn/bioconda/unifrac.svg?style=flat
   :alt:   (downloads)
.. |docker_unifrac| image:: https://quay.io/repository/biocontainers/unifrac/status
   :target: https://quay.io/repository/biocontainers/unifrac
.. _`unifrac/tags`: https://quay.io/repository/biocontainers/unifrac?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unifrac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unifrac/README.html