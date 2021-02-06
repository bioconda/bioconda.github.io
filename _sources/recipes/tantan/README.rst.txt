:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tantan'
.. highlight: bash

tantan
======

.. conda:recipe:: tantan
   :replaces_section_title:
   :noindex:

   tantan masks simple regions \(low complexity \& short\-period tandem repeats\) in biological sequences.

   :homepage: https://gitlab.com/mcfrith/tantan
   :license: GPL-3.0-or-later
   :recipe: /`tantan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tantan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tantan/meta.yaml>`_

   


.. conda:package:: tantan

   |downloads_tantan| |docker_tantan|

   :versions:
      
      

      ``26-0``,  ``13-2``,  ``13-1``,  ``13-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tantan

   and update with::

      conda update tantan

   or use the docker container::

      docker pull quay.io/biocontainers/tantan:<tag>

   (see `tantan/tags`_ for valid values for ``<tag>``)


.. |downloads_tantan| image:: https://img.shields.io/conda/dn/bioconda/tantan.svg?style=flat
   :target: https://anaconda.org/bioconda/tantan
   :alt:   (downloads)
.. |docker_tantan| image:: https://quay.io/repository/biocontainers/tantan/status
   :target: https://quay.io/repository/biocontainers/tantan
.. _`tantan/tags`: https://quay.io/repository/biocontainers/tantan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tantan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tantan/README.html