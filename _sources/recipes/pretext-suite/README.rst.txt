:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pretext-suite'
.. highlight: bash

pretext-suite
=============

.. conda:recipe:: pretext-suite
   :replaces_section_title:

   Meta\-package for Pretext Hi\-C contact map tools.

   :homepage: https://github.com/wtsi-hpag/
   :license: MIT / MIT
   :recipe: /`pretext-suite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pretext-suite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pretext-suite/meta.yaml>`_

   A collection of the Pretext Hi\-C genome contact map tools. Developed by the High\-Performance Assembly Group\, Wellcome Sanger Institute\, UK.



.. conda:package:: pretext-suite

   |downloads_pretext-suite| |docker_pretext-suite|

   :versions: 0.0.2-0, 0.0.1-0
   
   :depends pretextgraph: 
   :depends pretextmap: 
   :depends pretextsnapshot: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pretext-suite

   and update with::

      conda update pretext-suite

   or use the docker container::

      docker pull quay.io/biocontainers/pretext-suite:<tag>

   (see `pretext-suite/tags`_ for valid values for ``<tag>``)


.. |downloads_pretext-suite| image:: https://img.shields.io/conda/dn/bioconda/pretext-suite.svg?style=flat
   :target: https://anaconda.org/bioconda/pretext-suite
   :alt:   (downloads)
.. |docker_pretext-suite| image:: https://quay.io/repository/biocontainers/pretext-suite/status
   :target: https://quay.io/repository/biocontainers/pretext-suite
.. _`pretext-suite/tags`: https://quay.io/repository/biocontainers/pretext-suite?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pretext-suite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pretext-suite/README.html