.. title:: Package Recipe 'ghmm'
.. highlight: bash


ghmm
====

.. conda:recipe:: ghmm
   :replaces_section_title:

   General Hidden Markov Model library \(GHMM\) is a freely available C library implementing efficient data structures and algorithms for basic and extended HMMs with discrete and continous emissions

   :homepage: http://ghmm.org/
   :license: GPL2
   :recipe: /`ghmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ghmm/meta.yaml>`_

   


.. conda:package:: ghmm

   |downloads_ghmm| |docker_ghmm|

   :versions: 0.9

   :depends: :conda:package:`libxml2`  :conda:package:`python` 2.7* :conda:package:`swig`  

   :required~by: |required_by_ghmm|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ghmm

   and update with::

      conda update ghmm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ghmm


.. |required_by_ghmm| conda:required_by:: ghmm
.. |downloads_ghmm| image:: https://img.shields.io/conda/dn/bioconda/ghmm.svg?style=flat
   :alt:   (downloads)
.. |docker_ghmm| image:: https://quay.io/repository/biocontainers/ghmm/status
   :target: https://quay.io/repository/biocontainers/ghmm







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ghmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ghmm/README.html

