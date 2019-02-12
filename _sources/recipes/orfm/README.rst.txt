.. title:: Package Recipe 'orfm'
.. highlight: bash


orfm
====

.. conda:recipe:: orfm
   :replaces_section_title:

   OrfM is a simple and not slow ORF caller

   :homepage: https://github.com/wwood/OrfM
   :license: LGPL / LGPL-3.0
   :recipe: /`orfm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orfm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orfm/meta.yaml>`_

   


.. conda:package:: orfm

   |downloads_orfm| |docker_orfm|

   :versions: 0.7.1, 0.6.1

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_orfm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install orfm

   and update with::

      conda update orfm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/orfm


.. |required_by_orfm| conda:required_by:: orfm
.. |downloads_orfm| image:: https://img.shields.io/conda/dn/bioconda/orfm.svg?style=flat
   :alt:   (downloads)
.. |docker_orfm| image:: https://quay.io/repository/biocontainers/orfm/status
   :target: https://quay.io/repository/biocontainers/orfm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orfm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orfm/README.html

