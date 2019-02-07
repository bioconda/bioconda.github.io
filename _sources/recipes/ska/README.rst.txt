.. title:: Package Recipe 'ska'
.. highlight: bash


ska
===

.. conda:recipe:: ska
   :replaces_section_title:

   SKA \(Split Kmer Analysis\)

   :homepage: https://github.com/simonrharris/SKA
   :license: GPL / GPL-3
   :recipe: /`ska <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ska>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ska/meta.yaml>`_

   


.. conda:package:: ska

   |downloads_ska| |docker_ska|

   :versions: 1.0

   :depends: :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`zlib` >=1.2.11,<1.3.0a0 

   :required~by: |required_by_ska|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ska

   and update with::

      conda update ska

   or use the docker container::

      docker pull quay.io/repository/biocontainers/ska


.. |required_by_ska| conda:required_by:: ska
.. |downloads_ska| image:: https://img.shields.io/conda/dn/bioconda/ska.svg?style=flat
   :alt:   (downloads)
.. |docker_ska| image:: https://quay.io/repository/biocontainers/ska/status
   :target: https://quay.io/repository/biocontainers/ska







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ska/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ska/README.html

