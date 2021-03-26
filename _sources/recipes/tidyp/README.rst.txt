:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tidyp'
.. highlight: bash

tidyp
=====

.. conda:recipe:: tidyp
   :replaces_section_title:
   :noindex:

   Program for cleaning up and validating HTML

   :homepage: http://www.tidyp.com/
   :license: BSD-like
   :recipe: /`tidyp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tidyp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tidyp/meta.yaml>`_

   


.. conda:package:: tidyp

   |downloads_tidyp| |docker_tidyp|

   :versions:
      
      

      ``1.04-3``,  ``1.04-2``,  ``1.04-1``,  ``1.04-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tidyp

   and update with::

      conda update tidyp

   or use the docker container::

      docker pull quay.io/biocontainers/tidyp:<tag>

   (see `tidyp/tags`_ for valid values for ``<tag>``)


.. |downloads_tidyp| image:: https://img.shields.io/conda/dn/bioconda/tidyp.svg?style=flat
   :target: https://anaconda.org/bioconda/tidyp
   :alt:   (downloads)
.. |docker_tidyp| image:: https://quay.io/repository/biocontainers/tidyp/status
   :target: https://quay.io/repository/biocontainers/tidyp
.. _`tidyp/tags`: https://quay.io/repository/biocontainers/tidyp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tidyp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tidyp/README.html