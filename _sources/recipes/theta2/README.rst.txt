:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'theta2'
.. highlight: bash

theta2
======

.. conda:recipe:: theta2
   :replaces_section_title:

   Estimate tumor purity and clonal\/subclonal copy number aberrations directly from high\-throughput DNA sequencing data

   :homepage: https://github.com/raphael-group/THetA
   :license: Modified MIT (no inclusion in commercial tools)
   :recipe: /`theta2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/theta2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/theta2/meta.yaml>`_

   


.. conda:package:: theta2

   |downloads_theta2| |docker_theta2|

   :versions: 0.7-1, 0.7-0
   
   :depends joblib: 
   :depends matplotlib: 
   :depends numexpr: 
   :depends numpy: 
   :depends python: >=2.7,<2.8.0a0
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install theta2

   and update with::

      conda update theta2

   or use the docker container::

      docker pull quay.io/biocontainers/theta2:<tag>

   (see `theta2/tags`_ for valid values for ``<tag>``)


.. |downloads_theta2| image:: https://img.shields.io/conda/dn/bioconda/theta2.svg?style=flat
   :alt:   (downloads)
.. |docker_theta2| image:: https://quay.io/repository/biocontainers/theta2/status
   :target: https://quay.io/repository/biocontainers/theta2
.. _`theta2/tags`: https://quay.io/repository/biocontainers/theta2?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/theta2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/theta2/README.html