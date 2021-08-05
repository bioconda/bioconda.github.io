:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vadr'
.. highlight: bash

vadr
====

.. conda:recipe:: vadr
   :replaces_section_title:
   :noindex:

   Viral Annotation DefineR \- classification and annotation of viral sequences based on RefSeq annotation

   :homepage: https://github.com/ncbi/vadr
   :license: Public Domain
   :recipe: /`vadr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vadr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vadr/meta.yaml>`_

   


.. conda:package:: vadr

   |downloads_vadr| |docker_vadr|

   :versions:
      
      

      ``1.3-0``,  ``1.2.1-0``

      

   
   :depends blast: ``2.11.0.*``
   :depends easel: ``0.48.*``
   :depends fasta3: ``36.3.8.*``
   :depends hmmer: ``3.3.2.*``
   :depends infernal: ``1.1.4.*``
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-bio-easel: ``0.15.*``
   :depends sequip: ``0.08.*``
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vadr

   and update with::

      conda update vadr

   or use the docker container::

      docker pull quay.io/biocontainers/vadr:<tag>

   (see `vadr/tags`_ for valid values for ``<tag>``)


.. |downloads_vadr| image:: https://img.shields.io/conda/dn/bioconda/vadr.svg?style=flat
   :target: https://anaconda.org/bioconda/vadr
   :alt:   (downloads)
.. |docker_vadr| image:: https://quay.io/repository/biocontainers/vadr/status
   :target: https://quay.io/repository/biocontainers/vadr
.. _`vadr/tags`: https://quay.io/repository/biocontainers/vadr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vadr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vadr/README.html