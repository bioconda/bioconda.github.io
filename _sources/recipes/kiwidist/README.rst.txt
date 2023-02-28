:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kiwidist'
.. highlight: bash

kiwidist
========

.. conda:recipe:: kiwidist
   :replaces_section_title:
   :noindex:

   Combining gene\-set analysis with network properties

   :homepage: https://pypi.org/project/KiwiDist/
   :license: MIT
   :recipe: /`kiwidist <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kiwidist>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kiwidist/meta.yaml>`_

   


.. conda:package:: kiwidist

   |downloads_kiwidist| |docker_kiwidist|

   :versions:
      
      

      ``0.3.6-3``,  ``0.3.6-2``,  ``0.3.6-0``,  ``0.3.5-0``,  ``0.3.4-0``

      

   
   :depends matplotlib: ``>=1.3.1,<=1.4.3``
   :depends mygene: ``>=2.1.0``
   :depends networkx: ``>=1.8.1``
   :depends numpy: ``>=1.8.0``
   :depends pandas: ``>=0.13.1``
   :depends python: ``<3``
   :depends scipy: ``>=0.13.3,<=0.16.0``
   :depends six: ``>=1.5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kiwidist

   and update with::

      conda update kiwidist

   or use the docker container::

      docker pull quay.io/biocontainers/kiwidist:<tag>

   (see `kiwidist/tags`_ for valid values for ``<tag>``)


.. |downloads_kiwidist| image:: https://img.shields.io/conda/dn/bioconda/kiwidist.svg?style=flat
   :target: https://anaconda.org/bioconda/kiwidist
   :alt:   (downloads)
.. |docker_kiwidist| image:: https://quay.io/repository/biocontainers/kiwidist/status
   :target: https://quay.io/repository/biocontainers/kiwidist
.. _`kiwidist/tags`: https://quay.io/repository/biocontainers/kiwidist?tab=tags


.. raw:: html

    <script>
        var package = "kiwidist";
        var versions = ["0.3.6","0.3.6","0.3.6","0.3.5","0.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kiwidist/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kiwidist/README.html