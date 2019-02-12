:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cocoscore'
.. highlight: bash

cocoscore
=========

.. conda:recipe:: cocoscore
   :replaces_section_title:

   CoCoScore\: context\-aware co\-occurrence scores for biomedical text mining applications

   :homepage: https://github.com/JungeAlexander/cocoscore
   :license: MIT / MIT
   :recipe: /`cocoscore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cocoscore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cocoscore/meta.yaml>`_

   


.. conda:package:: cocoscore

   |downloads_cocoscore| |docker_cocoscore|

   :versions: 0.2.0-0
   
   :depends fasttext: 0.1.0
   
   :depends gensim: >=3.4.0
   
   :depends pandas: >=0.23.0
   
   :depends python: >=3.5,<3.6.0a0
   
   :depends scikit-learn: >=0.19.1
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cocoscore

   and update with::

      conda update cocoscore

   or use the docker container::

      docker pull quay.io/repository/biocontainers/cocoscore:<tag>

   (see `cocoscore/tags`_ for valid values for ``<tag>``)


.. |downloads_cocoscore| image:: https://img.shields.io/conda/dn/bioconda/cocoscore.svg?style=flat
   :alt:   (downloads)
.. |docker_cocoscore| image:: https://quay.io/repository/biocontainers/cocoscore/status
   :target: https://quay.io/repository/biocontainers/cocoscore
.. _`cocoscore/tags`: https://quay.io/repository/biocontainers/cocoscore?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cocoscore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cocoscore/README.html