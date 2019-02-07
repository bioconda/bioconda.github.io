.. title:: Package Recipe 'preseq'
.. highlight: bash


preseq
======

.. conda:recipe:: preseq
   :replaces_section_title:

   Software for predicting library complexity and genome coverage in high\-throughput sequencing

   :homepage: https://github.com/smithlabcode/preseq
   :license: GNU GENERAL PUBLIC LICENSE
   :recipe: /`preseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/preseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/preseq/meta.yaml>`_

   


.. conda:package:: preseq

   |downloads_preseq| |docker_preseq|

   :versions: 2.0.3, 2.0.2

   :depends: :conda:package:`gsl` 1.16* :conda:package:`libgcc`  :conda:package:`zlib` 1.2.11* 

   :required~by: |required_by_preseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install preseq

   and update with::

      conda update preseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/preseq


.. |required_by_preseq| conda:required_by:: preseq
.. |downloads_preseq| image:: https://img.shields.io/conda/dn/bioconda/preseq.svg?style=flat
   :alt:   (downloads)
.. |docker_preseq| image:: https://quay.io/repository/biocontainers/preseq/status
   :target: https://quay.io/repository/biocontainers/preseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/preseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/preseq/README.html

