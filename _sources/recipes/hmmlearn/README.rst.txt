:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmmlearn'
.. highlight: bash

hmmlearn
========

.. conda:recipe:: hmmlearn
   :replaces_section_title:

   Hidden Markov Models in Python\, with scikit\-learn like API

   :homepage: https://github.com/hmmlearn/hmmlearn
   :license: BSD
   :recipe: /`hmmlearn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmmlearn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmmlearn/meta.yaml>`_

   


.. conda:package:: hmmlearn

   |downloads_hmmlearn| |docker_hmmlearn|

   :versions: 20151031-2, 20151031-1, 20151031-0, 0.1.1-0
   
   :depends numpy: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends scikit-learn: 
   
   :depends scipy: 
   
   :depends setuptools: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hmmlearn

   and update with::

      conda update hmmlearn

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hmmlearn:<tag>

   (see `hmmlearn/tags`_ for valid values for ``<tag>``)


.. |downloads_hmmlearn| image:: https://img.shields.io/conda/dn/bioconda/hmmlearn.svg?style=flat
   :alt:   (downloads)
.. |docker_hmmlearn| image:: https://quay.io/repository/biocontainers/hmmlearn/status
   :target: https://quay.io/repository/biocontainers/hmmlearn
.. _`hmmlearn/tags`: https://quay.io/repository/biocontainers/hmmlearn?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmmlearn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmmlearn/README.html