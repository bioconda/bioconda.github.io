:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxsbp'
.. highlight: bash

taxsbp
======

.. conda:recipe:: taxsbp
   :replaces_section_title:

   TaxSBP\: Implementation of the approximation algorithm for the hierarchically structured bin packing problem based on the NCBI Taxonomy database

   :homepage: https://github.com/pirovc/taxsbp
   :license: MIT / MIT License
   :recipe: /`taxsbp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxsbp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxsbp/meta.yaml>`_
   :links: doi: :doi:`10.1101/406017`

   


.. conda:package:: taxsbp

   |downloads_taxsbp| |docker_taxsbp|

   :versions: 0.1.1-0
   
   :depends binpacking: >=1.3
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install taxsbp

   and update with::

      conda update taxsbp

   or use the docker container::

      docker pull quay.io/biocontainers/taxsbp:<tag>

   (see `taxsbp/tags`_ for valid values for ``<tag>``)


.. |downloads_taxsbp| image:: https://img.shields.io/conda/dn/bioconda/taxsbp.svg?style=flat
   :alt:   (downloads)
.. |docker_taxsbp| image:: https://quay.io/repository/biocontainers/taxsbp/status
   :target: https://quay.io/repository/biocontainers/taxsbp
.. _`taxsbp/tags`: https://quay.io/repository/biocontainers/taxsbp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxsbp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxsbp/README.html