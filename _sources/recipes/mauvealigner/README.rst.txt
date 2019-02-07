.. title:: Package Recipe 'mauvealigner'
.. highlight: bash


mauvealigner
============

.. conda:recipe:: mauvealigner
   :replaces_section_title:

   The mauveAligner and progressiveMauve command\-line tools for generating multiple genome alignments in the presence of large\-scale evolutionary events

   :homepage: http://darlinglab.org/mauve/
   :developer docs: https://sourceforge.net/projects/mauve/
   :license: GPL / GPL-2.0
   :recipe: /`mauvealigner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mauvealigner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mauvealigner/meta.yaml>`_

   


.. conda:package:: mauvealigner

   |downloads_mauvealigner| |docker_mauvealigner|

   :versions: 1.2.0

   :depends: :conda:package:`boost-cpp` >=1.65.1,<1.65.2.0a0 :conda:package:`libgcc-ng` >=4.9 :conda:package:`libgenome`  :conda:package:`libmems`  :conda:package:`libmuscle`  :conda:package:`libstdcxx-ng` >=4.9 

   :required~by: |required_by_mauvealigner|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mauvealigner

   and update with::

      conda update mauvealigner

   or use the docker container::

      docker pull quay.io/repository/biocontainers/mauvealigner


.. |required_by_mauvealigner| conda:required_by:: mauvealigner
.. |downloads_mauvealigner| image:: https://img.shields.io/conda/dn/bioconda/mauvealigner.svg?style=flat
   :alt:   (downloads)
.. |docker_mauvealigner| image:: https://quay.io/repository/biocontainers/mauvealigner/status
   :target: https://quay.io/repository/biocontainers/mauvealigner







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mauvealigner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mauvealigner/README.html

