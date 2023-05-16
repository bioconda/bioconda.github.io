:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kalign3'
.. highlight: bash

kalign3
=======

.. conda:recipe:: kalign3
   :replaces_section_title:
   :noindex:

   Kalign is a fast and accurate multiple sequence alignment algorithm.

   :homepage: https://github.com/TimoLassmann/kalign
   :license: GPL3
   :recipe: /`kalign3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kalign3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kalign3/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btz795`

   


.. conda:package:: kalign3

   |downloads_kalign3| |docker_kalign3|

   :versions:
      
      

      ``3.3.2-2``,  ``3.3.2-1``,  ``3.3.2-0``,  ``3.2.2-3``,  ``3.2.2-2``,  ``3.2.2-1``,  ``3.2.2-0``

      

   
   :depends libgcc-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kalign3

   and update with::

      conda update kalign3

   or use the docker container::

      docker pull quay.io/biocontainers/kalign3:<tag>

   (see `kalign3/tags`_ for valid values for ``<tag>``)


.. |downloads_kalign3| image:: https://img.shields.io/conda/dn/bioconda/kalign3.svg?style=flat
   :target: https://anaconda.org/bioconda/kalign3
   :alt:   (downloads)
.. |docker_kalign3| image:: https://quay.io/repository/biocontainers/kalign3/status
   :target: https://quay.io/repository/biocontainers/kalign3
.. _`kalign3/tags`: https://quay.io/repository/biocontainers/kalign3?tab=tags


.. raw:: html

    <script>
        var package = "kalign3";
        var versions = ["3.3.2","3.3.2","3.3.2","3.2.2","3.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kalign3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kalign3/README.html