:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mreps'
.. highlight: bash

mreps
=====

.. conda:recipe:: mreps
   :replaces_section_title:

   mreps is a flexible and efficient software for identifying serial repeats \(usually called tandem repeats\) in DNA sequences.

   :homepage: http://mreps.univ-mlv.fr/
   :license: GNU GENERAL PUBLIC LICENSE
   :recipe: /`mreps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mreps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mreps/meta.yaml>`_
   :links: biotools: :biotools:`mreps`

   


.. conda:package:: mreps

   |downloads_mreps| |docker_mreps|

   :versions: 0.1-0
   
   :depends libgcc: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mreps

   and update with::

      conda update mreps

   or use the docker container::

      docker pull quay.io/biocontainers/mreps:<tag>

   (see `mreps/tags`_ for valid values for ``<tag>``)


.. |downloads_mreps| image:: https://img.shields.io/conda/dn/bioconda/mreps.svg?style=flat
   :target: https://anaconda.org/bioconda/mreps
   :alt:   (downloads)
.. |docker_mreps| image:: https://quay.io/repository/biocontainers/mreps/status
   :target: https://quay.io/repository/biocontainers/mreps
.. _`mreps/tags`: https://quay.io/repository/biocontainers/mreps?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mreps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mreps/README.html