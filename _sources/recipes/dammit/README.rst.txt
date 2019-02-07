.. title:: Package Recipe 'dammit'
.. highlight: bash


dammit
======

.. conda:recipe:: dammit
   :replaces_section_title:

   simple de novo transcriptome annotator

   :homepage: http://www.camillescott.org/dammit/
   :developer docs: https://github.com/camillescott/dammit
   :license: BSD / BSD
   :recipe: /`dammit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dammit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dammit/meta.yaml>`_

   


.. conda:package:: dammit

   |downloads_dammit| |docker_dammit|

   :versions: 1.0, 1.0.rc0, 1.0rc2, 0.3.2, 0.3

   :depends: :conda:package:`busco` 3.0.2 :conda:package:`doit` >=0.29.0 :conda:package:`hmmer`  :conda:package:`infernal`  :conda:package:`khmer` >=2.1 :conda:package:`last`  :conda:package:`matplotlib`  :conda:package:`numexpr` >=2.3.1 :conda:package:`numpy`  :conda:package:`pandas`  :conda:package:`parallel`  :conda:package:`pytest`  :conda:package:`pytest-runner`  :conda:package:`python` >=3.5,<3.6.0a0 :conda:package:`shmlast`  :conda:package:`sphinx` >1.3.1 :conda:package:`sphinx_rtd_theme` >=0.1.9 :conda:package:`transdecoder`  

   :required~by: |required_by_dammit|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dammit

   and update with::

      conda update dammit

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dammit


.. |required_by_dammit| conda:required_by:: dammit
.. |downloads_dammit| image:: https://img.shields.io/conda/dn/bioconda/dammit.svg?style=flat
   :alt:   (downloads)
.. |docker_dammit| image:: https://quay.io/repository/biocontainers/dammit/status
   :target: https://quay.io/repository/biocontainers/dammit







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dammit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dammit/README.html

