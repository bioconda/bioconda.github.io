:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sketchy'
.. highlight: bash

sketchy
=======

.. conda:recipe:: sketchy
   :replaces_section_title:

   Real\-time lineage hashing and genotyping of bacterial pathogens

   :homepage: https://github.com/esteinig/sketchy
   :license: MIT
   :recipe: /`sketchy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sketchy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sketchy/meta.yaml>`_

   


.. conda:package:: sketchy

   |downloads_sketchy| |docker_sketchy|

   :versions: 0.4.3.1-0, 0.4.3-0
   
   :depends braceexpand: 
   :depends click: 
   :depends colorama: 
   :depends dendropy: 
   :depends deprecation: 
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends mash: 2.2
   :depends matplotlib-base: 
   :depends networkx: 
   :depends nextflow: 
   :depends numpy: 
   :depends pandas: 
   :depends psutil: 
   :depends pyfastx: 
   :depends pysam: 
   :depends pytest: 
   :depends python: >=3.7,<3.8.0a0
   :depends python-dateutil: 
   :depends scipy: 
   :depends seaborn: 
   :depends tqdm: 
   :depends watchdog: 
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sketchy

   and update with::

      conda update sketchy

   or use the docker container::

      docker pull quay.io/biocontainers/sketchy:<tag>

   (see `sketchy/tags`_ for valid values for ``<tag>``)


.. |downloads_sketchy| image:: https://img.shields.io/conda/dn/bioconda/sketchy.svg?style=flat
   :target: https://anaconda.org/bioconda/sketchy
   :alt:   (downloads)
.. |docker_sketchy| image:: https://quay.io/repository/biocontainers/sketchy/status
   :target: https://quay.io/repository/biocontainers/sketchy
.. _`sketchy/tags`: https://quay.io/repository/biocontainers/sketchy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sketchy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sketchy/README.html