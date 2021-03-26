:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bicseq2-norm'
.. highlight: bash

bicseq2-norm
============

.. conda:recipe:: bicseq2-norm
   :replaces_section_title:
   :noindex:

   BICseq2\-norm is for normalizing potential biases in the sequencing data.

   :homepage: http://compbio.med.harvard.edu/BIC-seq/
   :license: Custom
   :recipe: /`bicseq2-norm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bicseq2-norm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bicseq2-norm/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkw491`

   


.. conda:package:: bicseq2-norm

   |downloads_bicseq2-norm| |docker_bicseq2-norm|

   :versions:
      
      

      ``0.2.4-2``,  ``0.2.4-1``,  ``0.2.4-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends perl: 
   :depends r-base: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bicseq2-norm

   and update with::

      conda update bicseq2-norm

   or use the docker container::

      docker pull quay.io/biocontainers/bicseq2-norm:<tag>

   (see `bicseq2-norm/tags`_ for valid values for ``<tag>``)


.. |downloads_bicseq2-norm| image:: https://img.shields.io/conda/dn/bioconda/bicseq2-norm.svg?style=flat
   :target: https://anaconda.org/bioconda/bicseq2-norm
   :alt:   (downloads)
.. |docker_bicseq2-norm| image:: https://quay.io/repository/biocontainers/bicseq2-norm/status
   :target: https://quay.io/repository/biocontainers/bicseq2-norm
.. _`bicseq2-norm/tags`: https://quay.io/repository/biocontainers/bicseq2-norm?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bicseq2-norm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bicseq2-norm/README.html