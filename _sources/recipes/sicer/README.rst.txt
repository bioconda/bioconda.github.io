.. title:: Package Recipe 'sicer'
.. highlight: bash


sicer
=====

.. conda:recipe:: sicer
   :replaces_section_title:

   A clustering approach for identification of enriched domains from histone modification ChIP\-Seq data

   :homepage: http://home.gwu.edu/~wpeng/Software.htm
   :license: MIT / MIT
   :recipe: /`sicer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sicer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sicer/meta.yaml>`_

   


.. conda:package:: sicer

   |downloads_sicer| |docker_sicer|

   :versions: 1.1

   :depends: :conda:package:`numpy` 1.9.* :conda:package:`python` 2.6.* :conda:package:`scipy` 0.16.* 

   :required~by: |required_by_sicer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sicer

   and update with::

      conda update sicer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/sicer


.. |required_by_sicer| conda:required_by:: sicer
.. |downloads_sicer| image:: https://img.shields.io/conda/dn/bioconda/sicer.svg?style=flat
   :alt:   (downloads)
.. |docker_sicer| image:: https://quay.io/repository/biocontainers/sicer/status
   :target: https://quay.io/repository/biocontainers/sicer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sicer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sicer/README.html

