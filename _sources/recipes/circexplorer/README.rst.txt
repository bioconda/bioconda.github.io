.. title:: Package Recipe 'circexplorer'
.. highlight: bash


circexplorer
============

.. conda:recipe:: circexplorer
   :replaces_section_title:

   A combined strategy to identify circular RNAs \(circRNAs and ciRNAs\)

   :homepage: https://github.com/YangLab/CIRCexplorer
   :license: MIT
   :recipe: /`circexplorer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circexplorer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circexplorer/meta.yaml>`_

   


.. conda:package:: circexplorer

   |downloads_circexplorer| |docker_circexplorer|

   :versions: 1.1.10, 1.1.9, 0.1

   :depends: :conda:package:`docopt`  :conda:package:`pysam`  :conda:package:`python` 2.7* :conda:package:`tophat`  

   :required~by: |required_by_circexplorer|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install circexplorer

   and update with::

      conda update circexplorer

   or use the docker container::

      docker pull quay.io/repository/biocontainers/circexplorer


.. |required_by_circexplorer| conda:required_by:: circexplorer
.. |downloads_circexplorer| image:: https://img.shields.io/conda/dn/bioconda/circexplorer.svg?style=flat
   :alt:   (downloads)
.. |docker_circexplorer| image:: https://quay.io/repository/biocontainers/circexplorer/status
   :target: https://quay.io/repository/biocontainers/circexplorer







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circexplorer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circexplorer/README.html

