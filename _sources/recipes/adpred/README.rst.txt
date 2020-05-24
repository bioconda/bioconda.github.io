:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'adpred'
.. highlight: bash

adpred
======

.. conda:recipe:: adpred
   :replaces_section_title:

   python adpred module for prediction of Transcription activation domains from protein sequences

   :homepage: https://github.com/FredHutch/adpred
   :license: MIT Licence
   :recipe: /`adpred <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adpred>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adpred/meta.yaml>`_

   


.. conda:package:: adpred

   |downloads_adpred| |docker_adpred|

   :versions: 1.2.7-0, 1.2.5-0, 1.2.4-0, 1.1.3-0
   
   :depends keras: 2.2.4
   :depends numpy: 1.17.2
   :depends pandas: 
   :depends plotly: 4.1.1
   :depends python: >=3.6
   :depends requests: 2.23.0
   :depends scikit-learn: 0.21.3
   :depends tensorflow: 1.14.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install adpred

   and update with::

      conda update adpred

   or use the docker container::

      docker pull quay.io/biocontainers/adpred:<tag>

   (see `adpred/tags`_ for valid values for ``<tag>``)


.. |downloads_adpred| image:: https://img.shields.io/conda/dn/bioconda/adpred.svg?style=flat
   :target: https://anaconda.org/bioconda/adpred
   :alt:   (downloads)
.. |docker_adpred| image:: https://quay.io/repository/biocontainers/adpred/status
   :target: https://quay.io/repository/biocontainers/adpred
.. _`adpred/tags`: https://quay.io/repository/biocontainers/adpred?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/adpred/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/adpred/README.html