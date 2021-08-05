:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hgvs'
.. highlight: bash

hgvs
====

.. conda:recipe:: hgvs
   :replaces_section_title:
   :noindex:

   HGVS Parser\, Formatter\, Mapper\, Validator

   :homepage: https://github.com/biocommons/hgvs
   :documentation: https://pythonhosted.org/hgvs/
   
   :license: Apache-2.0
   :recipe: /`hgvs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hgvs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hgvs/meta.yaml>`_

   


.. conda:package:: hgvs

   |downloads_hgvs| |docker_hgvs|

   :versions:
      
      

      ``1.5.1-0``

      

   
   :depends attrs: ``>=17.4.0``
   :depends biocommons.seqrepo: ``<1.0``
   :depends bioutils: ``>=0.4.0,<1.0``
   :depends configparser: ``>=3.3.0``
   :depends ipython: 
   :depends parsley: 
   :depends psycopg2-binary: 
   :depends python: 
   :depends six: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hgvs

   and update with::

      conda update hgvs

   or use the docker container::

      docker pull quay.io/biocontainers/hgvs:<tag>

   (see `hgvs/tags`_ for valid values for ``<tag>``)


.. |downloads_hgvs| image:: https://img.shields.io/conda/dn/bioconda/hgvs.svg?style=flat
   :target: https://anaconda.org/bioconda/hgvs
   :alt:   (downloads)
.. |docker_hgvs| image:: https://quay.io/repository/biocontainers/hgvs/status
   :target: https://quay.io/repository/biocontainers/hgvs
.. _`hgvs/tags`: https://quay.io/repository/biocontainers/hgvs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hgvs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hgvs/README.html