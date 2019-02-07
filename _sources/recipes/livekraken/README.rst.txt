.. title:: Package Recipe 'livekraken'
.. highlight: bash


livekraken
==========

.. conda:recipe:: livekraken
   :replaces_section_title:

   LiveKraken is a real\-time metagenomic classifier for Illumina sequencing data.

   :homepage: https://gitlab.com/SimonHTausch/LiveKraken
   :license: GPLv3
   :recipe: /`livekraken <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/livekraken>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/livekraken/meta.yaml>`_

   


.. conda:package:: livekraken

   |downloads_livekraken| |docker_livekraken|

   :versions: 1.0

   :depends: :conda:package:`jellyfish` 1.* :conda:package:`libgcc`  :conda:package:`perl` 5.22.0* 

   :required~by: |required_by_livekraken|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install livekraken

   and update with::

      conda update livekraken

   or use the docker container::

      docker pull quay.io/repository/biocontainers/livekraken


.. |required_by_livekraken| conda:required_by:: livekraken
.. |downloads_livekraken| image:: https://img.shields.io/conda/dn/bioconda/livekraken.svg?style=flat
   :alt:   (downloads)
.. |docker_livekraken| image:: https://quay.io/repository/biocontainers/livekraken/status
   :target: https://quay.io/repository/biocontainers/livekraken







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/livekraken/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/livekraken/README.html

