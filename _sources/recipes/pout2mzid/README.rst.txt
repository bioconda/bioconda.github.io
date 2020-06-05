:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pout2mzid'
.. highlight: bash

pout2mzid
=========

.. conda:recipe:: pout2mzid
   :replaces_section_title:
   :noindex:

   Adds percolator statistics to mzIdentML files that were used as input to percolator

   :homepage: https://github.com/percolator/pout2mzid
   :license: Apache License, Version 2.0
   :recipe: /`pout2mzid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pout2mzid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pout2mzid/meta.yaml>`_

   


.. conda:package:: pout2mzid

   |downloads_pout2mzid| |docker_pout2mzid|

   :versions:
      
      

      ``0.3.03-2``

      

   
   :depends boost: ``==1.62``
   :depends libgcc: 
   :depends xerces-c: 
   :depends xsd: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pout2mzid

   and update with::

      conda update pout2mzid

   or use the docker container::

      docker pull quay.io/biocontainers/pout2mzid:<tag>

   (see `pout2mzid/tags`_ for valid values for ``<tag>``)


.. |downloads_pout2mzid| image:: https://img.shields.io/conda/dn/bioconda/pout2mzid.svg?style=flat
   :target: https://anaconda.org/bioconda/pout2mzid
   :alt:   (downloads)
.. |docker_pout2mzid| image:: https://quay.io/repository/biocontainers/pout2mzid/status
   :target: https://quay.io/repository/biocontainers/pout2mzid
.. _`pout2mzid/tags`: https://quay.io/repository/biocontainers/pout2mzid?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pout2mzid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pout2mzid/README.html