:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mirge'
.. highlight: bash

mirge
=====

.. conda:recipe:: mirge
   :replaces_section_title:
   :noindex:

   comprehensive analysis of miRNA sequencing data

   :homepage: https://github.com/mhalushka/miRge
   :license: MIT License
   :recipe: /`mirge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirge/meta.yaml>`_

   


.. conda:package:: mirge

   |downloads_mirge| |docker_mirge|

   :versions:
      
      

      ``2.0.6-6``,  ``2.0.6-5``,  ``2.0.6-4``,  ``2.0.5-3``,  ``2.0.4-2``,  ``2.0.3-0``,  ``2.0-0``

      

   
   :depends biopython: ``>=1.68``
   :depends cutadapt: ``1.16``
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``<3``
   :depends reportlab: 
   :depends scikit-learn: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mirge

   and update with::

      conda update mirge

   or use the docker container::

      docker pull quay.io/biocontainers/mirge:<tag>

   (see `mirge/tags`_ for valid values for ``<tag>``)


.. |downloads_mirge| image:: https://img.shields.io/conda/dn/bioconda/mirge.svg?style=flat
   :target: https://anaconda.org/bioconda/mirge
   :alt:   (downloads)
.. |docker_mirge| image:: https://quay.io/repository/biocontainers/mirge/status
   :target: https://quay.io/repository/biocontainers/mirge
.. _`mirge/tags`: https://quay.io/repository/biocontainers/mirge?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mirge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mirge/README.html