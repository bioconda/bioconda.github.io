.. title:: Package Recipe 'ale'
.. highlight: bash


ale
===

.. conda:recipe:: ale
   :replaces_section_title:

   ALE\: Assembly Likelihood Estimator

   :homepage: https://github.com/sc932/ALE
   :license: NCSA
   :recipe: /`ale <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ale>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ale/meta.yaml>`_

   


.. conda:package:: ale

   |downloads_ale| |docker_ale|

   :versions: 20180904, 20160127

   :depends: :conda:package:`matplotlib`  :conda:package:`mpmath`  :conda:package:`pymix`  :conda:package:`python` >=2.7,<2.8.0a0 :conda:package:`samtools`  :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ale|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ale

   and update with::

      conda update ale

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ale


.. |required_by_ale| conda:required_by:: ale
.. |downloads_ale| image:: https://img.shields.io/conda/dn/bioconda/ale.svg?style=flat
   :alt:   (downloads)
.. |docker_ale| image:: https://quay.io/repository/biocontainers/ale/status
   :target: https://quay.io/repository/biocontainers/ale







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ale/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ale/README.html

