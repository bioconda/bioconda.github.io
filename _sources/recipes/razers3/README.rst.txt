.. title:: Package Recipe 'razers3'
.. highlight: bash


razers3
=======

.. conda:recipe:: razers3
   :replaces_section_title:

   RazerS 3 \- Faster\, fully sensitive read mapping

   :homepage: http://www.seqan.de/projects/razers/
   :license: GPLv3
   :recipe: /`razers3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/razers3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/razers3/meta.yaml>`_

   


.. conda:package:: razers3

   |downloads_razers3| |docker_razers3|

   :versions: 3.5.3, 3.5.0

   :depends: :conda:package:`bzip2` 1.0* :conda:package:`libgcc`  :conda:package:`zlib` 1.2.8* 

   :required~by: |required_by_razers3|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install razers3

   and update with::

      conda update razers3

   or use the docker container::

      docker pull quay.io/repository/biocontainers/razers3


.. |required_by_razers3| conda:required_by:: razers3
.. |downloads_razers3| image:: https://img.shields.io/conda/dn/bioconda/razers3.svg?style=flat
   :alt:   (downloads)
.. |docker_razers3| image:: https://quay.io/repository/biocontainers/razers3/status
   :target: https://quay.io/repository/biocontainers/razers3







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/razers3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/razers3/README.html

