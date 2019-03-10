:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kopt'
.. highlight: bash

kopt
====

.. conda:recipe:: kopt
   :replaces_section_title:

   Keras\-hyperopt \(kopt\)\; Hyper\-parameter tuning for Keras using hyperopt.

   :homepage: https://github.com/avsecz/keras-hyperopt
   :license: MIT / MIT
   :recipe: /`kopt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kopt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kopt/meta.yaml>`_

   


.. conda:package:: kopt

   |downloads_kopt| |docker_kopt|

   :versions: 0.1.0-1, 0.1.0-0
   
   :depends future: 
   
   :depends hyperopt: 
   
   :depends keras: >=2.0.4
   
   :depends matplotlib: 
   
   :depends numpy: 
   
   :depends pandas: 
   
   :depends python: 
   
   :depends pyyaml: 
   
   :depends scikit-learn: >=0.18
   
   :depends scipy: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kopt

   and update with::

      conda update kopt

   or use the docker container::

      docker pull quay.io/biocontainers/kopt:<tag>

   (see `kopt/tags`_ for valid values for ``<tag>``)


.. |downloads_kopt| image:: https://img.shields.io/conda/dn/bioconda/kopt.svg?style=flat
   :alt:   (downloads)
.. |docker_kopt| image:: https://quay.io/repository/biocontainers/kopt/status
   :target: https://quay.io/repository/biocontainers/kopt
.. _`kopt/tags`: https://quay.io/repository/biocontainers/kopt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kopt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kopt/README.html