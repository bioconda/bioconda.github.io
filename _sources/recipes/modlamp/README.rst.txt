:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'modlamp'
.. highlight: bash

modlamp
=======

.. conda:recipe:: modlamp
   :replaces_section_title:
   :noindex:

   python package for in silico peptide design and QSAR studies

   :homepage: http://modlamp.org
   :documentation: https://modlamp.org/index.html
   
   :license: BSD / BSD
   :recipe: /`modlamp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/modlamp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/modlamp/meta.yaml>`_

   


.. conda:package:: modlamp

   |downloads_modlamp| |docker_modlamp|

   :versions:
      
      

      ``4.1.2-0``

      

   
   :depends lxml: ``>=3.6.4``
   :depends matplotlib-base: ``>=1.5.1``
   :depends nose: ``>=1.3.7``
   :depends numpy: ``>=1.10.4``
   :depends pandas: ``>=0.18.1``
   :depends python: 
   :depends requests: ``>=2.11.1``
   :depends scikit-learn: ``>=0.18.0``
   :depends scipy: ``>=0.17.0``
   :depends setuptools: ``>=20.2.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install modlamp

   and update with::

      conda update modlamp

   or use the docker container::

      docker pull quay.io/biocontainers/modlamp:<tag>

   (see `modlamp/tags`_ for valid values for ``<tag>``)


.. |downloads_modlamp| image:: https://img.shields.io/conda/dn/bioconda/modlamp.svg?style=flat
   :target: https://anaconda.org/bioconda/modlamp
   :alt:   (downloads)
.. |docker_modlamp| image:: https://quay.io/repository/biocontainers/modlamp/status
   :target: https://quay.io/repository/biocontainers/modlamp
.. _`modlamp/tags`: https://quay.io/repository/biocontainers/modlamp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/modlamp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/modlamp/README.html