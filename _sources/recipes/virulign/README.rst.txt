:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'virulign'
.. highlight: bash

virulign
========

.. conda:recipe:: virulign
   :replaces_section_title:
   :noindex:

   VIRULIGN is a tool for codon\-correct pairwise alignments\, with an augmented functionality to annotate the alignment according the positions of the proteins.

   :homepage: https://github.com/rega-cev/virulign
   :license: GPL-2.0-only
   :recipe: /`virulign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virulign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/virulign/meta.yaml>`_

   


.. conda:package:: virulign

   |downloads_virulign| |docker_virulign|

   :versions:
      
      

      ``1.1.1-1``,  ``1.1.1-0``,  ``1.1-0``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends openmp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install virulign

   and update with::

      conda update virulign

   or use the docker container::

      docker pull quay.io/biocontainers/virulign:<tag>

   (see `virulign/tags`_ for valid values for ``<tag>``)


.. |downloads_virulign| image:: https://img.shields.io/conda/dn/bioconda/virulign.svg?style=flat
   :target: https://anaconda.org/bioconda/virulign
   :alt:   (downloads)
.. |docker_virulign| image:: https://quay.io/repository/biocontainers/virulign/status
   :target: https://quay.io/repository/biocontainers/virulign
.. _`virulign/tags`: https://quay.io/repository/biocontainers/virulign?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/virulign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/virulign/README.html