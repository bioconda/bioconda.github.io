:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fseq'
.. highlight: bash

fseq
====

.. conda:recipe:: fseq
   :replaces_section_title:

   F\-Seq\: A feature density estimator for high\-throughput sequence tags

   :homepage: http://fureylab.web.unc.edu/software/fseq/
   :license: GPL >=3
   :recipe: /`fseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fseq/meta.yaml>`_

   


.. conda:package:: fseq

   |downloads_fseq| |docker_fseq|

   :versions: 1.84-0
   
   :depends openjdk: >=6
   :depends perl: 5.22.0*
   :depends python: 2.7*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fseq

   and update with::

      conda update fseq

   or use the docker container::

      docker pull quay.io/biocontainers/fseq:<tag>

   (see `fseq/tags`_ for valid values for ``<tag>``)


.. |downloads_fseq| image:: https://img.shields.io/conda/dn/bioconda/fseq.svg?style=flat
   :alt:   (downloads)
.. |docker_fseq| image:: https://quay.io/repository/biocontainers/fseq/status
   :target: https://quay.io/repository/biocontainers/fseq
.. _`fseq/tags`: https://quay.io/repository/biocontainers/fseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fseq/README.html