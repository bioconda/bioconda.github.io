:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'group_humann2_uniref_abundances_to_go'
.. highlight: bash

group_humann2_uniref_abundances_to_go
=====================================

.. conda:recipe:: group_humann2_uniref_abundances_to_go
   :replaces_section_title:

   Group abundances of UniRef50 gene families obtained with HUMAnN2 to Gene Ontology \(GO\) slim terms with relative abundances

   :homepage: https://github.com/ASaiM/group_humann2_uniref_abundances_to_GO
   :license: Apache 2
   :recipe: /`group_humann2_uniref_abundances_to_go <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/group_humann2_uniref_abundances_to_go>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/group_humann2_uniref_abundances_to_go/meta.yaml>`_

   


.. conda:package:: group_humann2_uniref_abundances_to_go

   |downloads_group_humann2_uniref_abundances_to_go| |docker_group_humann2_uniref_abundances_to_go|

   :versions: 1.2.0-2, 1.2.0-1, 1.2.0-0
   
   :depends goatools: 
   :depends humann2: 
   :depends python: 2.7*
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install group_humann2_uniref_abundances_to_go

   and update with::

      conda update group_humann2_uniref_abundances_to_go

   or use the docker container::

      docker pull quay.io/biocontainers/group_humann2_uniref_abundances_to_go:<tag>

   (see `group_humann2_uniref_abundances_to_go/tags`_ for valid values for ``<tag>``)


.. |downloads_group_humann2_uniref_abundances_to_go| image:: https://img.shields.io/conda/dn/bioconda/group_humann2_uniref_abundances_to_go.svg?style=flat
   :alt:   (downloads)
.. |docker_group_humann2_uniref_abundances_to_go| image:: https://quay.io/repository/biocontainers/group_humann2_uniref_abundances_to_go/status
   :target: https://quay.io/repository/biocontainers/group_humann2_uniref_abundances_to_go
.. _`group_humann2_uniref_abundances_to_go/tags`: https://quay.io/repository/biocontainers/group_humann2_uniref_abundances_to_go?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/group_humann2_uniref_abundances_to_go/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/group_humann2_uniref_abundances_to_go/README.html