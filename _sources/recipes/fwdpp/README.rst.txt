:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fwdpp'
.. highlight: bash

fwdpp
=====

.. conda:recipe:: fwdpp
   :replaces_section_title:

   A C\+\+ template library for forward\-time population genetic simulation. 

   :homepage: https://www.github.com/molpopgen/fwdpp
   :license: https://raw.githubusercontent.com/molpopgen/fwdpp/master/LICENSE
   :recipe: /`fwdpp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fwdpp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fwdpp/meta.yaml>`_

   


.. conda:package:: fwdpp

   |downloads_fwdpp| |docker_fwdpp|

   :versions: 0.5.7-3, 0.5.7-2, 0.5.7-1, 0.5.7-0, 0.5.5-0, 0.5.4-3, 0.5.4-2, 0.5.3-1, 0.5.3-0
   
   :depends boost: >=1.66.0,<1.66.1.0a0
   :depends gsl: >=2.2.1,<2.3.0a0
   :depends openblas: >=0.2.20,<0.2.21.0a0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fwdpp

   and update with::

      conda update fwdpp

   or use the docker container::

      docker pull quay.io/biocontainers/fwdpp:<tag>

   (see `fwdpp/tags`_ for valid values for ``<tag>``)


.. |downloads_fwdpp| image:: https://img.shields.io/conda/dn/bioconda/fwdpp.svg?style=flat
   :alt:   (downloads)
.. |docker_fwdpp| image:: https://quay.io/repository/biocontainers/fwdpp/status
   :target: https://quay.io/repository/biocontainers/fwdpp
.. _`fwdpp/tags`: https://quay.io/repository/biocontainers/fwdpp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fwdpp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fwdpp/README.html