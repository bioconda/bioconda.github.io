.. title:: Package Recipe 'r-icluster'
.. highlight: bash


r-icluster
==========

.. conda:recipe:: r-icluster
   :replaces_section_title:

   

   :homepage: 
   :license: 
   :recipe: /`r-icluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-icluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-icluster/meta.yaml>`_

   


.. conda:package:: r-icluster

   |downloads_r-icluster| |docker_r-icluster|

   :versions: 2.1.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-catools`  :conda:package:`r-gdata`  :conda:package:`r-gplots`  :conda:package:`r-gtools`  :conda:package:`r-lattice`  

   :required~by: |required_by_r-icluster|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-icluster

   and update with::

      conda update r-icluster

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-icluster


.. |required_by_r-icluster| conda:required_by:: r-icluster
.. |downloads_r-icluster| image:: https://img.shields.io/conda/dn/bioconda/r-icluster.svg?style=flat
   :alt:   (downloads)
.. |docker_r-icluster| image:: https://quay.io/repository/biocontainers/r-icluster/status
   :target: https://quay.io/repository/biocontainers/r-icluster







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-icluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-icluster/README.html

