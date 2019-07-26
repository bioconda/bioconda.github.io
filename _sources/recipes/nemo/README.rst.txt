:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nemo'
.. highlight: bash

nemo
====

.. conda:recipe:: nemo
   :replaces_section_title:

   Individual\-based forward\-time genetics simulation software

   :homepage: http://nemo2.sourceforge.net
   :license: GPLv2
   :recipe: /`nemo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nemo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nemo/meta.yaml>`_

   


.. conda:package:: nemo

   |downloads_nemo| |docker_nemo|

   :versions: 2.3.51-0
   
   :depends gsl: >=2.2.1,<2.3.0a0
   :depends libstdcxx-ng: >=4.9
   :depends openblas: >=0.2.20,<0.2.21.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nemo

   and update with::

      conda update nemo

   or use the docker container::

      docker pull quay.io/biocontainers/nemo:<tag>

   (see `nemo/tags`_ for valid values for ``<tag>``)


.. |downloads_nemo| image:: https://img.shields.io/conda/dn/bioconda/nemo.svg?style=flat
   :target: https://anaconda.org/bioconda/nemo
   :alt:   (downloads)
.. |docker_nemo| image:: https://quay.io/repository/biocontainers/nemo/status
   :target: https://quay.io/repository/biocontainers/nemo
.. _`nemo/tags`: https://quay.io/repository/biocontainers/nemo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nemo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nemo/README.html