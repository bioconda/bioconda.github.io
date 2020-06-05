:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prophane'
.. highlight: bash

prophane
========

.. conda:recipe:: prophane
   :replaces_section_title:
   :noindex:

   Annotate your metaproteomic search results

   :homepage: https://gitlab.com/s.fuchs/prophane/
   :license: MIT / MIT
   :recipe: /`prophane <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prophane>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prophane/meta.yaml>`_

   


.. conda:package:: prophane

   |downloads_prophane| |docker_prophane|

   :versions:
      
      

      ``4.0.5-0``,  ``4.0.3-0``,  ``4.0.2-0``

      

   
   :depends biopython: 
   :depends gitpython: 
   :depends pandas: 
   :depends pytools: 
   :depends snakemake: ``>=5.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install prophane

   and update with::

      conda update prophane

   or use the docker container::

      docker pull quay.io/biocontainers/prophane:<tag>

   (see `prophane/tags`_ for valid values for ``<tag>``)


.. |downloads_prophane| image:: https://img.shields.io/conda/dn/bioconda/prophane.svg?style=flat
   :target: https://anaconda.org/bioconda/prophane
   :alt:   (downloads)
.. |docker_prophane| image:: https://quay.io/repository/biocontainers/prophane/status
   :target: https://quay.io/repository/biocontainers/prophane
.. _`prophane/tags`: https://quay.io/repository/biocontainers/prophane?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prophane/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prophane/README.html