:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clinker-py'
.. highlight: bash

clinker-py
==========

.. conda:recipe:: clinker-py
   :replaces_section_title:
   :noindex:

   Gene cluster comparison figure generator

   :homepage: https://github.com/gamcil/clinker
   :license: MIT / MIT
   :recipe: /`clinker-py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clinker-py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clinker-py/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.4326585`

   


.. conda:package:: clinker-py

   |downloads_clinker-py| |docker_clinker-py|

   :versions:
      
      

      ``0.0.12-0``

      

   
   :depends biopython: ``>=1.75``
   :depends gffutils: 
   :depends numpy: ``>=1.13.3``
   :depends python: 
   :depends scipy: ``>=1.3.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clinker-py

   and update with::

      conda update clinker-py

   or use the docker container::

      docker pull quay.io/biocontainers/clinker-py:<tag>

   (see `clinker-py/tags`_ for valid values for ``<tag>``)


.. |downloads_clinker-py| image:: https://img.shields.io/conda/dn/bioconda/clinker-py.svg?style=flat
   :target: https://anaconda.org/bioconda/clinker-py
   :alt:   (downloads)
.. |docker_clinker-py| image:: https://quay.io/repository/biocontainers/clinker-py/status
   :target: https://quay.io/repository/biocontainers/clinker-py
.. _`clinker-py/tags`: https://quay.io/repository/biocontainers/clinker-py?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clinker-py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clinker-py/README.html