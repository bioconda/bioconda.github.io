:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'selectsequencesfrommsa'
.. highlight: bash

selectsequencesfrommsa
======================

.. conda:recipe:: selectsequencesfrommsa
   :replaces_section_title:
   :noindex:

   Tool to select representative sequences from a multiple sequence alignment

   :homepage: https://github.com/eggzilla/SelectSequencesFromMSA
   :license: GPL-3
   :recipe: /`selectsequencesfrommsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/selectsequencesfrommsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/selectsequencesfrommsa/meta.yaml>`_

   


.. conda:package:: selectsequencesfrommsa

   |downloads_selectsequencesfrommsa| |docker_selectsequencesfrommsa|

   :versions:
      
      

      ``1.0.5-0``,  ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends gmp: ``>=6.1.2,<7.0a0``
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install selectsequencesfrommsa

   and update with::

      conda update selectsequencesfrommsa

   or use the docker container::

      docker pull quay.io/biocontainers/selectsequencesfrommsa:<tag>

   (see `selectsequencesfrommsa/tags`_ for valid values for ``<tag>``)


.. |downloads_selectsequencesfrommsa| image:: https://img.shields.io/conda/dn/bioconda/selectsequencesfrommsa.svg?style=flat
   :target: https://anaconda.org/bioconda/selectsequencesfrommsa
   :alt:   (downloads)
.. |docker_selectsequencesfrommsa| image:: https://quay.io/repository/biocontainers/selectsequencesfrommsa/status
   :target: https://quay.io/repository/biocontainers/selectsequencesfrommsa
.. _`selectsequencesfrommsa/tags`: https://quay.io/repository/biocontainers/selectsequencesfrommsa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/selectsequencesfrommsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/selectsequencesfrommsa/README.html