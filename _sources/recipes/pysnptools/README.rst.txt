.. title:: Package Recipe 'pysnptools'
.. highlight: bash


pysnptools
==========

.. conda:recipe:: pysnptools
   :replaces_section_title:

   Python library for reading and manipulating genetic data

   :homepage: http://research.microsoft.com/en-us/um/redmond/projects/mscompbio/
   :license: Apache 2.0
   :recipe: /`pysnptools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysnptools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pysnptools/meta.yaml>`_

   


.. conda:package:: pysnptools

   |downloads_pysnptools| |docker_pysnptools|

   :versions: 0.3.13, 0.3.9

   :depends: :conda:package:`numpy` >=1.9.2 :conda:package:`pandas` >=0.16.2 :conda:package:`python` 2.7* :conda:package:`scipy` >=0.15.1 

   :required~by: |required_by_pysnptools|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pysnptools

   and update with::

      conda update pysnptools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/pysnptools


.. |required_by_pysnptools| conda:required_by:: pysnptools
.. |downloads_pysnptools| image:: https://img.shields.io/conda/dn/bioconda/pysnptools.svg?style=flat
   :alt:   (downloads)
.. |docker_pysnptools| image:: https://quay.io/repository/biocontainers/pysnptools/status
   :target: https://quay.io/repository/biocontainers/pysnptools







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pysnptools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pysnptools/README.html

