.. title:: Package Recipe 'takeabreak'
.. highlight: bash


takeabreak
==========

.. conda:recipe:: takeabreak
   :replaces_section_title:

   tool that can detect inversion breakpoints directly from raw NGS reads\, without the need of any reference genome and without de novo assembling the genomes

   :homepage: https://colibread.inria.fr/software/takeabreak/
   :license: GNU Affero General Public License
   :recipe: /`takeabreak <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/takeabreak>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/takeabreak/meta.yaml>`_
   :links: biotools: :biotools:`takeabreak`, doi: :doi:`10.1007/978-3-319-07953-0_10`

   


.. conda:package:: takeabreak

   |downloads_takeabreak| |docker_takeabreak|

   :versions: 1.1.2

   :depends: :conda:package:`libgcc`  :conda:package:`zlib` 1.2.8* 

   :required~by: |required_by_takeabreak|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install takeabreak

   and update with::

      conda update takeabreak

   or use the docker container::

      docker pull quay.io/repository/biocontainers/takeabreak


.. |required_by_takeabreak| conda:required_by:: takeabreak
.. |downloads_takeabreak| image:: https://img.shields.io/conda/dn/bioconda/takeabreak.svg?style=flat
   :alt:   (downloads)
.. |docker_takeabreak| image:: https://quay.io/repository/biocontainers/takeabreak/status
   :target: https://quay.io/repository/biocontainers/takeabreak







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/takeabreak/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/takeabreak/README.html

