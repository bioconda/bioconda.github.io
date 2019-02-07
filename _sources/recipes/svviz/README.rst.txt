.. title:: Package Recipe 'svviz'
.. highlight: bash


svviz
=====

.. conda:recipe:: svviz
   :replaces_section_title:

   A read visualizer for structural variants

   :homepage: https://github.com/svviz/svviz
   :license: MIT License
   :recipe: /`svviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svviz/meta.yaml>`_

   


.. conda:package:: svviz

   |downloads_svviz| |docker_svviz|

   :versions: 1.6.2, 1.5.1, 1.4.0

   :depends: :conda:package:`flask`  :conda:package:`joblib`  :conda:package:`numpy`  :conda:package:`pyfaidx`  :conda:package:`pysam` >=0.7.8 :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`requests`  

   :required~by: |required_by_svviz|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install svviz

   and update with::

      conda update svviz

   or use the docker container::

      docker pull quay.io/repository/biocontainers/svviz


.. |required_by_svviz| conda:required_by:: svviz
.. |downloads_svviz| image:: https://img.shields.io/conda/dn/bioconda/svviz.svg?style=flat
   :alt:   (downloads)
.. |docker_svviz| image:: https://quay.io/repository/biocontainers/svviz/status
   :target: https://quay.io/repository/biocontainers/svviz







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svviz/README.html

