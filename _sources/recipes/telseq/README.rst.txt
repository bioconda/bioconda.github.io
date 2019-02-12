.. title:: Package Recipe 'telseq'
.. highlight: bash


telseq
======

.. conda:recipe:: telseq
   :replaces_section_title:

   A software for calculating telomere length

   :homepage: https://github.com/zd1/telseq
   :license: GPL-3
   :recipe: /`telseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/telseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/telseq/meta.yaml>`_

   


.. conda:package:: telseq

   |downloads_telseq| |docker_telseq|

   :versions: 0.0.2, 0.0.1

   :depends: :conda:package:`bamtools` >=2.4.1,<2.4.2.0a0 :conda:package:`libgcc-ng` >=4.9 

   :required~by: |required_by_telseq|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install telseq

   and update with::

      conda update telseq

   or use the docker container::

      docker pull quay.io/repository/biocontainers/telseq


.. |required_by_telseq| conda:required_by:: telseq
.. |downloads_telseq| image:: https://img.shields.io/conda/dn/bioconda/telseq.svg?style=flat
   :alt:   (downloads)
.. |docker_telseq| image:: https://quay.io/repository/biocontainers/telseq/status
   :target: https://quay.io/repository/biocontainers/telseq







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/telseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/telseq/README.html

