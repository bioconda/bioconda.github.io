.. title:: Package Recipe 'hubward'
.. highlight: bash


hubward
=======

.. conda:recipe:: hubward
   :replaces_section_title:

   Manage the visualization of large amounts of other people\'s \[often messy\] genomics data

   :homepage: https://github.com/daler/hubward
   :license: BSD License
   :recipe: /`hubward <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hubward>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hubward/meta.yaml>`_

   


.. conda:package:: hubward

   |downloads_hubward| |docker_hubward|

   :versions: 0.2.2, 0.2.1, 0.2.0

   :depends: :conda:package:`argh`  :conda:package:`bleach`  :conda:package:`colorama`  :conda:package:`docutils`  :conda:package:`fabric`  :conda:package:`functools32`  :conda:package:`jsonschema`  :conda:package:`matplotlib`  :conda:package:`numpy`  :conda:package:`pyaml`  :conda:package:`pybedtools`  :conda:package:`pycurl`  :conda:package:`python` 2.7* :conda:package:`pyyaml`  :conda:package:`trackhub`  

   :required~by: |required_by_hubward|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hubward

   and update with::

      conda update hubward

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hubward


.. |required_by_hubward| conda:required_by:: hubward
.. |downloads_hubward| image:: https://img.shields.io/conda/dn/bioconda/hubward.svg?style=flat
   :alt:   (downloads)
.. |docker_hubward| image:: https://quay.io/repository/biocontainers/hubward/status
   :target: https://quay.io/repository/biocontainers/hubward







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hubward/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hubward/README.html

