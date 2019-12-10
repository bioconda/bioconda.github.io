:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kaptive'
.. highlight: bash

kaptive
=======

.. conda:recipe:: kaptive
   :replaces_section_title:

   Kaptive reports information about capsular \(K\) loci found in genome assemblies

   :homepage: https://github.com/katholt/Kaptive
   :license: GPL / GPL-3.0
   :recipe: /`kaptive <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kaptive>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kaptive/meta.yaml>`_

   


.. conda:package:: kaptive

   |downloads_kaptive| |docker_kaptive|

   :versions: 0.7.0-0, 0.6.1-0, 0.6.0-0, 0.5.1-2, 0.5.1-0, 0.3-0, 0.2-0
   
   :depends biopython: 
   :depends blast: 
   :depends python: >=3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kaptive

   and update with::

      conda update kaptive

   or use the docker container::

      docker pull quay.io/biocontainers/kaptive:<tag>

   (see `kaptive/tags`_ for valid values for ``<tag>``)


.. |downloads_kaptive| image:: https://img.shields.io/conda/dn/bioconda/kaptive.svg?style=flat
   :target: https://anaconda.org/bioconda/kaptive
   :alt:   (downloads)
.. |docker_kaptive| image:: https://quay.io/repository/biocontainers/kaptive/status
   :target: https://quay.io/repository/biocontainers/kaptive
.. _`kaptive/tags`: https://quay.io/repository/biocontainers/kaptive?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kaptive/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kaptive/README.html