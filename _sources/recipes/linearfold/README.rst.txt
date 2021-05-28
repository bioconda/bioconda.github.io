:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'linearfold'
.. highlight: bash

linearfold
==========

.. conda:recipe:: linearfold
   :replaces_section_title:
   :noindex:

   Linear\-Time Prediction for RNA Secondary Structures

   :homepage: https://github.com/LinearFold/LinearFold
   :license: custom
   :recipe: /`linearfold <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/linearfold>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/linearfold/meta.yaml>`_

   


.. conda:package:: linearfold

   |downloads_linearfold| |docker_linearfold|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends python: ``2.7.*``
   :depends python-gflags: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install linearfold

   and update with::

      conda update linearfold

   or use the docker container::

      docker pull quay.io/biocontainers/linearfold:<tag>

   (see `linearfold/tags`_ for valid values for ``<tag>``)


.. |downloads_linearfold| image:: https://img.shields.io/conda/dn/bioconda/linearfold.svg?style=flat
   :target: https://anaconda.org/bioconda/linearfold
   :alt:   (downloads)
.. |docker_linearfold| image:: https://quay.io/repository/biocontainers/linearfold/status
   :target: https://quay.io/repository/biocontainers/linearfold
.. _`linearfold/tags`: https://quay.io/repository/biocontainers/linearfold?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/linearfold/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/linearfold/README.html