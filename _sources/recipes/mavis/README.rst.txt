:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mavis'
.. highlight: bash

mavis
=====

.. conda:recipe:: mavis
   :replaces_section_title:
   :noindex:

   A Structural Variant Post\-Processing Package

   :homepage: https://github.com/bcgsc/mavis.git
   :documentation: http://mavis.bcgsc.ca/docs/latest
   
   :license: OTHER / Non-commercial use only
   :recipe: /`mavis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mavis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mavis/meta.yaml>`_

   


.. conda:package:: mavis

   |downloads_mavis| |docker_mavis|

   :versions:
      
      

      ``2.2.6-0``

      

   
   :depends biopython: ``>=1.70``
   :depends braceexpand: ``0.1.2``
   :depends colour: 
   :depends distance: ``>=0.1.3``
   :depends networkx: ``1.11.0``
   :depends numpy: ``>=1.13.1``
   :depends pysam: ``>=0.9``
   :depends python: ``>=3``
   :depends pyvcf: ``0.6.8``
   :depends shapely: ``>=1.6.4``
   :depends shortuuid: ``>=0.5.0``
   :depends svgwrite: 
   :depends ucsc-blat: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mavis

   and update with::

      conda update mavis

   or use the docker container::

      docker pull quay.io/biocontainers/mavis:<tag>

   (see `mavis/tags`_ for valid values for ``<tag>``)


.. |downloads_mavis| image:: https://img.shields.io/conda/dn/bioconda/mavis.svg?style=flat
   :target: https://anaconda.org/bioconda/mavis
   :alt:   (downloads)
.. |docker_mavis| image:: https://quay.io/repository/biocontainers/mavis/status
   :target: https://quay.io/repository/biocontainers/mavis
.. _`mavis/tags`: https://quay.io/repository/biocontainers/mavis?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mavis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mavis/README.html