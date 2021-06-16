:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'soda-gallery'
.. highlight: bash

soda-gallery
============

.. conda:recipe:: soda-gallery
   :replaces_section_title:
   :noindex:

   Python\-based UCSC genome browser gallery generator

   :homepage: https://github.com/alexpreynolds/soda
   :documentation: https://github.com/alexpreynolds/soda/blob/master/README.md
   
   :license: MIT / MIT
   :recipe: /`soda-gallery <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soda-gallery>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/soda-gallery/meta.yaml>`_

   


.. conda:package:: soda-gallery

   |downloads_soda-gallery| |docker_soda-gallery|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends beautifulsoup4: ``>=4.9.3``
   :depends certifi: ``>=2021.5.30``
   :depends jinja2: ``>=3.0.1``
   :depends pdfminer: ``>=20191125``
   :depends pdfrw: ``>=0.4``
   :depends python: 
   :depends requests: ``>=2.25.1``
   :depends requests-kerberos: ``>=0.12.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install soda-gallery

   and update with::

      conda update soda-gallery

   or use the docker container::

      docker pull quay.io/biocontainers/soda-gallery:<tag>

   (see `soda-gallery/tags`_ for valid values for ``<tag>``)


.. |downloads_soda-gallery| image:: https://img.shields.io/conda/dn/bioconda/soda-gallery.svg?style=flat
   :target: https://anaconda.org/bioconda/soda-gallery
   :alt:   (downloads)
.. |docker_soda-gallery| image:: https://quay.io/repository/biocontainers/soda-gallery/status
   :target: https://quay.io/repository/biocontainers/soda-gallery
.. _`soda-gallery/tags`: https://quay.io/repository/biocontainers/soda-gallery?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/soda-gallery/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/soda-gallery/README.html