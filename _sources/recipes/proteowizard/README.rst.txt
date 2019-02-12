:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proteowizard'
.. highlight: bash

proteowizard
============

.. conda:recipe:: proteowizard
   :replaces_section_title:

   Tools for dealing with mass spectrometry files \(e.g.\, mzML\, mzXML\, mzIdentML\, MGF\)

   :homepage: https://proteowizard.sourceforge.net
   :license: Apache 2.0
   :recipe: /`proteowizard <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteowizard>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteowizard/meta.yaml>`_
   :links: biotools: :biotools:`proteowizard`, doi: :doi:`10.1038/nbt.2377`

   


.. conda:package:: proteowizard

   |downloads_proteowizard| |docker_proteowizard|

   :versions: 3_0_9992-2, 3_0_9992-0
   
   :depends libstdcxx-ng: >=4.9
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install proteowizard

   and update with::

      conda update proteowizard

   or use the docker container::

      docker pull quay.io/repository/biocontainers/proteowizard:<tag>

   (see `proteowizard/tags`_ for valid values for ``<tag>``)


.. |downloads_proteowizard| image:: https://img.shields.io/conda/dn/bioconda/proteowizard.svg?style=flat
   :alt:   (downloads)
.. |docker_proteowizard| image:: https://quay.io/repository/biocontainers/proteowizard/status
   :target: https://quay.io/repository/biocontainers/proteowizard
.. _`proteowizard/tags`: https://quay.io/repository/biocontainers/proteowizard?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proteowizard/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proteowizard/README.html