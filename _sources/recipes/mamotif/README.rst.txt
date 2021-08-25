:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mamotif'
.. highlight: bash

mamotif
=======

.. conda:recipe:: mamotif
   :replaces_section_title:
   :noindex:

   An integrative toolkit for detecting cell type\-specific regulators

   :homepage: https://github.com/shao-lab/MAmotif
   :license: BSD / BSD License
   :recipe: /`mamotif <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mamotif>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mamotif/meta.yaml>`_

   


.. conda:package:: mamotif

   |downloads_mamotif| |docker_mamotif|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends manorm: ``>=1.3.0``
   :depends motifscan: ``>=1.2.1``
   :depends numpy: ``>=1.15``
   :depends python: ``>=3.6``
   :depends scipy: ``>=1.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mamotif

   and update with::

      conda update mamotif

   or use the docker container::

      docker pull quay.io/biocontainers/mamotif:<tag>

   (see `mamotif/tags`_ for valid values for ``<tag>``)


.. |downloads_mamotif| image:: https://img.shields.io/conda/dn/bioconda/mamotif.svg?style=flat
   :target: https://anaconda.org/bioconda/mamotif
   :alt:   (downloads)
.. |docker_mamotif| image:: https://quay.io/repository/biocontainers/mamotif/status
   :target: https://quay.io/repository/biocontainers/mamotif
.. _`mamotif/tags`: https://quay.io/repository/biocontainers/mamotif?tab=tags


.. raw:: html

    <script>
        var package = "mamotif";
        var versions = ["1.1.0","1.0.1","1.0.1","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mamotif/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mamotif/README.html