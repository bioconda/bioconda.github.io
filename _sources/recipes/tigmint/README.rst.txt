.. title:: Package Recipe 'tigmint'
.. highlight: bash


tigmint
=======

.. conda:recipe:: tigmint
   :replaces_section_title:

   Correct misassemblies using linked reads

   :homepage: https://bcgsc.github.io/tigmint/
   :documentation: https://github.com/bcgsc/tigmint#readme
   
   :developer docs: https://github.com/bcgsc/tigmint
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`tigmint <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tigmint>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tigmint/meta.yaml>`_
   :links: doi: :doi:`10.1101/304253`

   


.. conda:package:: tigmint

   |downloads_tigmint| |docker_tigmint|

   :versions: 1.1.2

   :depends: :conda:package:`intervaltree`  :conda:package:`make`  :conda:package:`pybedtools`  :conda:package:`pysam`  :conda:package:`python` >=3 

   :required~by: |required_by_tigmint|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tigmint

   and update with::

      conda update tigmint

   or use the docker container::

      docker pull quay.io/repository/biocontainers/tigmint


.. |required_by_tigmint| conda:required_by:: tigmint
.. |downloads_tigmint| image:: https://img.shields.io/conda/dn/bioconda/tigmint.svg?style=flat
   :alt:   (downloads)
.. |docker_tigmint| image:: https://quay.io/repository/biocontainers/tigmint/status
   :target: https://quay.io/repository/biocontainers/tigmint







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tigmint/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tigmint/README.html

