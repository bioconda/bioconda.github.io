:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pypgatk'
.. highlight: bash

pypgatk
=======

.. conda:recipe:: pypgatk
   :replaces_section_title:
   :noindex:

   The Pypgatk framework and library provides a set of tools to perform ProteoGenomics Analysis.

   :homepage: http://github.com/bigbio/py-pgatk
   :documentation: https://pgatk.readthedocs.io/en/latest/pypgatk.html
   
   :developer docs: https://github.com/bigbio/py-pgatk
   :license: APACHE / Apache 2
   :recipe: /`pypgatk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypgatk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypgatk/meta.yaml>`_

   


.. conda:package:: pypgatk

   |downloads_pypgatk| |docker_pypgatk|

   :versions:
      
      

      ``0.0.12-0``,  ``0.0.11-0``,  ``0.0.10-0``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.4-0``

      

   
   :depends argcomplete: 
   :depends argh: 
   :depends asn1crypto: 
   :depends astroid: 
   :depends bcrypt: 
   :depends biopython: 
   :depends certifi: 
   :depends cffi: 
   :depends chardet: 
   :depends click: 
   :depends cryptography: 
   :depends gffutils: 
   :depends idna: 
   :depends isort: 
   :depends lazy-object-proxy: 
   :depends mccabe: 
   :depends numpy: 
   :depends paramiko: 
   :depends pyasn1: 
   :depends pycparser: 
   :depends pyfaidx: 
   :depends pylint: 
   :depends pynacl: 
   :depends pysftp: 
   :depends python: ``>=3``
   :depends pyvcf: 
   :depends pyyaml: 
   :depends ratelimit: 
   :depends requests: 
   :depends simplejson: 
   :depends six: 
   :depends typed-ast: 
   :depends urllib3: 
   :depends wrapt: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pypgatk

   and update with::

      conda update pypgatk

   or use the docker container::

      docker pull quay.io/biocontainers/pypgatk:<tag>

   (see `pypgatk/tags`_ for valid values for ``<tag>``)


.. |downloads_pypgatk| image:: https://img.shields.io/conda/dn/bioconda/pypgatk.svg?style=flat
   :target: https://anaconda.org/bioconda/pypgatk
   :alt:   (downloads)
.. |docker_pypgatk| image:: https://quay.io/repository/biocontainers/pypgatk/status
   :target: https://quay.io/repository/biocontainers/pypgatk
.. _`pypgatk/tags`: https://quay.io/repository/biocontainers/pypgatk?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pypgatk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pypgatk/README.html