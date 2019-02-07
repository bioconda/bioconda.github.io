.. title:: Package Recipe 'ksw'
.. highlight: bash


ksw
===

.. conda:recipe:: ksw
   :replaces_section_title:

   Ksw\: \(interactive\) smith\-waterman in C

   :homepage: https://github.com/nh13/ksw
   :license: MIT
   :recipe: /`ksw <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ksw>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ksw/meta.yaml>`_
   :links: biotools: :biotools:`ksw`

   


.. conda:package:: ksw

   |downloads_ksw| |docker_ksw|

   :versions: 0.2.1, 0.2.0, 0.1.0a, 0.0.2

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ksw|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ksw

   and update with::

      conda update ksw

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ksw


.. |required_by_ksw| conda:required_by:: ksw
.. |downloads_ksw| image:: https://img.shields.io/conda/dn/bioconda/ksw.svg?style=flat
   :alt:   (downloads)
.. |docker_ksw| image:: https://quay.io/repository/biocontainers/ksw/status
   :target: https://quay.io/repository/biocontainers/ksw







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ksw/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ksw/README.html

