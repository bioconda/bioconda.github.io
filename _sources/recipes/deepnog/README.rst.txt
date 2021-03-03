:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepnog'
.. highlight: bash

deepnog
=======

.. conda:recipe:: deepnog
   :replaces_section_title:
   :noindex:

   Deep learning tool for protein orthologous group assignment

   :homepage: https://github.com/univieCUBE/deepnog
   :documentation: https://deepnog.readthedocs.io
   
   :license: BSD / BSD 3-Clause
   :recipe: /`deepnog <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepnog>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepnog/meta.yaml>`_

   


.. conda:package:: deepnog

   |downloads_deepnog| |docker_deepnog|

   :versions:
      
      

      ``1.2.3-1``,  ``1.2.3-0``,  ``1.2.1-0``

      

   
   :depends biopython: 
   :depends numpy: 
   :depends pandas: 
   :depends python: 
   :depends pytorch: 
   :depends pyyaml: 
   :depends scikit-learn: 
   :depends tensorboard: 
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deepnog

   and update with::

      conda update deepnog

   or use the docker container::

      docker pull quay.io/biocontainers/deepnog:<tag>

   (see `deepnog/tags`_ for valid values for ``<tag>``)


.. |downloads_deepnog| image:: https://img.shields.io/conda/dn/bioconda/deepnog.svg?style=flat
   :target: https://anaconda.org/bioconda/deepnog
   :alt:   (downloads)
.. |docker_deepnog| image:: https://quay.io/repository/biocontainers/deepnog/status
   :target: https://quay.io/repository/biocontainers/deepnog
.. _`deepnog/tags`: https://quay.io/repository/biocontainers/deepnog?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepnog/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepnog/README.html