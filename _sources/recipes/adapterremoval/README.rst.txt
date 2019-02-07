.. title:: Package Recipe 'adapterremoval'
.. highlight: bash


adapterremoval
==============

.. conda:recipe:: adapterremoval
   :replaces_section_title:

   The AdapterRemoval v2 tool for merging and clipping reads.

   :homepage: https://github.com/MikkelSchubert/adapterremoval
   :license: GPL3
   :recipe: /`adapterremoval <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adapterremoval>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adapterremoval/meta.yaml>`_

   


.. conda:package:: adapterremoval

   |downloads_adapterremoval| |docker_adapterremoval|

   :versions: 2.2.2

   :depends: :conda:package:`bzip2` 1.0* :conda:package:`libgcc`  :conda:package:`zlib` 1.2.11* 

   :required~by: |required_by_adapterremoval|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install adapterremoval

   and update with::

      conda update adapterremoval

   or use the docker container::

      docker pull quay.io/repository/biocontainers/adapterremoval


.. |required_by_adapterremoval| conda:required_by:: adapterremoval
.. |downloads_adapterremoval| image:: https://img.shields.io/conda/dn/bioconda/adapterremoval.svg?style=flat
   :alt:   (downloads)
.. |docker_adapterremoval| image:: https://quay.io/repository/biocontainers/adapterremoval/status
   :target: https://quay.io/repository/biocontainers/adapterremoval







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/adapterremoval/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/adapterremoval/README.html

