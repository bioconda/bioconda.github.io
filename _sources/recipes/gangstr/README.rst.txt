:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gangstr'
.. highlight: bash

gangstr
=======

.. conda:recipe:: gangstr
   :replaces_section_title:
   :noindex:

   GangSTR is a tool for genome\-wide profiling tandem repeats from short reads.

   :homepage: https://github.com/gymreklab/GangSTR
   :license: GPL-3.0-or-later
   :recipe: /`gangstr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gangstr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gangstr/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkz501`

   


.. conda:package:: gangstr

   |downloads_gangstr| |docker_gangstr|

   :versions:
      
      

      ``2.5.0-1``,  ``2.5.0-0``

      

   
   :depends gsl: ``>=2.6,<2.7.0a0``
   :depends htslib: ``>=1.12,<1.13.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends nlopt: ``>=2.7.0,<2.7.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gangstr

   and update with::

      conda update gangstr

   or use the docker container::

      docker pull quay.io/biocontainers/gangstr:<tag>

   (see `gangstr/tags`_ for valid values for ``<tag>``)


.. |downloads_gangstr| image:: https://img.shields.io/conda/dn/bioconda/gangstr.svg?style=flat
   :target: https://anaconda.org/bioconda/gangstr
   :alt:   (downloads)
.. |docker_gangstr| image:: https://quay.io/repository/biocontainers/gangstr/status
   :target: https://quay.io/repository/biocontainers/gangstr
.. _`gangstr/tags`: https://quay.io/repository/biocontainers/gangstr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gangstr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gangstr/README.html