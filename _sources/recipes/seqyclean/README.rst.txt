.. title:: Package Recipe 'seqyclean'
.. highlight: bash


seqyclean
=========

.. conda:recipe:: seqyclean
   :replaces_section_title:

   Main purpose of this software is to pre\-process NGS data in order to prepare for downstream analysis.

   :homepage: https://github.com/ibest/seqyclean
   :license: MIT / MIT
   :recipe: /`seqyclean <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqyclean>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqyclean/meta.yaml>`_

   


.. conda:package:: seqyclean

   |downloads_seqyclean| |docker_seqyclean|

   :versions: 1.10.09, 1.10.07

   :depends: :conda:package:`libgcc-ng` >=4.9 :conda:package:`libstdcxx-ng` >=4.9 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_seqyclean|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seqyclean

   and update with::

      conda update seqyclean

   or use the docker container::

      docker pull quay.io/repository/biocontainers/seqyclean


.. |required_by_seqyclean| conda:required_by:: seqyclean
.. |downloads_seqyclean| image:: https://img.shields.io/conda/dn/bioconda/seqyclean.svg?style=flat
   :alt:   (downloads)
.. |docker_seqyclean| image:: https://quay.io/repository/biocontainers/seqyclean/status
   :target: https://quay.io/repository/biocontainers/seqyclean







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqyclean/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqyclean/README.html

