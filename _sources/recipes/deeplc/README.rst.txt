:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deeplc'
.. highlight: bash

deeplc
======

.. conda:recipe:: deeplc
   :replaces_section_title:

   DeepLC\: Retention time prediction for \(modified\) peptides using Deep Learning.

   :homepage: http://compomics.github.io/projects/DeepLC
   :developer docs: https://github.com/compomics/DeepLC
   :license: APACHE / Apache-2.0
   :recipe: /`deeplc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeplc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeplc/meta.yaml>`_

   


.. conda:package:: deeplc

   |downloads_deeplc| |docker_deeplc|

   :versions: 0.1.16-0, 0.1.15-0, 0.1.14-0, 0.1.13-0, 0.1.12-0, 0.1.11-0, 0.1.10-0, 0.1.7-0, 0.1.6-0, 0.1.4-0, 0.1.2-0, 0.1.1-0
   
   :depends matplotlib-base: >=3,<4
   :depends numpy: >=1.17,<2
   :depends opt-einsum: >=2.3.2
   :depends pandas: >=0.25,<1
   :depends python: >=3.6,<3.8
   :depends scipy: >=1.3.1,<2
   :depends setuptools: >=42.0.1
   :depends tensorflow: >=1.14.0,<3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install deeplc

   and update with::

      conda update deeplc

   or use the docker container::

      docker pull quay.io/biocontainers/deeplc:<tag>

   (see `deeplc/tags`_ for valid values for ``<tag>``)


.. |downloads_deeplc| image:: https://img.shields.io/conda/dn/bioconda/deeplc.svg?style=flat
   :target: https://anaconda.org/bioconda/deeplc
   :alt:   (downloads)
.. |docker_deeplc| image:: https://quay.io/repository/biocontainers/deeplc/status
   :target: https://quay.io/repository/biocontainers/deeplc
.. _`deeplc/tags`: https://quay.io/repository/biocontainers/deeplc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deeplc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deeplc/README.html