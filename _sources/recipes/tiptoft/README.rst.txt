.. title:: Package Recipe 'tiptoft'
.. highlight: bash


tiptoft
=======

.. conda:recipe:: tiptoft
   :replaces_section_title:

   Predict plasmids from uncorrected long read data.

   :homepage: https://github.com/andrewjpage/tiptoft
   :license: GPL3 / GPL3
   :recipe: /`tiptoft <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tiptoft>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tiptoft/meta.yaml>`_

   


.. conda:package:: tiptoft

   |downloads_tiptoft| |docker_tiptoft|

   :versions: 1.0.0, 0.1.4

   :depends: :conda:package:`biopython` >=1.68 :conda:package:`cython`  :conda:package:`pyfastaq` >=3.12.0 :conda:package:`python` >=3.5,<3.6.0a0 

   :required~by: |required_by_tiptoft|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tiptoft

   and update with::

      conda update tiptoft

   or use the docker container::

      docker pull quay.io/repository/biocontainers/tiptoft


.. |required_by_tiptoft| conda:required_by:: tiptoft
.. |downloads_tiptoft| image:: https://img.shields.io/conda/dn/bioconda/tiptoft.svg?style=flat
   :alt:   (downloads)
.. |docker_tiptoft| image:: https://quay.io/repository/biocontainers/tiptoft/status
   :target: https://quay.io/repository/biocontainers/tiptoft







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tiptoft/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tiptoft/README.html

