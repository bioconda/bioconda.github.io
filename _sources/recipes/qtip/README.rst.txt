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

   :versions: 1.6.2

   :depends: :conda:package:`libgcc`  :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`python` 2.7* :conda:package:`scikit-learn`  

   :required~by: |required_by_qtip|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install qtip

   and update with::

      conda update qtip

   or use the docker container::

      docker pull quay.io/repository/biocontainers/qtip


.. |required_by_qtip| conda:required_by:: qtip
.. |downloads_qtip| image:: https://img.shields.io/conda/dn/bioconda/qtip.svg?style=flat
   :alt:   (downloads)
.. |docker_qtip| image:: https://quay.io/repository/biocontainers/qtip/status
   :target: https://quay.io/repository/biocontainers/qtip






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

