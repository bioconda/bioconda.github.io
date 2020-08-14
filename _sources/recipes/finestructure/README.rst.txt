:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'finestructure'
.. highlight: bash

finestructure
=============

.. conda:recipe:: finestructure
   :replaces_section_title:
   :noindex:

   fineSTRUCTURE is a fast and powerful algorithm for identifying population structure using dense sequencing data.

   :homepage: https://people.maths.bris.ac.uk/~madjl/finestructure/finestructure.html
   :license: OTHER
   :recipe: /`finestructure <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/finestructure>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/finestructure/meta.yaml>`_
   :links: biotools: :biotools:`fineSTRUCTURE`, doi: :doi:`10.1371/journal.pgen.1002453`

   


.. conda:package:: finestructure

   |downloads_finestructure| |docker_finestructure|

   :versions:
      
      

      ``2.1.3-1``,  ``2.1.3-0``

      

   
   :depends blas: ``1.1 openblas``
   :depends gsl: ``>=2.6,<2.7.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends openblas: ``>=0.3.6,<0.3.7.0a0``
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install finestructure

   and update with::

      conda update finestructure

   or use the docker container::

      docker pull quay.io/biocontainers/finestructure:<tag>

   (see `finestructure/tags`_ for valid values for ``<tag>``)


.. |downloads_finestructure| image:: https://img.shields.io/conda/dn/bioconda/finestructure.svg?style=flat
   :target: https://anaconda.org/bioconda/finestructure
   :alt:   (downloads)
.. |docker_finestructure| image:: https://quay.io/repository/biocontainers/finestructure/status
   :target: https://quay.io/repository/biocontainers/finestructure
.. _`finestructure/tags`: https://quay.io/repository/biocontainers/finestructure?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/finestructure/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/finestructure/README.html