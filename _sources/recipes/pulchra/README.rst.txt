:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pulchra'
.. highlight: bash

pulchra
=======

.. conda:recipe:: pulchra
   :replaces_section_title:
   :noindex:

   A tool for all\-atom reconstruction and refinement of reduced protein models

   :homepage: https://www.pirx.com/pulchra/
   :license: MIT
   :recipe: /`pulchra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pulchra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pulchra/meta.yaml>`_

   


.. conda:package:: pulchra

   |downloads_pulchra| |docker_pulchra|

   :versions:
      
      

      ``3.06-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pulchra

   and update with::

      conda update pulchra

   or use the docker container::

      docker pull quay.io/biocontainers/pulchra:<tag>

   (see `pulchra/tags`_ for valid values for ``<tag>``)


.. |downloads_pulchra| image:: https://img.shields.io/conda/dn/bioconda/pulchra.svg?style=flat
   :target: https://anaconda.org/bioconda/pulchra
   :alt:   (downloads)
.. |docker_pulchra| image:: https://quay.io/repository/biocontainers/pulchra/status
   :target: https://quay.io/repository/biocontainers/pulchra
.. _`pulchra/tags`: https://quay.io/repository/biocontainers/pulchra?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pulchra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pulchra/README.html