:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orthomcl'
.. highlight: bash

orthomcl
========

.. conda:recipe:: orthomcl
   :replaces_section_title:

   Ortholog groups of protein sequences

   :homepage: http://orthomcl.org/orthomcl/
   :license: EuPathDB Bioinformatics Resource Center
   :recipe: /`orthomcl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthomcl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthomcl/meta.yaml>`_

   


.. conda:package:: orthomcl

   |downloads_orthomcl| |docker_orthomcl|

   :versions: 2.0.9-3, 2.0.9-2, 2.0.9-1, 2.0.9-0
   
   :depends blast: 
   :depends mcl: 
   :depends mysqlclient: 
   :depends perl: 
   :depends perl-dbd-mysql: 
   :depends perl-dbi: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install orthomcl

   and update with::

      conda update orthomcl

   or use the docker container::

      docker pull quay.io/biocontainers/orthomcl:<tag>

   (see `orthomcl/tags`_ for valid values for ``<tag>``)


.. |downloads_orthomcl| image:: https://img.shields.io/conda/dn/bioconda/orthomcl.svg?style=flat
   :alt:   (downloads)
.. |docker_orthomcl| image:: https://quay.io/repository/biocontainers/orthomcl/status
   :target: https://quay.io/repository/biocontainers/orthomcl
.. _`orthomcl/tags`: https://quay.io/repository/biocontainers/orthomcl?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orthomcl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orthomcl/README.html