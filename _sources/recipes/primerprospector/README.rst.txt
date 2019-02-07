.. title:: Package Recipe 'primerprospector'
.. highlight: bash


primerprospector
================

.. conda:recipe:: primerprospector
   :replaces_section_title:

   Primer Prospector is a pipeline of programs to design and analyze PCR primers.

   :homepage: http://pprospector.sourceforge.net/
   :license: GPL
   :recipe: /`primerprospector <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primerprospector>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primerprospector/meta.yaml>`_

   


.. conda:package:: primerprospector

   |downloads_primerprospector| |docker_primerprospector|

   :versions: 1.0.1

   :depends: :conda:package:`cogent` >=1.5 :conda:package:`matplotlib` >=0.98.3 :conda:package:`numpy` >=1.3.0 :conda:package:`python` 2.7* 

   :required~by: |required_by_primerprospector|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install primerprospector

   and update with::

      conda update primerprospector

   or use the docker container::

      docker pull quay.io/repository/biocontainers/primerprospector


.. |required_by_primerprospector| conda:required_by:: primerprospector
.. |downloads_primerprospector| image:: https://img.shields.io/conda/dn/bioconda/primerprospector.svg?style=flat
   :alt:   (downloads)
.. |docker_primerprospector| image:: https://quay.io/repository/biocontainers/primerprospector/status
   :target: https://quay.io/repository/biocontainers/primerprospector







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/primerprospector/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/primerprospector/README.html

