.. title:: Package Recipe 'kissplice'
.. highlight: bash


kissplice
=========

.. conda:recipe:: kissplice
   :replaces_section_title:

   A local transcriptome assembler for SNPs\, indels and AS events

   :homepage: http://kissplice.prabi.fr
   :license: CeCILL license
   :recipe: /`kissplice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kissplice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kissplice/meta.yaml>`_

   


.. conda:package:: kissplice

   |downloads_kissplice| |docker_kissplice|

   :versions: 2.4.0p1

   :depends: :conda:package:`python` 2.7* :conda:package:`zlib` 1.2.8* 

   :required~by: |required_by_kissplice|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kissplice

   and update with::

      conda update kissplice

   or use the docker container::

      docker pull quay.io/repository/biocontainers/kissplice


.. |required_by_kissplice| conda:required_by:: kissplice
.. |downloads_kissplice| image:: https://img.shields.io/conda/dn/bioconda/kissplice.svg?style=flat
   :alt:   (downloads)
.. |docker_kissplice| image:: https://quay.io/repository/biocontainers/kissplice/status
   :target: https://quay.io/repository/biocontainers/kissplice







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kissplice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kissplice/README.html

