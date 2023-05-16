:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rock'
.. highlight: bash

rock
====

.. conda:recipe:: rock
   :replaces_section_title:
   :noindex:

   ROCK \- Reducing Over\-Covering K\-mers

   :homepage: https://gitlab.pasteur.fr/vlegrand/ROCK
   :license: AGPL-3.0
   :recipe: /`rock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rock/meta.yaml>`_

   


.. conda:package:: rock

   |downloads_rock| |docker_rock|

   :versions:
      
      

      ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rock

   and update with::

      conda update rock

   or use the docker container::

      docker pull quay.io/biocontainers/rock:<tag>

   (see `rock/tags`_ for valid values for ``<tag>``)


.. |downloads_rock| image:: https://img.shields.io/conda/dn/bioconda/rock.svg?style=flat
   :target: https://anaconda.org/bioconda/rock
   :alt:   (downloads)
.. |docker_rock| image:: https://quay.io/repository/biocontainers/rock/status
   :target: https://quay.io/repository/biocontainers/rock
.. _`rock/tags`: https://quay.io/repository/biocontainers/rock?tab=tags


.. raw:: html

    <script>
        var package = "rock";
        var versions = ["2.0","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rock/README.html