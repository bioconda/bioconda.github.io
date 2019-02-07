.. title:: Package Recipe 'tgt'
.. highlight: bash


tgt
===

.. conda:recipe:: tgt
   :replaces_section_title:

   TextGridTools \-\- Read\, write\, and manipulate Praat TextGrid files

   :homepage: https://github.com/hbuschme/TextGridTools/
   :license: GPL / GPL-3.0+
   :recipe: /`tgt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tgt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tgt/meta.yaml>`_

   


.. conda:package:: tgt

   |downloads_tgt| |docker_tgt|

   :versions: 1.4.3, 1.4.2

   :depends: :conda:package:`numpy`  :conda:package:`python` 2.7* 

   :required~by: |required_by_tgt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tgt

   and update with::

      conda update tgt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/tgt


.. |required_by_tgt| conda:required_by:: tgt
.. |downloads_tgt| image:: https://img.shields.io/conda/dn/bioconda/tgt.svg?style=flat
   :alt:   (downloads)
.. |docker_tgt| image:: https://quay.io/repository/biocontainers/tgt/status
   :target: https://quay.io/repository/biocontainers/tgt







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tgt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tgt/README.html

