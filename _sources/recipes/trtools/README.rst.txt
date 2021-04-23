:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trtools'
.. highlight: bash

trtools
=======

.. conda:recipe:: trtools
   :replaces_section_title:
   :noindex:

   Toolkit for genome\-wide analysis of tandem repeats https\:\/\/trtools.readthedocs.io\/

   :homepage: http://github.com/gymreklab/TRTools
   :documentation: https://trtools.readthedocs.io/
   
   :developer docs: https://github.com/gymreklab/TRTools
   :license: MIT / MIT
   :recipe: /`trtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trtools/meta.yaml>`_

   


.. conda:package:: trtools

   |downloads_trtools| |docker_trtools|

   :versions:
      
      

      ``4.0.0-2``,  ``4.0.0-1``,  ``4.0.0-0``,  ``3.0.3-0``,  ``3.0.2-0``,  ``2.0.18-1``,  ``2.0.18-0``

      

   
   :depends cyvcf2: ``>=0.30.1``
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends pybedtools: 
   :depends pysam: ``>=0.15.3``
   :depends python: ``>=3.5``
   :depends scikit-learn: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install trtools

   and update with::

      conda update trtools

   or use the docker container::

      docker pull quay.io/biocontainers/trtools:<tag>

   (see `trtools/tags`_ for valid values for ``<tag>``)


.. |downloads_trtools| image:: https://img.shields.io/conda/dn/bioconda/trtools.svg?style=flat
   :target: https://anaconda.org/bioconda/trtools
   :alt:   (downloads)
.. |docker_trtools| image:: https://quay.io/repository/biocontainers/trtools/status
   :target: https://quay.io/repository/biocontainers/trtools
.. _`trtools/tags`: https://quay.io/repository/biocontainers/trtools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trtools/README.html