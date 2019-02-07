.. title:: Package Recipe 'kipoiseq'
.. highlight: bash


kipoiseq
========

.. conda:recipe:: kipoiseq
   :replaces_section_title:

   kipoiseq\: sequence\-based data\-laoders for Kipoi

   :homepage: https://github.com/kipoi/kipoiseq
   :documentation: https://kipoi.org/kipoiseq/
   
   :license: MIT / MIT license
   :recipe: /`kipoiseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kipoiseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kipoiseq/meta.yaml>`_

   kipoiseq\: sequence\-based data\-laoders for Kipoi


.. conda:package:: kipoiseq

   |downloads_kipoiseq| |docker_kipoiseq|

   :versions: 0.2.2

   :depends: :conda:package:`genomelake`  :conda:package:`gffutils`  :conda:package:`kipoi` >=0.5.5 :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`pybedtools`  :conda:package:`pyfaidx`  :conda:package:`python`  :conda:package:`tqdm`  

   :required~by: |required_by_kipoiseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kipoiseq

   and update with::

      conda update kipoiseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/kipoiseq


.. |required_by_kipoiseq| conda:required_by:: kipoiseq
.. |downloads_kipoiseq| image:: https://img.shields.io/conda/dn/bioconda/kipoiseq.svg?style=flat
   :alt:   (downloads)
.. |docker_kipoiseq| image:: https://quay.io/repository/biocontainers/kipoiseq/status
   :target: https://quay.io/repository/biocontainers/kipoiseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kipoiseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kipoiseq/README.html

