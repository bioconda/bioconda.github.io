:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'varifier'
.. highlight: bash

varifier
========

.. conda:recipe:: varifier
   :replaces_section_title:
   :noindex:

   varifier\: variant call verification

   :homepage: https://github.com/iqbal-lab-org/varifier
   :license: MIT / MIT
   :recipe: /`varifier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varifier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/varifier/meta.yaml>`_

   


.. conda:package:: varifier

   |downloads_varifier| |docker_varifier|

   :versions:
      
      

      ``0.3.1-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends biopython: 
   :depends cluster_vcf_records: ``>=0.13.2``
   :depends mappy: ``>=2.17``
   :depends minimap2: ``>=2.17``
   :depends mummer4: 
   :depends pandas: 
   :depends pyfastaq: ``>=3.14.0``
   :depends pymummer: 
   :depends pysam: 
   :depends python: ``>=3.6``
   :depends seaborn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install varifier

   and update with::

      conda update varifier

   or use the docker container::

      docker pull quay.io/biocontainers/varifier:<tag>

   (see `varifier/tags`_ for valid values for ``<tag>``)


.. |downloads_varifier| image:: https://img.shields.io/conda/dn/bioconda/varifier.svg?style=flat
   :target: https://anaconda.org/bioconda/varifier
   :alt:   (downloads)
.. |docker_varifier| image:: https://quay.io/repository/biocontainers/varifier/status
   :target: https://quay.io/repository/biocontainers/varifier
.. _`varifier/tags`: https://quay.io/repository/biocontainers/varifier?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/varifier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/varifier/README.html