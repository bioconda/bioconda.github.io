.. title:: Package Recipe 'dascrubber'
.. highlight: bash


dascrubber
==========

.. conda:recipe:: dascrubber
   :replaces_section_title:

   Alignment\-based Scrubbing pipeline

   :homepage: https://github.com/thegenemyers/DASCRUBBER
   :license: Custom
   :recipe: /`dascrubber <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dascrubber>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dascrubber/meta.yaml>`_

   


.. conda:package:: dascrubber

   |downloads_dascrubber| |docker_dascrubber|

   :versions: 0.0.1a2, 0.0.1a1

   :depends: :conda:package:`libgcc`  

   :required~by: |required_by_dascrubber|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dascrubber

   and update with::

      conda update dascrubber

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dascrubber


.. |required_by_dascrubber| conda:required_by:: dascrubber
.. |downloads_dascrubber| image:: https://img.shields.io/conda/dn/bioconda/dascrubber.svg?style=flat
   :alt:   (downloads)
.. |docker_dascrubber| image:: https://quay.io/repository/biocontainers/dascrubber/status
   :target: https://quay.io/repository/biocontainers/dascrubber







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dascrubber/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dascrubber/README.html

