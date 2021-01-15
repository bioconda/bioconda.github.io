:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'verifybamid2'
.. highlight: bash

verifybamid2
============

.. conda:recipe:: verifybamid2
   :replaces_section_title:
   :noindex:

   A robust tool for DNA contamination estimation from sequence reads using ancestry\-agnostic method.

   :homepage: https://github.com/Griffan/VerifyBamID
   :license: MIT
   :recipe: /`verifybamid2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verifybamid2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/verifybamid2/meta.yaml>`_

   


.. conda:package:: verifybamid2

   |downloads_verifybamid2| |docker_verifybamid2|

   :versions:
      
      

      ``2.0.1-0``,  ``1.0.6-3``,  ``1.0.6-2``,  ``1.0.6-1``,  ``1.0.6-0``,  ``1.0.5-3``,  ``1.0.5-2``,  ``1.0.5-0``,  ``1.0.4-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends htslib: ``>=1.10.2,<1.11.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends openssl: ``>=1.1.1i,<1.1.2a``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install verifybamid2

   and update with::

      conda update verifybamid2

   or use the docker container::

      docker pull quay.io/biocontainers/verifybamid2:<tag>

   (see `verifybamid2/tags`_ for valid values for ``<tag>``)


.. |downloads_verifybamid2| image:: https://img.shields.io/conda/dn/bioconda/verifybamid2.svg?style=flat
   :target: https://anaconda.org/bioconda/verifybamid2
   :alt:   (downloads)
.. |docker_verifybamid2| image:: https://quay.io/repository/biocontainers/verifybamid2/status
   :target: https://quay.io/repository/biocontainers/verifybamid2
.. _`verifybamid2/tags`: https://quay.io/repository/biocontainers/verifybamid2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/verifybamid2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/verifybamid2/README.html