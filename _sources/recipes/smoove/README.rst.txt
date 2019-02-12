:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smoove'
.. highlight: bash

smoove
======

.. conda:recipe:: smoove
   :replaces_section_title:

   structural variant calling and genotyping with existing tools\, but\, smoothly

   :homepage: https://github.com/brentp/smoove
   :license: Apache / Apache-2.0
   :recipe: /`smoove <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smoove>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smoove/meta.yaml>`_

   


.. conda:package:: smoove

   |downloads_smoove| |docker_smoove|

   :versions: 0.2.3-1, 0.2.3-0, 0.1.9-0, 0.1.6-0, 0.1.5-0, 0.1.4-0, 0.1.3-0, 0.1.1-0
   
   :depends bcftools: 
   
   :depends duphold: 
   
   :depends gsort: 
   
   :depends htslib: 
   
   :depends lumpy-sv: 
   
   :depends mosdepth: 
   
   :depends samtools: 
   
   :depends svtools: 
   
   :depends svtyper: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install smoove

   and update with::

      conda update smoove

   or use the docker container::

      docker pull quay.io/repository/biocontainers/smoove:<tag>

   (see `smoove/tags`_ for valid values for ``<tag>``)


.. |downloads_smoove| image:: https://img.shields.io/conda/dn/bioconda/smoove.svg?style=flat
   :alt:   (downloads)
.. |docker_smoove| image:: https://quay.io/repository/biocontainers/smoove/status
   :target: https://quay.io/repository/biocontainers/smoove
.. _`smoove/tags`: https://quay.io/repository/biocontainers/smoove?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smoove/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smoove/README.html