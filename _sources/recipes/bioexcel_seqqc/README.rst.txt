:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioexcel_seqqc'
.. highlight: bash

bioexcel_seqqc
==============

.. conda:recipe:: bioexcel_seqqc
   :replaces_section_title:

   Sequence Quality Control pipeline\/modules

   :homepage: https://github.com/bioexcel/bioexcel_seqqc
   :license: APACHE / Apache Software License
   :recipe: /`bioexcel_seqqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioexcel_seqqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioexcel_seqqc/meta.yaml>`_

   


.. conda:package:: bioexcel_seqqc

   |downloads_bioexcel_seqqc| |docker_bioexcel_seqqc|

   :versions: 0.6-0, 0.5-0
   
   :depends cutadapt: 
   :depends fastqc: 
   :depends python: >=3
   :depends pyyaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioexcel_seqqc

   and update with::

      conda update bioexcel_seqqc

   or use the docker container::

      docker pull quay.io/biocontainers/bioexcel_seqqc:<tag>

   (see `bioexcel_seqqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioexcel_seqqc| image:: https://img.shields.io/conda/dn/bioconda/bioexcel_seqqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioexcel_seqqc
   :alt:   (downloads)
.. |docker_bioexcel_seqqc| image:: https://quay.io/repository/biocontainers/bioexcel_seqqc/status
   :target: https://quay.io/repository/biocontainers/bioexcel_seqqc
.. _`bioexcel_seqqc/tags`: https://quay.io/repository/biocontainers/bioexcel_seqqc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioexcel_seqqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioexcel_seqqc/README.html