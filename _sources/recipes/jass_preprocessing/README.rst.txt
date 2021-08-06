:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jass_preprocessing'
.. highlight: bash

jass_preprocessing
==================

.. conda:recipe:: jass_preprocessing
   :replaces_section_title:
   :noindex:

   Harmonizing raw GWAS summary statistic for further analysis with jass

   :homepage: http://statistical-genetics.pages.pasteur.fr/jass_preprocessing/
   :license: MIT / MIT
   :recipe: /`jass_preprocessing <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jass_preprocessing>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jass_preprocessing/meta.yaml>`_

   


.. conda:package:: jass_preprocessing

   |downloads_jass_preprocessing| |docker_jass_preprocessing|

   :versions:
      
      

      ``2.1-0``,  ``2.0.1-0``,  ``2.0-0``,  ``1.0-0``

      

   
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends scipy: 
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install jass_preprocessing

   and update with::

      conda update jass_preprocessing

   or use the docker container::

      docker pull quay.io/biocontainers/jass_preprocessing:<tag>

   (see `jass_preprocessing/tags`_ for valid values for ``<tag>``)


.. |downloads_jass_preprocessing| image:: https://img.shields.io/conda/dn/bioconda/jass_preprocessing.svg?style=flat
   :target: https://anaconda.org/bioconda/jass_preprocessing
   :alt:   (downloads)
.. |docker_jass_preprocessing| image:: https://quay.io/repository/biocontainers/jass_preprocessing/status
   :target: https://quay.io/repository/biocontainers/jass_preprocessing
.. _`jass_preprocessing/tags`: https://quay.io/repository/biocontainers/jass_preprocessing?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jass_preprocessing/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jass_preprocessing/README.html