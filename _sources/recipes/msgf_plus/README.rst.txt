.. title:: Package Recipe 'msgf_plus'
.. highlight: bash


msgf_plus
=========

.. conda:recipe:: msgf_plus
   :replaces_section_title:

   MS\-GF\+ is a new MS\/MS database search tool that is sensitive \(it identifies more peptides than other database search tools and as many peptides as spectral library search tools\) and universal \(works well for diverse types of spectra\, different configurations of MS instruments and different experimental protocols\).

   :homepage: https://omics.pnl.gov/software/ms-gf
   :license: https://github.com/sangtaekim/msgfplus/blob/master/LICENSE.txt
   :recipe: /`msgf_plus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msgf_plus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msgf_plus/meta.yaml>`_

   


.. conda:package:: msgf_plus

   |downloads_msgf_plus| |docker_msgf_plus|

   :versions: 2017.07.21, 2016.10.26, 1.0.0

   :depends: :conda:package:`openjdk`  :conda:package:`python` 2.7* 

   :required~by: |required_by_msgf_plus|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install msgf_plus

   and update with::

      conda update msgf_plus

   or use the docker container::

      docker pull quay.io/repository/biocontainers/msgf_plus


.. |required_by_msgf_plus| conda:required_by:: msgf_plus
.. |downloads_msgf_plus| image:: https://img.shields.io/conda/dn/bioconda/msgf_plus.svg?style=flat
   :alt:   (downloads)
.. |docker_msgf_plus| image:: https://quay.io/repository/biocontainers/msgf_plus/status
   :target: https://quay.io/repository/biocontainers/msgf_plus







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msgf_plus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msgf_plus/README.html

