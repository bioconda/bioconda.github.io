:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ig-flowtools'
.. highlight: bash

ig-flowtools
============

.. conda:recipe:: ig-flowtools
   :replaces_section_title:

   set of tools for flow cytometry analysis

   :homepage: https://github.com/ImmPortDB/ig-flowtools
   :license: BSD / BSD License
   :recipe: /`ig-flowtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ig-flowtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ig-flowtools/meta.yaml>`_

   


.. conda:package:: ig-flowtools

   |downloads_ig-flowtools| |docker_ig-flowtools|

   :versions: 2.0.2-2, 2.0.2-1, 2.0.2-0, 2.0.1-0, 2.0.0-0, 1.4.1-1, 1.4.1-0, 1.4.0-0, 1.3.0-0, 1.0.0-0
   
   :depends bioconductor-flowai: 
   
   :depends bioconductor-flowcl: 
   
   :depends bioconductor-flowcore: 
   
   :depends bioconductor-flowdensity: 
   
   :depends bioconductor-flowsom: 
   
   :depends bioconductor-flowviz: 
   
   :depends bioconductor-ggcyto: 
   
   :depends clustergrammer: 
   
   :depends flock: 
   
   :depends jinja2: 
   
   :depends matplotlib: 
   
   :depends numpy: 
   
   :depends pandas: 
   
   :depends python: >=2.7,<2.8.0a0
   
   :depends r-base: >=3.4.1,<3.4.2.0a0
   
   :depends scipy: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ig-flowtools

   and update with::

      conda update ig-flowtools

   or use the docker container::

      docker pull quay.io/biocontainers/ig-flowtools:<tag>

   (see `ig-flowtools/tags`_ for valid values for ``<tag>``)


.. |downloads_ig-flowtools| image:: https://img.shields.io/conda/dn/bioconda/ig-flowtools.svg?style=flat
   :alt:   (downloads)
.. |docker_ig-flowtools| image:: https://quay.io/repository/biocontainers/ig-flowtools/status
   :target: https://quay.io/repository/biocontainers/ig-flowtools
.. _`ig-flowtools/tags`: https://quay.io/repository/biocontainers/ig-flowtools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ig-flowtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ig-flowtools/README.html