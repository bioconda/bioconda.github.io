:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prefersim'
.. highlight: bash

prefersim
=========

.. conda:recipe:: prefersim
   :replaces_section_title:
   :noindex:

   PReFerSim is an ANSI C program that performs forward simulations under the PRF model

   :homepage: https://github.com/LohmuellerLab/PReFerSim
   :license: GPL3
   :recipe: /`prefersim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prefersim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prefersim/meta.yaml>`_

   


.. conda:package:: prefersim

   |downloads_prefersim| |docker_prefersim|

   :versions:
      
      

      ``1.0-1``,  ``1.0-0``

      

   
   :depends gsl: ``>=2.6,<2.7.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install prefersim

   and update with::

      conda update prefersim

   or use the docker container::

      docker pull quay.io/biocontainers/prefersim:<tag>

   (see `prefersim/tags`_ for valid values for ``<tag>``)


.. |downloads_prefersim| image:: https://img.shields.io/conda/dn/bioconda/prefersim.svg?style=flat
   :target: https://anaconda.org/bioconda/prefersim
   :alt:   (downloads)
.. |docker_prefersim| image:: https://quay.io/repository/biocontainers/prefersim/status
   :target: https://quay.io/repository/biocontainers/prefersim
.. _`prefersim/tags`: https://quay.io/repository/biocontainers/prefersim?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prefersim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prefersim/README.html