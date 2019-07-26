:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svmlight'
.. highlight: bash

svmlight
========

.. conda:recipe:: svmlight
   :replaces_section_title:

   SVMLight Library by Thorsten Joachim

   :homepage: http://svmlight.joachims.org/
   :license: Modified MIT
   :recipe: /`svmlight <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svmlight>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svmlight/meta.yaml>`_

   


.. conda:package:: svmlight

   |downloads_svmlight| |docker_svmlight|

   :versions: 6.02-1
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install svmlight

   and update with::

      conda update svmlight

   or use the docker container::

      docker pull quay.io/biocontainers/svmlight:<tag>

   (see `svmlight/tags`_ for valid values for ``<tag>``)


.. |downloads_svmlight| image:: https://img.shields.io/conda/dn/bioconda/svmlight.svg?style=flat
   :target: https://anaconda.org/bioconda/svmlight
   :alt:   (downloads)
.. |docker_svmlight| image:: https://quay.io/repository/biocontainers/svmlight/status
   :target: https://quay.io/repository/biocontainers/svmlight
.. _`svmlight/tags`: https://quay.io/repository/biocontainers/svmlight?tab=tags






Notes
-----
License requires users to cite 
T. Joachims\, Making large\-Scale SVM Learning
Practical. Advances in Kernel Methods \- Support Vector
Learning\, B. Schölkopf and C. Burges and A. Smola \(ed.\)\,
MIT\-Press\, 1999. 


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svmlight/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svmlight/README.html