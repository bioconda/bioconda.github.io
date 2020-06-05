:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastml'
.. highlight: bash

fastml
======

.. conda:recipe:: fastml
   :replaces_section_title:
   :noindex:

   FastML is a bioinformatics tool for the reconstruction of ancestral sequences based on the phylogenetic relations between homologous sequences

   :homepage: http://fastml.tau.ac.il/
   :license: GNU GPLv2.0
   :recipe: /`fastml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastml/meta.yaml>`_

   


.. conda:package:: fastml

   |downloads_fastml| |docker_fastml|

   :versions:
      
      

      ``3.11-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends perl: 
   :depends perl-bioperl: 
   :depends raxml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastml

   and update with::

      conda update fastml

   or use the docker container::

      docker pull quay.io/biocontainers/fastml:<tag>

   (see `fastml/tags`_ for valid values for ``<tag>``)


.. |downloads_fastml| image:: https://img.shields.io/conda/dn/bioconda/fastml.svg?style=flat
   :target: https://anaconda.org/bioconda/fastml
   :alt:   (downloads)
.. |docker_fastml| image:: https://quay.io/repository/biocontainers/fastml/status
   :target: https://quay.io/repository/biocontainers/fastml
.. _`fastml/tags`: https://quay.io/repository/biocontainers/fastml?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastml/README.html