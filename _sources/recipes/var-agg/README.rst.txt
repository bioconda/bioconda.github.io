:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'var-agg'
.. highlight: bash

var-agg
=======

.. conda:recipe:: var-agg
   :replaces_section_title:

   A simple helper for aggregating multi\-sample VCF files into \"site VCF\" files.

   :homepage: https://github.com/bihealth/var-agg
   :license: MIT
   :recipe: /`var-agg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/var-agg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/var-agg/meta.yaml>`_

   


.. conda:package:: var-agg

   |downloads_var-agg| |docker_var-agg|

   :versions: 0.1.1-0, 0.1.0-0
   
   :depends bzip2: >=1.0.6,<2.0a0
   :depends libgcc-ng: >=4.9
   :depends xz: >=5.2.4,<5.3.0a0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install var-agg

   and update with::

      conda update var-agg

   or use the docker container::

      docker pull quay.io/biocontainers/var-agg:<tag>

   (see `var-agg/tags`_ for valid values for ``<tag>``)


.. |downloads_var-agg| image:: https://img.shields.io/conda/dn/bioconda/var-agg.svg?style=flat
   :alt:   (downloads)
.. |docker_var-agg| image:: https://quay.io/repository/biocontainers/var-agg/status
   :target: https://quay.io/repository/biocontainers/var-agg
.. _`var-agg/tags`: https://quay.io/repository/biocontainers/var-agg?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/var-agg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/var-agg/README.html