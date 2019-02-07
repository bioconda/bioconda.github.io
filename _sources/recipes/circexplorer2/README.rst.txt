.. title:: Package Recipe 'circexplorer2'
.. highlight: bash


circexplorer2
=============

.. conda:recipe:: circexplorer2
   :replaces_section_title:

   Circular RNA analysis toolkits

   :homepage: https://github.com/YangLab/CIRCexplorer2
   :license: MIT License
   :recipe: /`circexplorer2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circexplorer2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circexplorer2/meta.yaml>`_

   


.. conda:package:: circexplorer2

   |downloads_circexplorer2| |docker_circexplorer2|

   :versions: 2.3.5, 2.3.3, 2.3.2, 2.3.1, 2.3.0, 2.2.7, 2.2.6, 2.2.5, 2.2.4, 2.2.3, 2.2.2, 2.2.1, 2.2.0, 2.1.2, 2.1.1, 2.1.0, 2.0.1

   :depends: :conda:package:`docopt`  :conda:package:`pybedtools`  :conda:package:`pysam` >=0.8.4 :conda:package:`python`  :conda:package:`requests`  :conda:package:`scipy`  

   :required~by: |required_by_circexplorer2|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install circexplorer2

   and update with::

      conda update circexplorer2

   or use the docker container::

      docker pull quay.io/repository/biocontainers/circexplorer2


.. |required_by_circexplorer2| conda:required_by:: circexplorer2
.. |downloads_circexplorer2| image:: https://img.shields.io/conda/dn/bioconda/circexplorer2.svg?style=flat
   :alt:   (downloads)
.. |docker_circexplorer2| image:: https://quay.io/repository/biocontainers/circexplorer2/status
   :target: https://quay.io/repository/biocontainers/circexplorer2







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circexplorer2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circexplorer2/README.html

