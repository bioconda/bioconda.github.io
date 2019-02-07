.. title:: Package Recipe 'spine'
.. highlight: bash


spine
=====

.. conda:recipe:: spine
   :replaces_section_title:

   Identification of conserved nucleotide core genome of bacteria and other small genome organisms

   :homepage: https://github.com/egonozer/Spine
   :license: GPL-3.0
   :recipe: /`spine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spine/meta.yaml>`_

   


.. conda:package:: spine

   |downloads_spine| |docker_spine|

   :versions: 0.2.2

   :depends: :conda:package:`mummer` >=3.22 :conda:package:`perl` 5.22.0* :conda:package:`perl-file-which`  

   :required~by: |required_by_spine|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install spine

   and update with::

      conda update spine

   or use the docker container::

      docker pull quay.io/repository/biocontainers/spine


.. |required_by_spine| conda:required_by:: spine
.. |downloads_spine| image:: https://img.shields.io/conda/dn/bioconda/spine.svg?style=flat
   :alt:   (downloads)
.. |docker_spine| image:: https://quay.io/repository/biocontainers/spine/status
   :target: https://quay.io/repository/biocontainers/spine







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spine/README.html

