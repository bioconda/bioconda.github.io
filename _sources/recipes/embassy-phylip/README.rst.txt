.. title:: Package Recipe 'embassy-phylip'
.. highlight: bash


embassy-phylip
==============

.. conda:recipe:: embassy-phylip
   :replaces_section_title:

   embassy\/emboss wrappers for phylip functions

   :homepage: http://emboss.open-bio.org/
   :license: GPL
   :recipe: /`embassy-phylip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/embassy-phylip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/embassy-phylip/meta.yaml>`_

   


.. conda:package:: embassy-phylip

   |downloads_embassy-phylip| |docker_embassy-phylip|

   :versions: 3.69.650

   :depends: :conda:package:`emboss`  :conda:package:`zlib`  

   :required~by: |required_by_embassy-phylip|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install embassy-phylip

   and update with::

      conda update embassy-phylip

   or use the docker container::

      docker pull quay.io/repository/biocontainers/embassy-phylip


.. |required_by_embassy-phylip| conda:required_by:: embassy-phylip
.. |downloads_embassy-phylip| image:: https://img.shields.io/conda/dn/bioconda/embassy-phylip.svg?style=flat
   :alt:   (downloads)
.. |docker_embassy-phylip| image:: https://quay.io/repository/biocontainers/embassy-phylip/status
   :target: https://quay.io/repository/biocontainers/embassy-phylip







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/embassy-phylip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/embassy-phylip/README.html

