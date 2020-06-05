:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mea'
.. highlight: bash

mea
===

.. conda:recipe:: mea
   :replaces_section_title:
   :noindex:

   Mea was developed as part of the lab class \"Bioinformatik von RNA\- und Proteinstrukturen \(Praktikum\, Modul 10\-202\-2208\)\". The package predicts maximum expected accuracy \(MEA\) RNA secondary structures from dot plots of RNAs while correcting the score in dependence of base pair span. Furthermore\, it provides tools to evaluate predictions and optimize parameters.

   :homepage: http://www.bioinf.uni-leipzig.de/Software/mea/
   :license: GPLv3
   :recipe: /`mea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mea/meta.yaml>`_

   


.. conda:package:: mea

   |downloads_mea| |docker_mea|

   :versions:
      
      

      ``0.6.4-2``,  ``0.6.4-1``

      

   
   :depends libstdcxx-ng: ``>=4.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mea

   and update with::

      conda update mea

   or use the docker container::

      docker pull quay.io/biocontainers/mea:<tag>

   (see `mea/tags`_ for valid values for ``<tag>``)


.. |downloads_mea| image:: https://img.shields.io/conda/dn/bioconda/mea.svg?style=flat
   :target: https://anaconda.org/bioconda/mea
   :alt:   (downloads)
.. |docker_mea| image:: https://quay.io/repository/biocontainers/mea/status
   :target: https://quay.io/repository/biocontainers/mea
.. _`mea/tags`: https://quay.io/repository/biocontainers/mea?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mea/README.html