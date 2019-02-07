.. title:: Package Recipe 'ete2'
.. highlight: bash


ete2
====

.. conda:recipe:: ete2
   :replaces_section_title:

   Phylogenetic tree analyses and exploration

   :homepage: http://etetoolkit.org/
   :license: GPLv3
   :recipe: /`ete2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ete2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ete2/meta.yaml>`_

   


.. conda:package:: ete2

   |downloads_ete2| |docker_ete2|

   :versions: 2.3.10, 2.2.1072

   :depends: :conda:package:`lxml`  :conda:package:`mysql-python`  :conda:package:`numpy`  :conda:package:`pyqt`  :conda:package:`python` 2.7* :conda:package:`setuptools`  

   :required~by: |required_by_ete2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ete2

   and update with::

      conda update ete2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ete2


.. |required_by_ete2| conda:required_by:: ete2
.. |downloads_ete2| image:: https://img.shields.io/conda/dn/bioconda/ete2.svg?style=flat
   :alt:   (downloads)
.. |docker_ete2| image:: https://quay.io/repository/biocontainers/ete2/status
   :target: https://quay.io/repository/biocontainers/ete2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ete2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ete2/README.html

