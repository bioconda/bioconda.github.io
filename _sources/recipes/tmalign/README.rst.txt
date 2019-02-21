:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tmalign'
.. highlight: bash

tmalign
=======

.. conda:recipe:: tmalign
   :replaces_section_title:

   TM\-align sequence\-order independent protein structure alignment

   :homepage: https://zhanglab.ccmb.med.umich.edu/TM-align/
   :license: BSD-like
   :recipe: /`tmalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tmalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tmalign/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gki524`, doi: :doi:`10.1002/prot.20264`

   


.. conda:package:: tmalign

   |downloads_tmalign| |docker_tmalign|

   :versions: 20170708-0
   
   :depends libgfortran: >=3.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tmalign

   and update with::

      conda update tmalign

   or use the docker container::

      docker pull quay.io/biocontainers/tmalign:<tag>

   (see `tmalign/tags`_ for valid values for ``<tag>``)


.. |downloads_tmalign| image:: https://img.shields.io/conda/dn/bioconda/tmalign.svg?style=flat
   :alt:   (downloads)
.. |docker_tmalign| image:: https://quay.io/repository/biocontainers/tmalign/status
   :target: https://quay.io/repository/biocontainers/tmalign
.. _`tmalign/tags`: https://quay.io/repository/biocontainers/tmalign?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tmalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tmalign/README.html