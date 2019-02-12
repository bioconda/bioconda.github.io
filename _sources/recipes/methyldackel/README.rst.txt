.. title:: Package Recipe 'methyldackel'
.. highlight: bash


methyldackel
============

.. conda:recipe:: methyldackel
   :replaces_section_title:

   A \(mostly\) universal methylation extractor for BS\-seq experiments. Formerly named PileOMeth.

   :homepage: https://github.com/dpryan79/MethylDackel
   :license: MIT
   :recipe: /`methyldackel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methyldackel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/methyldackel/meta.yaml>`_

   


.. conda:package:: methyldackel

   |downloads_methyldackel| |docker_methyldackel|

   :versions: 0.3.0, 0.2.1, 0.2.0

   :depends: :conda:package:`libgcc`  :conda:package:`zlib`  

   :required~by: |required_by_methyldackel|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install methyldackel

   and update with::

      conda update methyldackel

   or use the docker container::

      docker pull quay.io/repository/biocontainers/methyldackel


.. |required_by_methyldackel| conda:required_by:: methyldackel
.. |downloads_methyldackel| image:: https://img.shields.io/conda/dn/bioconda/methyldackel.svg?style=flat
   :alt:   (downloads)
.. |docker_methyldackel| image:: https://quay.io/repository/biocontainers/methyldackel/status
   :target: https://quay.io/repository/biocontainers/methyldackel







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/methyldackel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/methyldackel/README.html

