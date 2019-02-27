:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qtip'
.. highlight: bash

qtip
====

.. conda:recipe:: qtip
   :replaces_section_title:

   A tandem simulation approach for accurately predicting read alignment
   mapping qualities.


   :homepage: https://github.com/BenLangmead/qtip
   :license: MIT
   :recipe: /`qtip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qtip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qtip/meta.yaml>`_

   


.. conda:package:: qtip

   |downloads_qtip| |docker_qtip|

   :versions: 1.6.2-1, 1.6.2-0
   
   :depends numpy: 
   
   :depends pandas: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends scikit-learn: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install qtip

   and update with::

      conda update qtip

   or use the docker container::

      docker pull quay.io/biocontainers/qtip:<tag>

   (see `qtip/tags`_ for valid values for ``<tag>``)


.. |downloads_qtip| image:: https://img.shields.io/conda/dn/bioconda/qtip.svg?style=flat
   :alt:   (downloads)
.. |docker_qtip| image:: https://quay.io/repository/biocontainers/qtip/status
   :target: https://quay.io/repository/biocontainers/qtip
.. _`qtip/tags`: https://quay.io/repository/biocontainers/qtip?tab=tags






Notes
-----
For running qtip\, you will need to install any of the supported read mappers\,
\(e.g.\, bowtie2\)\, in the minimum required version. See homepage for details.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qtip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qtip/README.html