.. title:: Package Recipe 'kiwidist'
.. highlight: bash


kiwidist
========

.. conda:recipe:: kiwidist
   :replaces_section_title:

   Combining gene\-set analysis with network properties

   :homepage: 
   :license: MIT
   :recipe: /`kiwidist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kiwidist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kiwidist/meta.yaml>`_

   


.. conda:package:: kiwidist

   |downloads_kiwidist| |docker_kiwidist|

   :versions: 0.3.6, 0.3.5, 0.3.4

   :depends: :conda:package:`matplotlib` >=1.3.1,<=1.4.3 :conda:package:`mygene` >=2.1.0 :conda:package:`networkx` >=1.8.1 :conda:package:`numpy` >=1.8.0 :conda:package:`pandas` >=0.13.1 :conda:package:`python` 2.7* :conda:package:`scipy` >=0.13.3,<=0.16.0 :conda:package:`six` >=1.5 

   :required~by: |required_by_kiwidist|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kiwidist

   and update with::

      conda update kiwidist

   or use the docker container::

      docker pull quay.io/repository/biocontainers/kiwidist


.. |required_by_kiwidist| conda:required_by:: kiwidist
.. |downloads_kiwidist| image:: https://img.shields.io/conda/dn/bioconda/kiwidist.svg?style=flat
   :alt:   (downloads)
.. |docker_kiwidist| image:: https://quay.io/repository/biocontainers/kiwidist/status
   :target: https://quay.io/repository/biocontainers/kiwidist







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kiwidist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kiwidist/README.html

