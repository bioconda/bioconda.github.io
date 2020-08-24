:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gerp'
.. highlight: bash

gerp
====

.. conda:recipe:: gerp
   :replaces_section_title:
   :noindex:

   GERP identifies constrained elements in multiple alignments by quantifying substitution deficits.

   :homepage: http://mendel.stanford.edu/SidowLab/downloads/gerp/index.html
   :license: GPL / GNU GPL v3
   :recipe: /`gerp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gerp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gerp/meta.yaml>`_

   


.. conda:package:: gerp

   |downloads_gerp| |docker_gerp|

   :versions:
      
      

      ``2.1-1``,  ``2.1-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gerp

   and update with::

      conda update gerp

   or use the docker container::

      docker pull quay.io/biocontainers/gerp:<tag>

   (see `gerp/tags`_ for valid values for ``<tag>``)


.. |downloads_gerp| image:: https://img.shields.io/conda/dn/bioconda/gerp.svg?style=flat
   :target: https://anaconda.org/bioconda/gerp
   :alt:   (downloads)
.. |docker_gerp| image:: https://quay.io/repository/biocontainers/gerp/status
   :target: https://quay.io/repository/biocontainers/gerp
.. _`gerp/tags`: https://quay.io/repository/biocontainers/gerp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gerp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gerp/README.html