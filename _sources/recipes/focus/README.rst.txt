.. title:: Package Recipe 'focus'
.. highlight: bash


focus
=====

.. conda:recipe:: focus
   :replaces_section_title:

   FOCUS is an innovative and agile model to profile and report organisms present in metagenomic samples based on composition usage without sequence length dependencies.

   :homepage: https://edwards.sdsu.edu/FOCUS
   :developer docs: https://github.com/metageni/FOCUS
   :license: GPL / GPL-3.0
   :recipe: /`focus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/focus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/focus/meta.yaml>`_

   


.. conda:package:: focus

   |downloads_focus| |docker_focus|

   :versions: 1.4, 1.3

   :depends: :conda:package:`jellyfish`  :conda:package:`numpy` >=1.12.1 :conda:package:`python` >=3 :conda:package:`scipy` >=0.19.0 :conda:package:`unzip`  

   :required~by: |required_by_focus|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install focus

   and update with::

      conda update focus

   or use the docker container::

      docker pull quay.io/repository/biocontainers/focus


.. |required_by_focus| conda:required_by:: focus
.. |downloads_focus| image:: https://img.shields.io/conda/dn/bioconda/focus.svg?style=flat
   :alt:   (downloads)
.. |docker_focus| image:: https://quay.io/repository/biocontainers/focus/status
   :target: https://quay.io/repository/biocontainers/focus







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/focus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/focus/README.html

