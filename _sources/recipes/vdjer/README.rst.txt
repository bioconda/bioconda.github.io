.. title:: Package Recipe 'vdjer'
.. highlight: bash


vdjer
=====

.. conda:recipe:: vdjer
   :replaces_section_title:

   B Cell Receptor Repertoire Reconstruction from short read mRNA\-Seq data

   :homepage: https://github.com/mozack/vdjer
   :license: https://github.com/mozack/vdjer/blob/master/LICENSE.txt
   :recipe: /`vdjer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vdjer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vdjer/meta.yaml>`_

   


.. conda:package:: vdjer

   |downloads_vdjer| |docker_vdjer|

   :versions: 0.12

   :depends: :conda:package:`libgcc`  :conda:package:`zlib`  

   :required~by: |required_by_vdjer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vdjer

   and update with::

      conda update vdjer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/vdjer


.. |required_by_vdjer| conda:required_by:: vdjer
.. |downloads_vdjer| image:: https://img.shields.io/conda/dn/bioconda/vdjer.svg?style=flat
   :alt:   (downloads)
.. |docker_vdjer| image:: https://quay.io/repository/biocontainers/vdjer/status
   :target: https://quay.io/repository/biocontainers/vdjer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vdjer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vdjer/README.html

