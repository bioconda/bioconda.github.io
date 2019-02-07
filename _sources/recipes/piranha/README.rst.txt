.. title:: Package Recipe 'piranha'
.. highlight: bash


piranha
=======

.. conda:recipe:: piranha
   :replaces_section_title:

   Piranha is a peak\-caller for CLIP\- and RIP\-Seq data.

   :homepage: http://smithlabresearch.org/software/piranha/
   :license: GNU General Public License v3 (GPLv3)
   :recipe: /`piranha <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piranha>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piranha/meta.yaml>`_

   


.. conda:package:: piranha

   |downloads_piranha| |docker_piranha|

   :versions: 1.2.1

   :depends: :conda:package:`gsl` 1.16* :conda:package:`libgcc`  

   :required~by: |required_by_piranha|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install piranha

   and update with::

      conda update piranha

   or use the docker container::

      docker pull quay.io/repository/biocontainers/piranha


.. |required_by_piranha| conda:required_by:: piranha
.. |downloads_piranha| image:: https://img.shields.io/conda/dn/bioconda/piranha.svg?style=flat
   :alt:   (downloads)
.. |docker_piranha| image:: https://quay.io/repository/biocontainers/piranha/status
   :target: https://quay.io/repository/biocontainers/piranha







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/piranha/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/piranha/README.html

